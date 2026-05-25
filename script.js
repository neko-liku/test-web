const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');

if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}



const ADMIN_PASSWORD = 'Rieko';

function verifyAdminPassword(actionLabel = 'この操作') {
  const input = window.prompt(`${actionLabel}を行うにはパスワードを入力してください。`);
  if (input === null) return false;
  if (input !== ADMIN_PASSWORD) {
    alert('パスワードが正しくありません。');
    return false;
  }
  return true;
}



function cloneCatsData(data) {
  return JSON.parse(JSON.stringify(Array.isArray(data) ? data : []));
}

function getDefaultCatsData() {
  if (typeof catsData !== 'undefined') return cloneCatsData(catsData);
  return [];
}

function getCatsData() {
  if (document.getElementById('adminTableBody') && Array.isArray(window.adminCatsDraft)) {
    return cloneCatsData(window.adminCatsDraft);
  }
  return getDefaultCatsData();
}

function setCatsData(data) {
  window.adminCatsDraft = cloneCatsData(data);
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
  const isHomePreview = Boolean(grid.closest('.home-cats-preview'));
  const filtered = activeData.filter(cat => {
    if (filter === 'all') return true;
    return getCatSearchTokens(cat).includes(filter);
  });

  grid.classList.toggle('cat-gallery', isHomePreview);

  grid.innerHTML = filtered.map(cat => {
    if (isHomePreview) {
      return `
        <a class="cat-card cat-tile" href="cats.html" aria-label="${esc(cat.name)}の詳細を見る">
          <img src="${esc(cat.image)}" alt="${esc(cat.name)}" loading="lazy" />
          <div class="cat-tile-name">${esc(cat.name)}</div>
        </a>
      `;
    }

    return `
      <article class="cat-card">
        <img src="${esc(cat.image)}" alt="${esc(cat.name)}" loading="lazy" />
        <div class="cat-body">
          <div class="cat-top">
            <h3 class="cat-name">${esc(cat.name)}</h3>
            <span class="tag">${esc(cat.badge)}</span>
          </div>
          <div class="meta">
            <span>${esc(cat.gender)}</span>
            <span>${esc(cat.age)}</span>
            ${(Array.isArray(cat.tags) ? cat.tags : []).map(tag => `<span>${esc(tag)}</span>`).join('')}
          </div>
          <p>${esc(cat.description)}</p>
          <div class="cat-actions">
            <a class="btn btn-primary" href="contact.html">お問い合わせ</a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-box">該当する猫さんはいません。</div>`;
  }
}
function parseCommaList(value) {
  return String(value || '').split(',').map(v => v.trim()).filter(Boolean);
}
function getCatSearchTokens(cat) {
  const tokens = [
    ...(Array.isArray(cat.personality) ? cat.personality : []),
    ...(Array.isArray(cat.tags) ? cat.tags : []),
    cat.badge,
    cat.gender,
    cat.age
  ].map(v => String(v || '').trim()).filter(Boolean);

  // 表記ゆれ対策：データ側が「仔猫」、ボタン側が「子猫」でも検索できるようにする
  if (tokens.includes('仔猫') && !tokens.includes('子猫')) tokens.push('子猫');
  if (tokens.includes('子猫') && !tokens.includes('仔猫')) tokens.push('仔猫');

  return tokens;
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
      image: getVal('image')
    };
  }).filter(cat => cat.name);
}
function saveAdminData() {
  if (!verifyAdminPassword('保存')) return;
  const data = collectAdminTableData();
  setCatsData(data);
  showAdminMessage('この端末に保存しました。cats.html に反映されます。', 'ok');
  renderAdminTable();
}
function addNewCat() {
  if (!verifyAdminPassword('新しい猫さんの追加')) return;
  const data = getCatsData();
  data.push({
    name: '新しい猫さん',
    gender: '女の子',
    age: '仔猫',
    personality: ['甘えんぼ'],
    badge: '里親募集中',
    tags: ['女の子'],
    description: 'ここに紹介文を入力してください。',
    image: 'images/newcat.jpg'
  });
  setCatsData(data);
  renderAdminTable();
  showAdminMessage('新しい行を追加しました。入力後に保存してください。', 'ok');
}
function deleteCat(index) {
  if (!verifyAdminPassword('削除')) return;
  const data = getCatsData();
  data.splice(index, 1);
  setCatsData(data);
  renderAdminTable();
  showAdminMessage('1件削除しました。', 'ok');
}
function catsDataToJsText(data) {
  return `const catsData = ${JSON.stringify(data, null, 2)};\n`;
}
function exportCatsJs() {
  const data = collectAdminTableData();
  const blob = new Blob([catsDataToJsText(data)], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cats.js';
  a.click();
  URL.revokeObjectURL(url);
  showAdminMessage('cats.jsを書き出しました。data/cats.js に上書きできます。', 'ok');
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
function parseCatsFileText(text, fileName = '') {
  const trimmed = String(text || '').trim();
  if (fileName.toLowerCase().endsWith('.json') || trimmed.startsWith('[')) {
    return JSON.parse(trimmed);
  }
  return Function(`${trimmed}\n; return catsData;`)();
}
function importCatsFile(file) {
  if (!verifyAdminPassword('ファイルの読み込み')) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = parseCatsFileText(e.target.result, file.name);
      if (!Array.isArray(parsed)) throw new Error('invalid');
      setCatsData(parsed);
      renderAdminTable();
      showAdminMessage('ファイルを読み込みました。確認後、必要なら「cats.jsを書き出す」で保存してください。', 'ok');
    } catch {
      showAdminMessage('読み込みに失敗しました。cats.js または JSON の形式を確認してください。', 'error');
    }
  };
  reader.readAsText(file, 'utf-8');
}
function resetToDefaultData() {
  if (!verifyAdminPassword('初期データへのリセット')) return;
  setCatsData(getDefaultCatsData());
  renderAdminTable();
  showAdminMessage('data/cats.js の内容に戻しました。', 'ok');
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
    setCatsData(getDefaultCatsData());
    renderAdminTable();
    document.getElementById('newCatBtn')?.addEventListener('click', addNewCat);
    document.getElementById('saveLocalBtn')?.addEventListener('click', saveAdminData);
    document.getElementById('exportBtn')?.addEventListener('click', exportCatsJs);
    document.getElementById('exportJsonBtn')?.addEventListener('click', exportCatsJson);
    document.getElementById('resetBtn')?.addEventListener('click', resetToDefaultData);
    document.getElementById('importFile')?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) importCatsFile(file);
      e.target.value = '';
    });
  }
});
