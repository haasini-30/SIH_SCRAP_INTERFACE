// ========================
// SELLKABAD — APP CONTROLLER
// Navigation, mode switching, animations
// ========================

let currentMode = 'customer';
let currentScreen = 'customer_splash';
let auctionTimerInterval = null;

const customerFlow = ['customer_splash', 'customer_otp', 'customer_home', 'customer_list', 'customer_auction', 'customer_tracking', 'customer_schedule', 'customer_impact'];
const vendorFlow = ['vendor_home', 'vendor_bid', 'vendor_earnings'];

// ── Core navigation ──────────────────────────────────

function nav(screenId) {
  if (!SCREENS[screenId]) return;
  currentScreen = screenId;
  renderScreen(screenId);
  updateDots();
  if (auctionTimerInterval) { clearInterval(auctionTimerInterval); auctionTimerInterval = null; }
  if (screenId === 'customer_auction') startAuctionTimer();
}

function renderScreen(screenId) {
  const container = document.getElementById('screen-container');
  const screen = SCREENS[screenId];
  container.innerHTML = `<div class="screen slide-in">${screen.render()}</div>`;
}

// ── Mode switching ────────────────────────────────────

function setMode(mode) {
  currentMode = mode;
  document.getElementById('btn-customer').classList.toggle('active-mode', mode === 'customer');
  document.getElementById('btn-vendor').classList.toggle('active-mode', mode === 'vendor');
  const firstScreen = mode === 'customer' ? 'customer_splash' : 'vendor_home';
  nav(firstScreen);
}

// ── Auction countdown timer ───────────────────────────

function startAuctionTimer() {
  let seconds = 222; // 3:42
  function fmt(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }
  auctionTimerInterval = setInterval(() => {
    const el = document.getElementById('auction-timer');
    if (!el) { clearInterval(auctionTimerInterval); return; }
    seconds = Math.max(0, seconds - 1);
    el.textContent = fmt(seconds);
    if (seconds === 0) clearInterval(auctionTimerInterval);
  }, 1000);
}

// ── Screen dots indicator ─────────────────────────────

function updateDots() {
  const flow = currentMode === 'customer' ? customerFlow : vendorFlow;
  const dotsEl = document.getElementById('screen-dots');
  const idx = flow.indexOf(currentScreen);
  dotsEl.innerHTML = flow.map((s, i) => `
    <div class="transition-all rounded-full ${i === idx
      ? 'w-5 h-1.5 bg-lime'
      : 'w-1.5 h-1.5 bg-card-border'
    }"></div>
  `).join('');
}

// ── Simulate incoming bids (auction screen) ───────────

function simulateNewBid() {
  // Would inject a new bid card with animation — placeholder for real-time
}

// ── Init ──────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  nav('customer_splash');
});
