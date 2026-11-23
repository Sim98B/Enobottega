let cart = JSON.parse(localStorage.getItem('enoteca-demo-cart') || '[]');
let filter = 'Tutti';
const euro = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });
const grid = document.querySelector('#product-grid');

function renderProducts() {
  const query = document.querySelector('#search').value.trim().toLowerCase();
  const shown = products.filter(p => (filter === 'Tutti' || p.category === filter) && `${p.name} ${p.producer} ${p.denomination} ${p.region} ${p.variety}`.toLowerCase().includes(query));
  document.querySelector('#result-count').textContent = `${shown.length} ${shown.length === 1 ? 'bottiglia' : 'bottiglie'} dimostrative`;
  grid.innerHTML = shown.length ? shown.map(p => `<article class="product-card"><div class="bottle-art ${p.color}"><span class="bottle-shape"><i></i></span><b>${p.category}</b></div><div class="product-body"><div><p class="product-region">${p.producer}</p><h3>${p.name}</h3><p class="product-meta">${p.denomination} · ${p.region}<br>${p.variety} · ${p.vintage} · ${p.format}<br>${p.alcohol} · ${p.note}</p></div><div class="product-bottom"><strong>${euro.format(p.price)}</strong><button class="add" data-id="${p.id}" aria-label="Aggiungi ${p.name}">Aggiungi <span>+</span></button></div></div></article>`).join('') : '<p class="no-results">Nessuna bottiglia trovata. Prova un’altra ricerca.</p>';
}

function saveCart() { localStorage.setItem('enoteca-demo-cart', JSON.stringify(cart)); }
function cartTotal() { return cart.reduce((total, row) => total + row.price * row.quantity, 0); }
function renderCart() {
  const count = cart.reduce((n, row) => n + row.quantity, 0);
  document.querySelector('#cart-count').textContent = count;
  document.querySelector('#cart-total').textContent = euro.format(cartTotal());
  const area = document.querySelector('#cart-items');
  area.innerHTML = cart.length ? cart.map(row => `<article class="cart-row"><div class="cart-mini ${row.color}"><span></span></div><div><h3>${row.name}</h3><p>${euro.format(row.price)}</p><div class="quantity"><button data-change="-1" data-id="${row.id}" aria-label="Riduci quantità">−</button><span>${row.quantity}</span><button data-change="1" data-id="${row.id}" aria-label="Aumenta quantità">+</button></div></div><button class="remove" data-remove="${row.id}" aria-label="Rimuovi ${row.name}">×</button></article>`).join('') : '<div class="empty-cart"><span>○</span><h3>La cassa è vuota</h3><p>Esplora la selezione e aggiungi le bottiglie che vuoi provare.</p></div>';
}
function addToCart(id) { const item = products.find(p => p.id === id); const row = cart.find(p => p.id === id); row ? row.quantity++ : cart.push({ ...item, quantity: 1 }); saveCart(); renderCart(); openCart(); }
function openCart() { document.body.classList.add('cart-open'); document.querySelector('#cart-drawer').setAttribute('aria-hidden', 'false'); document.querySelector('#open-cart').setAttribute('aria-expanded', 'true'); }
function closeCart() { document.body.classList.remove('cart-open'); document.querySelector('#cart-drawer').setAttribute('aria-hidden', 'true'); document.querySelector('#open-cart').setAttribute('aria-expanded', 'false'); }

document.addEventListener('click', event => {
  const add = event.target.closest('[data-id].add, .quick-add'); if (add) addToCart(add.dataset.id);
  const filterButton = event.target.closest('.filter'); if (filterButton) { filter = filterButton.dataset.filter; document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === filterButton)); renderProducts(); }
  const category = event.target.closest('[data-category]'); if (category) { filter = category.dataset.category; document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b.dataset.filter === filter)); renderProducts(); }
  const change = event.target.closest('[data-change]'); if (change) { const row = cart.find(p => p.id === change.dataset.id); row.quantity += Number(change.dataset.change); if (row.quantity < 1) cart = cart.filter(p => p.id !== row.id); saveCart(); renderCart(); }
  const remove = event.target.closest('[data-remove]'); if (remove) { cart = cart.filter(p => p.id !== remove.dataset.remove); saveCart(); renderCart(); }
});
document.querySelector('#search').addEventListener('input', renderProducts);
document.querySelector('#open-cart').addEventListener('click', openCart);
document.querySelector('#close-cart').addEventListener('click', closeCart);
document.querySelector('#overlay').addEventListener('click', closeCart);
document.querySelector('#checkout').addEventListener('click', () => document.querySelector('#checkout-dialog').showModal());
document.querySelector('.dialog-close').addEventListener('click', () => document.querySelector('#checkout-dialog').close());
document.querySelector('#year').textContent = new Date().getFullYear();
renderProducts(); renderCart();
