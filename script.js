// ─────────────────────────────────────────────
// MENU DATA
// Mỗi món gồm: name, price, img (1 ảnh duy nhất)
// ─────────────────────────────────────────────
const MENU = {
  'Coffee': [
    { 
      name: 'Milk ice coffee', 
      price: '35.000 đ', 
      img: '/img/coffee/milk-ice.png',
      description: 'Cà phê rang xay đậm đà hòa quyện cùng sữa đặc và đá mát lạnh.' 
    },
    { 
      name: 'Iced coffee + condensed milk', 
      price: '35.000 đ', 
      img: '/img/coffee/iced-condensed.png',
      description: 'Bạc xỉu với tỷ lệ sữa cao, mang vị béo ngọt và hương thơm nhẹ của cà phê.' 
    },
    { 
      name: 'Iced black coffee', 
      price: '30.000 đ', 
      img: '/img/coffee/black-coffee.png',
      description: 'Cà phê đen nguyên chất pha phin truyền thống, vị đắng đặc trưng.' 
    },
  ],

  'Sinh tố': [
    { 
      name: 'Strawberry latte', 
      price: '40.000 đ', 
      img: '/img/latte/strawberry.png',
      description: 'Sự kết hợp giữa mứt dâu tươi và sữa tươi thanh trùng béo ngậy.' 
    },
    { 
      name: 'Matcha latte', 
      price: '45.000 đ', 
      img: '/img/latte/matcha.png',
      description: 'Bột trà xanh Nhật Bản hòa quyện cùng sữa tươi và lớp bọt sữa mịn.' 
    },
    { 
      name: 'Taro latte', 
      price: '35.000 đ', 
      img: '/img/latte/taro.png',
      description: 'Vị khoai môn bùi bùi, ngọt thanh kết hợp cùng sữa tươi.' 
    },
  ],

  'Trà sữa': [
    { 
      name: 'N&M Boba milk tea', 
      price: '38.000 đ', 
      img: '/img/milktea/boba.png',
      description: 'Trà sữa truyền thống đậm vị trà, đi kèm trân châu đen dai giòn.' 
    },
    { 
      name: 'N&M milk + black sugar boba', 
      price: '40.000 đ', 
      img: '/img/milktea/black-sugar.png',
      description: 'Sữa tươi nguyên chất kết hợp trân châu đường đen ngọt lịm, đậm đà.' 
    },
    { 
      name: 'N&M chocolate cream milk tea', 
      price: '45.000 đ', 
      img: '/img/milktea/choco-cream.png',
      description: 'Trà sữa socola đậm vị kèm lớp kem tươi béo ngậy phía trên.' 
    },
  ],

  'Nước ép': [
    { 
      name: 'N&M orange juice', 
      price: '40.000 đ', 
      img: '/img/juice/orange.png',
      description: 'Nước cam tươi nguyên chất, giàu vitamin C và thanh mát.' 
    },
    { 
      name: 'N&M watermelon juice', 
      price: '35.000 đ', 
      img: '/img/juice/watermelon.png',
      description: 'Nước ép dưa hấu đỏ mọng, giải nhiệt tức thì.' 
    },
    { 
      name: 'N&M kiwi juice', 
      price: '40.000 đ', 
      img: '/img/juice/kiwi.png',
      description: 'Nước ép kiwi tươi với vị chua thanh nhẹ nhàng, tốt cho sức khỏe.' 
    },
  ],

  'Soda': [
    { 
      name: 'N&M Strawberry soda', 
      price: '40.000 đ', 
      img: '/img/soda/strawberry.png',
      description: 'Soda kết hợp siro dâu và đá viên, mang lại cảm giác sảng khoái.' 
    },
    { 
      name: 'N&M Blue citrus soda', 
      price: '40.000 đ', 
      img: '/img/soda/blue-citrus.png',
      description: 'Hương vị cam xanh tươi mát pha cùng soda sủi bọt cực đã.' 
    },
    { 
      name: 'N&M Blueberry soda', 
      price: '40.000 đ', 
      img: '/img/soda/blueberry.png',
      description: 'Soda việt quất chua ngọt, thức uống giải nhiệt hoàn hảo.' 
    },
  ],

  'Combo': [
    { 
      name: 'Ice beverage + Black coffee', 
      price: '60.000 đ', 
      img: '/img/combo/ice-black.png',
      description: 'Combo tiết kiệm gồm cà phê đen đá và một phần bánh sừng bò kèm theo.' 
    },
    { 
      name: 'Capuchino + Cheese cake', 
      price: '85.000 đ', 
      img: '/img/combo/capuchino-cheese.png',
      description: 'Sự kết hợp sang trọng giữa Capuchino nóng béo và bánh phô mai mềm mịn.' 
    },
    { 
      name: 'Capuchino + Blueberry Cheese cake', 
      price: '90.000 đ', 
      img: '/img/combo/capuchino-blueberry.png',
      description: 'Capuchino nóng đi kèm bánh phô mai việt quất chua ngọt hài hòa.' 
    },
  ],
};


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
                    <div class="menu-item__info">
                      <div class="menu-item__name">${item.name}</div>
                      <div class="menu-item__desc">${item.description || 'Đang cập nhật mô tả...'}</div>
                    </div>
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