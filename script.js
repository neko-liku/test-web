const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');

if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

const STORAGE_KEY = 'nekohoiku_cats_data_v1';

function getDefaultCatsData() {
  if (typeof catsData !== 'undefined') return JSON.parse(JSON.stringify(catsData));
  return [];
}
function getCatsData() {
  const local = localStorage.getItem(STORAGE_KEY);
  if (!local) return getDefaultCatsData();
  try {
    const parsed = JSON.parse(local);
    return Array.isArray(parsed) ? parsed : getDefaultCatsData();
  } catch {
    return getDefaultCatsData();
  }
}
function setCatsData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data, null, 2));
}
function esc(str) {
  return String(str ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
function renderCats(filter = 'all') {
  const grid = document.getElementById('catsGrid');
  if (!grid) return;
  const activeData = getCatsData();
  const filtered = activeData.filter(cat => {
    if (filter === 'all') return true;
    const personality = Array.isArray(cat.personality) ? cat.personality : [];
    const tags = Array.isArray(cat.tags) ? cat.tags : [];
    return personality.includes(filter) || tags.includes(filter) || cat.badge === filter;
  });

  grid.innerHTML = filtered.map(cat => `
    <article class="cat-card">
      <img src="${esc(cat.image)}" alt="${esc(cat.name)}" />
      <div class="cat-body">
        <div class="cat-top">
          <h3 class="cat-name">${esc(cat.name)}</h3>
          <span class="tag">${esc(cat.badge)}</span>
        </div>
        <div class="meta">
          <span>${esc(cat.gender)}</span>
          <span>${esc(cat.age)}</span>
          <span>${esc(cat.status)}</span>
          ${(Array.isArray(cat.tags) ? cat.tags : []).map(tag => `<span>${esc(tag)}</span>`).join('')}
        </div>
        <p>${esc(cat.description)}</p>
        <div class="cat-actions">
          <a class="btn btn-primary" href="contact.html">お問い合わせ</a>
          <a class="btn btn-soft" href="admin.html">更新ページ</a>
        </div>
      </div>
    </article>
  `).join('');

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-box">該当する猫さんはいません。</div>`;
  }
}
function parseCommaList(value) {
  return String(value || '').split(',').map(v => v.trim()).filter(Boolean);
}
function showAdminMessage(text, type = 'ok') {
  const box = document.getElementById('adminMessage');
  if (!box) return;
  box.textContent = text;
  box.className = `admin-message ${type}`;
}
function renderAdminTable() {
  const body = document.getElementById('adminTableBody');
  if (!body) return;
  const activeData = getCatsData();
  body.innerHTML = activeData.map((cat, idx) => `
    <tr data-index="${idx}">
      <td><input class="admin-input" data-field="name" value="${esc(cat.name)}"></td>
      <td><input class="admin-input" data-field="gender" value="${esc(cat.gender)}"></td>
      <td><input class="admin-input" data-field="age" value="${esc(cat.age)}"></td>
      <td><input class="admin-input" data-field="personality" value="${esc((cat.personality || []).join(','))}"></td>
      <td><input class="admin-input" data-field="badge" value="${esc(cat.badge)}"></td>
      <td><input class="admin-input" data-field="tags" value="${esc((cat.tags || []).join(','))}"></td>
      <td><input class="admin-input" data-field="image" value="${esc(cat.image)}"></td>
      <td><input class="admin-input" data-field="status" value="${esc(cat.status)}"></td>
      <td><textarea class="admin-textarea" data-field="description">${esc(cat.description)}</textarea></td>
      <td><button type="button" class="mini-btn danger" onclick="deleteCat(${idx})">削除</button></td>
    </tr>
  `).join('');
}
function collectAdminTableData() {
  const rows = document.querySelectorAll('#adminTableBody tr');
  return [...rows].map(row => {
    const getVal = field => row.querySelector(`[data-field="${field}"]`)?.value?.trim() || '';
    return {
      name: getVal('name'),
      gender: getVal('gender'),
      age: getVal('age'),
      personality: parseCommaList(getVal('personality')),
      badge: getVal('badge'),
      tags: parseCommaList(getVal('tags')),
      description: getVal('description'),
      image: getVal('image'),
      status: getVal('status')
    };
  }).filter(cat => cat.name);
}
function saveAdminData() {
  const data = collectAdminTableData();
  setCatsData(data);
  showAdminMessage('この端末に保存しました。cats.html に反映されます。', 'ok');
  renderAdminTable();
}
function addNewCat() {
  const data = getCatsData();
  data.push({
    name: '新しい猫さん',
    gender: '女の子',
    age: '仔猫',
    personality: ['甘えんぼ'],
    badge: '里親募集中',
    tags: ['女の子'],
    description: 'ここに紹介文を入力してください。',
    image: 'images/newcat.jpg',
    status: '募集中'
  });
  setCatsData(data);
  renderAdminTable();
  showAdminMessage('新しい行を追加しました。入力後に保存してください。', 'ok');
}
function deleteCat(index) {
  const data = getCatsData();
  data.splice(index, 1);
  setCatsData(data);
  renderAdminTable();
  showAdminMessage('1件削除しました。', 'ok');
}
function exportCatsJson() {
  const data = collectAdminTableData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'nekohoiku-cats-data.json';
  a.click();
  URL.revokeObjectURL(url);
  showAdminMessage('JSONを書き出しました。', 'ok');
}
function importCatsJson(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!Array.isArray(parsed)) throw new Error('invalid');
      setCatsData(parsed);
      renderAdminTable();
      showAdminMessage('JSONを読み込みました。', 'ok');
    } catch {
      showAdminMessage('読み込みに失敗しました。JSON形式を確認してください。', 'error');
    }
  };
  reader.readAsText(file, 'utf-8');
}
function resetToDefaultData() {
  localStorage.removeItem(STORAGE_KEY);
  renderAdminTable();
  showAdminMessage('初期データに戻しました。', 'ok');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCats();
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCats(btn.dataset.filter);
    });
  });

  if (document.getElementById('adminTableBody')) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setCatsData(getDefaultCatsData());
    }
    renderAdminTable();
    document.getElementById('newCatBtn')?.addEventListener('click', addNewCat);
    document.getElementById('saveLocalBtn')?.addEventListener('click', saveAdminData);
    document.getElementById('exportBtn')?.addEventListener('click', exportCatsJson);
    document.getElementById('resetBtn')?.addEventListener('click', resetToDefaultData);
    document.getElementById('importFile')?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) importCatsJson(file);
      e.target.value = '';
    });
  }
});
