// ========================
// SELLKABAD — SCREEN DEFINITIONS
// All screens rendered as HTML strings
// ========================

const SCREENS = {

  // ─────────────────────────────────────────────────────
  // CUSTOMER SCREENS
  // ─────────────────────────────────────────────────────

  customer_splash: {
    label: 'Splash',
    render: () => `
      <div class="flex flex-col items-center justify-center h-full bg-obsidian relative overflow-hidden">
        <!-- Animated rings -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="absolute w-64 h-64 border border-lime/10 rounded-full gps-ring" style="animation-delay:0s"></div>
          <div class="absolute w-64 h-64 border border-lime/10 rounded-full gps-ring" style="animation-delay:0.8s"></div>
          <div class="absolute w-64 h-64 border border-lime/10 rounded-full gps-ring" style="animation-delay:1.6s"></div>
        </div>
        <!-- Logo mark -->
        <div class="float mb-8 relative z-10">
          <div class="w-24 h-24 rounded-3xl flex items-center justify-center" style="background:linear-gradient(135deg,#B5FF47 0%,#7DBF2A 100%);box-shadow:0 0 48px rgba(181,255,71,0.35)">
            <span style="font-size:44px">♻️</span>
          </div>
        </div>
        <h1 class="font-syne font-800 text-5xl text-text-primary tracking-tight mb-2 relative z-10">SellKabad</h1>
        <p class="font-inter text-muted text-sm tracking-widest uppercase relative z-10">Hyderabad's Scrap Marketplace</p>
        <div class="mt-16 relative z-10 w-full px-8">
          <button onclick="nav('customer_otp')" class="w-full py-4 rounded-2xl font-syne font-700 text-obsidian text-lg transition-all active:scale-95"
            style="background:linear-gradient(135deg,#B5FF47 0%,#7DBF2A 100%);box-shadow:0 8px 32px rgba(181,255,71,0.3)">
            Get Started
          </button>
          <p class="text-center text-muted text-xs mt-4 font-inter">By continuing, you agree to our Terms & Privacy Policy</p>
        </div>
        <div class="absolute bottom-12 left-0 right-0 flex justify-center gap-6 text-muted text-xs font-inter">
          <span>🌿 Eco-certified</span>
          <span>🔒 Secure Payments</span>
          <span>⚡ 60-min Pickup</span>
        </div>
      </div>
    `
  },

  customer_otp: {
    label: 'Login',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian safe-top px-6">
        <button onclick="nav('customer_splash')" class="w-9 h-9 rounded-xl bg-card-bg border border-card-border flex items-center justify-center mb-8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#F0F7F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="slide-in">
          <h2 class="font-syne font-800 text-3xl text-text-primary mb-2">Your number.<br/>Your identity.</h2>
          <p class="text-muted text-sm font-inter mb-10">We'll send a 6-digit code to verify you.<br>No passwords. Ever.</p>
          <div class="bg-card-bg border border-card-border rounded-2xl p-4 flex items-center gap-3 mb-4">
            <span class="text-text-secondary font-inter text-sm">🇮🇳 +91</span>
            <div class="w-px h-5 bg-card-border"></div>
            <input type="tel" placeholder="98765 43210" class="flex-1 bg-transparent text-text-primary font-inter text-lg placeholder-muted" />
          </div>
          <button onclick="nav('customer_home')" class="w-full py-4 rounded-2xl font-syne font-700 text-obsidian text-base"
            style="background:linear-gradient(135deg,#B5FF47 0%,#7DBF2A 100%);box-shadow:0 8px 24px rgba(181,255,71,0.25)">
            Send OTP
          </button>
          <div class="mt-10 p-4 bg-sage-dim/30 border border-sage/20 rounded-2xl">
            <p class="text-sage text-xs font-inter leading-relaxed">🔒 <span class="font-600">Tip:</span> SellKabad never stores or shares your phone number with vendors. Your privacy is our policy.</p>
          </div>
        </div>
      </div>
    `
  },

  customer_home: {
    label: 'Home',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <!-- Header -->
        <div class="safe-top px-5 pt-0 pb-4">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="text-muted text-xs font-inter mb-0.5">📍 Banjara Hills, Hyderabad</p>
              <h2 class="font-syne font-700 text-text-primary text-xl">Good evening, Arjun 👋</h2>
            </div>
            <div class="relative">
              <div class="w-11 h-11 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#F0F7F2" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="absolute -top-1 -right-1 w-4 h-4 bg-rust rounded-full flex items-center justify-center">
                <span class="text-white text-xs font-700" style="font-size:9px">3</span>
              </div>
            </div>
          </div>

          <!-- Price Ticker -->
          <div class="bg-card-bg border border-card-border rounded-2xl p-3 overflow-hidden mb-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-1.5 h-1.5 bg-lime rounded-full pulse-dot"></div>
              <span class="text-muted text-xs font-inter uppercase tracking-wider">Live Scrap Rates · Hyderabad</span>
            </div>
            <div class="overflow-hidden">
              <div class="ticker-wrap">
                ${['🔩 Iron ₹28/kg ▲', '🥫 Aluminium ₹92/kg ▲', '🔌 Copper ₹340/kg ▼', '📰 Paper ₹12/kg —', '🧴 Plastic ₹18/kg ▲', '📱 E-Waste ₹85/kg ▲', '🔋 Battery ₹45/kg ▼', '🪟 Glass ₹5/kg —', '🔩 Iron ₹28/kg ▲', '🥫 Aluminium ₹92/kg ▲', '🔌 Copper ₹340/kg ▼', '📰 Paper ₹12/kg —', '🧴 Plastic ₹18/kg ▲', '📱 E-Waste ₹85/kg ▲', '🔋 Battery ₹45/kg ▼', '🪟 Glass ₹5/kg —'].map(t => `<span class="text-lime text-sm font-inter font-500">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Scrollable content -->
        <div class="flex-1 overflow-y-auto px-5 pb-24 space-y-5">
          <!-- Quick Actions -->
          <div class="grid grid-cols-2 gap-3">
            <button onclick="nav('customer_list')" class="p-4 rounded-2xl border border-lime/30 flex flex-col gap-2 text-left active:scale-95 transition-all" style="background:linear-gradient(135deg,rgba(181,255,71,0.12) 0%,rgba(181,255,71,0.04) 100%)">
              <span class="text-2xl">📦</span>
              <span class="font-syne font-700 text-text-primary text-sm">Sell Scrap</span>
              <span class="text-muted text-xs font-inter">Get best bids in 2 min</span>
            </button>
            <button onclick="nav('customer_schedule')" class="p-4 rounded-2xl border border-card-border flex flex-col gap-2 text-left active:scale-95 transition-all bg-card-bg">
              <span class="text-2xl">📅</span>
              <span class="font-syne font-700 text-text-primary text-sm">Schedule</span>
              <span class="text-muted text-xs font-inter">Book a pickup slot</span>
            </button>
          </div>

          <!-- Active listing banner -->
          <div onclick="nav('customer_auction')" class="p-4 rounded-2xl border border-rust/30 cursor-pointer active:scale-95 transition-all" style="background:linear-gradient(135deg,rgba(255,107,53,0.12) 0%,rgba(255,107,53,0.04) 100%)">
            <div class="flex items-center justify-between mb-2">
              <span class="text-rust text-xs font-inter font-500 flex items-center gap-1.5"><span class="w-1.5 h-1.5 bg-rust rounded-full pulse-dot inline-block"></span> LIVE AUCTION</span>
              <span class="text-muted text-xs">4 bids ·  2m left</span>
            </div>
            <p class="font-syne font-700 text-text-primary text-base">Your mixed scrap listing</p>
            <p class="text-muted text-xs font-inter mt-1">Best offer so far: <span class="text-lime font-600">₹38/kg</span> by Ravi Scrap Works</p>
          </div>

          <!-- Category Grid -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-syne font-700 text-text-primary text-base">What are you selling?</h3>
              <span class="text-lime text-xs font-inter">11 types</span>
            </div>
            <div class="grid grid-cols-3 gap-2">
              ${[
                {icon:'🔩', label:'Metals', rate:'₹28–340'},
                {icon:'🧴', label:'Plastics', rate:'₹12–25'},
                {icon:'📰', label:'Paper', rate:'₹10–15'},
                {icon:'📱', label:'E-Waste', rate:'₹45–120'},
                {icon:'🔋', label:'Battery', rate:'₹40–60'},
                {icon:'🪟', label:'Glass', rate:'₹4–8'},
              ].map(c => `
                <button onclick="nav('customer_list')" class="p-3 rounded-xl bg-card-bg border border-card-border flex flex-col items-center gap-1.5 active:scale-95 transition-all hover:border-lime/30">
                  <span class="text-xl">${c.icon}</span>
                  <span class="text-text-primary text-xs font-inter font-500">${c.label}</span>
                  <span class="text-muted text-xs" style="font-size:10px">${c.rate}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Nearby Vendors -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-syne font-700 text-text-primary text-base">Vendors Near You</h3>
              <span class="text-lime text-xs font-inter">12 active</span>
            </div>
            ${[
              {name:'Ravi Scrap Works', dist:'0.8km', rating:'4.9', tag:'Express', pickup:'< 30min', accent:'lime'},
              {name:'Hyderabad Kabadi', dist:'1.2km', rating:'4.7', tag:'Trusted', pickup:'~45min', accent:'sage'},
              {name:'Sri Sai Recyclers', dist:'2.1km', rating:'4.6', tag:'E-Waste Pro', pickup:'~1hr', accent:'rust'},
            ].map(v => `
              <div class="flex items-center gap-3 p-3 rounded-xl bg-card-bg border border-card-border mb-2 active:scale-95 transition-all cursor-pointer" onclick="nav('customer_auction')">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center font-syne font-700 text-obsidian text-sm" style="background:linear-gradient(135deg,#B5FF47,#7DBF2A)">${v.name[0]}</div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <span class="font-syne font-600 text-text-primary text-sm">${v.name}</span>
                    <span class="text-xs px-1.5 py-0.5 rounded-md font-inter" style="background:rgba(181,255,71,0.1);color:#B5FF47">${v.tag}</span>
                  </div>
                  <p class="text-muted text-xs font-inter">${v.dist} · Pickup ${v.pickup}</p>
                </div>
                <div class="text-right">
                  <p class="text-text-primary text-sm font-600 font-inter">⭐ ${v.rating}</p>
                  <p class="text-muted text-xs font-inter">rating</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        ${bottomNav('customer', 'home')}
      </div>
    `
  },

  customer_list: {
    label: 'List Scrap',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <div class="safe-top px-5 pb-4">
          <div class="flex items-center gap-3 mb-6">
            <button onclick="nav('customer_home')" class="w-9 h-9 rounded-xl bg-card-bg border border-card-border flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#F0F7F2" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div>
              <h2 class="font-syne font-700 text-text-primary text-xl">List Your Scrap</h2>
              <p class="text-muted text-xs font-inter">Takes about 45 seconds</p>
            </div>
          </div>

          <!-- Steps indicator -->
          <div class="flex items-center gap-2 mb-6">
            ${['Photos', 'Type', 'Details', 'Post'].map((s,i) => `
              <div class="flex items-center gap-2 flex-1">
                <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-700 font-syne ${i===0 ? 'bg-lime text-obsidian' : 'bg-card-bg border border-card-border text-muted'}">${i+1}</div>
                <span class="text-xs font-inter ${i===0 ? 'text-lime' : 'text-muted'}">${s}</span>
                ${i<3 ? '<div class="flex-1 h-px bg-card-border"></div>' : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="flex-1 overflow-y-auto px-5 pb-24 space-y-4 slide-in">
          <!-- Photo upload area -->
          <div class="rounded-2xl border-2 border-dashed border-lime/30 flex flex-col items-center justify-center p-8 gap-3 cursor-pointer active:scale-95 transition-all" style="background:rgba(181,255,71,0.04)">
            <div class="w-14 h-14 rounded-2xl bg-lime/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#B5FF47" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="13" r="4" stroke="#B5FF47" stroke-width="1.5"/></svg>
            </div>
            <p class="font-syne font-600 text-text-primary text-sm">Tap to add photos</p>
            <p class="text-muted text-xs font-inter text-center">AI will auto-detect scrap type.<br/>Better photos = higher bids.</p>
            <div class="flex gap-2 mt-1">
              <span class="text-xs px-2 py-1 rounded-lg bg-lime/10 text-lime font-inter">📸 Camera</span>
              <span class="text-xs px-2 py-1 rounded-lg bg-lime/10 text-lime font-inter">🖼️ Gallery</span>
            </div>
          </div>

          <!-- AI detection suggestion -->
          <div class="p-4 rounded-2xl bg-sage-dim/30 border border-sage/20">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-sage text-sm">🤖</span>
              <span class="font-syne font-600 text-sage text-sm">AI Detected</span>
              <span class="text-muted text-xs font-inter ml-auto">87% confidence</span>
            </div>
            <p class="text-text-primary text-sm font-inter">Looks like <span class="text-lime font-600">Mixed Metal + Plastic</span></p>
            <p class="text-muted text-xs font-inter mt-0.5">Estimated value: ₹180–240 for ~6kg</p>
          </div>

          <!-- Category multi-select -->
          <div>
            <p class="font-syne font-600 text-text-primary text-sm mb-3">Confirm Categories</p>
            <div class="grid grid-cols-2 gap-2">
              ${[
                {icon:'🔩', label:'Iron/Steel', sel:true},
                {icon:'🧴', label:'Plastic', sel:true},
                {icon:'📰', label:'Paper', sel:false},
                {icon:'📱', label:'E-Waste', sel:false},
                {icon:'🔋', label:'Battery', sel:false},
                {icon:'🥫', label:'Aluminium', sel:false},
              ].map(c => `
                <label class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${c.sel ? 'border-lime/50 bg-lime/8' : 'border-card-border bg-card-bg'}">
                  <input type="checkbox" ${c.sel ? 'checked' : ''} class="hidden" />
                  <span class="text-lg">${c.icon}</span>
                  <span class="font-inter text-sm ${c.sel ? 'text-lime' : 'text-muted'}">${c.label}</span>
                  ${c.sel ? '<span class="ml-auto text-lime text-sm">✓</span>' : ''}
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Weight estimate -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <p class="font-syne font-600 text-text-primary text-sm">Estimated Weight</p>
              <span class="text-lime font-700 font-syne text-lg">6 kg</span>
            </div>
            <input type="range" min="1" max="50" value="6" class="w-full h-2 rounded-full appearance-none cursor-pointer" style="accent-color:#B5FF47;background:#1C2420" />
            <div class="flex justify-between text-muted text-xs font-inter mt-1">
              <span>1 kg</span><span>25 kg</span><span>50 kg+</span>
            </div>
          </div>

          <!-- Address -->
          <div>
            <p class="font-syne font-600 text-text-primary text-sm mb-2">Pickup Address</p>
            <div class="p-4 rounded-2xl bg-card-bg border border-card-border flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#B5FF47" stroke-width="1.5"/><circle cx="12" cy="10" r="3" stroke="#B5FF47" stroke-width="1.5"/></svg>
              <div>
                <p class="text-text-primary text-sm font-inter">Flat 4B, Green Valley Apts</p>
                <p class="text-muted text-xs font-inter">Banjara Hills, Hyderabad · 500034</p>
              </div>
              <span class="text-lime text-xs ml-auto font-inter">Change</span>
            </div>
          </div>

          <!-- Post button -->
          <button onclick="nav('customer_auction')" class="w-full py-4 rounded-2xl font-syne font-700 text-obsidian text-lg active:scale-95 transition-all"
            style="background:linear-gradient(135deg,#B5FF47 0%,#7DBF2A 100%);box-shadow:0 8px 32px rgba(181,255,71,0.3)">
            🚀 Post & Start Auction
          </button>
          <p class="text-center text-muted text-xs font-inter">Vendors will start bidding immediately after posting</p>
        </div>
      </div>
    `
  },

  customer_auction: {
    label: 'Auction',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <div class="safe-top px-5 pb-3">
          <div class="flex items-center gap-3 mb-4">
            <button onclick="nav('customer_home')" class="w-9 h-9 rounded-xl bg-card-bg border border-card-border flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#F0F7F2" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="flex-1">
              <h2 class="font-syne font-700 text-text-primary text-xl">Live Bid Auction</h2>
              <p class="text-muted text-xs font-inter">Mixed Metal + Plastic · ~6 kg</p>
            </div>
            <div class="text-right">
              <p class="text-rust text-xs font-inter">Closes in</p>
              <p class="font-syne font-700 text-rust text-lg" id="auction-timer">03:42</p>
            </div>
          </div>

          <!-- Your listing summary -->
          <div class="p-3 rounded-2xl bg-card-bg border border-card-border flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center text-xl">🔩</div>
            <div class="flex-1">
              <p class="text-text-primary text-sm font-syne font-600">Mixed Scrap — 6kg estimated</p>
              <div class="flex gap-2 mt-1">
                <span class="text-xs px-2 py-0.5 rounded-lg bg-lime/10 text-lime font-inter">Iron</span>
                <span class="text-xs px-2 py-0.5 rounded-lg bg-lime/10 text-lime font-inter">Plastic</span>
              </div>
            </div>
            <div>
              <p class="text-muted text-xs font-inter">Best bid</p>
              <p class="text-lime font-syne font-800 text-xl">₹38<span class="text-sm">/kg</span></p>
            </div>
          </div>

          <!-- Bid count indicator -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-lime rounded-full pulse-dot"></span>
              <span class="text-text-primary font-syne font-600 text-sm">5 vendors bidding</span>
            </div>
            <span class="text-muted text-xs font-inter">Sorted by price</span>
          </div>
        </div>

        <!-- Bid cards -->
        <div class="flex-1 overflow-y-auto px-5 pb-6 space-y-3">
          ${[
            {name:'Ravi Scrap Works', dist:'0.8km', price:38, eta:'20 min', rating:'4.9', reviews:128, badge:'Fastest', badgeCol:'rust', delay:'0s', best:true},
            {name:'Hyderabad Kabadi', dist:'1.2km', price:36, eta:'35 min', rating:'4.7', reviews:94, badge:'Trusted', badgeCol:'sage', delay:'0.15s', best:false},
            {name:'Sri Sai Recyclers', dist:'2.1km', price:35, eta:'45 min', rating:'4.6', reviews:76, badge:'E-Waste Pro', badgeCol:'lime', delay:'0.3s', best:false},
            {name:'Green Earth Kabadi', dist:'2.8km', price:33, eta:'55 min', rating:'4.4', reviews:52, badge:'', badgeCol:'', delay:'0.45s', best:false},
            {name:'Modern Scrap Hub', dist:'3.2km', price:31, eta:'60 min', rating:'4.2', reviews:34, badge:'', badgeCol:'', delay:'0.6s', best:false},
          ].map((b, i) => `
            <div class="bid-enter rounded-2xl border p-4 ${b.best ? 'border-lime/40' : 'border-card-border bg-card-bg'}" style="animation-delay:${b.delay};${b.best ? 'background:linear-gradient(135deg,rgba(181,255,71,0.08) 0%,rgba(181,255,71,0.03) 100%)' : ''}">
              ${b.best ? '<div class="flex items-center gap-2 mb-2"><span class="text-xs font-inter text-lime font-600">👑 HIGHEST BID</span></div>' : ''}
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center font-syne font-700 text-lg text-obsidian" style="background:linear-gradient(135deg,#B5FF47,#7DBF2A)">${b.name[0]}</div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="font-syne font-700 text-text-primary text-sm">${b.name}</span>
                    ${b.badge ? `<span class="text-xs px-1.5 py-0.5 rounded-md font-inter" style="background:rgba(${b.badgeCol==='rust'?'255,107,53':b.badgeCol==='sage'?'74,123,91':'181,255,71'},0.15);color:${b.badgeCol==='rust'?'#FF6B35':b.badgeCol==='sage'?'#4A7B5B':'#B5FF47'}">${b.badge}</span>` : ''}
                  </div>
                  <p class="text-muted text-xs font-inter">⭐ ${b.rating} (${b.reviews} reviews) · ${b.dist}</p>
                  <p class="text-muted text-xs font-inter mt-0.5">🚛 ETA: ${b.eta}</p>
                </div>
                <div class="text-right">
                  <p class="font-syne font-800 text-2xl ${b.best ? 'text-lime' : 'text-text-primary'}">₹${b.price}</p>
                  <p class="text-muted text-xs font-inter">/kg</p>
                  <p class="text-lime text-xs font-inter font-600 mt-0.5">~₹${b.price*6}</p>
                </div>
              </div>
              <div class="mt-3 flex gap-2">
                <button class="flex-1 py-2.5 rounded-xl border border-card-border text-text-secondary text-xs font-inter font-500 active:scale-95 transition-all">View Profile</button>
                <button onclick="nav('customer_tracking')" class="flex-1 py-2.5 rounded-xl font-inter font-600 text-xs active:scale-95 transition-all ${b.best ? 'text-obsidian' : 'text-obsidian'}" style="${b.best ? 'background:linear-gradient(135deg,#B5FF47,#7DBF2A)' : 'background:#4A7B5B'}">Accept ₹${b.price}/kg</button>
              </div>
            </div>
          `).join('')}

          <div class="p-4 rounded-2xl bg-card-bg border border-card-border text-center">
            <p class="text-muted text-xs font-inter">Don't like the bids? <span class="text-lime cursor-pointer">Set a minimum price</span> or <span class="text-lime cursor-pointer">extend auction</span></p>
          </div>
        </div>
      </div>
    `
  },

  customer_tracking: {
    label: 'Tracking',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <div class="safe-top px-5 pb-4">
          <div class="flex items-center gap-3 mb-5">
            <button onclick="nav('customer_auction')" class="w-9 h-9 rounded-xl bg-card-bg border border-card-border flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#F0F7F2" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div>
              <h2 class="font-syne font-700 text-text-primary text-xl">Ravi is on the way</h2>
              <p class="text-muted text-xs font-inter">ETA: 18 minutes</p>
            </div>
            <div class="w-10 h-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.87 6.98a20.04 20.04 0 01-3.07-8.67A2 2 0 012.78 2h3a2 2 0 012 1.72c.13.96.35 1.9.68 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.55 2.81.68A2 2 0 0122 16.92z" stroke="#B5FF47" stroke-width="1.5"/></svg>
            </div>
          </div>
        </div>

        <!-- Fake Map -->
        <div class="mx-5 rounded-3xl overflow-hidden relative mb-5" style="height:200px;background:linear-gradient(135deg,#0F1A14 0%,#111F16 100%);border:1px solid #1C2420">
          <!-- Grid lines -->
          <svg class="absolute inset-0 opacity-20" width="100%" height="100%">
            <defs><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#4A7B5B" stroke-width="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            <!-- Roads -->
            <line x1="0" y1="100" x2="390" y2="100" stroke="#1C3020" stroke-width="8"/>
            <line x1="150" y1="0" x2="150" y2="200" stroke="#1C3020" stroke-width="6"/>
            <line x1="280" y1="0" x2="280" y2="200" stroke="#1C3020" stroke-width="5"/>
            <line x1="0" y1="60" x2="390" y2="60" stroke="#1C3020" stroke-width="4"/>
            <line x1="0" y1="150" x2="390" y2="150" stroke="#1C3020" stroke-width="4"/>
          </svg>
          <!-- Destination marker (customer) -->
          <div class="absolute" style="right:60px;top:80px">
            <div class="w-8 h-8 rounded-full border-2 border-text-primary flex items-center justify-center text-sm" style="background:#0A0F0D">🏠</div>
            <div class="absolute inset-0 rounded-full border border-text-primary/30 gps-ring"></div>
          </div>
          <!-- Vendor moving dot -->
          <div class="absolute" style="left:70px;top:90px">
            <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm shadow-lg" style="background:linear-gradient(135deg,#B5FF47,#7DBF2A);box-shadow:0 0 20px rgba(181,255,71,0.5)">🚛</div>
            <div class="absolute inset-0 rounded-full border-2 border-lime/50 gps-ring"></div>
          </div>
          <!-- Route line -->
          <svg class="absolute inset-0" width="100%" height="100%">
            <path d="M 70 94 L 150 94 L 150 80 L 320 80" stroke="#B5FF47" stroke-width="2.5" stroke-dasharray="6,4" fill="none" opacity="0.8"/>
          </svg>
          <!-- ETA chip -->
          <div class="absolute top-3 left-3 px-3 py-1.5 rounded-xl font-syne font-700 text-obsidian text-xs" style="background:#B5FF47">18 min away</div>
        </div>

        <!-- Status Pipeline -->
        <div class="px-5 flex-1 overflow-y-auto pb-24">
          <div class="space-y-0">
            ${[
              {icon:'✅', label:'Pickup Accepted', sub:'Ravi Scrap Works confirmed', done:true, time:'9:15 PM'},
              {icon:'🚛', label:'Vendor En Route', sub:'Ravi is heading your way', done:true, time:'9:18 PM'},
              {icon:'🔔', label:'Arriving Soon', sub:'Expected at 9:36 PM', done:false, active:true, time:''},
              {icon:'⚖️', label:'Weighing & Verification', sub:'Digital scale + photo proof', done:false, time:''},
              {icon:'💸', label:'Payment Released', sub:'Instant UPI transfer', done:false, time:''},
            ].map((s, i, arr) => `
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-9 h-9 rounded-xl flex items-center justify-center text-base ${s.done ? 'bg-lime' : s.active ? 'bg-rust/20 border border-rust' : 'bg-card-bg border border-card-border'}">
                    ${s.done ? s.icon : s.active ? '<span class="pulse-dot">'+s.icon+'</span>' : s.icon}
                  </div>
                  ${i < arr.length - 1 ? `<div class="w-0.5 h-8 mt-1 ${s.done ? 'bg-lime/30' : 'bg-card-border'}"></div>` : ''}
                </div>
                <div class="pt-1.5 pb-8">
                  <p class="font-syne font-600 text-sm ${s.done ? 'text-text-primary' : s.active ? 'text-rust' : 'text-muted'}">${s.label}</p>
                  <p class="text-muted text-xs font-inter">${s.sub}</p>
                  ${s.time ? `<p class="text-lime text-xs font-inter mt-0.5">${s.time}</p>` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Vendor Card -->
          <div class="p-4 rounded-2xl bg-card-bg border border-card-border">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center font-syne font-700 text-obsidian text-xl" style="background:linear-gradient(135deg,#B5FF47,#7DBF2A)">R</div>
              <div class="flex-1">
                <p class="font-syne font-700 text-text-primary">Ravi Scrap Works</p>
                <p class="text-muted text-xs font-inter">⭐ 4.9 · 128 pickups · Verified ✓</p>
              </div>
              <div class="flex gap-2">
                <div class="w-9 h-9 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center cursor-pointer">💬</div>
                <div class="w-9 h-9 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center cursor-pointer">📞</div>
              </div>
            </div>
            <div class="mt-3 p-3 rounded-xl bg-obsidian border border-card-border flex justify-between">
              <div class="text-center">
                <p class="text-lime font-syne font-700 text-lg">₹38</p>
                <p class="text-muted text-xs font-inter">/kg rate</p>
              </div>
              <div class="w-px bg-card-border"></div>
              <div class="text-center">
                <p class="text-text-primary font-syne font-700 text-lg">~₹228</p>
                <p class="text-muted text-xs font-inter">estimated</p>
              </div>
              <div class="w-px bg-card-border"></div>
              <div class="text-center">
                <p class="text-text-primary font-syne font-700 text-lg">6 kg</p>
                <p class="text-muted text-xs font-inter">estimated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  customer_schedule: {
    label: 'Schedule',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <div class="safe-top px-5 pb-4">
          <div class="flex items-center gap-3 mb-6">
            <button onclick="nav('customer_home')" class="w-9 h-9 rounded-xl bg-card-bg border border-card-border flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#F0F7F2" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div>
              <h2 class="font-syne font-700 text-text-primary text-xl">Schedule Pickup</h2>
              <p class="text-muted text-xs font-inter">Book in advance, no rush</p>
            </div>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto px-5 pb-24 space-y-5 slide-in">
          <!-- Slot type -->
          <div>
            <p class="font-syne font-600 text-text-primary text-sm mb-3">Pickup Type</p>
            <div class="grid grid-cols-2 gap-3">
              <div class="p-4 rounded-2xl border border-lime/40 flex flex-col gap-1.5" style="background:rgba(181,255,71,0.08)">
                <span class="text-xl">⚡</span>
                <p class="font-syne font-700 text-lime text-sm">Express</p>
                <p class="text-muted text-xs font-inter">Within 60 minutes</p>
                <p class="text-rust text-xs font-inter font-600">+₹39 convenience fee</p>
              </div>
              <div class="p-4 rounded-2xl border-2 border-lime bg-card-bg flex flex-col gap-1.5">
                <span class="text-xl">📅</span>
                <p class="font-syne font-700 text-text-primary text-sm">Scheduled</p>
                <p class="text-muted text-xs font-inter">Pick your slot</p>
                <p class="text-lime text-xs font-inter font-600">Free</p>
              </div>
            </div>
          </div>

          <!-- Date picker -->
          <div>
            <p class="font-syne font-600 text-text-primary text-sm mb-3">Select Date</p>
            <div class="flex gap-2 overflow-x-auto pb-2">
              ${['Today\nSep 4', 'Tomorrow\nSep 5', 'Sat\nSep 6', 'Sun\nSep 7', 'Mon\nSep 8', 'Tue\nSep 9'].map((d, i) => `
                <div class="flex flex-col items-center p-3 rounded-2xl min-w-14 cursor-pointer border transition-all ${i===1 ? 'border-lime bg-lime/10 text-lime' : 'border-card-border bg-card-bg text-muted'}">
                  ${d.split('\n').map((l, li) => `<span class="${li===0 ? 'text-xs font-inter' : 'font-syne font-700 text-sm mt-0.5'}">${l}</span>`).join('')}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Time slots -->
          <div>
            <p class="font-syne font-600 text-text-primary text-sm mb-3">Select Time Slot</p>
            <div class="grid grid-cols-3 gap-2">
              ${['7–9 AM', '9–11 AM', '11–1 PM', '1–3 PM', '3–5 PM', '5–7 PM'].map((t, i) => `
                <div class="p-3 rounded-xl border cursor-pointer text-center transition-all ${i===2 ? 'border-lime/50 bg-lime/10 text-lime' : i===0 ? 'border-card-border bg-card-bg/50 text-muted/40' : 'border-card-border bg-card-bg text-muted'}">
                  <p class="font-inter text-xs font-600">${t}</p>
                  ${i===0 ? '<p class="text-xs mt-0.5" style="font-size:9px">Booked</p>' : i===2 ? '<p class="text-lime text-xs mt-0.5" style="font-size:9px">Selected</p>' : '<p class="text-muted text-xs mt-0.5" style="font-size:9px">Available</p>'}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Recurring -->
          <div class="p-4 rounded-2xl bg-card-bg border border-card-border">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-syne font-600 text-text-primary text-sm">Recurring Pickup</p>
                <p class="text-muted text-xs font-inter">Auto-schedule every 2 weeks</p>
              </div>
              <div class="w-12 h-6 rounded-full bg-lime/20 border border-lime/30 relative cursor-pointer">
                <div class="absolute right-1 top-1 w-4 h-4 bg-lime rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>

          <!-- Summary -->
          <div class="p-4 rounded-2xl border border-lime/30" style="background:rgba(181,255,71,0.06)">
            <p class="font-syne font-700 text-text-primary text-sm mb-3">Booking Summary</p>
            <div class="space-y-2">
              ${[
                ['Date', 'Tomorrow, Sep 5'],
                ['Time', '11 AM – 1 PM'],
                ['Type', 'Scheduled (Free)'],
                ['Location', 'Banjara Hills, Hyd'],
              ].map(([k,v]) => `
                <div class="flex justify-between">
                  <span class="text-muted text-xs font-inter">${k}</span>
                  <span class="text-text-primary text-xs font-inter font-600">${v}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <button onclick="nav('customer_home')" class="w-full py-4 rounded-2xl font-syne font-700 text-obsidian text-lg active:scale-95 transition-all"
            style="background:linear-gradient(135deg,#B5FF47 0%,#7DBF2A 100%);box-shadow:0 8px 32px rgba(181,255,71,0.3)">
            Confirm Booking
          </button>
        </div>
      </div>
    `
  },

  customer_impact: {
    label: 'Impact',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <div class="safe-top px-5 pb-4">
          <h2 class="font-syne font-800 text-2xl text-text-primary mb-1">Your Impact</h2>
          <p class="text-muted text-sm font-inter">Every kilo counts. Here's yours.</p>
        </div>

        <div class="flex-1 overflow-y-auto px-5 pb-24 space-y-4">
          <!-- Big hero number -->
          <div class="p-5 rounded-3xl relative overflow-hidden" style="background:linear-gradient(135deg,#0F2A0A 0%,#0A1A08 100%);border:1px solid rgba(181,255,71,0.2)">
            <div class="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div class="spin-slow w-full h-full flex items-center justify-center text-8xl">♻️</div>
            </div>
            <p class="text-muted text-xs font-inter uppercase tracking-wider mb-2">Total Scrap Recycled</p>
            <p class="font-syne font-800 text-6xl text-lime mb-1">47.2 <span class="text-2xl font-600">kg</span></p>
            <p class="text-muted text-sm font-inter">Since joining SellKabad · 18 pickups</p>
            <div class="mt-4 grid grid-cols-2 gap-3">
              <div class="p-3 rounded-2xl bg-obsidian/50">
                <p class="text-lime font-syne font-700 text-xl">₹1,840</p>
                <p class="text-muted text-xs font-inter">Total earned</p>
              </div>
              <div class="p-3 rounded-2xl bg-obsidian/50">
                <p class="text-lime font-syne font-700 text-xl">38.4 kg</p>
                <p class="text-muted text-xs font-inter">CO₂ offset</p>
              </div>
            </div>
          </div>

          <!-- ScrapCoins -->
          <div class="p-4 rounded-2xl border border-rust/30 flex items-center gap-4" style="background:rgba(255,107,53,0.08)">
            <div class="w-14 h-14 rounded-2xl bg-rust/20 flex items-center justify-center text-3xl">🪙</div>
            <div class="flex-1">
              <p class="font-syne font-700 text-text-primary">ScrapCoins</p>
              <p class="font-syne font-800 text-rust text-2xl">2,340 <span class="text-sm font-400 text-muted">coins</span></p>
              <p class="text-muted text-xs font-inter">≈ ₹234 value · Redeem for rewards</p>
            </div>
            <button class="px-3 py-2 rounded-xl font-syne font-700 text-xs text-obsidian" style="background:#FF6B35">Redeem</button>
          </div>

          <!-- Material breakdown -->
          <div>
            <p class="font-syne font-700 text-text-primary text-sm mb-3">By Material</p>
            <div class="space-y-3">
              ${[
                {icon:'🔩', label:'Iron & Steel', kg:18.4, pct:0.39, col:'#B5FF47'},
                {icon:'🧴', label:'Plastics', kg:12.1, pct:0.26, col:'#4A7B5B'},
                {icon:'📰', label:'Paper', kg:9.8, pct:0.21, col:'#FF6B35'},
                {icon:'📱', label:'E-Waste', kg:4.6, pct:0.10, col:'#6B7F70'},
                {icon:'🔋', label:'Battery', kg:2.3, pct:0.05, col:'#2D4D38'},
              ].map(m => `
                <div class="flex items-center gap-3">
                  <span class="text-base w-6 text-center">${m.icon}</span>
                  <div class="flex-1">
                    <div class="flex justify-between mb-1">
                      <span class="text-text-secondary text-xs font-inter">${m.label}</span>
                      <span class="text-text-primary text-xs font-inter font-600">${m.kg} kg</span>
                    </div>
                    <div class="h-2 rounded-full bg-card-bg overflow-hidden">
                      <div class="h-full rounded-full score-bar" style="width:${m.pct*100}%;background:${m.col}"></div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Environmental equivalents -->
          <div>
            <p class="font-syne font-700 text-text-primary text-sm mb-3">Environmental Impact</p>
            <div class="grid grid-cols-2 gap-3">
              ${[
                {icon:'🌳', val:'3.2', unit:'trees saved'},
                {icon:'💧', val:'1,840', unit:'liters water saved'},
                {icon:'⚡', val:'124', unit:'kWh energy saved'},
                {icon:'🚗', val:'48', unit:'km of car emissions'},
              ].map(e => `
                <div class="p-4 rounded-2xl bg-card-bg border border-card-border text-center">
                  <p class="text-3xl mb-2">${e.icon}</p>
                  <p class="font-syne font-800 text-text-primary text-xl">${e.val}</p>
                  <p class="text-muted text-xs font-inter">${e.unit}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Journey of last pickup -->
          <div class="p-4 rounded-2xl bg-card-bg border border-card-border">
            <p class="font-syne font-700 text-text-primary text-sm mb-3">🔍 Journey of Your Last Pickup</p>
            <div class="space-y-3">
              ${[
                {dot:'#B5FF47', label:'Collected from you', sub:'Sep 2 · Banjara Hills', done:true},
                {dot:'#B5FF47', label:'Sorted by Ravi Scrap Works', sub:'Sep 2 · Begumpet Yard', done:true},
                {dot:'#B5FF47', label:'Delivered to EcoRecycle Hyd', sub:'Sep 3 · Uppal Industrial Area', done:true},
                {dot:'#4A7B5B', label:'Processing into raw material', sub:'In progress', done:false},
              ].map((j, i, arr) => `
                <div class="flex gap-3">
                  <div class="flex flex-col items-center">
                    <div class="w-3 h-3 rounded-full mt-0.5 border-2 ${j.done ? '' : 'border-sage-dim'}" style="${j.done ? 'background:'+j.dot : 'background:#0A0F0D'}"></div>
                    ${i < arr.length-1 ? `<div class="w-px flex-1 mt-1 ${j.done ? 'bg-lime/30' : 'bg-card-border'}"></div>` : ''}
                  </div>
                  <div class="pb-4">
                    <p class="text-text-secondary text-xs font-inter font-600">${j.label}</p>
                    <p class="text-muted text-xs font-inter">${j.sub}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        ${bottomNav('customer', 'impact')}
      </div>
    `
  },

  // ─────────────────────────────────────────────────────
  // VENDOR SCREENS
  // ─────────────────────────────────────────────────────

  vendor_home: {
    label: 'Vendor Home',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <div class="safe-top px-5 pb-4">
          <div class="flex items-center justify-between mb-4">
            <div>
              <div class="flex items-center gap-2 mb-0.5">
                <span class="text-xs px-2 py-0.5 rounded-md font-inter font-600" style="background:rgba(181,255,71,0.15);color:#B5FF47">🥈 SILVER VENDOR</span>
              </div>
              <h2 class="font-syne font-700 text-text-primary text-xl">Ravi Scrap Works</h2>
            </div>
            <div class="text-right">
              <p class="text-muted text-xs font-inter">Today's earnings</p>
              <p class="font-syne font-800 text-lime text-2xl">₹3,240</p>
            </div>
          </div>

          <!-- Vendor Score -->
          <div class="p-4 rounded-2xl bg-card-bg border border-card-border mb-4">
            <div class="flex items-center justify-between mb-3">
              <p class="font-syne font-700 text-text-primary text-sm">Vendor Score™</p>
              <p class="font-syne font-800 text-lime text-xl">4.9 / 5.0</p>
            </div>
            <div class="space-y-2">
              ${[
                {label:'Response Rate', val:0.97, pct:'97%'},
                {label:'Pickup SLA', val:0.94, pct:'94%'},
                {label:'Customer Rating', val:0.98, pct:'4.9/5'},
                {label:'Dispute-free Rate', val:0.99, pct:'99%'},
              ].map(s => `
                <div class="flex items-center gap-3">
                  <span class="text-muted text-xs font-inter w-28">${s.label}</span>
                  <div class="flex-1 h-1.5 rounded-full bg-obsidian overflow-hidden">
                    <div class="h-full rounded-full score-bar bg-lime" style="width:${s.val*100}%"></div>
                  </div>
                  <span class="text-lime text-xs font-inter font-600 w-8 text-right">${s.pct}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Status toggle -->
          <div class="flex items-center justify-between p-3 rounded-2xl bg-card-bg border border-lime/30">
            <div>
              <p class="font-syne font-600 text-text-primary text-sm">Accepting Pickups</p>
              <p class="text-muted text-xs font-inter">You're currently online</p>
            </div>
            <div class="w-14 h-7 rounded-full bg-lime/20 border border-lime/50 relative cursor-pointer">
              <div class="absolute right-1 top-1 w-5 h-5 bg-lime rounded-full shadow-sm transition-all"></div>
            </div>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto px-5 pb-24 space-y-4">
          <!-- Incoming Bids -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-syne font-700 text-text-primary">New Listings Nearby</h3>
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 bg-rust rounded-full pulse-dot"></span>
                <span class="text-rust text-xs font-inter">8 near you</span>
              </div>
            </div>
            ${[
              {type:'Mixed Metal', weight:'~8kg', loc:'Banjara Hills', dist:'0.9km', bids:3, value:'~₹280', urgency:true},
              {type:'Paper & Cardboard', weight:'~15kg', loc:'Jubilee Hills', dist:'1.4km', bids:1, value:'~₹180', urgency:false},
              {type:'E-Waste', weight:'~3kg', loc:'Madhapur', dist:'2.0km', bids:5, value:'~₹255', urgency:false},
            ].map(l => `
              <div class="p-4 rounded-2xl bg-card-bg border ${l.urgency ? 'border-rust/30' : 'border-card-border'} mb-2 cursor-pointer active:scale-95 transition-all" onclick="nav('vendor_bid')">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    ${l.urgency ? '<span class="text-xs px-1.5 py-0.5 rounded-md font-inter" style="background:rgba(255,107,53,0.15);color:#FF6B35">⚡ Express</span>' : ''}
                    <span class="text-muted text-xs font-inter">${l.bids} vendor${l.bids>1?'s':''} bidding</span>
                  </div>
                  <span class="text-muted text-xs font-inter">${l.dist}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-sage-dim/50 flex items-center justify-center text-lg">📦</div>
                  <div class="flex-1">
                    <p class="font-syne font-600 text-text-primary text-sm">${l.type}</p>
                    <p class="text-muted text-xs font-inter">${l.weight} · ${l.loc}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-lime font-syne font-700">${l.value}</p>
                    <button class="mt-1 px-3 py-1 rounded-lg text-xs font-syne font-600 text-obsidian" style="background:#B5FF47">Bid</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Active Jobs -->
          <div>
            <h3 class="font-syne font-700 text-text-primary mb-3">Active Jobs (2)</h3>
            ${[
              {name:'Arjun Sharma', type:'Mixed Scrap', status:'En Route', eta:'18 min', addr:'Banjara Hills', amount:'₹228'},
              {name:'Priya Reddy', type:'Paper Bundle', status:'Accepted', eta:'1.5 hrs', addr:'Madhapur', amount:'₹135'},
            ].map(j => `
              <div class="p-4 rounded-2xl bg-card-bg border border-card-border mb-2">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs px-2 py-0.5 rounded-lg font-inter font-600 ${j.status==='En Route' ? 'bg-lime/15 text-lime' : 'bg-sage-dim/50 text-sage'}">${j.status}</span>
                  <span class="text-muted text-xs font-inter">ETA: ${j.eta}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center font-syne font-700 text-obsidian text-sm" style="background:linear-gradient(135deg,#B5FF47,#7DBF2A)">${j.name[0]}</div>
                  <div class="flex-1">
                    <p class="font-syne font-600 text-text-primary text-sm">${j.name}</p>
                    <p class="text-muted text-xs font-inter">${j.type} · ${j.addr}</p>
                  </div>
                  <p class="font-syne font-700 text-lime">${j.amount}</p>
                </div>
                <button class="mt-3 w-full py-2.5 rounded-xl border border-lime/30 text-lime text-xs font-syne font-600 active:scale-95 transition-all">Navigate → Open in Maps</button>
              </div>
            `).join('')}
          </div>

          <!-- Stats Row -->
          <div class="grid grid-cols-3 gap-2">
            ${[
              {val:'18', label:'Today\'s Jobs', icon:'📦'},
              {val:'4.9⭐', label:'Avg Rating', icon:'⭐'},
              {val:'₹12.4k', label:'This Week', icon:'💰'},
            ].map(s => `
              <div class="p-3 rounded-2xl bg-card-bg border border-card-border text-center">
                <p class="text-2xl mb-1">${s.icon}</p>
                <p class="font-syne font-700 text-text-primary text-sm">${s.val}</p>
                <p class="text-muted text-xs font-inter">${s.label}</p>
              </div>
            `).join('')}
          </div>
        </div>

        ${bottomNav('vendor', 'home')}
      </div>
    `
  },

  vendor_bid: {
    label: 'Place Bid',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <div class="safe-top px-5 pb-4">
          <div class="flex items-center gap-3 mb-5">
            <button onclick="nav('vendor_home')" class="w-9 h-9 rounded-xl bg-card-bg border border-card-border flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="#F0F7F2" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div>
              <h2 class="font-syne font-700 text-text-primary text-xl">Place Your Bid</h2>
              <p class="text-muted text-xs font-inter">3 other vendors competing</p>
            </div>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto px-5 pb-24 space-y-4 slide-in">
          <!-- Listing details -->
          <div class="p-4 rounded-2xl bg-card-bg border border-card-border">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 rounded-xl bg-sage-dim/50 flex items-center justify-center text-xl">🔩</div>
              <div>
                <p class="font-syne font-700 text-text-primary">Mixed Metal Scrap</p>
                <p class="text-muted text-xs font-inter">Banjara Hills · 0.9 km from you</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2">
              ${[
                ['~8 kg', 'Est. Weight'],
                ['Iron + Steel', 'Type'],
                ['3 photos', 'Evidence'],
              ].map(([v, l]) => `
                <div class="p-2 rounded-xl bg-obsidian text-center">
                  <p class="text-text-primary text-xs font-inter font-600">${v}</p>
                  <p class="text-muted text-xs font-inter" style="font-size:10px">${l}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Photos preview -->
          <div>
            <p class="font-syne font-600 text-text-primary text-sm mb-2">Listing Photos</p>
            <div class="flex gap-2">
              ${['🔩','⚙️','🗜️'].map((icon, i) => `
                <div class="w-20 h-20 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-3xl">${icon}</div>
              `).join('')}
              <div class="w-20 h-20 rounded-xl bg-card-bg border border-dashed border-card-border flex items-center justify-center text-muted text-xs font-inter text-center px-1">+2 more</div>
            </div>
          </div>

          <!-- Price input -->
          <div class="p-4 rounded-2xl border border-lime/30" style="background:rgba(181,255,71,0.06)">
            <div class="flex items-center justify-between mb-2">
              <p class="font-syne font-700 text-text-primary text-sm">Your Price per kg</p>
              <div class="flex items-center gap-1 text-muted text-xs font-inter">
                <span>Market: ₹28/kg</span>
              </div>
            </div>
            <div class="flex items-center gap-3 mb-3">
              <button class="w-10 h-10 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-text-primary text-xl font-700">−</button>
              <div class="flex-1 text-center">
                <p class="font-syne font-800 text-lime text-5xl">₹36</p>
                <p class="text-muted text-xs font-inter">per kilogram</p>
              </div>
              <button class="w-10 h-10 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-text-primary text-xl font-700">+</button>
            </div>
            <div class="p-3 rounded-xl bg-obsidian flex justify-between">
              <span class="text-muted text-sm font-inter">Estimated payout</span>
              <span class="text-lime font-syne font-700 text-lg">~₹288</span>
            </div>
            <div class="p-3 rounded-xl bg-obsidian flex justify-between mt-2">
              <span class="text-muted text-sm font-inter">Platform fee (10%)</span>
              <span class="text-rust font-inter text-sm">−₹28.8</span>
            </div>
            <div class="p-3 rounded-xl bg-obsidian flex justify-between mt-2">
              <span class="text-muted text-sm font-inter font-600">Net to you</span>
              <span class="text-lime font-syne font-700 text-xl">₹259.2</span>
            </div>
          </div>

          <!-- ETA input -->
          <div>
            <p class="font-syne font-600 text-text-primary text-sm mb-3">Can you reach in...</p>
            <div class="grid grid-cols-4 gap-2">
              ${['15 min','30 min','45 min','60 min'].map((t, i) => `
                <div class="p-2 rounded-xl border cursor-pointer text-center transition-all ${i===1 ? 'border-lime bg-lime/10 text-lime' : 'border-card-border bg-card-bg text-muted'}">
                  <p class="font-inter text-xs font-600">${t}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Services offered -->
          <div>
            <p class="font-syne font-600 text-text-primary text-sm mb-3">Services Included</p>
            <div class="space-y-2">
              ${[
                {label:'Free doorstep collection', on:true},
                {label:'Digital weighing + receipt', on:true},
                {label:'Stairs assistance (no extra charge)', on:true},
                {label:'Bulk bag provided', on:false},
              ].map(s => `
                <div class="flex items-center gap-3 p-3 rounded-xl bg-card-bg border border-card-border">
                  <div class="w-5 h-5 rounded-md flex items-center justify-center ${s.on ? 'bg-lime' : 'bg-obsidian border border-card-border'}">
                    ${s.on ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#0A0F0D" stroke-width="3" stroke-linecap="round"/></svg>' : ''}
                  </div>
                  <span class="text-sm font-inter ${s.on ? 'text-text-primary' : 'text-muted'}">${s.label}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <button onclick="nav('vendor_home')" class="w-full py-4 rounded-2xl font-syne font-700 text-obsidian text-lg active:scale-95 transition-all"
            style="background:linear-gradient(135deg,#B5FF47 0%,#7DBF2A 100%);box-shadow:0 8px 32px rgba(181,255,71,0.3)">
            🏷️ Submit Bid — ₹36/kg
          </button>
          <p class="text-center text-muted text-xs font-inter pb-4">You'll be notified instantly if customer accepts your bid</p>
        </div>

        ${bottomNav('vendor', 'bid')}
      </div>
    `
  },

  vendor_earnings: {
    label: 'Earnings',
    render: () => `
      <div class="flex flex-col h-full bg-obsidian">
        <div class="safe-top px-5 pb-4">
          <h2 class="font-syne font-800 text-2xl text-text-primary mb-1">Earnings</h2>
          <p class="text-muted text-sm font-inter">Your business intelligence dashboard</p>
        </div>

        <div class="flex-1 overflow-y-auto px-5 pb-24 space-y-4">
          <!-- Period switcher -->
          <div class="flex gap-1 p-1 rounded-xl bg-card-bg border border-card-border">
            ${['Day','Week','Month'].map((p, i) => `
              <button class="flex-1 py-1.5 rounded-lg font-syne font-600 text-sm transition-all ${i===1 ? 'bg-lime text-obsidian' : 'text-muted'}">${p}</button>
            `).join('')}
          </div>

          <!-- Earnings hero -->
          <div class="p-5 rounded-3xl relative overflow-hidden" style="background:linear-gradient(135deg,#0A2010 0%,#0A1A08 100%);border:1px solid rgba(181,255,71,0.2)">
            <p class="text-muted text-xs font-inter uppercase tracking-wider mb-1">This Week</p>
            <p class="font-syne font-800 text-5xl text-lime mb-1">₹12,480</p>
            <p class="text-sage text-sm font-inter">↑ 18% vs last week (₹10,570)</p>
            <div class="mt-4 grid grid-cols-3 gap-3">
              ${[
                ['24', 'Pickups'],
                ['4.9⭐', 'Avg Rating'],
                ['142 kg', 'Collected'],
              ].map(([v,l]) => `
                <div class="p-2.5 rounded-xl bg-obsidian/60 text-center">
                  <p class="font-syne font-700 text-text-primary text-sm">${v}</p>
                  <p class="text-muted text-xs font-inter">${l}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bar chart (ASCII-style bars) -->
          <div class="p-4 rounded-2xl bg-card-bg border border-card-border">
            <p class="font-syne font-700 text-text-primary text-sm mb-4">Daily Breakdown</p>
            <div class="flex items-end gap-2 h-28 mb-2">
              ${[
                {day:'Mon', val:1840, h:55},
                {day:'Tue', val:2100, h:63},
                {day:'Wed', val:1560, h:47},
                {day:'Thu', val:2480, h:74},
                {day:'Fri', val:1920, h:57},
                {day:'Sat', val:3240, h:97},
                {day:'Sun', val:0, h:0},
              ].map((d, i) => `
                <div class="flex-1 flex flex-col items-center gap-1">
                  <div class="w-full rounded-t-lg transition-all" style="height:${d.h}%;background:${i===5 ? 'linear-gradient(180deg,#B5FF47,#7DBF2A)' : '#1C2420'};min-height:4px"></div>
                  <span class="text-muted text-xs font-inter" style="font-size:9px">${d.day}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Top materials -->
          <div>
            <p class="font-syne font-700 text-text-primary text-sm mb-3">Top Materials This Week</p>
            <div class="space-y-2">
              ${[
                {icon:'🔩', label:'Iron & Steel', kg:58.2, revenue:1723, pct:0.82},
                {icon:'🧴', label:'Plastics', kg:34.6, revenue:692, pct:0.52},
                {icon:'📰', label:'Paper', kg:29.4, revenue:353, pct:0.44},
                {icon:'📱', label:'E-Waste', kg:12.1, revenue:1028, pct:0.30},
              ].map(m => `
                <div class="flex items-center gap-3 p-3 rounded-xl bg-card-bg border border-card-border">
                  <span class="text-xl">${m.icon}</span>
                  <div class="flex-1">
                    <div class="flex justify-between mb-1">
                      <span class="text-text-secondary text-xs font-inter">${m.label} · ${m.kg}kg</span>
                      <span class="text-lime text-xs font-inter font-600">₹${m.revenue}</span>
                    </div>
                    <div class="h-1.5 rounded-full bg-obsidian overflow-hidden">
                      <div class="h-full rounded-full bg-lime score-bar" style="width:${m.pct*100}%"></div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Tier progress -->
          <div class="p-4 rounded-2xl border border-lime/30" style="background:rgba(181,255,71,0.06)">
            <div class="flex items-center justify-between mb-3">
              <div>
                <p class="font-syne font-700 text-text-primary text-sm">🥈 Silver Vendor</p>
                <p class="text-muted text-xs font-inter">820 more points to Gold</p>
              </div>
              <span class="text-lime font-syne font-700">🥇 Gold</span>
            </div>
            <div class="h-2 rounded-full bg-obsidian overflow-hidden">
              <div class="h-full rounded-full score-bar" style="width:62%;background:linear-gradient(90deg,#B5FF47,#7DBF2A)"></div>
            </div>
            <p class="text-muted text-xs font-inter mt-2">Gold unlocks: 8% commission (vs 10%) + Priority listing + Advanced analytics</p>
          </div>
        </div>

        ${bottomNav('vendor', 'earnings')}
      </div>
    `
  },
};

// ── Helpers ──────────────────────────────────────────

function bottomNav(mode, active) {
  const custNav = [
    {id:'home', icon:'🏠', label:'Home', screen:'customer_home'},
    {id:'list', icon:'📦', label:'Sell', screen:'customer_list'},
    {id:'schedule', icon:'📅', label:'Schedule', screen:'customer_schedule'},
    {id:'impact', icon:'🌿', label:'Impact', screen:'customer_impact'},
  ];
  const vendNav = [
    {id:'home', icon:'🏠', label:'Home', screen:'vendor_home'},
    {id:'bid', icon:'🏷️', label:'Bid', screen:'vendor_bid'},
    {id:'earnings', icon:'📊', label:'Earnings', screen:'vendor_earnings'},
    {id:'profile', icon:'👤', label:'Profile', screen:'vendor_home'},
  ];
  const items = mode === 'customer' ? custNav : vendNav;
  return `
    <div class="absolute bottom-0 left-0 right-0 z-40" style="background:linear-gradient(180deg,transparent 0%,#0A0F0D 30%);backdrop-filter:blur(16px)">
      <div class="flex items-center justify-around px-4 pt-2 pb-8 border-t border-card-border bg-obsidian/90">
        ${items.map(item => `
          <button onclick="nav('${item.screen}')"
            class="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all active:scale-95 ${item.id === active ? 'text-lime' : 'text-muted'}">
            <span class="text-xl">${item.icon}</span>
            <span class="text-xs font-inter font-500">${item.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}
