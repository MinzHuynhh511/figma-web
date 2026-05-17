// ─────────────────────────────────────────────
// MENU DATA
// Mỗi món gồm: name, price, img (1 ảnh duy nhất)
// ─────────────────────────────────────────────
const MENU = {

  'Coffee': [
    { name: 'Milk ice coffee',             price: '35.000 đ', img: '/img/coffee/milk-ice.png' },
    { name: 'Iced coffee + condensed milk',price: '35.000 đ', img: '/img/coffee/iced-condensed.png' },
    { name: 'Iced black coffee',           price: '30.000 đ', img: '/img/coffee/black-coffee.png' },
  ],

  'Sinh tố': [
    { name: 'Strawberry latte', price: '40.000 đ', img: '/img/latte/strawberry.png' },
    { name: 'Matcha latte',     price: '45.000 đ', img: '/img/latte/matcha.png' },
    { name: 'Taro latte',       price: '35.000 đ', img: '/img/latte/taro.png' },
  ],

  'Trà sữa': [
    { name: 'N&M Boba milk tea',             price: '38.000 đ', img: '/img/milktea/boba.png' },
    { name: 'N&M milk + black sugar boba',   price: '40.000 đ', img: '/img/milktea/black-sugar.png' },
    { name: 'N&M chocolate cream milk tea',  price: '45.000 đ', img: '/img/milktea/choco-cream.png' },
  ],

  'Nước ép': [
    { name: 'N&M orange juice',     price: '40.000 đ', img: '/img/juice/orange.png' },
    { name: 'N&M watermelon juice', price: '35.000 đ', img: '/img/juice/watermelon.png' },
    { name: 'N&M kiwi juice',       price: '40.000 đ', img: '/img/juice/kiwi.png' },
  ],

  'Soda': [
    { name: 'N&M Strawberry soda',  price: '40.000 đ', img: '/img/soda/strawberry.png' },
    { name: 'N&M Blue citrus soda', price: '40.000 đ', img: '/img/soda/blue-citrus.png' },
    { name: 'N&M Blueberry soda',   price: '40.000 đ', img: '/img/soda/blueberry.png' },
  ],

  'Combo': [
    { name: 'Ice beverage + Black coffee',      price: '60.000 đ', img: '/img/combo/ice-black.png' },
    { name: 'Capuchino + Cheese cake',           price: '85.000 đ', img: '/img/combo/capuchino-cheese.png' },
    { name: 'Capuchino + Blueberry Cheese cake', price: '90.000 đ', img: '/img/combo/capuchino-blueberry.png' },
  ],

};

// ─────────────────────────────────────────────
// POSTER TRANG CHỦ (6 ảnh)
// Thay img bằng đường dẫn ảnh thực tế
// ─────────────────────────────────────────────
const PROMOS = [
  { 
    img: 'img/poster/icedlemon.png', 
    alt: 'ICED Lemonade', 
    label: 'ICED Lemonade'
  },
  { 
    img: 'img/poster/newmenu.png', 
    alt: 'New Menu', 
    label: 'New Menu' 
  },
  { 
    img: 'img/poster/matcha.png', 
    alt: 'Stay Cool With Matcha', 
    label: 'Stay Cool With Matcha' 
  },
  { 
    img: 'img/poster/menu1.png', 
    alt: 'New Drinks & Cakes', 
    label: 'New Drinks & Cakes' 
  },
  { 
    img: 'img/poster/menu2.png', 
    alt: 'Morning Brew Bistro', 
    label: 'Morning Brew Bistro' 
  },
  { 
    img: 'img/poster/menu3.png', 
    alt: 'Buy 1 Get 1 Free', 
    label: 'Buy 1 Get 1 Free' 
  },
];

// ─────────────────────────────────────────────
// PHẦN LOGIC ĐIỀU HƯỚNG VÀ RENDER GIAO DIỆN
// ─────────────────────────────────────────────

// Tạo danh sách mục ở Sidebar tự động từ đối tượng MENU dữ liệu bên trên
const sidebarList = document.getElementById('sidebarList');
if (sidebarList) {
  Object.keys(MENU).forEach(cat => {
    const li = document.createElement('li');
    li.className = 'sidebar__item';
    li.dataset.cat = cat;
    li.innerHTML = `<span class="sidebar__radio"></span>${cat}`;
    li.onclick = () => showPage('menu', cat);
    sidebarList.appendChild(li);
  });
}

// Hàm hiển thị nội dung theo từng trang (Trang chủ / Thực đơn / Ưu đãi / Tin tức)
function showPage(page, cat) {
  const el = document.getElementById('content');
  if (!el) return;

  if (page === 'home') {
    el.innerHTML = `
      <div class="section-title">What New ?</div>
      <div class="promo-grid">
        ${PROMOS.map(p => `
          <div class="promo-card">
            <img src="${p.img}" alt="${p.alt}" onerror="this.style.opacity=0">
          </div>
        `).join('')}
      </div>`;
    setActive(null);

  } else if (page === 'menu') {
    const activeCat = cat || Object.keys(MENU)[0];
    const items = MENU[activeCat];
    el.innerHTML = `
      <div class="section-title">${activeCat}</div>
      <div class="menu-list">
        ${items.map(item => `
          <div class="menu-item">
            <img class="menu-item__img" src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
            <div class="menu-item__name">${item.name}</div>
            <div class="menu-item__price">${item.price}</div>
          </div>
        `).join('')}
      </div>`;
    setActive(activeCat);

  } else {
    const titles = { deals: 'Ưu đãi', news: 'Tin tức' };
    el.innerHTML = `<div class="section-title">${titles[page] || page}</div>
      <p style="color:#bbb;font-style:italic;margin-top:1rem">Đang cập nhật...</p>`;
    setActive(null);
  }

  // Kích hoạt lại hiệu ứng CSS Animation chuyển trang mượt mà
  el.style.animation = 'none';
  el.offsetHeight; // Ép trình duyệt render lại cấu trúc nhằm kích hoạt hiệu ứng
  el.style.animation = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hàm xử lý đổi trạng thái tô đậm (Active) của danh mục trên thanh Sidebar
function setActive(activeCat) {
  document.querySelectorAll('.sidebar__item').forEach(li => {
    li.classList.toggle('sidebar__item--active', li.dataset.cat === activeCat);
  });
}

// Khởi chạy mặc định khi trang web vừa tải xong
showPage('home');