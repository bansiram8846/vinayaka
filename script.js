/**
 * Vinayaka Festival 2026
 * Modern interactive festival portal
 *
 * Important:
 * - Individual flat contribution/collection details are intentionally NOT included.
 * - Puja and Annadanam participation use localStorage for simple static-site management.
 * - For multi-device/shared live booking, a backend/database is required.
 */

const festivalConfig = {
  title: "Vinayaka Festival 2026",
  societyName: "Gowtham Sai Elite Towers",
  association: "Residents Welfare Association",
  dates: "14th September – 19th September 2026",
  durationText: "6 Auspicious Days",
  mandapLocation: "Clubhouse Central Mandapam",
  mandapName: "Vighnaharta Maha Mandap 2026",
  totalFlats: 20,
  specialHonors: {
    idolDonation: {
      donor: "Praveen & Family",
      flat: "201",
      item: "Sacred Eco-Friendly 7ft Clay Ganesha Murti"
    },
    dayOnePuja: {
      sittingFamily: "Praveen & Family",
      flat: "201",
      status: "Confirmed (Sitting)",
      availableSlotsDay1: 1
    },
    mahaAnnadanam: {
      host: "Mohan Rao & Family",
      flat: "101",
      date: "Saturday, 19th September 2026",
      status: "Confirmed Host"
    }
  }
};

const DEFAULT_HERO_SLIDES = [
  {
    image: "/images/eco_clay_ganesha.jpg",
    tag: "Sacred Idol • Flat 201",
    title: "Eco-Friendly 7ft Clay Ganesha Murti",
    ctaText: "Explore Puja Slots",
    ctaLink: "#puja-annadanam"
  },
  {
    image: "/images/maha_annadanam_feast.jpg",
    tag: "Saturday, 19 Sept • Flat 101",
    title: "Grand Maha Annadanam Community Feast",
    ctaText: "View Annadanam",
    ctaLink: "#puja-annadanam"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Every Evening • 07:30 PM",
    title: "Community Maha Aarti & Gotra Archana",
    ctaText: "Book Sankalpam",
    ctaLink: "#puja-annadanam"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7WXI5MOp9_13R2TiRHCyAAeavOCdMOrgfpn83lXH-9Wd07EsNXU56aca_sVSM6Ia6AD7UNfKGm6TmIINptT6BODrgr3NRkSWQg53pJKvwOCDtfYCA5zQwTtw7W0d5iyfuNXB-Rrn-V7FJTjzuww-XNSXntWOLqEdqDvvrQmDHmvyQNjV0Uy_6a6TaamPBcx1_fuSlpZIauqGSF_izG3DMWp5EQwyZPAqxCwwUrntxaFtz88mwqe0b",
    tag: "Clubhouse Central Mandapam",
    title: "Vighnaharta Maha Mandap 2026",
    ctaText: "View Daily Schedule",
    ctaLink: "#schedule"
  }
];

const scheduleData = [
  {
    dayNumber: "Day 01",
    date: "14 Sept (Mon)",
    badgeText: "Prana Pratishtha",
    badgeType: "gold",
    title: "Ganpati Sthapana & Kalasa Puja",
    time: "10:00 AM – 12:30 PM • Aarti 07:30 PM",
    location: "Central Clubhouse Mandapam",
    description: "Ceremonial 7ft eco-clay idol installation around 10:00 AM, followed by Vedic chanting, Panchamrutha Abhishekam and evening Maha Aarti.",
    category: "puja special",
    isHighlight: false
  },
  {
    dayNumber: "Days 02 – 04",
    date: "15–17 Sept",
    badgeText: "Daily Puja Ritual",
    badgeType: "saffron",
    title: "Daily Puja & Evening Maha Aarti",
    time: "Every Day at 07:30 PM",
    location: "Tower Central Lawn Mandapam",
    description: "Daily Vedic sankalpam for registered resident families followed by society evening Maha Aarti and Gotra Archana.",
    category: "puja",
    isHighlight: false
  },
  {
    dayNumber: "Day 05",
    date: "18 Sept (Fri)",
    badgeText: "Youth & Cultural",
    badgeType: "gold",
    title: "Children's Sloka, Rangoli & Daily Aarti",
    time: "05:00 PM – 07:30 PM",
    location: "Ground Floor Multi-Purpose Hall",
    description: "Kids clay Ganesha art competition, Rangoli contest and Bhajan Sandhya followed by the society evening Maha Aarti.",
    category: "cultural puja",
    isHighlight: false
  },
  {
    dayNumber: "Day 06",
    date: "19 Sept (Sat) Morning",
    badgeText: "Grand Finale Puja",
    badgeType: "gold",
    title: "Final Maha Puja & Kalasa Udvasana",
    time: "10:00 AM – 12:30 PM",
    location: "Clubhouse Central Mandapam",
    description: "Maha Purnahuti, Kalasa Udvasana, Rajopachara Puja and final blessings before the community Annadanam feast.",
    category: "puja special",
    isHighlight: false
  },
  {
    dayNumber: "Day 06",
    date: "19 Sept (Sat) Afternoon",
    badgeText: "Grand Community Feast",
    badgeType: "crimson",
    title: "Grand Maha Annadanam Community Feast",
    time: "12:30 PM – 03:30 PM",
    location: "Central Banquet Lawn & Dining Tent",
    description: "Traditional Satvik banana-leaf banquet hosted by Mohan Rao & Family for tower families, housekeeping staff, security guards and devotees.",
    category: "special",
    isHighlight: true
  },
  {
    dayNumber: "Day 06",
    date: "19 Sept (Sat) Evening",
    badgeText: "Grand Finale",
    badgeType: "crimson",
    title: "Visarjan Shobha Yatra & Laddu Auction",
    time: "04:00 PM Onwards",
    location: "Mandapam to Hussain Sagar Immersion Point",
    description: "Sacred laddu auction, Dappu vadyam and Garba procession across the tower gates, concluding with ceremonial eco-immersion.",
    category: "special puja",
    isHighlight: false
  }
];

const DEFAULT_YAJAMAN_SLOTS = [
  {
    slot: "Day 01 (14 Sept) 10:00 AM",
    flat: "201",
    family: "Praveen & Family",
    seva: "Prana Pratishtha & Sthapana Puja",
    gotram: "Kasyapa Gotram",
    statusBadge: "Confirmed (Sitting)",
    isVacant: false
  },
  {
    slot: "Day 01 (14 Sept) 07:30 PM",
    flat: "—",
    family: "Available for Booking",
    seva: "Day 01 Evening Maha Aarti",
    gotram: "",
    statusBadge: "ONLY 1 SLOT LEFT",
    isVacant: true,
    isUrgent: true
  },
  {
    slot: "Day 02 (15 Sept) 07:30 PM",
    flat: "—",
    family: "Available for Booking",
    seva: "Daily Puja & Evening Aarti",
    gotram: "",
    statusBadge: "VACANT / AVAILABLE",
    isVacant: true
  },
  {
    slot: "Day 03 (16 Sept) 07:30 PM",
    flat: "—",
    family: "Available for Booking",
    seva: "Ganapathi Homam & Aarti",
    gotram: "",
    statusBadge: "VACANT / AVAILABLE",
    isVacant: true
  },
  {
    slot: "Day 04 (17 Sept) 07:30 PM",
    flat: "—",
    family: "Available for Booking",
    seva: "Gotra Archana & Evening Aarti",
    gotram: "",
    statusBadge: "VACANT / AVAILABLE",
    isVacant: true
  },
  {
    slot: "Day 05 (18 Sept) 07:30 PM",
    flat: "—",
    family: "Available for Booking",
    seva: "Special Modak Archana & Aarti",
    gotram: "",
    statusBadge: "VACANT / AVAILABLE",
    isVacant: true
  },
  {
    slot: "Day 06 (19 Sept) 10:00 AM",
    flat: "—",
    family: "Available for Booking",
    seva: "Final Maha Puja & Kalasa Udvasana",
    gotram: "",
    statusBadge: "VACANT / AVAILABLE",
    isVacant: true
  },
  {
    slot: "Day 06 (19 Sept) 07:30 PM",
    flat: "—",
    family: "Available for Booking",
    seva: "Visarjan Shobha Yatra Aarti",
    gotram: "",
    statusBadge: "VACANT / AVAILABLE",
    isVacant: true
  }
];

const DEFAULT_ANNADANAM_DONORS = [
  {
    donor: "Mohan Rao & Family",
    flat: "101",
    item: "Grand Maha Annadanam Community Feast",
    value: "CONFIRMED HOST",
    isVacant: false
  },
  {
    donor: "Available for Sponsorship",
    flat: "OPEN",
    item: "Sona Masoori Rice & Dal Kit (5 Bags)",
    value: "SLOT OPEN",
    isVacant: true
  },
  {
    donor: "Available for Sponsorship",
    flat: "OPEN",
    item: "Pure Desi Cow Ghee & Dry Fruits Kit",
    value: "SLOT OPEN",
    isVacant: true
  },
  {
    donor: "Available for Sponsorship",
    flat: "OPEN",
    item: "Fresh Cooking Vegetables & Grocery Kit",
    value: "SLOT OPEN",
    isVacant: true
  },
  {
    donor: "Available for Sponsorship",
    flat: "OPEN",
    item: "Eco-Friendly Banana Leaf Dining Plates & Mineral Water",
    value: "SLOT OPEN",
    isVacant: true
  }
];

const DEFAULT_GALLERY_DATA = [
  {
    image: "/images/eco_clay_ganesha.jpg",
    tag: "Sacred Idol",
    title: "Eco-Friendly 7ft Clay Ganesha Murti",
    alt: "Eco-friendly clay Ganesha idol"
  },
  {
    image: "/images/maha_annadanam_feast.jpg",
    tag: "Annadanam",
    title: "Grand Maha Annadanam Feast Setup",
    alt: "Traditional community feast setup"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH7ps91U7ZGZ3vO0BiDCoTpARrEvQRkRHsN5gs5dnmHMIJIr9V2xAv7pYbAsSOV0JoXdO6qudjJ84Mic6moZk_INo_hJumvz_TlWppbGfx1ZAfxOZoCQpaTUshbP5ePWcD5a9s324FMjeQs-L2L0wafw2uqNcOV2a1cSrGtQxIxMYbB5JME4FKyJg6sdAofOdpfxIaPjadve0QIQL9PsspxPzVJrWaod-ciflez312eeRTOnGj9Z2C",
    tag: "Decorations",
    title: "Sacred Mandapam & Marigold Toran",
    alt: "Decorated Ganesha mandapam"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Aarti",
    title: "Evening Maha Aarti",
    alt: "Residents participating in evening Maha Aarti"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXaPj0XdhZSSOYNmeic47VXfwKfHOL4AAUhdYI1fNpK6PfCLUeFaQ5SA8Y03okuCNdt6nMPyoCk3MTSneLAaGDnI8O7mo2lbiLCBPzhjZqcIIQ1OkgmMdMZ60Am5qkWWWE5aVKtzZYsdL7_PnlA2fqhKwYRi4h-Zmc3tZo-5E324c4G3wcO482jUPcJ-WTOo_tnGlaBBmkXymabqlse_H36h-TRSRTIwhQoq8AHJXC7Eu7riVo7WTF",
    tag: "Cultural",
    title: "Children's Rangoli & Art Fair",
    alt: "Children participating in Rangoli competition"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPXg1eyUq-5ZghaKs92wu8mze2jzIe_Lat7tPCa3FbM1RVwk7fp3T2EF5Rh7MbAP2-jmr0pk0SuKmsxavT_j3EwxzCM9hrZ53kMJalE38RauujZ7KlDuHdV_9VgXCJ030jNIN8-AxmNtyFeg0GpOJFh3a6uZ438ift9OLLrfaHmjD-nSG_pXrvz50LOHyl_wIt_0M2dERe46sMGturl7gt6P-Mg8_PU3hFH3nqbPZQ9IXfIQIpvpxj",
    tag: "Prasadam",
    title: "108 Modakam Naivedyam",
    alt: "Traditional modaks and laddus"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuk0Kv_u8AituR5DWMzMvKsLRRS1PLZ1OYFxf9gp08WJXNIHU3IINBpl0muuQdz8ObQw7uIA0vrI_qILSBBzyUPJWzw8i78JsJHfSawtljWXsymI0t3lr8Dkz8LNSxLnH9q4B1fQg_I-A-TmGnCwTAphvUP7cJ403iGtlYUPAhg_PqIdUCnUgAEy3F6mpIuUZbUvH-F_U2famN09kLjUkVlWxE49-iQ_SU60kYtSzQJ5gW25OxMxUo",
    tag: "Visarjan",
    title: "Shobha Yatra & Eco-Immersion",
    alt: "Eco-friendly Ganesha Visarjan procession"
  }
];

let heroSlides = loadArray("vinayaka_2026_hero_slides", DEFAULT_HERO_SLIDES);
let yajamanSlots = loadArray("vinayaka_2026_yajaman_slots", DEFAULT_YAJAMAN_SLOTS);
let annadanamDonors = loadArray("vinayaka_2026_annadanam_donors", DEFAULT_ANNADANAM_DONORS);
let galleryData = loadArray("vinayaka_2026_gallery_moments", DEFAULT_GALLERY_DATA);

let currentSlideIndex = 0;
let slideshowTimer = null;
let activeLightboxIndex = null;
let uploadedPhotoDataUrl = null;
let uploadedCarouselPhotoDataUrl = null;

function loadArray(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    const parsed = saved ? JSON.parse(saved) : null;
    return Array.isArray(parsed) ? parsed : structuredCloneSafe(fallback);
  } catch (error) {
    console.warn(`Could not load ${key}`, error);
    return structuredCloneSafe(fallback);
  }
}

function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value));
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Could not save ${key}`, error);
    showToast("Browser storage is unavailable or full.", "info");
  }
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined">${type === "success" ? "check_circle" : "info"}</span>
    <span>${escapeHtml(message)}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all .25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

function setupFestivalRat() {
  if (document.getElementById("festivalRat")) return;

  const rat = document.createElement("div");
  rat.id = "festivalRat";
  rat.className = "festival-rat";
  rat.innerHTML = `<span class="rat-body" aria-hidden="true">🐀</span><span class="rat-sparkle" aria-hidden="true">✦</span>`;
  document.body.appendChild(rat);

  let x = Math.max(10, Math.random() * (window.innerWidth - 80));
  let y = Math.max(90, Math.random() * (window.innerHeight - 150));
  let targetX = x;
  let targetY = y;
  let directionX = 1;
  let watching = false;
  let nextMoveAt = performance.now() + 900;
  let last = performance.now();

  const chooseTarget = () => {
    const margin = window.innerWidth < 600 ? 12 : 24;
    targetX = margin + Math.random() * Math.max(20, window.innerWidth - 64 - margin * 2);
    targetY = Math.max(80, margin + Math.random() * Math.max(30, window.innerHeight - 130 - margin));
    directionX = targetX >= x ? 1 : -1;
    watching = false;
    rat.classList.remove("rat-watching");
    nextMoveAt = performance.now() + 700 + Math.random() * 900;
  };

  const tick = now => {
    const dt = Math.min(40, now - last);
    last = now;

    if (!watching && now >= nextMoveAt) {
      const dx = targetX - x;
      const dy = targetY - y;
      const distance = Math.hypot(dx, dy);

      if (distance < 12) {
        watching = true;
        rat.classList.add("rat-watching");
        setTimeout(() => {
          if (!document.body.contains(rat)) return;
          chooseTarget();
        }, 900 + Math.random() * 1300);
      } else {
        const speed = window.innerWidth < 600 ? 0.105 : 0.14;
        const step = speed * dt;
        x += (dx / distance) * Math.min(step, distance);
        y += (dy / distance) * Math.min(step, distance);
      }
    }

    // The native rat emoji faces LEFT. Flip it when travelling RIGHT so it
    // always appears to walk in the direction it is actually moving.
    const faceScale = directionX > 0 ? -1 : 1;
    rat.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${faceScale})`;
    requestAnimationFrame(tick);
  };

  window.addEventListener("resize", () => {
    x = Math.min(x, Math.max(10, window.innerWidth - 70));
    y = Math.min(y, Math.max(90, window.innerHeight - 100));
    chooseTarget();
  });

  chooseTarget();
  requestAnimationFrame(tick);
}


/* ---------------- Honour-card celebration effects ---------------- */

let applauseAudioContext = null;

function playApplause() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    applauseAudioContext = applauseAudioContext || new AC();
    const ctx = applauseAudioContext;
    if (ctx.state === 'suspended') ctx.resume();

    const now = ctx.currentTime;
    for (let i = 0; i < 26; i++) {
      const source = ctx.createBufferSource();
      const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.055), ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < data.length; j++) data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (data.length * .28));
      source.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 900 + Math.random() * 1800;
      filter.Q.value = .8;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now + i * .045);
      gain.gain.exponentialRampToValueAtTime(0.11 + Math.random() * .08, now + i * .045 + .006);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * .045 + .055);
      source.connect(filter).connect(gain).connect(ctx.destination);
      source.start(now + i * .045);
    }
  } catch (e) {
    console.debug('Applause audio unavailable', e);
  }
}

window.celebrateHonourCard = function(card) {
  if (!card) return;
  playApplause();
  card.classList.remove('honour-celebrate');
  void card.offsetWidth;
  card.classList.add('honour-celebrate');
  setTimeout(() => card.classList.remove('honour-celebrate'), 950);

  const layer = document.createElement('div');
  layer.className = 'star-explosion';
  layer.setAttribute('aria-hidden', 'true');
  const glyphs = ['✦', '★', '✧', '✦', '★'];
  for (let i = 0; i < 18; i++) {
    const star = document.createElement('span');
    star.className = 'exploding-star';
    star.textContent = glyphs[i % glyphs.length];
    const angle = (Math.PI * 2 * i / 18) + (Math.random() - .5) * .35;
    const distance = 70 + Math.random() * 130;
    star.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    star.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
    star.style.setProperty('--delay', `${Math.random() * 90}ms`);
    star.style.setProperty('--rot', `${-180 + Math.random() * 360}deg`);
    star.style.setProperty('--scale', `${.7 + Math.random() * .8}`);
    layer.appendChild(star);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 1250);
};

document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  renderSchedule();
  renderYajamanSlots();
  renderAnnadanamDonors();
  renderGallery();
  setupMobileNav();
  setupScrollSpy();
  setupFestivalRat();
  setupModalAccessibility();
  updateAvailableSlotCount();
});

/* ---------------- Slideshow ---------------- */

function initSlideshow() {
  const track = document.getElementById("slideshowTrack");
  const dotsContainer = document.getElementById("slideshowDots");
  if (!track || !dotsContainer) return;

  clearInterval(slideshowTimer);
  track.innerHTML = "";
  dotsContainer.innerHTML = "";
  currentSlideIndex = Math.min(currentSlideIndex, Math.max(0, heroSlides.length - 1));

  if (!heroSlides.length) {
    track.innerHTML = `<div class="slide active"><div style="height:100%;display:grid;place-items:center;color:#fff;padding:30px;text-align:center;">Add a festival slide from “Manage Hero Slides”.</div></div>`;
    return;
  }

  heroSlides.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = `slide ${index === currentSlideIndex ? "active" : ""}`;
    slideDiv.innerHTML = `
      <img src="${escapeHtml(slide.image)}" alt="${escapeHtml(slide.title)}" loading="${index === 0 ? "eager" : "lazy"}">
      <div class="slide-overlay">
        <div>
          <span class="slide-caption-tag">${escapeHtml(slide.tag || "Vinayaka Mahotsav 2026")}</span>
          <h2 class="slide-title">${escapeHtml(slide.title)}</h2>
        </div>
        <a href="${escapeHtml(slide.ctaLink || "#schedule")}" class="btn-primary-action">
          <span>${escapeHtml(slide.ctaText || "Explore")}</span>
          <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>
        </a>
      </div>
    `;
    track.appendChild(slideDiv);

    const dot = document.createElement("button");
    dot.className = `dot ${index === currentSlideIndex ? "active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  document.getElementById("slideshowPrev")?.addEventListener("click", () => {
    prevSlide();
    restartSlideshowTimer();
  });

  document.getElementById("slideshowNext")?.addEventListener("click", () => {
    nextSlide();
    restartSlideshowTimer();
  });

  startSlideshowTimer();
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (!slides.length) return;

  currentSlideIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => slide.classList.toggle("active", i === currentSlideIndex));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlideIndex));
}

function nextSlide() { showSlide(currentSlideIndex + 1); }
function prevSlide() { showSlide(currentSlideIndex - 1); }
function goToSlide(index) { showSlide(index); restartSlideshowTimer(); }

function startSlideshowTimer() {
  if (heroSlides.length > 1) slideshowTimer = setInterval(nextSlide, 5000);
}

function restartSlideshowTimer() {
  clearInterval(slideshowTimer);
  startSlideshowTimer();
}

/* ---------------- Schedule ---------------- */

function renderSchedule(filter = "all") {
  const container = document.getElementById("scheduleCardsContainer");
  if (!container) return;

  const filtered = scheduleData.filter(item =>
    filter === "all" || item.category.includes(filter)
  );

  container.innerHTML = filtered.map(item => {
    const badgeClass =
      item.badgeType === "crimson" ? "badge-day-crimson" :
      item.badgeType === "saffron" ? "badge-day-saffron" : "badge-day-gold";

    return `
      <article class="schedule-card ${item.isHighlight ? "highlight-card" : ""}">
        <div class="${item.isHighlight ? "card-accent-bar" : "gold-accent-bar"}" style="position:absolute;top:0;left:0"></div>
        <div class="schedule-card-header">
          <span class="schedule-day-badge ${badgeClass}">${escapeHtml(item.dayNumber)} • ${escapeHtml(item.date)}</span>
          <span class="schedule-tag">${escapeHtml(item.badgeText)}</span>
        </div>
        <h3 class="schedule-card-title">${escapeHtml(item.title)}</h3>
        <div class="schedule-meta">
          <div class="meta-item"><span class="material-symbols-outlined">schedule</span><strong>${escapeHtml(item.time)}</strong></div>
          <div class="meta-item"><span class="material-symbols-outlined">location_on</span><span>${escapeHtml(item.location)}</span></div>
        </div>
        <p class="schedule-card-desc">${escapeHtml(item.description)}</p>
      </article>
    `;
  }).join("");
}

window.filterSchedule = function(category) {
  document.querySelectorAll(".schedule-filter-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === category);
  });
  renderSchedule(category);
};

/* ---------------- Puja slots ---------------- */

function renderYajamanSlots() {
  const tbody = document.getElementById("yajamanTableBody");
  if (!tbody) return;

  tbody.innerHTML = yajamanSlots.map((slot, index) => {
    const status = slot.isUrgent
      ? `<span class="badge-day-crimson">${escapeHtml(slot.statusBadge)}</span>`
      : slot.isVacant
        ? `<span class="badge-vacant">${escapeHtml(slot.statusBadge || "VACANT / AVAILABLE")}</span>`
        : `<span class="badge-confirmed">${escapeHtml(slot.statusBadge || "Confirmed")}</span>`;

    return `
      <tr class="${slot.isVacant ? "row-vacant" : ""}">
        <td style="font-weight:800;color:var(--primary)">${escapeHtml(slot.slot)}</td>
        <td style="font-weight:800">${escapeHtml(slot.flat)}</td>
        <td>
          <strong>${escapeHtml(slot.family)}</strong>
          ${slot.gotram ? `<small style="display:block;color:var(--muted);font-size:.66rem">${escapeHtml(slot.gotram)}</small>` : ""}
        </td>
        <td>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span>${escapeHtml(slot.seva)}</span>${status}
          </div>
        </td>
        <td style="text-align:right">
          <button type="button" class="btn-slot-action ${slot.isVacant ? "btn-slot-book" : "btn-slot-edit"}" onclick="openSlotModal(${index})">
            <span class="material-symbols-outlined" style="font-size:14px">${slot.isVacant ? "add_circle" : "edit"}</span>
            <span>${slot.isVacant ? "Book Slot" : "Update"}</span>
          </button>
        </td>
      </tr>
    `;
  }).join("");

  updateAvailableSlotCount();
}

function updateAvailableSlotCount() {
  const count = yajamanSlots.filter(slot => slot.isVacant).length;
  const el = document.getElementById("availableSlotCount");
  if (el) el.textContent = count;
}

window.openSlotModal = function(index = null) {
  const modal = document.getElementById("slotModal");
  const select = document.getElementById("slotSelect");
  if (!modal || !select) return;

  select.innerHTML = yajamanSlots.map((slot, i) =>
    `<option value="${i}">${escapeHtml(slot.slot)} — ${slot.isVacant ? "Available" : `Flat ${escapeHtml(slot.flat)} (${escapeHtml(slot.family)})`}</option>`
  ).join("");

  const selectedIndex = index !== null ? index : yajamanSlots.findIndex(slot => slot.isVacant);
  const safeIndex = selectedIndex >= 0 ? selectedIndex : 0;
  select.value = safeIndex;
  fillSlotForm(safeIndex);

  openModal(modal);
};

function fillSlotForm(index) {
  const slot = yajamanSlots[index];
  if (!slot) return;

  document.getElementById("slotIndexInput").value = index;
  document.getElementById("flatNumberInput").value = slot.isVacant ? "" : slot.flat;
  document.getElementById("familyYajamanInput").value = slot.isVacant ? "" : slot.family;
  document.getElementById("sevaPreferenceInput").value = slot.seva || "";
  document.getElementById("gotramInput").value = slot.gotram || "";
}

window.onSlotSelectionChange = function(index) {
  fillSlotForm(Number(index));
};

window.saveSlotDetails = function(event) {
  event.preventDefault();

  const index = Number(document.getElementById("slotIndexInput").value);
  const slot = yajamanSlots[index];
  if (!slot) return;

  const flat = document.getElementById("flatNumberInput").value.trim();
  const family = document.getElementById("familyYajamanInput").value.trim();
  const seva = document.getElementById("sevaPreferenceInput").value.trim() || slot.seva;
  const gotram = document.getElementById("gotramInput").value.trim();

  if (!flat || !family) {
    showToast("Please enter the flat number and family name.", "info");
    return;
  }

  const duplicate = yajamanSlots.some((item, i) => i !== index && !item.isVacant && item.flat === flat);
  if (duplicate) {
    showToast(`Flat ${flat} already has another confirmed puja slot.`, "info");
    return;
  }

  slot.flat = flat;
  slot.family = family;
  slot.seva = seva;
  slot.gotram = gotram;
  slot.statusBadge = "Confirmed";
  slot.isVacant = false;
  slot.isUrgent = false;

  save("vinayaka_2026_yajaman_slots", yajamanSlots);
  renderYajamanSlots();
  closeSlotModal();
  showToast(`Puja seva confirmed for Flat ${flat}.`);
};

window.clearSlotBooking = function() {
  const index = Number(document.getElementById("slotIndexInput").value);
  const slot = yajamanSlots[index];
  if (!slot) return;

  if (!confirm(`Mark "${slot.slot}" as vacant?`)) return;

  slot.flat = "—";
  slot.family = "Available for Booking";
  slot.gotram = "";
  slot.statusBadge = "VACANT / AVAILABLE";
  slot.isVacant = true;
  slot.isUrgent = false;

  save("vinayaka_2026_yajaman_slots", yajamanSlots);
  renderYajamanSlots();
  closeSlotModal();
  showToast("Puja slot is now available.", "info");
};

/* ---------------- Annadanam ---------------- */

function renderAnnadanamDonors() {
  const tbody = document.getElementById("annadanamTableBody");
  if (!tbody) return;

  tbody.innerHTML = annadanamDonors.map((donor, index) => `
    <tr class="${donor.isVacant ? "row-vacant" : ""}">
      <td style="font-weight:800">${escapeHtml(donor.donor)}</td>
      <td style="font-weight:800;color:var(--primary)">${escapeHtml(donor.flat)}</td>
      <td>${escapeHtml(donor.item)}</td>
      <td style="text-align:right">
        ${donor.isVacant
          ? `<button class="btn-slot-action btn-slot-book" type="button" onclick="openAnnadanamModal(${index})">
               <span class="material-symbols-outlined" style="font-size:14px">volunteer_activism</span>Sponsor
             </button>`
          : `<span class="badge-confirmed" style="background:#fff3e0;color:#b43e00;border:1px solid #ffcc80;margin-right:5px">${escapeHtml(donor.value || "CONFIRMED")}</span>
             <button class="btn-slot-action btn-slot-edit" type="button" onclick="openAnnadanamModal(${index})" aria-label="Update sponsorship">
               <span class="material-symbols-outlined" style="font-size:14px">edit</span>
             </button>`
        }
      </td>
    </tr>
  `).join("");
}

window.openAnnadanamModal = function(index = null) {
  const modal = document.getElementById("annadanamModal");
  const select = document.getElementById("annadanamItemSelect");
  if (!modal || !select) return;

  select.innerHTML = annadanamDonors.map((item, i) =>
    `<option value="${i}">${escapeHtml(item.item)} — ${item.isVacant ? "Available" : `Flat ${escapeHtml(item.flat)} (${escapeHtml(item.donor)})`}</option>`
  ).join("");

  const availableIndex = annadanamDonors.findIndex(item => item.isVacant);
  const safeIndex = index !== null ? index : (availableIndex >= 0 ? availableIndex : 0);
  select.value = safeIndex;
  fillAnnadanamForm(safeIndex);

  openModal(modal);
};

function fillAnnadanamForm(index) {
  const item = annadanamDonors[index];
  if (!item) return;

  document.getElementById("annadanamIndexInput").value = index;
  document.getElementById("annadanamFlatInput").value = item.isVacant ? "" : item.flat;
  document.getElementById("annadanamDonorInput").value = item.isVacant ? "" : item.donor;
}

window.onAnnadanamSelectionChange = function(index) {
  fillAnnadanamForm(Number(index));
};

window.saveAnnadanamSponsorship = function(event) {
  event.preventDefault();

  const index = Number(document.getElementById("annadanamIndexInput").value);
  const item = annadanamDonors[index];
  if (!item) return;

  const flat = document.getElementById("annadanamFlatInput").value.trim();
  const donor = document.getElementById("annadanamDonorInput").value.trim();

  if (!flat || !donor) {
    showToast("Please enter the flat number and sponsor family.", "info");
    return;
  }

  item.flat = flat;
  item.donor = donor;
  item.value = "CONFIRMED";
  item.isVacant = false;

  save("vinayaka_2026_annadanam_donors", annadanamDonors);
  renderAnnadanamDonors();
  closeAnnadanamModal();
  showToast(`Annadanam sponsorship confirmed for Flat ${flat}.`);
};

window.clearAnnadanamSponsorship = function() {
  const index = Number(document.getElementById("annadanamIndexInput").value);
  const item = annadanamDonors[index];
  if (!item) return;

  if (!confirm(`Mark "${item.item}" as open for sponsorship?`)) return;

  item.flat = "OPEN";
  item.donor = "Available for Sponsorship";
  item.value = "SLOT OPEN";
  item.isVacant = true;

  save("vinayaka_2026_annadanam_donors", annadanamDonors);
  renderAnnadanamDonors();
  closeAnnadanamModal();
  showToast("Annadanam sponsorship is now open.", "info");
};

/* ---------------- Gallery ---------------- */

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  if (!galleryData.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:45px 20px;border:1px dashed rgba(255,255,255,.25);border-radius:18px;color:#cdbdb5">
        <span class="material-symbols-outlined" style="font-size:44px">photo_library</span>
        <h3 style="font-family:var(--font-display)">No photos yet</h3>
        <p>Add festival photos using the button above.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = galleryData.map((item, index) => `
    <article class="gallery-card" role="button" tabindex="0" aria-label="View ${escapeHtml(item.title)}" onclick="openLightbox(${index})" onkeydown="galleryKeydown(event,${index})">
      <div class="gallery-card-actions">
        <button type="button" class="btn-gallery-delete" onclick="deleteGalleryPhoto(event,${index})" aria-label="Remove photo">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt || item.title)}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-tag">${escapeHtml(item.tag)}</span>
        <h4 class="gallery-title">${escapeHtml(item.title)}</h4>
      </div>
    </article>
  `).join("");
}

window.galleryKeydown = function(event, index) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLightbox(index);
  }
};

window.openLightbox = function(index) {
  const item = galleryData[index];
  const modal = document.getElementById("galleryModal");
  const image = document.getElementById("modalImg");
  const title = document.getElementById("modalTitle");
  if (!item || !modal || !image) return;

  activeLightboxIndex = index;
  image.src = item.image;
  image.alt = item.alt || item.title;
  if (title) title.textContent = item.title;
  openModal(modal);
};

window.closeLightbox = function() {
  closeModal(document.getElementById("galleryModal"));
  activeLightboxIndex = null;
};

window.deleteGalleryPhoto = function(event, index) {
  event?.stopPropagation();
  event?.preventDefault();

  const item = galleryData[index];
  if (!item) return;
  if (!confirm(`Remove "${item.title}" from the gallery?`)) return;

  galleryData.splice(index, 1);
  save("vinayaka_2026_gallery_moments", galleryData);
  renderGallery();

  if (activeLightboxIndex === index) closeLightbox();
  showToast("Photo removed from the gallery.", "info");
};

window.deleteCurrentLightboxPhoto = function() {
  if (activeLightboxIndex === null) return;
  deleteGalleryPhoto(null, activeLightboxIndex);
  closeLightbox();
};

window.resetGalleryToDefault = function() {
  if (!confirm("Restore the original festival gallery?")) return;
  galleryData = structuredCloneSafe(DEFAULT_GALLERY_DATA);
  save("vinayaka_2026_gallery_moments", galleryData);
  renderGallery();
  showToast("Default gallery restored.");
};

/* ---------------- Photo upload ---------------- */

window.openPhotoUploadModal = function() {
  const form = document.getElementById("photoUploadForm");
  form?.reset();
  uploadedPhotoDataUrl = null;
  openModal(document.getElementById("photoUploadModal"));
};

window.closePhotoUploadModal = function() {
  closeModal(document.getElementById("photoUploadModal"));
};

window.previewSelectedPhoto = function(input) {
  const file = input?.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Please select an image file.", "info");
    input.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = event => uploadedPhotoDataUrl = event.target.result;
  reader.readAsDataURL(file);
};

window.handlePhotoUpload = function(event) {
  event.preventDefault();

  const fileInput = document.getElementById("photoFileInput");
  const urlInput = document.getElementById("photoUrlInput");
  const titleInput = document.getElementById("photoTitleInput");
  const tagSelect = document.getElementById("photoTagSelect");

  const title = titleInput.value.trim();
  const tag = tagSelect.value;
  const url = urlInput.value.trim();

  const add = imageUrl => {
    if (!imageUrl) {
      showToast("Please select an image or enter an image URL.", "info");
      return;
    }

    galleryData.unshift({
      image: imageUrl,
      tag,
      title,
      alt: title
    });

    save("vinayaka_2026_gallery_moments", galleryData);
    renderGallery();
    closePhotoUploadModal();
    showToast("Festival photo added to the gallery.");
  };

  if (uploadedPhotoDataUrl) {
    add(uploadedPhotoDataUrl);
  } else if (url) {
    add(url);
  } else if (fileInput?.files?.[0]) {
    const reader = new FileReader();
    reader.onload = e => add(e.target.result);
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    showToast("Please select an image or enter an image URL.", "info");
  }
};

/* ---------------- Carousel manager ---------------- */

window.openCarouselModal = function() {
  const form = document.getElementById("carouselSlideForm");
  form?.reset();
  uploadedCarouselPhotoDataUrl = null;
  switchCarouselTab("add");
  renderCarouselSlidesList();
  openModal(document.getElementById("carouselModal"));
};

window.closeCarouselModal = function() {
  closeModal(document.getElementById("carouselModal"));
};

window.switchCarouselTab = function(tab) {
  const addButton = document.getElementById("tabBtnAddSlide");
  const listButton = document.getElementById("tabBtnListSlides");
  const addContent = document.getElementById("tabAddSlideContent");
  const listContent = document.getElementById("tabListSlidesContent");

  const adding = tab === "add";
  addButton?.classList.toggle("active", adding);
  listButton?.classList.toggle("active", !adding);
  if (addContent) addContent.style.display = adding ? "block" : "none";
  if (listContent) listContent.style.display = adding ? "none" : "block";

  if (!adding) renderCarouselSlidesList();
};

window.previewCarouselPhoto = function(input) {
  const file = input?.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Please select an image file.", "info");
    input.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = event => uploadedCarouselPhotoDataUrl = event.target.result;
  reader.readAsDataURL(file);
};

window.handleCarouselSlideUpload = function(event) {
  event.preventDefault();

  const fileInput = document.getElementById("carouselFileInput");
  const urlInput = document.getElementById("carouselUrlInput");
  const titleInput = document.getElementById("carouselTitleInput");
  const tagInput = document.getElementById("carouselTagInput");
  const ctaTextInput = document.getElementById("carouselCtaTextInput");
  const ctaLinkInput = document.getElementById("carouselCtaLinkInput");

  const title = titleInput.value.trim();
  const tag = tagInput.value.trim() || "Vinayaka Mahotsav 2026";
  const ctaText = ctaTextInput.value.trim() || "Explore Schedule";
  const ctaLink = ctaLinkInput.value.trim() || "#schedule";
  const url = urlInput.value.trim();

  const add = imageUrl => {
    if (!imageUrl) {
      showToast("Please select an image or enter an image URL.", "info");
      return;
    }

    heroSlides.unshift({ image:imageUrl, title, tag, ctaText, ctaLink });
    save("vinayaka_2026_hero_slides", heroSlides);
    currentSlideIndex = 0;
    initSlideshow();
    closeCarouselModal();
    showToast(`Added "${title}" to the hero carousel.`);
  };

  if (uploadedCarouselPhotoDataUrl) {
    add(uploadedCarouselPhotoDataUrl);
  } else if (url) {
    add(url);
  } else if (fileInput?.files?.[0]) {
    const reader = new FileReader();
    reader.onload = e => add(e.target.result);
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    showToast("Please select an image or enter an image URL.", "info");
  }
};

function renderCarouselSlidesList() {
  const container = document.getElementById("carouselSlidesList");
  const count = document.getElementById("carouselSlideCount");
  if (count) count.textContent = heroSlides.length;
  if (!container) return;

  if (!heroSlides.length) {
    container.innerHTML = `<p style="text-align:center;color:var(--muted);padding:25px">No hero slides. Add one from the first tab.</p>`;
    return;
  }

  container.innerHTML = heroSlides.map((slide, index) => `
    <div class="carousel-slide-item">
      <img class="carousel-slide-thumb" src="${escapeHtml(slide.image)}" alt="">
      <div>
        <div class="carousel-slide-title">${escapeHtml(slide.title)}</div>
        <div class="carousel-slide-tag">${escapeHtml(slide.tag || `Slide ${index + 1}`)}</div>
      </div>
      <button type="button" class="btn-remove-slide" onclick="removeCarouselSlide(${index})">
        <span class="material-symbols-outlined" style="font-size:15px">delete</span>Remove
      </button>
    </div>
  `).join("");
}

window.removeCarouselSlide = function(index) {
  const slide = heroSlides[index];
  if (!slide) return;

  if (!confirm(`Remove "${slide.title}" from the hero carousel?`)) return;

  heroSlides.splice(index, 1);
  currentSlideIndex = 0;
  save("vinayaka_2026_hero_slides", heroSlides);
  initSlideshow();
  renderCarouselSlidesList();
  showToast("Hero slide removed.", "info");
};

window.resetCarouselSlidesToDefault = function() {
  if (!confirm("Restore the original four hero slides?")) return;

  heroSlides = structuredCloneSafe(DEFAULT_HERO_SLIDES);
  currentSlideIndex = 0;
  save("vinayaka_2026_hero_slides", heroSlides);
  initSlideshow();
  renderCarouselSlidesList();
  showToast("Default hero slides restored.");
};

/* ---------------- Navigation / modal helpers ---------------- */

function setupMobileNav() {
  const toggle = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileDrawer");
  const icon = document.getElementById("menuIcon");
  if (!toggle || !drawer) return;

  toggle.addEventListener("click", () => {
    const open = drawer.classList.toggle("open");
    if (icon) icon.textContent = open ? "close" : "menu";
    toggle.setAttribute("aria-expanded", String(open));
  });

  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      if (icon) icon.textContent = "menu";
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupScrollSpy() {
  const sections = [...document.querySelectorAll("section[id]")];
  const links = [...document.querySelectorAll(".desktop-nav .nav-link")];

  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("open");
  if (!document.querySelector(".modal.open")) {
    document.body.classList.remove("modal-open");
  }
}

function setupModalAccessibility() {
  document.addEventListener("click", event => {
    const modals = ["galleryModal", "slotModal", "annadanamModal", "photoUploadModal", "carouselModal"];
    modals.forEach(id => {
      const modal = document.getElementById(id);
      if (event.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    const open = document.querySelector(".modal.open");
    if (open) closeModal(open);
  });
}

window.closeSlotModal = function() {
  closeModal(document.getElementById("slotModal"));
};

window.closeAnnadanamModal = function() {
  closeModal(document.getElementById("annadanamModal"));
};

/*
 * Backward-compatible global names.
 * Existing HTML/buttons that call these functions will continue to work.
 */
window.saveYajamanSlotsToStorage = () => save("vinayaka_2026_yajaman_slots", yajamanSlots);
window.saveAnnadanamDonorsToStorage = () => save("vinayaka_2026_annadanam_donors", annadanamDonors);
window.saveGalleryDataToStorage = () => save("vinayaka_2026_gallery_moments", galleryData);
window.saveHeroSlidesToStorage = () => save("vinayaka_2026_hero_slides", heroSlides);
