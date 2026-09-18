// Pathway - Modern Luxury & Boutique Travel Experience
// Application State & Interactive Features

const APP_STATE = {
  currency: 'USD',
  currencyRates: {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
  },
  activeDestinationFilter: 'all',
  activePackageFilter: 'all',
  searchQuery: '',
  searchRegion: 'all',
  searchSeason: 'all',
  wishlist: new Set(),
  activeLightboxIndex: 0,
  planner: {
    destination: 'Dolomites, Italy',
    days: 6,
    travelers: 2,
    tier: 'boutique', // eco, boutique, luxury
    addons: {
      guide: true,
      transfer: true,
      gourmet: false,
      carbon: true,
    },
  },
};

const DESTINATIONS = [
  {
    id: 'banff',
    name: 'Banff National Park',
    country: 'Canada',
    region: 'americas',
    style: 'Alpine',
    image: '/assets/destination-1.jpg',
    basePrice: 280,
    rating: 4.9,
    reviews: 182,
    season: 'Jun – Oct',
    elevation: '1,383 m',
    tag: 'Canadian Rockies',
    description: 'Towering limestone pinnacles reflecting over turquoise glacial waters. Experience Lake Louise, wildlife safaris, and secluded alpine lodges.',
    itinerary: [
      { day: 1, title: 'Arrival in Calgary & Transfer to Bow Valley', desc: 'Private luxury coach transfer into the heart of Banff. Welcome alpine dinner overlooking Cascade Mountain.' },
      { day: 2, title: 'Lake Louise & Moraine Glacial Kayak', desc: 'Early sunrise canoe excursion across glassy turquoise waters followed by a guided traverse along Plain of Six Glaciers.' },
      { day: 3, title: 'Icefields Parkway & Glacier Walk', desc: 'Traverse one of the world\'s most scenic highways and step onto the ancient Athabasca Glacier.' },
    ],
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu Citadel',
    country: 'Peru',
    region: 'americas',
    style: 'Cultural',
    image: '/assets/destination-2.jpg',
    basePrice: 320,
    rating: 4.95,
    reviews: 240,
    season: 'May – Sep',
    elevation: '2,430 m',
    tag: 'Ancient Inca Trail',
    description: 'Enigmatic 15th-century stone terraces enveloped in subtropical Andean cloud forests. Walk in the footprints of ancient Andean astronomers.',
    itinerary: [
      { day: 1, title: 'Cusco Acclimatization & Sacred Valley', desc: 'Explore historic Incan plazas and colonial artisan streets in San Blas. Artisanal weaving workshop in Pisac.' },
      { day: 2, title: 'Vistadome Rail through Urubamba Canyon', desc: 'Panoramic scenic train alongside roaring Urubamba River arriving in Aguas Calientes for hot spring relaxation.' },
      { day: 3, title: 'Sunrise Ascent to the Lost Citadel', desc: 'Private guided exploration through the Temple of the Sun, Intihuatana stone, and panoramic hike up Huayna Picchu.' },
    ],
  },
  {
    id: 'lauterbrunnen',
    name: 'Lauterbrunnen Valley',
    country: 'Switzerland',
    region: 'europe',
    style: 'Alpine',
    image: '/assets/destination-3.jpg',
    basePrice: 390,
    rating: 4.92,
    reviews: 194,
    season: 'May – Oct',
    elevation: '795 m',
    tag: 'Valley of 72 Waterfalls',
    description: 'Sheer vertical cliffs plunging into lush emerald pastures with mist-shrouded Staubbach Falls and snowcapped Jungfrau peaks.',
    itinerary: [
      { day: 1, title: 'Arrival via Interlaken & Valley Walk', desc: 'Traditional wooden chalet check-in and sunset stroll past the roaring 300-meter Staubbach Falls.' },
      { day: 2, title: 'Trümmelbach Chasm & Mürren Clifftop', desc: 'Explore subterranean glacial waterfalls carved inside limestone mountains, then cable car to the car-free village of Mürren.' },
      { day: 3, title: 'Jungfraujoch – Top of Europe', desc: 'Cogwheel railway ascent through the Eiger north face up to Europe\'s highest railway station overlooking Aletsch Glacier.' },
    ],
  },
  {
    id: 'zhangjiajie',
    name: 'Zhangjiajie National Forest',
    country: 'China',
    region: 'asia',
    style: 'Nature',
    image: '/assets/destination-4.jpg',
    basePrice: 260,
    rating: 4.85,
    reviews: 143,
    season: 'Apr – Nov',
    elevation: '1,080 m',
    tag: 'Avatar Hallelujah Pillars',
    description: 'Over 3,000 quartzite sandstone pillars rising through sea of morning clouds, lush subtropical forest gorges, and glass bridges.',
    itinerary: [
      { day: 1, title: 'Yuanjiajie & The Floating Mountains', desc: 'Bailong elevator ride up the vertical cliff face into the ethereal pillar peaks that inspired the world of Pandora.' },
      { day: 2, title: 'Golden Whip Stream & Eco Gorge Trek', desc: 'Serene riverside walk through shaded valleys accompanied by native wildlife and karst rock spires.' },
      { day: 3, title: 'Tianmen Mountain & Heaven\'s Gate', desc: 'Ride the world\'s longest cable car over dramatic peaks to walk the legendary cliffside glass skywalk.' },
    ],
  },
];

const PACKAGES = [
  {
    id: 'trip-germany',
    title: 'Wasserwerk Frelberg & Saxon Forest Heritage',
    location: 'Saxony, Germany',
    days: '5 Days / 4 Nights',
    style: 'cultural',
    image: '/assets/trip-1.jpg',
    basePrice: 300,
    rating: 4.8,
    reviews: 94,
    difficulty: 'Easy to Moderate',
    groupSize: 'Max 10 Travelers',
    inclusions: [
      'Boutique historical timber lodge',
      'Certified Saxon cultural historian guide',
      'Artisanal breakfast & private transfers',
      'Curated woodland vineyard tasting',
    ],
  },
  {
    id: 'trip-patagonia',
    title: 'Patagonia Frontier: Fitz Roy & Glacial Trails',
    location: 'Argentina & Chile',
    days: '7 Days / 6 Nights',
    style: 'wilderness',
    image: '/assets/trip-2.jpg',
    basePrice: 450,
    rating: 4.96,
    reviews: 168,
    difficulty: 'Active Adventure',
    groupSize: 'Max 8 Travelers',
    inclusions: [
      'Panoramic eco-dome wilderness lodges',
      'UIAGM certified mountain leaders',
      'Crampons & ice expedition equipment',
      'All meals & national park expedition passes',
    ],
  },
  {
    id: 'trip-dolomites',
    title: 'The Dolomites Alpine High Route & Refugios',
    location: 'South Tyrol, Italy',
    days: '6 Days / 5 Nights',
    style: 'alpine',
    image: '/assets/trip-3.jpg',
    basePrice: 400,
    rating: 4.94,
    reviews: 215,
    difficulty: 'Moderate Trek',
    groupSize: 'Max 10 Travelers',
    inclusions: [
      'High-altitude alpine huts & boutique chalet',
      'Native Ladin mountain trekking guide',
      'Authentic multi-course Tyrolean mountain dinners',
      'Full valley pass & luggage forward transfers',
    ],
  },
];

const GALLERY_ITEMS = [
  {
    src: '/assets/gallery-1.jpg',
    title: 'Alpine Vista over Cortina',
    location: 'Italian Dolomites',
    caption: 'Sunset hues casting alpenglow across jagged dolomitic limestone ridges.',
  },
  {
    src: '/assets/gallery-2.jpg',
    title: 'Emerald Waters of Moraine',
    location: 'Banff, Canada',
    caption: 'Canoeing across untouched glacier melt beneath the Ten Peaks.',
  },
  {
    src: '/assets/gallery-3.jpg',
    title: 'The Mist of Staubbach Falls',
    location: 'Lauterbrunnen, Switzerland',
    caption: 'Morning sunbeam refracting through a 300m vertical mountain cascade.',
  },
  {
    src: '/assets/header-1.jpg',
    title: 'Highland Serenity',
    location: 'Patagonia Steppe',
    caption: 'Wide-open frontiers framed by legendary granite spires.',
  },
  {
    src: '/assets/header-2.jpg',
    title: 'Ancient Pathways',
    location: 'Sacred Valley, Peru',
    caption: 'Pre-Columbian stone stairways winding through cloud forest valleys.',
  },
];

// Currency Formatting Helper
function formatPrice(amountInUSD) {
  const current = APP_STATE.currencyRates[APP_STATE.currency] || APP_STATE.currencyRates.USD;
  const converted = Math.round(amountInUSD * current.rate);
  return `${current.symbol}${converted}`;
}

// Toast Notification System
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${
    type === 'success'
      ? 'bg-emerald-900/95 text-emerald-50 border-emerald-700'
      : 'bg-slate-900/95 text-slate-50 border-slate-700'
  }`;

  const icon = type === 'success' ? 'ri-checkbox-circle-fill text-emerald-400' : 'ri-information-fill text-amber-400';
  toast.innerHTML = `<i class="${icon} text-lg"></i><span>${message}</span>`;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Render Destinations
function renderDestinations() {
  const grid = document.getElementById('destinations-grid');
  if (!grid) return;

  const filtered = DESTINATIONS.filter((d) => {
    const matchesRegion = APP_STATE.activeDestinationFilter === 'all' || d.region === APP_STATE.activeDestinationFilter;
    const matchesQuery = !APP_STATE.searchQuery || d.name.toLowerCase().includes(APP_STATE.searchQuery.toLowerCase()) || d.country.toLowerCase().includes(APP_STATE.searchQuery.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200 p-8">
        <i class="ri-compass-3-line text-4xl text-slate-400 mb-2"></i>
        <h3 class="text-lg font-semibold text-slate-800">No destinations found</h3>
        <p class="text-slate-500 text-sm mt-1">Try adjusting your search filter or clear your search term.</p>
        <button id="reset-search-btn" class="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-full transition">Reset Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-search-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        APP_STATE.searchQuery = '';
        APP_STATE.activeDestinationFilter = 'all';
        updateFilterTabs();
        renderDestinations();
      });
    }
    return;
  }

  grid.innerHTML = filtered
    .map((dest) => {
      const isSaved = APP_STATE.wishlist.has(dest.id);
      return `
      <div class="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
        <div class="relative h-64 overflow-hidden img-zoom-container bg-slate-100">
          <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          
          <!-- Badges -->
          <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white">
            <i class="ri-calendar-line text-amber-400"></i>
            <span>${dest.season}</span>
          </div>

          <button class="wishlist-btn absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 transition shadow-sm" data-id="${dest.id}" aria-label="Save to Wishlist">
            <i class="${isSaved ? 'ri-heart-fill text-red-500' : 'ri-heart-line'} text-lg"></i>
          </button>

          <div class="absolute bottom-3 left-3 right-3 text-white">
            <span class="text-xs uppercase tracking-wider font-semibold text-amber-300">${dest.tag}</span>
            <h3 class="font-serif text-xl font-bold text-white tracking-tight">${dest.name}</h3>
            <p class="text-xs text-slate-200 flex items-center gap-1 mt-0.5">
              <i class="ri-map-pin-2-fill text-red-400"></i> ${dest.country} &bull; Alt: ${dest.elevation}
            </p>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <p class="text-slate-600 text-sm leading-relaxed line-clamp-2">${dest.description}</p>

          <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span class="text-xs text-slate-400 font-medium">Daily from</span>
              <p class="text-lg font-bold text-slate-900">${formatPrice(dest.basePrice)}<span class="text-xs font-normal text-slate-500"> /day</span></p>
            </div>

            <button class="view-itinerary-btn px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 transition shadow-sm" data-id="${dest.id}">
              <span>Itinerary</span>
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  // Attach event listeners
  grid.querySelectorAll('.wishlist-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      toggleWishlist(id);
    });
  });

  grid.querySelectorAll('.view-itinerary-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      openItineraryModal(id);
    });
  });
}

// Render Trip Packages
function renderPackages() {
  const container = document.getElementById('packages-grid');
  if (!container) return;

  const filtered = PACKAGES.filter((pkg) => {
    if (APP_STATE.activePackageFilter === 'all') return true;
    return pkg.style === APP_STATE.activePackageFilter;
  });

  container.innerHTML = filtered
    .map((pkg) => {
      return `
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
        <div class="relative h-60 overflow-hidden img-zoom-container bg-slate-100">
          <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          <div class="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-900 flex items-center gap-1 shadow-sm">
            <i class="ri-time-line text-amber-600"></i>
            <span>${pkg.days}</span>
          </div>

          <div class="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-amber-300 flex items-center gap-1">
            <i class="ri-star-fill text-amber-400"></i>
            <span>${pkg.rating}</span>
            <span class="text-slate-300 font-normal">(${pkg.reviews})</span>
          </div>

          <div class="absolute bottom-3 left-3 right-3 text-white">
            <p class="text-xs text-slate-200 flex items-center gap-1">
              <i class="ri-map-pin-2-fill text-red-400"></i> ${pkg.location}
            </p>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-xl font-bold text-slate-900 leading-snug tracking-tight mb-2">${pkg.title}</h3>
            
            <div class="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
              <span class="flex items-center gap-1"><i class="ri-flag-line text-slate-400"></i> ${pkg.difficulty}</span>
              <span class="flex items-center gap-1"><i class="ri-team-line text-slate-400"></i> ${pkg.groupSize}</span>
            </div>

            <ul class="space-y-1.5 mb-6 text-xs text-slate-600">
              ${pkg.inclusions
                .map(
                  (inc) => `
                <li class="flex items-start gap-2">
                  <i class="ri-check-line text-emerald-600 font-bold mt-0.5"></i>
                  <span>${inc}</span>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span class="text-xs text-slate-400">Starting from</span>
              <div class="text-2xl font-bold text-slate-900 leading-none mt-0.5">
                ${formatPrice(pkg.basePrice)}
                <span class="text-xs font-normal text-slate-500">/person</span>
              </div>
            </div>

            <button class="book-package-btn btn-primary text-xs !py-2.5 !px-5" data-id="${pkg.id}" data-title="${pkg.title}" data-price="${pkg.basePrice}">
              <i class="ri-suitcase-line"></i>
              <span>Book Journey</span>
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  container.querySelectorAll('.book-package-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const dataset = e.currentTarget.dataset;
      openBookingModal({
        title: dataset.title,
        basePrice: parseFloat(dataset.price),
        type: 'package',
      });
    });
  });
}

// Wishlist Management
function toggleWishlist(id) {
  const isCurrentlySaved = APP_STATE.wishlist.has(id);
  const dest = DESTINATIONS.find((d) => d.id === id);
  const name = dest ? dest.name : 'Trip';

  if (isCurrentlySaved) {
    APP_STATE.wishlist.delete(id);
    showToast(`Removed "${name}" from your saved journeys`);
  } else {
    APP_STATE.wishlist.add(id);
    showToast(`Saved "${name}" to your wishlist`, 'success');
  }

  updateWishlistUI();
  renderDestinations();
}

function updateWishlistUI() {
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach((b) => {
    b.textContent = APP_STATE.wishlist.size;
    if (APP_STATE.wishlist.size > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });

  const listContainer = document.getElementById('wishlist-items-container');
  if (!listContainer) return;

  if (APP_STATE.wishlist.size === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-16 px-4">
        <i class="ri-heart-line text-5xl text-slate-300"></i>
        <h4 class="text-base font-semibold text-slate-700 mt-3">Your wishlist is empty</h4>
        <p class="text-xs text-slate-500 max-w-xs mx-auto mt-1">Tap the heart icon on any destination or expedition to save it here for later planning.</p>
      </div>
    `;
    return;
  }

  const savedDestinations = DESTINATIONS.filter((d) => APP_STATE.wishlist.has(d.id));
  listContainer.innerHTML = savedDestinations
    .map(
      (dest) => `
    <div class="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition">
      <img src="${dest.image}" alt="${dest.name}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <h5 class="text-sm font-semibold text-slate-900 truncate">${dest.name}</h5>
        <p class="text-xs text-slate-500">${dest.country} &bull; ${formatPrice(dest.basePrice)}/day</p>
        <button class="remove-wishlist-item text-xs text-red-500 hover:text-red-700 font-medium mt-1" data-id="${dest.id}">Remove</button>
      </div>
      <button class="view-from-wishlist px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex-shrink-0" data-id="${dest.id}">
        Plan
      </button>
    </div>
  `
    )
    .join('');

  listContainer.querySelectorAll('.remove-wishlist-item').forEach((b) => {
    b.addEventListener('click', (e) => {
      toggleWishlist(e.currentTarget.dataset.id);
    });
  });

  listContainer.querySelectorAll('.view-from-wishlist').forEach((b) => {
    b.addEventListener('click', (e) => {
      toggleWishlistDrawer(false);
      openItineraryModal(e.currentTarget.dataset.id);
    });
  });
}

function toggleWishlistDrawer(isOpen) {
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('wishlist-backdrop');
  if (!drawer || !backdrop) return;

  if (isOpen) {
    backdrop.classList.remove('hidden');
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
    updateWishlistUI();
  } else {
    drawer.classList.add('translate-x-full');
    drawer.classList.remove('translate-x-0');
    setTimeout(() => backdrop.classList.add('hidden'), 250);
  }
}

// Destination Detail / Itinerary Modal
function openItineraryModal(id) {
  const dest = DESTINATIONS.find((d) => d.id === id);
  if (!dest) return;

  const modal = document.getElementById('itinerary-modal');
  const content = document.getElementById('itinerary-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="relative h-64 md:h-80 w-full overflow-hidden">
      <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      
      <button id="close-itinerary-modal" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition">
        <i class="ri-close-line text-xl"></i>
      </button>

      <div class="absolute bottom-6 left-6 right-6 text-white">
        <span class="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/90 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2">
          ${dest.style} Expedition
        </span>
        <h2 class="font-serif text-2xl md:text-4xl font-bold tracking-tight">${dest.name}</h2>
        <p class="text-sm text-slate-200 flex items-center gap-2 mt-1">
          <span><i class="ri-map-pin-2-fill text-red-400"></i> ${dest.country}</span> &bull;
          <span><i class="ri-calendar-line text-amber-400"></i> Prime Season: ${dest.season}</span> &bull;
          <span><i class="ri-compass-3-line text-sky-400"></i> Elevation: ${dest.elevation}</span>
        </p>
      </div>
    </div>

    <div class="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
      <div>
        <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400">Overview & Terrain</h4>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed mt-1">${dest.description}</p>
      </div>

      <div>
        <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Sample 3-Day Handcrafted Route</h4>
        <div class="space-y-4 border-l-2 border-slate-200 ml-2 pl-4">
          ${dest.itinerary
            .map(
              (step) => `
            <div class="relative">
              <span class="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-white"></span>
              <span class="text-xs font-bold text-amber-600 uppercase tracking-wide">Day ${step.day}</span>
              <h5 class="text-sm font-bold text-slate-900">${step.title}</h5>
              <p class="text-xs text-slate-600 mt-1 leading-relaxed">${step.desc}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="bg-amber-50 rounded-xl p-4 border border-amber-200 flex items-center justify-between">
        <div>
          <span class="text-xs text-amber-800 font-semibold uppercase">Daily All-Inclusive Estimate</span>
          <p class="text-xl font-bold text-slate-900">${formatPrice(dest.basePrice)} <span class="text-xs font-normal text-slate-600">/guest/day</span></p>
        </div>
        <button id="book-itinerary-btn" class="btn-primary text-xs !py-2.5 !px-5" data-id="${dest.id}" data-name="${dest.name}" data-price="${dest.basePrice}">
          <i class="ri-calendar-check-line"></i>
          <span>Customize Journey</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');

  document.getElementById('close-itinerary-modal')?.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  document.getElementById('book-itinerary-btn')?.addEventListener('click', (e) => {
    modal.classList.add('hidden');
    openBookingModal({
      title: dest.name,
      basePrice: dest.basePrice * 4,
      type: 'destination',
    });
  });
}

// Booking Modal Logic
function openBookingModal(data = {}) {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  const tripTitleElem = document.getElementById('booking-trip-title');
  const basePriceElem = document.getElementById('booking-base-price');
  const guestsInput = document.getElementById('booking-guests');
  const dateInput = document.getElementById('booking-date');

  const title = data.title || 'Custom Pathway Expedition';
  const basePrice = data.basePrice || 350;

  if (tripTitleElem) tripTitleElem.textContent = title;
  if (basePriceElem) basePriceElem.dataset.usd = basePrice;

  // Set default date to 14 days in future
  if (dateInput && !dateInput.value) {
    const future = new Date();
    future.setDate(future.getDate() + 14);
    dateInput.value = future.toISOString().split('T')[0];
  }

  updateBookingTotal();
  modal.classList.remove('hidden');
}

function updateBookingTotal() {
  const guests = parseInt(document.getElementById('booking-guests')?.value || 1, 10);
  const basePriceElem = document.getElementById('booking-base-price');
  const totalElem = document.getElementById('booking-total-price');
  const baseUSD = parseFloat(basePriceElem?.dataset.usd || 350);

  const totalUSD = baseUSD * guests;
  if (totalElem) {
    totalElem.textContent = formatPrice(totalUSD);
  }
}

// Interactive Trip Planner / Budget Calculator Engine
function initTripPlanner() {
  const destSelect = document.getElementById('planner-destination');
  const daysSlider = document.getElementById('planner-days-slider');
  const daysDisplay = document.getElementById('planner-days-display');
  const guestsSelect = document.getElementById('planner-guests');
  const tierInputs = document.querySelectorAll('input[name="planner-tier"]');
  const addonCheckboxes = document.querySelectorAll('.planner-addon-cb');

  function calculate() {
    const destValue = destSelect ? destSelect.value : 'banff';
    const dest = DESTINATIONS.find((d) => d.id === destValue) || DESTINATIONS[0];
    const days = parseInt(daysSlider?.value || 6, 10);
    const guests = parseInt(guestsSelect?.value || 2, 10);

    let tierMultiplier = 1;
    let tierName = 'Boutique Lodge';
    tierInputs.forEach((input) => {
      if (input.checked) {
        if (input.value === 'eco') {
          tierMultiplier = 0.85;
          tierName = 'Eco-Cabin';
        }
        if (input.value === 'boutique') {
          tierMultiplier = 1.0;
          tierName = 'Boutique Lodge';
        }
        if (input.value === 'luxury') {
          tierMultiplier = 1.45;
          tierName = 'Luxury Panoramic Suite';
        }
      }
    });

    let addonsDailyPerGuest = 0;
    addonCheckboxes.forEach((cb) => {
      if (cb.checked) {
        addonsDailyPerGuest += parseFloat(cb.dataset.cost || 0);
      }
    });

    if (daysDisplay) daysDisplay.textContent = `${days} Days`;

    // Base cost calculation
    const dailyBasePerGuest = dest.basePrice * tierMultiplier + addonsDailyPerGuest;
    const subtotalUSD = dailyBasePerGuest * days * guests;
    const groupDiscount = guests >= 4 ? 0.1 : 0; // 10% discount for groups of 4+
    const finalTotalUSD = Math.round(subtotalUSD * (1 - groupDiscount));

    // Update displays
    document.getElementById('planner-calc-daily')?.replaceChildren(document.createTextNode(`${formatPrice(Math.round(dailyBasePerGuest))}/guest`));
    document.getElementById('planner-calc-days')?.replaceChildren(document.createTextNode(`${days} nights`));
    document.getElementById('planner-calc-guests')?.replaceChildren(document.createTextNode(`${guests} travelers`));
    document.getElementById('planner-calc-tier')?.replaceChildren(document.createTextNode(tierName));
    document.getElementById('planner-calc-total')?.replaceChildren(document.createTextNode(formatPrice(finalTotalUSD)));

    const discountRow = document.getElementById('planner-calc-discount-row');
    if (discountRow) {
      if (groupDiscount > 0) {
        discountRow.classList.remove('hidden');
        document.getElementById('planner-calc-discount')?.replaceChildren(document.createTextNode(`-${formatPrice(Math.round(subtotalUSD * groupDiscount))}`));
      } else {
        discountRow.classList.add('hidden');
      }
    }

    APP_STATE.planner = {
      destination: dest.name,
      days,
      guests,
      tier: tierName,
      totalUSD: finalTotalUSD,
    };
  }

  destSelect?.addEventListener('change', calculate);
  daysSlider?.addEventListener('input', calculate);
  guestsSelect?.addEventListener('change', calculate);
  tierInputs.forEach((i) => i.addEventListener('change', calculate));
  addonCheckboxes.forEach((cb) => cb.addEventListener('change', calculate));

  document.getElementById('planner-book-btn')?.addEventListener('click', () => {
    openBookingModal({
      title: `${APP_STATE.planner.destination} (${APP_STATE.planner.days} Days - ${APP_STATE.planner.tier})`,
      basePrice: Math.round(APP_STATE.planner.totalUSD / APP_STATE.planner.guests),
      type: 'custom-planner',
    });
  });

  calculate();
}

// Lightbox Gallery
function openLightbox(index) {
  APP_STATE.activeLightboxIndex = index;
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const location = document.getElementById('lightbox-location');
  const caption = document.getElementById('lightbox-caption');

  if (!modal || !img) return;

  const item = GALLERY_ITEMS[index];
  img.src = item.src;
  img.alt = item.title;
  if (title) title.textContent = item.title;
  if (location) location.textContent = item.location;
  if (caption) caption.textContent = item.caption;

  modal.classList.remove('hidden');
}

function updateFilterTabs() {
  document.querySelectorAll('.dest-filter-tab').forEach((tab) => {
    const filter = tab.dataset.filter;
    if (filter === APP_STATE.activeDestinationFilter) {
      tab.className = 'dest-filter-tab px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-sm transition';
    } else {
      tab.className = 'dest-filter-tab px-4 py-2 rounded-full text-xs font-semibold bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition';
    }
  });
}

// Initialization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Currency Switcher
  const currencySelect = document.getElementById('currency-selector');
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      APP_STATE.currency = e.target.value;
      renderDestinations();
      renderPackages();
      initTripPlanner();
      updateWishlistUI();
      showToast(`Currency updated to ${APP_STATE.currency}`);
    });
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenu = document.getElementById('close-mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
    closeMobileMenu?.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // 3. Wishlist Drawer Handlers
  document.getElementById('wishlist-btn')?.addEventListener('click', () => toggleWishlistDrawer(true));
  document.getElementById('close-wishlist')?.addEventListener('click', () => toggleWishlistDrawer(false));
  document.getElementById('wishlist-backdrop')?.addEventListener('click', () => toggleWishlistDrawer(false));

  // 4. Hero Search Bar
  const searchInput = document.getElementById('hero-search-input');
  const searchRegionSelect = document.getElementById('hero-region-select');
  const searchBtn = document.getElementById('hero-search-btn');

  function handleSearch() {
    if (searchInput) APP_STATE.searchQuery = searchInput.value.trim();
    if (searchRegionSelect) APP_STATE.activeDestinationFilter = searchRegionSelect.value;
    updateFilterTabs();
    renderDestinations();

    const destSection = document.getElementById('destinations');
    if (destSection) {
      destSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  searchBtn?.addEventListener('click', handleSearch);
  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  // 5. Destination Region Filter Tabs
  document.querySelectorAll('.dest-filter-tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      APP_STATE.activeDestinationFilter = e.currentTarget.dataset.filter;
      updateFilterTabs();
      renderDestinations();
    });
  });

  // 6. Package Filter Tabs
  document.querySelectorAll('.package-filter-tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      APP_STATE.activePackageFilter = e.currentTarget.dataset.filter;
      document.querySelectorAll('.package-filter-tab').forEach((t) => {
        if (t === e.currentTarget) {
          t.className = 'package-filter-tab px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-sm transition';
        } else {
          t.className = 'package-filter-tab px-4 py-2 rounded-full text-xs font-semibold bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition';
        }
      });
      renderPackages();
    });
  });

  // 7. Modals: Booking Form Submissions
  const bookingForm = document.getElementById('booking-form');
  const bookingModal = document.getElementById('booking-modal');
  const closeBookingBtn = document.getElementById('close-booking-modal');

  closeBookingBtn?.addEventListener('click', () => {
    bookingModal?.classList.add('hidden');
  });

  document.getElementById('booking-guests')?.addEventListener('input', updateBookingTotal);

  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = `PW-${Math.floor(1000 + Math.random() * 9000)}`;
    bookingModal?.classList.add('hidden');

    // Show Confirmation Dialog
    const confirmModal = document.getElementById('confirmation-modal');
    const confirmCodeElem = document.getElementById('confirmation-code');
    if (confirmCodeElem) confirmCodeElem.textContent = code;
    if (confirmModal) confirmModal.classList.remove('hidden');

    bookingForm.reset();
  });

  document.getElementById('close-confirmation-btn')?.addEventListener('click', () => {
    document.getElementById('confirmation-modal')?.classList.add('hidden');
  });

  // 8. Story Video Tour Modal
  const storyBtn = document.getElementById('watch-story-btn');
  const storyModal = document.getElementById('story-modal');
  const closeStoryBtn = document.getElementById('close-story-modal');
  const audioToggle = document.getElementById('story-audio-toggle');
  let isAudioPlaying = false;

  storyBtn?.addEventListener('click', () => {
    storyModal?.classList.remove('hidden');
  });
  closeStoryBtn?.addEventListener('click', () => {
    storyModal?.classList.add('hidden');
  });

  audioToggle?.addEventListener('click', () => {
    isAudioPlaying = !isAudioPlaying;
    if (isAudioPlaying) {
      audioToggle.innerHTML = '<i class="ri-volume-up-line text-amber-400"></i> Ambient Audio: Playing';
      showToast('Ambient nature soundtrack enabled');
    } else {
      audioToggle.innerHTML = '<i class="ri-volume-mute-line"></i> Ambient Audio: Muted';
    }
  });

  // 9. Lightbox Triggers
  document.querySelectorAll('.gallery-item-trigger').forEach((item) => {
    item.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.dataset.index || 0, 10);
      openLightbox(idx);
    });
  });

  document.getElementById('close-lightbox')?.addEventListener('click', () => {
    document.getElementById('lightbox-modal')?.classList.add('hidden');
  });

  document.getElementById('prev-lightbox')?.addEventListener('click', () => {
    const nextIdx = (APP_STATE.activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    openLightbox(nextIdx);
  });

  document.getElementById('next-lightbox')?.addEventListener('click', () => {
    const nextIdx = (APP_STATE.activeLightboxIndex + 1) % GALLERY_ITEMS.length;
    openLightbox(nextIdx);
  });

  // 10. FAQ Accordion
  document.querySelectorAll('.faq-accordion-item').forEach((item) => {
    const button = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    button?.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');
      document.querySelectorAll('.faq-answer').forEach((a) => a.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach((i) => i.classList.replace('ri-subtract-line', 'ri-add-line'));

      if (!isOpen) {
        answer.classList.remove('hidden');
        icon.classList.replace('ri-add-line', 'ri-subtract-line');
      }
    });
  });

  // 11. Newsletter Subscription
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email')?.value;
    if (email) {
      showToast('Exclusive 15% VIP discount code: PATHWAY15 copied to clipboard!', 'success');
      try {
        navigator.clipboard?.writeText('PATHWAY15');
      } catch (err) {}
      newsletterForm.reset();
    }
  });

  // 12. Contact / Consultation Modal
  const contactModal = document.getElementById('contact-modal');
  document.querySelectorAll('.open-contact-modal-btn').forEach((btn) => {
    btn.addEventListener('click', () => contactModal?.classList.remove('hidden'));
  });
  document.getElementById('close-contact-modal')?.addEventListener('click', () => {
    contactModal?.classList.add('hidden');
  });
  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    contactModal?.classList.add('hidden');
    showToast('Consultation request received! Our travel specialist will call you within 2 hours.', 'success');
    e.target.reset();
  });

  // Initial Renders
  renderDestinations();
  renderPackages();
  initTripPlanner();
});
