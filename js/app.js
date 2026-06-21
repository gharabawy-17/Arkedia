/* ═══════════════════════════════════════════
   ARKEDIA — Shared Application Logic
   ═══════════════════════════════════════════ */

/* ════════════════════════════
   PRODUCT DATA
   ════════════════════════════ */
const PRODUCTS = [
  {
    id: 1, slug: 'florentine-midi-dress',
    name: 'Florentine Midi Dress', category: 'dresses', subcategory: 'Midi Dresses',
    material: 'Linen Blend', price: 149, originalPrice: 195, badge: 'New',
    description: 'A flowing midi dress crafted from a breathable linen blend. Features a relaxed silhouette with subtle structure at the waist, perfect for warm days and effortless evenings.',
    details: ['Premium linen-cotton blend', 'Relaxed midi length', 'Hidden side zip', 'Machine washable at 30°C', 'Model is 5\'9" wearing size S'],
    care: ['Hand wash or machine wash cold', 'Do not bleach', 'Tumble dry low', 'Cool iron if needed'],
    colors: [{ name: 'Sand', hex: '#E8D5C0' }, { name: 'Stone', hex: '#C2B4A0' }, { name: 'Navy', hex: '#3D4F6B' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80&fit=crop',
    ],
    rating: 4.8, reviewCount: 127,
  },
  {
    id: 2, slug: 'airy-silk-blouse',
    name: 'Airy Silk Blouse', category: 'tops', subcategory: 'Blouses',
    material: 'Silk Touch', price: 89, originalPrice: null, badge: null,
    description: 'An effortless blouse with a fluid silk-touch finish. Designed with a relaxed fit and subtle drape that moves beautifully.',
    details: ['95% Viscose, 5% Elastane', 'Relaxed fit', 'Crew neckline', 'Machine washable'],
    care: ['Machine wash cold delicate', 'Do not bleach', 'Hang to dry', 'Cool iron'],
    colors: [{ name: 'Ivory', hex: '#F5F0E8' }, { name: 'Blush', hex: '#E8C4B8' }],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80&fit=crop',
    ],
    rating: 4.6, reviewCount: 84,
  },
  {
    id: 3, slug: 'tailored-jacket',
    name: 'Tailored Jacket', category: 'jackets', subcategory: 'Blazers',
    material: 'Premium Cotton', price: 215, originalPrice: 280, badge: 'Best Seller',
    description: 'A sharp, perfectly structured blazer with clean lines and a flattering silhouette. Wear open over a slip dress or buttoned for a polished look.',
    details: ['78% Cotton, 22% Polyester', 'Structured shoulder', 'Two-button closure', 'Two front pockets', 'Fully lined'],
    care: ['Dry clean recommended', 'Do not bleach', 'Do not tumble dry', 'Press with damp cloth'],
    colors: [{ name: 'Charcoal', hex: '#2C2C2C' }, { name: 'Camel', hex: '#C8B89A' }, { name: 'Sage', hex: '#8A9B80' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80&fit=crop',
    ],
    rating: 4.9, reviewCount: 203,
  },
  {
    id: 4, slug: 'wide-leg-trousers',
    name: 'Wide Leg Trousers', category: 'bottoms', subcategory: 'Trousers',
    material: 'Crepe Fabric', price: 125, originalPrice: null, badge: null,
    description: 'Wide-leg trousers with a high-rise waist and fluid drape. Cut from a lightweight crepe that flows with every step.',
    details: ['100% Polyester crepe', 'High-rise waist', 'Wide leg silhouette', 'Two side pockets', 'Invisible zip fastening'],
    care: ['Machine wash cold', 'Do not bleach', 'Hang to dry', 'Warm iron'],
    colors: [{ name: 'Ecru', hex: '#F5F0E8' }, { name: 'Black', hex: '#1A1A1A' }, { name: 'Blush', hex: '#D4A8A0' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80&fit=crop',
    ],
    rating: 4.7, reviewCount: 95,
  },
  {
    id: 5, slug: 'cashmere-cardigan',
    name: 'Cashmere Cardigan', category: 'tops', subcategory: 'Knitwear',
    material: 'Luxe Knit', price: 175, originalPrice: null, badge: null,
    description: 'A relaxed-fit cardigan knitted from premium cashmere. Incredibly soft, naturally temperature-regulating, and endlessly versatile.',
    details: ['100% Grade A Cashmere', 'Relaxed oversized fit', 'Ribbed cuffs and hem', 'Button front closure', 'Hand wash recommended'],
    care: ['Hand wash cold', 'Do not bleach', 'Lay flat to dry', 'Do not tumble dry'],
    colors: [{ name: 'Oat', hex: '#E8D5B0' }, { name: 'Sage', hex: '#A8B5A0' }, { name: 'Dusty Rose', hex: '#D4B4B0' }],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80&fit=crop',
    ],
    rating: 4.9, reviewCount: 156,
  },
  {
    id: 6, slug: 'wrap-midi-skirt',
    name: 'Wrap Midi Skirt', category: 'bottoms', subcategory: 'Skirts',
    material: 'Satin Finish', price: 68, originalPrice: 110, badge: 'Sale',
    description: 'A fluid wrap skirt with a lustrous satin finish. The adjustable tie waist creates a beautifully draped silhouette.',
    details: ['100% Polyester satin', 'Wrap style with tie closure', 'Midi length', 'Fully lined', 'Slip-on style'],
    care: ['Hand wash cold', 'Do not bleach', 'Hang to dry', 'Cool iron on reverse'],
    colors: [{ name: 'Midnight', hex: '#1A1A2E' }, { name: 'Cognac', hex: '#8B5E3C' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&fit=crop',
    ],
    rating: 4.5, reviewCount: 68,
  },
  {
    id: 7, slug: 'linen-co-ord-set',
    name: 'Linen Co-Ord Set', category: 'sets', subcategory: 'Co-Ords',
    material: 'Pure Linen', price: 195, originalPrice: 240, badge: 'New',
    description: 'A perfectly matched linen co-ord set — relaxed top and wide-leg trousers. Wear together or as separates.',
    details: ['100% Pure Linen', 'Matching top and trousers', 'Relaxed fit throughout', 'Button-front top', 'Elasticated waist trousers'],
    care: ['Machine wash at 30°C', 'Do not bleach', 'Tumble dry low', 'Cool iron'],
    colors: [{ name: 'Natural', hex: '#E8DDD0' }, { name: 'Slate', hex: '#8A9BA8' }],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1494578379344-d6c710782a3d?w=800&q=80&fit=crop',
    ],
    rating: 4.8, reviewCount: 44,
  },
  {
    id: 8, slug: 'oversized-blazer',
    name: 'Oversized Blazer', category: 'jackets', subcategory: 'Blazers',
    material: 'Wool Blend', price: 285, originalPrice: 360, badge: 'Best Seller',
    description: 'A modern oversized blazer crafted from a soft wool blend. The dropped shoulders and relaxed fit make it an effortlessly cool layer.',
    details: ['68% Wool, 32% Polyester', 'Oversized silhouette', 'Dropped shoulder', 'Three-button front', 'Fully lined'],
    care: ['Dry clean only', 'Do not bleach', 'Do not tumble dry', 'Store folded'],
    colors: [{ name: 'Charcoal', hex: '#2C2C2C' }, { name: 'Navy', hex: '#1E2D4A' }, { name: 'Camel', hex: '#C8B48A' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80&fit=crop',
    ],
    rating: 4.9, reviewCount: 189,
  },
  {
    id: 9, slug: 'silk-slip-dress',
    name: 'Silk Slip Dress', category: 'dresses', subcategory: 'Slip Dresses',
    material: 'Silk Satin', price: 165, originalPrice: null, badge: null,
    description: 'A minimalist slip dress cut from pure silk satin. Effortlessly transitions from day to evening with the right accessories.',
    details: ['100% Pure Silk', 'Bias-cut silhouette', 'Adjustable spaghetti straps', 'Midi length', 'Fully lined'],
    care: ['Hand wash cold', 'Do not bleach', 'Hang to dry', 'Cool iron on reverse'],
    colors: [{ name: 'Champagne', hex: '#F2E0C0' }, { name: 'Black', hex: '#1A1A1A' }, { name: 'Sage', hex: '#A8B5A0' }],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80&fit=crop',
    ],
    rating: 4.7, reviewCount: 112,
  },
  {
    id: 10, slug: 'linen-shirt',
    name: 'Relaxed Linen Shirt', category: 'tops', subcategory: 'Shirts',
    material: 'Washed Linen', price: 95, originalPrice: null, badge: null,
    description: 'A relaxed-fit shirt in pre-washed linen for an effortlessly lived-in feel from the moment you wear it.',
    details: ['100% Washed Linen', 'Relaxed fit', 'Classic collar', 'Button-down front', 'Subtle chest pocket'],
    care: ['Machine wash at 40°C', 'Tumble dry low', 'Cool iron', 'Do not bleach'],
    colors: [{ name: 'White', hex: '#F8F5F0' }, { name: 'Blue', hex: '#6B8FA8' }, { name: 'Terracotta', hex: '#C4785A' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1594938298603-a3554f5e5e4d?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&q=80&fit=crop',
    ],
    rating: 4.6, reviewCount: 78,
  },
  {
    id: 11, slug: 'pleated-maxi-skirt',
    name: 'Pleated Maxi Skirt', category: 'bottoms', subcategory: 'Skirts',
    material: 'Chiffon', price: 98, originalPrice: 130, badge: 'Sale',
    description: 'A flowing maxi skirt with delicate knife pleats and an elegant drape. The elastic waist makes it incredibly comfortable to wear all day.',
    details: ['100% Polyester chiffon', 'Fine knife pleats', 'Elasticated waist', 'Maxi length', 'Fully lined'],
    care: ['Hand wash cold', 'Do not wring', 'Hang to dry', 'Do not iron directly'],
    colors: [{ name: 'Ecru', hex: '#F0EBE0' }, { name: 'Dusty Pink', hex: '#D4A8A0' }, { name: 'Forest', hex: '#4A6650' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80&fit=crop',
    ],
    rating: 4.6, reviewCount: 55,
  },
  {
    id: 12, slug: 'trench-coat',
    name: 'Classic Trench Coat', category: 'jackets', subcategory: 'Coats',
    material: 'Cotton Gabardine', price: 345, originalPrice: null, badge: null,
    description: 'A timeless trench coat rendered in premium cotton gabardine. Featuring all the signature details — double-breasted front, belted waist, and storm flap.',
    details: ['100% Cotton gabardine', 'Double-breasted front', 'Belted waist', 'Storm flap at back', 'Fully lined'],
    care: ['Dry clean only', 'Store hanging', 'Do not bleach'],
    colors: [{ name: 'Camel', hex: '#C8A86A' }, { name: 'Black', hex: '#1A1A1A' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80&fit=crop',
    ],
    rating: 4.9, reviewCount: 94,
  },
];

const REVIEWS = [
  { id: 1, productId: 1, author: 'Sarah M.', location: 'Cairo', rating: 5, date: '2 weeks ago', text: 'Absolutely stunning dress! The fabric feels luxurious and the fit is perfect. I got so many compliments.' },
  { id: 2, productId: 1, author: 'Leila K.', location: 'Dubai', rating: 5, date: '1 month ago', text: 'Exactly as described. The color is beautiful in person, slightly more muted than the photo which I actually prefer.' },
  { id: 3, productId: 1, author: 'Nour A.', location: 'Riyadh', rating: 4, date: '3 weeks ago', text: 'Lovely dress, runs slightly large. I went down a size and it fits beautifully.' },
];

/* ════════════════════════════
   STATE
   ════════════════════════════ */
const store = {
  cart: JSON.parse(localStorage.getItem('ark_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('ark_wish') || '[]'),

  save() {
    localStorage.setItem('ark_cart', JSON.stringify(this.cart));
    localStorage.setItem('ark_wish', JSON.stringify(this.wishlist));
  },

  addToCart(productId, size, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const key = `${productId}-${size}`;
    const existing = this.cart.find(i => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({ key, productId, size, qty, price: product.price, name: product.name, image: product.images[0], material: product.material });
    }
    this.save();
    updateCartUI();
    showToast(`${product.name} added to bag`);
  },

  removeFromCart(key) {
    this.cart = this.cart.filter(i => i.key !== key);
    this.save();
    updateCartUI();
    renderCartDrawer();
    renderCartPage && renderCartPage();
  },

  updateQty(key, delta) {
    const item = this.cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(0, item.qty + delta);
    if (item.qty === 0) { this.removeFromCart(key); return; }
    this.save();
    updateCartUI();
    renderCartDrawer();
    renderCartPage && renderCartPage();
  },

  getTotal() {
    return this.cart.reduce((s, i) => s + i.price * i.qty, 0);
  },

  getCount() {
    return this.cart.reduce((s, i) => s + i.qty, 0);
  },

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      showToast('Removed from wishlist', 'info');
    } else {
      this.wishlist.push(productId);
      showToast('Saved to wishlist ♡');
    }
    this.save();
    document.querySelectorAll(`.card-wish[data-id="${productId}"]`).forEach(btn => {
      btn.classList.toggle('wishlisted', this.wishlist.includes(productId));
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', this.wishlist.includes(productId) ? 'currentColor' : 'none');
    });
  },

  isWishlisted(id) { return this.wishlist.includes(id); },
};

/* ════════════════════════════
   TOAST
   ════════════════════════════ */
let _toastTimer;
function showToast(msg, type = 'success') {
  clearTimeout(_toastTimer);
  const t = document.getElementById('toast');
  if (!t) return;
  document.getElementById('toast-msg').textContent = msg;
  const icon = document.getElementById('toast-icon');
  if (icon) {
    icon.innerHTML = type === 'success'
      ? '<polyline points="20 6 9 17 4 12"></polyline>'
      : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>';
  }
  t.classList.add('show');
  _toastTimer = setTimeout(() => t.classList.remove('show'), 3400);
}

/* ════════════════════════════
   CART UI
   ════════════════════════════ */
function updateCartUI() {
  const count = store.getCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.classList.toggle('show', count > 0);
  });
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = '$' + store.getTotal().toLocaleString();
  const countEl = document.getElementById('cart-count-label');
  if (countEl) countEl.textContent = `(${count} item${count !== 1 ? 's' : ''})`;
}

function renderCartDrawer() {
  const body = document.getElementById('cart-body');
  const empty = document.getElementById('cart-empty');
  const footer = document.getElementById('cart-footer-el');
  if (!body) return;

  if (store.cart.length === 0) {
    body.innerHTML = '';
    if (empty) { empty.style.display = 'flex'; }
    if (footer) footer.style.display = 'none';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (footer) footer.style.display = 'block';

  body.innerHTML = store.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img"/>
      <div class="cart-item-info">
        <p style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:4px">${item.material}</p>
        <p style="font-size:14px;font-weight:500;line-height:1.3">${item.name}</p>
        <p style="font-size:12px;color:var(--muted);margin-top:4px">Size: ${item.size}</p>
        <div class="qty-ctrl">
          <button onclick="store.updateQty('${item.key}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="store.updateQty('${item.key}', 1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0">
        <button onclick="store.removeFromCart('${item.key}')" style="color:var(--muted);transition:color .2s" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--muted)'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <p style="font-weight:600;font-size:14px">$${item.price * item.qty}</p>
      </div>
    </div>
  `).join('');
}

function openCart() {
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (drawer) { drawer.classList.add('open'); }
  if (overlay) { overlay.classList.add('open'); }
  document.body.classList.add('no-scroll');
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

/* ════════════════════════════
   NAVIGATION
   ════════════════════════════ */
let _menuOpen = false;

function toggleMenu() {
  _menuOpen = !_menuOpen;
  const menu = document.getElementById('mobile-nav');
  const hamburger = document.querySelector('.hamburger');
  if (menu) menu.classList.toggle('open', _menuOpen);
  if (hamburger) hamburger.classList.toggle('open', _menuOpen);
  document.body.classList.toggle('no-scroll', _menuOpen);
}

function closeMenu() {
  _menuOpen = false;
  const menu = document.getElementById('mobile-nav');
  const hamburger = document.querySelector('.hamburger');
  if (menu) menu.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

// Scroll nav
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ════════════════════════════
   SCROLL REVEAL
   ════════════════════════════ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('up');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .clip-reveal').forEach(el => {
    observer.observe(el);
  });
  return observer;
}

/* ════════════════════════════
   HERO WORD ANIMATION
   ════════════════════════════ */
function animateHero() {
  document.querySelectorAll('.word-inner').forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), 200 + i * 150);
  });
}

/* ════════════════════════════
   COUNTER ANIMATION
   ════════════════════════════ */
function animateCount(el, target, suffix = '', duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + suffix;
    if (start >= target) clearInterval(timer);
  }, 16);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      animateCount(el, target, suffix);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

/* ════════════════════════════
   PRODUCT CARD RENDERER
   ════════════════════════════ */
function renderProductCard(product, { large = false, delay = 0 } = {}) {
  const disc = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  const wished = store.isWishlisted(product.id);
  const stars = Array(5).fill(0).map((_, i) =>
    `<svg viewBox="0 0 24 24" fill="${i < Math.floor(product.rating) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>`
  ).join('');

  return `
    <div class="product-card reveal" style="transition-delay:${delay}s">
      <a href="product.html?id=${product.id}">
        <div class="product-card-img ${large ? 'aspect-45' : 'aspect-34'}">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy"/>
          <div class="product-card-overlay"></div>
          ${product.badge ? `<span class="card-badge badge-${product.badge === 'New' ? 'new' : product.badge === 'Sale' ? 'sale' : 'best'}">${product.badge}</span>` : ''}
          <button class="card-wish ${wished ? 'wishlisted' : ''}" data-id="${product.id}"
            onclick="event.preventDefault();store.toggleWishlist(${product.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${wished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" style="color:var(--ink)">
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            </svg>
          </button>
          <div class="card-quick-add">
            <div class="quick-add-inner">
              <div class="size-row">
                ${product.sizes.map(s => `<button class="size-chip" onclick="event.preventDefault();selectSizeChip(this,'${product.id}')">${s}</button>`).join('')}
              </div>
              <button class="btn btn-primary btn-block btn-sm" onclick="event.preventDefault();doQuickAdd(${product.id})">Add to Bag</button>
            </div>
          </div>
        </div>
      </a>
      <div class="card-info">
        <div class="card-category">${product.material}</div>
        <a href="product.html?id=${product.id}" class="card-name">${product.name}</a>
        <div class="card-price">
          <span class="price">$${product.price}</span>
          ${product.originalPrice ? `<span class="orig">$${product.originalPrice}</span><span class="discount">-${disc}%</span>` : ''}
        </div>
        <div class="color-dots">
          ${product.colors.map((c, i) => `<div class="color-dot ${i === 0 ? 'active' : ''}" style="background:${c.hex}" title="${c.name}"></div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function selectSizeChip(btn, productId) {
  const parent = btn.closest('.size-row');
  parent.querySelectorAll('.size-chip').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  btn.closest('.product-card').dataset.selectedSize = btn.textContent;
}

function doQuickAdd(productId) {
  const card = document.querySelector(`.product-card [data-id="${productId}"]`)?.closest('.product-card')
    || document.querySelector(`.card-quick-add`)?.closest('.product-card');
  const size = card?.dataset.selectedSize || PRODUCTS.find(p => p.id === productId)?.sizes[1] || 'S';
  store.addToCart(productId, size);
  openCart();
}

/* ════════════════════════════
   NEWSLETTER
   ════════════════════════════ */
function handleNewsletter(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type=email]');
    const btn = form.querySelector('button[type=submit]');
    if (!input?.value.includes('@')) { showToast('Enter a valid email', 'info'); return; }
    const orig = btn.textContent;
    btn.textContent = '✓ Subscribed!';
    btn.style.background = '#22c55e';
    btn.disabled = true;
    input.value = '';
    showToast('Welcome! Your 10% code is on its way.');
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; }, 5000);
  });
}

/* ════════════════════════════
   PAGE LOADER
   ════════════════════════════ */
function hideLoader() {
  const loader = document.getElementById('page-loader');
  if (loader) setTimeout(() => loader.classList.add('done'), 400);
}

/* ════════════════════════════
   KEYBOARD SHORTCUTS
   ════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeCart(); closeMenu(); closeMobileFilter && closeMobileFilter(); }
});

/* ════════════════════════════
   MARK ACTIVE NAV LINK
   ════════════════════════════ */
function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[href]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === path);
  });
}

/* ════════════════════════════
   INIT
   ════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initReveal();
  initCounters();
  animateHero();
  handleNewsletter('newsletter-form');
  markActiveNav();
  hideLoader();

  // Close cart on overlay click
  document.getElementById('overlay')?.addEventListener('click', closeCart);
});
