/**
 * Vinayaka Festival 2026 - Gowtham Sai Elite Towers
 * Interactive Festival Portal & Dynamic Slot Management
 */

// ==========================================
// 1. GENERAL FESTIVAL CONFIGURATION
// ==========================================
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

// ==========================================
// 2. HERO SLIDESHOW DATA (Including New Images)
// ==========================================
const heroSlides = [
  {
    image: "/images/eco_clay_ganesha.jpg",
    tag: "Sacred Idol Donated by Praveen (Flat 201)",
    title: "Eco-Friendly 7ft Clay Ganesha Murti",
    ctaText: "Explore Puja Slots",
    ctaLink: "#puja-annadanam"
  },
  {
    image: "/images/maha_annadanam_feast.jpg",
    tag: "Saturday, 19 Sept • Hosted by Mohan Rao (Flat 101)",
    title: "Grand Maha Annadanam Community Feast",
    ctaText: "View Annadanam Details",
    ctaLink: "#puja-annadanam"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Every Evening at 07:30 PM",
    title: "Community Maha Aarti & Gotra Archana",
    ctaText: "Book Sankalpam Slot",
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

// ==========================================
// 3. FESTIVAL SCHEDULE DATA
// (Days 02-04 7:30 AM removed; Chief Purohit references removed)
// ==========================================
const scheduleData = [
  {
    dayNumber: "Day 01",
    date: "14 Sept (Mon)",
    badgeText: "Prana Pratishtha",
    badgeType: "gold",
    title: "Ganpati Sthapana & Kalasa Puja",
    time: "10:00 AM – 12:30 PM (Evening Aarti: 07:30 PM)",
    location: "Central Clubhouse Mandapam",
    description: "Ceremonial 7ft eco-clay idol installation (donated by Praveen - Flat 201) around 10:00 AM followed by Vedic chanting, Panchamrutha Abhishekam, and evening Maha Aarti at 7:30 PM.",
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
    description: "Daily Vedic sankalpam recited for registered resident families, followed by society evening Maha Aarti & Gotra Archana at 07:30 PM.",
    category: "puja",
    isHighlight: false
  },
  {
    dayNumber: "Day 05",
    date: "18 Sept (Fri)",
    badgeText: "Youth & Cultural",
    badgeType: "gold",
    title: "Children's Sloka, Rangoli & Daily Aarti",
    time: "05:00 PM – 07:30 PM (Aarti at 07:30 PM)",
    location: "Ground Floor Multi-Purpose Hall",
    description: "Kids clay Ganesha art competition, Rangoli contest, and Bhajan Sandhya followed by society evening Maha Aarti at 7:30 PM sharp.",
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
    description: "Maha Purnahuti, Kalasa Udvasana, Rajopachara Puja, and final blessings before the grand community Annadanam feast.",
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
    description: "Grand festive traditional Satvik banana leaf banquet feast booked and hosted by Mohan Rao & Family (Flat 101) for all tower families, housekeeping staff, security guards, and devotees.",
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
    description: "Sacred 21-Kg Laddu auction, Dappu vadyam & garba procession across our tower gates, concluding with ceremonial eco-immersion.",
    category: "special puja",
    isHighlight: false
  }
];

// ==========================================
// 4. PUJA YAJAMAN SLOTS (Updateable)
// ==========================================
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

let yajamanSlots = loadYajamanSlots();

function loadYajamanSlots() {
  try {
    const saved = localStorage.getItem("vinayaka_2026_yajaman_slots");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not load slots from localStorage", e);
  }
  return DEFAULT_YAJAMAN_SLOTS;
}

function saveYajamanSlotsToStorage() {
  try {
    localStorage.setItem("vinayaka_2026_yajaman_slots", JSON.stringify(yajamanSlots));
  } catch (e) {
    console.warn("Could not save slots to localStorage", e);
  }
}

// ==========================================
// 5. ANNADANAM DONORS & OPEN SLOTS DATA
// ==========================================
const DEFAULT_ANNADANAM_DONORS = [
  {
    donor: "Mohan Rao & Family",
    flat: "101",
    item: "Grand Maha Annadanam Community Feast (Saturday 19th Sept)",
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

let annadanamDonors = loadAnnadanamDonors();

function loadAnnadanamDonors() {
  try {
    const saved = localStorage.getItem("vinayaka_2026_annadanam_donors");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not load annadanam from localStorage", e);
  }
  return DEFAULT_ANNADANAM_DONORS;
}

function saveAnnadanamDonorsToStorage() {
  try {
    localStorage.setItem("vinayaka_2026_annadanam_donors", JSON.stringify(annadanamDonors));
  } catch (e) {
    console.warn("Could not save annadanam to localStorage", e);
  }
}

// ==========================================
// 6. GALLERY MOMENTS DATA (With Attached Images)
// ==========================================
const DEFAULT_GALLERY_DATA = [
  {
    image: "/images/eco_clay_ganesha.jpg",
    tag: "Sacred Idol (Flat 201)",
    title: "Eco-Friendly 7ft Clay Ganesha Murti",
    alt: "Sacred 7ft eco-friendly clay Ganesha idol with floral garlands donated by Praveen (Flat 201)"
  },
  {
    image: "/images/maha_annadanam_feast.jpg",
    tag: "Annadanam (Flat 101)",
    title: "Grand Maha Annadanam Feast Setup",
    alt: "Traditional Satvik community feast on banana leaf hosted by Mohan Rao & Family (Flat 101)"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH7ps91U7ZGZ3vO0BiDCoTpARrEvQRkRHsN5gs5dnmHMIJIr9V2xAv7pYbAsSOV0JoXdO6qudjJ84Mic6moZk_INo_hJumvz_TlWppbGfx1ZAfxOZoCQpaTUshbP5ePWcD5a9s324FMjeQs-L2L0wafw2uqNcOV2a1cSrGtQxIxMYbB5JME4FKyJg6sdAofOdpfxIaPjadve0QIQL9PsspxPzVJrWaod-ciflez312eeRTOnGj9Z2C",
    tag: "Decorations",
    title: "Sacred Mandapam & Marigold Toran",
    alt: "Decorated festive Ganesha mandapam with warm golden brass diya lamps and marigold garlands"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Aarti",
    title: "Evening Maha Aarti & Devotional Hymns",
    alt: "Residents gathering for evening Maha Aarti with glowing brass lamps and devotional hymns"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXaPj0XdhZSSOYNmeic47VXfwKfHOL4AAUhdYI1fNpK6PfCLUeFaQ5SA8Y03okuCNdt6nMPyoCk3MTSneLAaGDnI8O7mo2lbiLCBPzhjZqcIIQ1OkgmMdMZ60Am5qkWWWE5aVKtzZYsdL7_PnlA2fqhKwYRi4h-Zmc3tZo-5E324c4G3wcO482jUPcJ-WTOo_tnGlaBBmkXymabqlse_H36h-TRSRTIwhQoq8AHJXC7Eu7riVo7WTF",
    tag: "Cultural",
    title: "Children's Rangoli & Art Fair",
    alt: "Society children participating in colorful Rangoli competition creating intricate floral mandalas"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPXg1eyUq-5ZghaKs92wu8mze2jzIe_Lat7tPCa3FbM1RVwk7fp3T2EF5Rh7MbAP2-jmr0pk0SuKmsxavT_j3EwxzCM9hrZ53kMJalE38RauujZ7KlDuHdV_9VgXCJ030jNIN8-AxmNtyFeg0GpOJFh3a6uZ438ift9OLLrfaHmjD-nSG_pXrvz50LOHyl_wIt_0M2dERe46sMGturl7gt6P-Mg8_PU3hFH3nqbPZQ9IXfIQIpvpxj",
    tag: "Prasadam",
    title: "108 Modakam Naivedyam Preparation",
    alt: "Traditional Indian sweet modaks and golden laddus arranged on sacred platters with jasmine flowers"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuk0Kv_u8AituR5DWMzMvKsLRRS1PLZ1OYFxf9gp08WJXNIHU3IINBpl0muuQdz8ObQw7uIA0vrI_qILSBBzyUPJWzw8i78JsJHfSawtljWXsymI0t3lr8Dkz8LNSxLnH9q4B1fQg_I-A-TmGnCwTAphvUP7cJ403iGtlYUPAhg_PqIdUCnUgAEy3F6mpIuUZbUvH-F_U2famN09kLjUkVlWxE49-iQ_SU60kYtSzQJ5gW25OxMxUo",
    tag: "Visarjan",
    title: "Shobha Yatra & Eco-Immersion",
    alt: "Grand Visarjan procession of eco-friendly clay Ganesha idol with music and flower shower"
  }
];

let galleryData = loadGalleryData();

function loadGalleryData() {
  try {
    const saved = localStorage.getItem("vinayaka_2026_gallery_moments");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not load gallery from localStorage", e);
  }
  return DEFAULT_GALLERY_DATA;
}

function saveGalleryDataToStorage() {
  try {
    localStorage.setItem("vinayaka_2026_gallery_moments", JSON.stringify(galleryData));
  } catch (e) {
    console.warn("Could not save gallery to localStorage", e);
  }
}

// ==========================================
// 7. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = "success") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size:20px;">
      ${type === "success" ? "check_circle" : "info"}
    </span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// 8. DOM INTERACTION & RENDERING LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  renderSchedule();
  renderYajamanSlots();
  renderAnnadanamDonors();
  renderGallery();
  setupMobileNav();
  setupScrollSpy();
});

/* --- Slideshow Logic --- */
let currentSlideIndex = 0;
let slideshowTimer = null;

function initSlideshow() {
  const track = document.getElementById("slideshowTrack");
  const dotsContainer = document.getElementById("slideshowDots");
  if (!track || !dotsContainer) return;

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  heroSlides.forEach((slide, idx) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = `slide ${idx === 0 ? "active" : ""}`;
    slideDiv.innerHTML = `
      <img src="${slide.image}" alt="${slide.title}" loading="lazy" />
      <div class="slide-overlay">
        <div class="slide-text">
          <span class="slide-caption-tag">${slide.tag}</span>
          <h2 class="slide-title">${slide.title}</h2>
        </div>
        <div class="slide-actions">
          <a href="${slide.ctaLink}" class="btn-primary-action">
            <span>${slide.ctaText}</span>
            <span class="material-symbols-outlined" style="font-size:16px;">arrow_forward</span>
          </a>
        </div>
      </div>
    `;
    track.appendChild(slideDiv);

    const dot = document.createElement("button");
    dot.className = `dot ${idx === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const prevBtn = document.getElementById("slideshowPrev");
  const nextBtn = document.getElementById("slideshowNext");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      restartSlideshowTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      restartSlideshowTimer();
    });
  }

  startSlideshowTimer();
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (!slides.length) return;

  currentSlideIndex = (index + slides.length) % slides.length;

  slides.forEach((s, idx) => {
    if (idx === currentSlideIndex) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });

  dots.forEach((d, idx) => {
    if (idx === currentSlideIndex) {
      d.classList.add("active");
    } else {
      d.classList.remove("active");
    }
  });
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
  showSlide(index);
  restartSlideshowTimer();
}

function startSlideshowTimer() {
  slideshowTimer = setInterval(nextSlide, 5000);
}

function restartSlideshowTimer() {
  clearInterval(slideshowTimer);
  startSlideshowTimer();
}

/* --- Schedule Render & Filter --- */
function renderSchedule(filter = "all") {
  const container = document.getElementById("scheduleCardsContainer");
  if (!container) return;

  container.innerHTML = "";

  scheduleData.forEach((item) => {
    if (filter !== "all" && !item.category.includes(filter)) {
      return;
    }

    const card = document.createElement("div");
    card.className = `schedule-card ${item.isHighlight ? "highlight-card" : ""}`;

    const badgeClass = item.badgeType === "crimson" 
      ? "badge-day-crimson" 
      : item.badgeType === "saffron" 
      ? "badge-day-saffron" 
      : "badge-day-gold";

    card.innerHTML = `
      <div class="${item.isHighlight ? "card-accent-bar" : "gold-accent-bar"}" style="position: absolute; top:0; left:0;"></div>
      <div class="schedule-card-header">
        <span class="schedule-day-badge ${badgeClass}">${item.dayNumber} • ${item.date}</span>
        <span class="schedule-tag">${item.badgeText}</span>
      </div>
      <h3 class="schedule-card-title">${item.title}</h3>
      <div class="schedule-meta">
        <div class="meta-item">
          <span class="material-symbols-outlined">schedule</span>
          <strong>${item.time}</strong>
        </div>
        <div class="meta-item">
          <span class="material-symbols-outlined">pin_drop</span>
          <span>${item.location}</span>
        </div>
      </div>
      <p class="schedule-card-desc">${item.description}</p>
    `;
    container.appendChild(card);
  });
}

window.filterSchedule = function(category) {
  const buttons = document.querySelectorAll(".schedule-filter-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-filter") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderSchedule(category);
};

/* --- Puja Yajaman Slots Table & Interactive Management --- */
function renderYajamanSlots() {
  const tbody = document.getElementById("yajamanTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  yajamanSlots.forEach((slot, index) => {
    const tr = document.createElement("tr");
    if (slot.isVacant) {
      tr.className = "row-vacant";
      const statusHtml = slot.isUrgent
        ? `<span class="badge-day-crimson" style="font-size:0.72rem; font-weight:700;">${slot.statusBadge}</span>`
        : `<span class="badge-vacant">${slot.statusBadge || "VACANT / AVAILABLE"}</span>`;

      tr.innerHTML = `
        <td style="font-weight:700; color:var(--color-primary);">${slot.slot}</td>
        <td style="font-weight:700; color:var(--color-text-sub);">${slot.flat}</td>
        <td style="font-weight:600; color:var(--color-text-sub); font-style:italic;">${slot.family}</td>
        <td>
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            <span style="font-size:0.82rem; font-weight:600;">${slot.seva}</span>
            ${statusHtml}
          </div>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-slot-action btn-slot-book" onclick="openSlotModal(${index})">
            <span class="material-symbols-outlined" style="font-size:14px;">add_circle</span>
            <span>Book Slot</span>
          </button>
        </td>
      `;
    } else {
      tr.innerHTML = `
        <td style="font-weight:700; color:var(--color-primary);">${slot.slot}</td>
        <td style="font-weight:800; color:var(--color-primary); font-size:0.95rem;">${slot.flat}</td>
        <td>
          <div style="font-weight:700; color:var(--color-text-main);">${slot.family}</div>
          ${slot.gotram ? `<div style="font-size:0.75rem; color:var(--color-text-sub);">${slot.gotram}</div>` : ""}
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            <span style="font-size:0.82rem; font-weight:600;">${slot.seva}</span>
            <span class="badge-confirmed" style="background:#e8f5e9; color:#1b5e20; border:1px solid #c8e6c9; font-weight:700;">${slot.statusBadge}</span>
          </div>
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-slot-action btn-slot-edit" onclick="openSlotModal(${index})">
            <span class="material-symbols-outlined" style="font-size:14px;">edit</span>
            <span>Update</span>
          </button>
        </td>
      `;
    }
    tbody.appendChild(tr);
  });
}

// Slot Modal Functions
window.openSlotModal = function(index = null) {
  const modal = document.getElementById("slotModal");
  const slotSelect = document.getElementById("slotSelect");
  const flatInput = document.getElementById("flatNumberInput");
  const familyInput = document.getElementById("familyYajamanInput");
  const sevaInput = document.getElementById("sevaPreferenceInput");
  const gotramInput = document.getElementById("gotramInput");
  const indexInput = document.getElementById("slotIndexInput");

  if (!modal || !slotSelect) return;

  // Populate slot options
  slotSelect.innerHTML = "";
  yajamanSlots.forEach((s, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `${s.slot} — ${s.isVacant ? "Available" : "Flat " + s.flat + " (" + s.family + ")"}`;
    slotSelect.appendChild(opt);
  });

  const selectedIdx = index !== null ? index : 1; // Default to Day 1 Evening if unspecified
  slotSelect.value = selectedIdx;
  indexInput.value = selectedIdx;

  const currentSlot = yajamanSlots[selectedIdx];
  if (currentSlot && !currentSlot.isVacant) {
    flatInput.value = currentSlot.flat !== "—" ? currentSlot.flat : "";
    familyInput.value = currentSlot.family !== "Available for Booking" ? currentSlot.family : "";
    sevaInput.value = currentSlot.seva;
    gotramInput.value = currentSlot.gotram || "";
  } else {
    flatInput.value = "";
    familyInput.value = "";
    sevaInput.value = currentSlot ? currentSlot.seva : "";
    gotramInput.value = "";
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeSlotModal = function() {
  const modal = document.getElementById("slotModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
};

window.onSlotSelectionChange = function(newIdx) {
  const indexInput = document.getElementById("slotIndexInput");
  const flatInput = document.getElementById("flatNumberInput");
  const familyInput = document.getElementById("familyYajamanInput");
  const sevaInput = document.getElementById("sevaPreferenceInput");
  const gotramInput = document.getElementById("gotramInput");

  const idx = parseInt(newIdx, 10);
  indexInput.value = idx;
  const currentSlot = yajamanSlots[idx];

  if (currentSlot && !currentSlot.isVacant) {
    flatInput.value = currentSlot.flat !== "—" ? currentSlot.flat : "";
    familyInput.value = currentSlot.family !== "Available for Booking" ? currentSlot.family : "";
    sevaInput.value = currentSlot.seva;
    gotramInput.value = currentSlot.gotram || "";
  } else {
    flatInput.value = "";
    familyInput.value = "";
    sevaInput.value = currentSlot ? currentSlot.seva : "";
    gotramInput.value = "";
  }
};

window.saveSlotDetails = function(e) {
  e.preventDefault();
  const indexInput = document.getElementById("slotIndexInput");
  const flatInput = document.getElementById("flatNumberInput");
  const familyInput = document.getElementById("familyYajamanInput");
  const sevaInput = document.getElementById("sevaPreferenceInput");
  const gotramInput = document.getElementById("gotramInput");

  const idx = parseInt(indexInput.value, 10);
  if (isNaN(idx) || !yajamanSlots[idx]) return;

  const flatVal = flatInput.value.trim();
  const familyVal = familyInput.value.trim();
  const sevaVal = sevaInput.value.trim() || yajamanSlots[idx].seva;
  const gotramVal = gotramInput.value.trim();

  yajamanSlots[idx].flat = flatVal;
  yajamanSlots[idx].family = familyVal;
  yajamanSlots[idx].seva = sevaVal;
  yajamanSlots[idx].gotram = gotramVal;
  yajamanSlots[idx].statusBadge = "Confirmed";
  yajamanSlots[idx].isVacant = false;
  yajamanSlots[idx].isUrgent = false;

  saveYajamanSlotsToStorage();
  renderYajamanSlots();
  closeSlotModal();
  showToast(`Puja Sankalpam booked for Flat ${flatVal} (${familyVal})!`, "success");
};

window.clearSlotBooking = function() {
  const indexInput = document.getElementById("slotIndexInput");
  const idx = parseInt(indexInput.value, 10);
  if (isNaN(idx) || !yajamanSlots[idx]) return;

  yajamanSlots[idx].flat = "—";
  yajamanSlots[idx].family = "Available for Booking";
  yajamanSlots[idx].gotram = "";
  yajamanSlots[idx].statusBadge = "VACANT / AVAILABLE";
  yajamanSlots[idx].isVacant = true;
  yajamanSlots[idx].isUrgent = false;

  saveYajamanSlotsToStorage();
  renderYajamanSlots();
  closeSlotModal();
  showToast("Slot has been marked as vacant.", "info");
};

/* --- Annadanam Sponsors & Interactive Booking --- */
function renderAnnadanamDonors() {
  const tbody = document.getElementById("annadanamTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  annadanamDonors.forEach((donor, index) => {
    const tr = document.createElement("tr");
    if (donor.isVacant) {
      tr.className = "row-vacant";
      tr.innerHTML = `
        <td style="font-weight:600; color:var(--color-text-sub); font-style:italic;">${donor.donor}</td>
        <td style="font-weight:700; color:var(--color-text-sub);">${donor.flat}</td>
        <td style="font-weight:600; color:var(--color-text-main);">${donor.item}</td>
        <td style="text-align:right;">
          <button type="button" class="btn-slot-action btn-slot-book" onclick="openAnnadanamModal(${index})">
            <span class="material-symbols-outlined" style="font-size:14px;">volunteer_activism</span>
            <span>Sponsor</span>
          </button>
        </td>
      `;
    } else {
      tr.innerHTML = `
        <td style="font-weight:700; color:var(--color-text-main);">${donor.donor}</td>
        <td style="font-weight:800; color:var(--color-secondary); font-size:0.95rem;">${donor.flat}</td>
        <td style="font-weight:600; color:var(--color-text-main);">${donor.item}</td>
        <td style="text-align:right;">
          <div style="display:inline-flex; align-items:center; gap:6px;">
            <span class="badge-confirmed" style="background:#fff3e0; color:#b43e00; border:1px solid #ffcc80; font-weight:800; font-size:0.75rem;">
              ${donor.value}
            </span>
            <button type="button" class="btn-slot-action btn-slot-edit" onclick="openAnnadanamModal(${index})">
              <span class="material-symbols-outlined" style="font-size:13px;">edit</span>
            </button>
          </div>
        </td>
      `;
    }
    tbody.appendChild(tr);
  });
}

// Annadanam Modal Functions
window.openAnnadanamModal = function(index = null) {
  const modal = document.getElementById("annadanamModal");
  const select = document.getElementById("annadanamItemSelect");
  const flatInput = document.getElementById("annadanamFlatInput");
  const donorInput = document.getElementById("annadanamDonorInput");
  const indexInput = document.getElementById("annadanamIndexInput");

  if (!modal || !select) return;

  select.innerHTML = "";
  annadanamDonors.forEach((d, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `${d.item} — ${d.isVacant ? "Available" : "Flat " + d.flat + " (" + d.donor + ")"}`;
    select.appendChild(opt);
  });

  const selectedIdx = index !== null ? index : (annadanamDonors.findIndex(d => d.isVacant) !== -1 ? annadanamDonors.findIndex(d => d.isVacant) : 1);
  select.value = selectedIdx;
  indexInput.value = selectedIdx;

  const current = annadanamDonors[selectedIdx];
  if (current && !current.isVacant) {
    flatInput.value = current.flat !== "OPEN" ? current.flat : "";
    donorInput.value = current.donor !== "Available for Sponsorship" ? current.donor : "";
  } else {
    flatInput.value = "";
    donorInput.value = "";
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeAnnadanamModal = function() {
  const modal = document.getElementById("annadanamModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
};

window.onAnnadanamSelectionChange = function(newIdx) {
  const indexInput = document.getElementById("annadanamIndexInput");
  const flatInput = document.getElementById("annadanamFlatInput");
  const donorInput = document.getElementById("annadanamDonorInput");

  const idx = parseInt(newIdx, 10);
  indexInput.value = idx;
  const current = annadanamDonors[idx];

  if (current && !current.isVacant) {
    flatInput.value = current.flat !== "OPEN" ? current.flat : "";
    donorInput.value = current.donor !== "Available for Sponsorship" ? current.donor : "";
  } else {
    flatInput.value = "";
    donorInput.value = "";
  }
};

window.saveAnnadanamSponsorship = function(e) {
  e.preventDefault();
  const indexInput = document.getElementById("annadanamIndexInput");
  const flatInput = document.getElementById("annadanamFlatInput");
  const donorInput = document.getElementById("annadanamDonorInput");

  const idx = parseInt(indexInput.value, 10);
  if (isNaN(idx) || !annadanamDonors[idx]) return;

  const flatVal = flatInput.value.trim();
  const donorVal = donorInput.value.trim();

  annadanamDonors[idx].flat = flatVal;
  annadanamDonors[idx].donor = donorVal;
  annadanamDonors[idx].value = "CONFIRMED";
  annadanamDonors[idx].isVacant = false;

  saveAnnadanamDonorsToStorage();
  renderAnnadanamDonors();
  closeAnnadanamModal();
  showToast(`Sponsorship confirmed for Flat ${flatVal} (${donorVal})!`, "success");
};

window.clearAnnadanamSponsorship = function() {
  const indexInput = document.getElementById("annadanamIndexInput");
  const idx = parseInt(indexInput.value, 10);
  if (isNaN(idx) || !annadanamDonors[idx]) return;

  annadanamDonors[idx].flat = "OPEN";
  annadanamDonors[idx].donor = "Available for Sponsorship";
  annadanamDonors[idx].value = "SLOT OPEN";
  annadanamDonors[idx].isVacant = true;

  saveAnnadanamDonorsToStorage();
  renderAnnadanamDonors();
  closeAnnadanamModal();
  showToast("Item marked as open for voluntary sponsorship.", "info");
};

/* --- Celebration Gallery Render & Lightbox --- */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = "";

  galleryData.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View photo: ${item.title}`);

    card.innerHTML = `
      <img src="${item.image}" alt="${item.alt || item.title}" loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-tag">${item.tag}</span>
        <h4 class="gallery-title">${item.title}</h4>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(item.image, item.title));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(item.image, item.title);
      }
    });

    grid.appendChild(card);
  });
}

function openLightbox(src, title) {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");

  if (!modal || !modalImg) return;

  modalImg.src = src;
  if (modalTitle) modalTitle.textContent = title;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

window.closeLightbox = function() {
  const modal = document.getElementById("galleryModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
};

/* --- Add / Upload Festival Photo --- */
let uploadedPhotoDataUrl = null;

window.openPhotoUploadModal = function() {
  const modal = document.getElementById("photoUploadModal");
  if (!modal) return;
  uploadedPhotoDataUrl = null;
  const form = document.getElementById("photoUploadForm");
  if (form) form.reset();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closePhotoUploadModal = function() {
  const modal = document.getElementById("photoUploadModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
};

window.previewSelectedPhoto = function(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedPhotoDataUrl = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

window.handlePhotoUpload = function(e) {
  e.preventDefault();
  const fileInput = document.getElementById("photoFileInput");
  const urlInput = document.getElementById("photoUrlInput");
  const titleInput = document.getElementById("photoTitleInput");
  const tagSelect = document.getElementById("photoTagSelect");

  const title = titleInput.value.trim();
  const tag = tagSelect.value;
  let imageUrl = uploadedPhotoDataUrl || (urlInput.value ? urlInput.value.trim() : null);

  if (!imageUrl && fileInput.files && fileInput.files[0]) {
    // Wait for read
    const reader = new FileReader();
    reader.onload = function(evt) {
      const dataUrl = evt.target.result;
      addPhotoToGallery(dataUrl, title, tag);
    };
    reader.readAsDataURL(fileInput.files[0]);
    return;
  }

  if (!imageUrl) {
    showToast("Please choose an image file or provide an image URL.", "info");
    return;
  }

  addPhotoToGallery(imageUrl, title, tag);
};

function addPhotoToGallery(imageUrl, title, tag) {
  const newPhoto = {
    image: imageUrl,
    tag: tag,
    title: title,
    alt: title
  };

  galleryData.unshift(newPhoto);
  saveGalleryDataToStorage();
  renderGallery();
  closePhotoUploadModal();
  showToast("Photo added to Celebration Gallery!", "success");
}

// Global modal close handlers
document.addEventListener("click", (e) => {
  const galleryModal = document.getElementById("galleryModal");
  if (e.target === galleryModal) window.closeLightbox();

  const slotModal = document.getElementById("slotModal");
  if (e.target === slotModal) window.closeSlotModal();

  const annadanamModal = document.getElementById("annadanamModal");
  if (e.target === annadanamModal) window.closeAnnadanamModal();

  const photoModal = document.getElementById("photoUploadModal");
  if (e.target === photoModal) window.closePhotoUploadModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closeLightbox();
    window.closeSlotModal();
    window.closeAnnadanamModal();
    window.closePhotoUploadModal();
  }
});

/* --- Mobile Navigation Drawer --- */
function setupMobileNav() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileDrawer");
  const icon = document.getElementById("menuIcon");

  if (!toggleBtn || !drawer) return;

  window.toggleMobileMenu = function() {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      drawer.classList.remove("open");
      if (icon) icon.textContent = "menu";
    } else {
      drawer.classList.add("open");
      if (icon) icon.textContent = "close";
    }
  };

  toggleBtn.addEventListener("click", window.toggleMobileMenu);

  const links = drawer.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      if (icon) icon.textContent = "menu";
    });
  });
}

/* --- ScrollSpy Navigation Highlighting --- */
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}
