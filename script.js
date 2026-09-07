/**
 * =========================================================
 * Vinayaka Festival 2026
 * Gowtham Sai Elite Towers
 *
 * Interactive Festival Portal
 * Dynamic Slot Management
 * Gallery Management
 * Hero Carousel Management
 * LocalStorage Persistence
 * =========================================================
 */

"use strict";

/* =========================================================
   1. FESTIVAL CONFIGURATION
   ========================================================= */

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

/* =========================================================
   2. STORAGE KEYS
   ========================================================= */

const STORAGE_KEYS = {
  hero: "vinayaka_2026_hero_slides",
  yajaman: "vinayaka_2026_yajaman_slots",
  annadanam: "vinayaka_2026_annadanam_donors",
  gallery: "vinayaka_2026_gallery_moments"
};

/* =========================================================
   3. DEFAULT HERO SLIDES
   ========================================================= */

const DEFAULT_HERO_SLIDES = [
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Every Evening at 07:30 PM",
    title: "Community Maha Aarti & Gotra Archana",
    ctaText: "Book Sankalpam Slot",
    ctaLink: "#puja-annadanam"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7WXI5MOp9_13R2TiRHCyAAeavOCdMOrgfpn83lXH-9Wd07EsNXU56aca_sVSM6Ia6AD7UNfKGm6TmIINptT6BODrgr3NRkSWQg53pJKvwOCDtfYCA5zQwTtw7W0d5iyfuNXB-Rrn-V7FJTjzuww-XNSXntWOLqEdqDvvrQmDHmvyQNjV0Uy_6a6TaamPBcx1_fuSlpZIauqGSF_izG3DMWp5EQwyZPAqxCwwUrntxaFtz88mwqe0b",
    tag: "Clubhouse Central Mandapam",
    title: "Vighnaharta Maha Mandap 2026",
    ctaText: "View Daily Schedule",
    ctaLink: "#schedule"
  }
];

/* =========================================================
   4. DEFAULT SCHEDULE
   ========================================================= */

const scheduleData = [
  {
    dayNumber: "Day 01",
    date: "14 Sept (Mon)",
    badgeText: "Prana Pratishtha",
    badgeType: "gold",
    title: "Ganpati Sthapana & Kalasa Puja",
    time: "10:00 AM – 12:30 PM (Evening Aarti: 07:30 PM)",
    location: "Central Clubhouse Mandapam",
    description:
      "Ceremonial 7ft eco-clay idol installation (donated by Praveen - Flat 201) around 10:00 AM followed by Vedic chanting, Panchamrutha Abhishekam, and evening Maha Aarti at 7:30 PM.",
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
    description:
      "Daily Vedic sankalpam recited for registered resident families, followed by society evening Maha Aarti & Gotra Archana at 07:30 PM.",
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
    description:
      "Kids clay Ganesha art competition, Rangoli contest, and Bhajan Sandhya followed by society evening Maha Aarti at 7:30 PM sharp.",
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
    description:
      "Maha Purnahuti, Kalasa Udvasana, Rajopachara Puja, and final blessings before the grand community Annadanam feast.",
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
    description:
      "Grand festive traditional Satvik banana leaf banquet feast booked and hosted by Mohan Rao & Family (Flat 101) for all tower families, housekeeping staff, security guards, and devotees.",
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
    description:
      "Sacred 21-Kg Laddu auction, Dappu vadyam & garba procession across our tower gates, concluding with ceremonial eco-immersion.",
    category: "special puja",
    isHighlight: false
  }
];

/* =========================================================
   5. DEFAULT YAJAMAN SLOTS
   ========================================================= */

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

/* =========================================================
   6. DEFAULT ANNADANAM
   ========================================================= */

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

/* =========================================================
   7. DEFAULT GALLERY
   ========================================================= */

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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH7ps91U7ZGZ3vO0BiDCoTpARrEvQRkRHsN5gs5dnmHMIJIr9V2xAv7pYbAsSOV0JoXdO6qudjJ84Mic6moZk_INo_hJumvz_TlWppbGfx1ZAfxOZoCQpaTUshbP5ePWcD5a9s324FMjeQs-L2L0wafw2uqNcOV2a1cSrGtQxIxMYbB5JME4FKyJg6sdAofOdpfxIaPjadve0QIQL9PsspxPzVJrWaod-ciflez312eeRTOnGj9Z2C",
    tag: "Decorations",
    title: "Sacred Mandapam & Marigold Toran",
    alt: "Decorated festive Ganesha mandapam with warm golden brass diya lamps and marigold garlands"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Aarti",
    title: "Evening Maha Aarti & Devotional Hymns",
    alt: "Residents gathering for evening Maha Aarti with glowing brass lamps and devotional hymns"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXaPj0XdhZSSOYNmeic47VXfwKfHOL4AAUhdYI1fNpK6PfCLUeFaQ5SA8Y03okuCNdt6nMPyoCk3MTSneLAaGDnI8O7mo2lbiLCBPzhjZqcIIQ1OkgmMdMZ60Am5qkWWWE5aVKtzZYsdL7_PnlA2fqhKwYRi4h-Zmc3tZo-5E324c4G3wcO482jUPcJ-WTOo_tnGlaBBmkXymabqlse_H36h-TRSRTIwhQoq8AHJXC7Eu7riVo7WTF",
    tag: "Cultural",
    title: "Children's Rangoli & Art Fair",
    alt: "Society children participating in colorful Rangoli competition creating intricate floral mandalas"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPXg1eyUq-5ZghaKs92wu8mze2jzIe_Lat7tPCa3FbM1RVwk7fp3T2EF5Rh7MbAP2-jmr0pk0SuKmsxavT_j3EwxzCM9hrZ53kMJalE38RauujZ7KlDuHdV_9VgXCJ030jNIN8-AxmNtyFeg0GpOJFh3a6uZ438ift9OLLrfaHmjD-nSG_pXrvz50LOHyl_wIt_0M2dERe46sMGturl7gt6P-Mg8_PU3hFH3nqbPZQ9IXfIQIpvpxj",
    tag: "Prasadam",
    title: "108 Modakam Naivedyam Preparation",
    alt: "Traditional Indian sweet modaks and golden laddus arranged on sacred platters with jasmine flowers"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuk0Kv_u8AituR5DWMzMvKsLRRS1PLZ1OYFxf9gp08WJXNIHU3IINBpl0muuQdz8ObQw7uIA0vrI_qILSBBzyUPJWzw8i78JsJHfSawtljWXsymI0t3lr8Dkz8LNSxLnH9q4B1fQg_I-A-TmGnCwTAphvUP7cJ403iGtlYUPAhg_PqIdUCnUgAEy3F6mpIuUZbUvH-F_U2famN09kLjUkVlWxE49-iQ_SU60kYtSzQJ5gW25OxMxUo",
    tag: "Visarjan",
    title: "Shobha Yatra & Eco-Immersion",
    alt: "Grand Visarjan procession of eco-friendly clay Ganesha idol with music and flower shower"
  }
];

/* =========================================================
   8. APPLICATION STATE
   ========================================================= */

let heroSlides = loadArray(STORAGE_KEYS.hero, DEFAULT_HERO_SLIDES);
let yajamanSlots = loadArray(STORAGE_KEYS.yajaman, DEFAULT_YAJAMAN_SLOTS);
let annadanamDonors = loadArray(
  STORAGE_KEYS.annadanam,
  DEFAULT_ANNADANAM_DONORS
);
let galleryData = loadArray(STORAGE_KEYS.gallery, DEFAULT_GALLERY_DATA);

let currentSlideIndex = 0;
let slideshowTimer = null;
let activeLightboxIndex = null;

let uploadedPhotoDataUrl = null;
let uploadedCarouselPhotoDataUrl = null;

/* =========================================================
   9. STORAGE HELPERS
   ========================================================= */

function loadArray(key, fallback) {
  try {
    const saved = localStorage.getItem(key);

    if (!saved) {
      return [...fallback];
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [...fallback];
  } catch (error) {
    console.warn(`Unable to load localStorage key: ${key}`, error);
    return [...fallback];
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Unable to save localStorage key: ${key}`, error);

    showToast(
      "Browser storage is full or unavailable. Changes may not persist.",
      "info"
    );

    return false;
  }
}

function saveHeroSlidesToStorage() {
  return saveStorage(STORAGE_KEYS.hero, heroSlides);
}

function saveYajamanSlotsToStorage() {
  return saveStorage(STORAGE_KEYS.yajaman, yajamanSlots);
}

function saveAnnadanamDonorsToStorage() {
  return saveStorage(STORAGE_KEYS.annadanam, annadanamDonors);
}

function saveGalleryDataToStorage() {
  return saveStorage(STORAGE_KEYS.gallery, galleryData);
}

/* =========================================================
   10. DOM HELPERS
   ========================================================= */

function getElement(id) {
  return document.getElementById(id);
}

function escapeHTML(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setBodyModalState(isOpen) {
  document.body.classList.toggle("modal-open", isOpen);
}

/* =========================================================
   11. TOAST
   ========================================================= */

function showToast(message, type = "success") {
  let container = getElement("toastContainer");

  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");

  toast.className = `toast ${type}`;

  const icon = type === "success"
    ? "check_circle"
    : "info";

  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size:20px;">
      ${icon}
    </span>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";

    window.setTimeout(() => {
      toast.remove();
    }, 300);

  }, 3500);
}

/* =========================================================
   12. INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initSlideshow();

  renderSchedule();

  renderYajamanSlots();

  renderAnnadanamDonors();

  renderGallery();

  setupMobileNav();

  setupScrollSpy();

  setupModalAccessibility();

  setupKeyboardShortcuts();

  setupImageFallbacks();

});

/* =========================================================
   13. HERO SLIDESHOW
   ========================================================= */

function initSlideshow() {

  const track = getElement("slideshowTrack");
  const dotsContainer = getElement("slideshowDots");

  if (!track || !dotsContainer) {
    return;
  }

  stopSlideshowTimer();

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  if (heroSlides.length === 0) {
    track.innerHTML = `
      <div class="slide active">
        <div style="
          width:100%;
          height:100%;
          display:grid;
          place-items:center;
          background:#3b281c;
          color:white;
          padding:30px;
          text-align:center;
        ">
          <div>
            <span class="material-symbols-outlined" style="font-size:60px;">
              image
            </span>
            <h2 style="color:white;font-family:var(--font-display);">
              No Festival Slides
            </h2>
            <p>
              Add a new slide from the carousel management panel.
            </p>
          </div>
        </div>
      </div>
    `;

    return;
  }

  currentSlideIndex = Math.min(
    currentSlideIndex,
    heroSlides.length - 1
  );

  heroSlides.forEach((slide, index) => {

    const slideDiv = document.createElement("div");

    slideDiv.className =
      `slide ${index === currentSlideIndex ? "active" : ""}`;

    slideDiv.innerHTML = `
      <img
        src="${escapeHTML(slide.image)}"
        alt="${escapeHTML(slide.title)}"
        loading="${index === 0 ? "eager" : "lazy"}"
      />

      <div class="slide-overlay">

        <div class="slide-text">

          <span class="slide-caption-tag">
            ${escapeHTML(slide.tag)}
          </span>

          <h2 class="slide-title">
            ${escapeHTML(slide.title)}
          </h2>

        </div>

        <div class="slide-actions">

          <a
            href="${escapeHTML(slide.ctaLink || "#schedule")}"
            class="btn-primary-action"
          >
            <span>${escapeHTML(slide.ctaText || "Explore")}</span>

            <span
              class="material-symbols-outlined"
              style="font-size:16px;"
            >
              arrow_forward
            </span>
          </a>

        </div>

      </div>
    `;

    track.appendChild(slideDiv);

    const dot = document.createElement("button");

    dot.type = "button";
    dot.className =
      `dot ${index === currentSlideIndex ? "active" : ""}`;

    dot.setAttribute(
      "aria-label",
      `Go to slide ${index + 1}`
    );

    dot.addEventListener("click", () => {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  setupSlideshowButtons();

  setupSlideshowSwipe();

  startSlideshowTimer();
}

function setupSlideshowButtons() {

  const prevBtn = getElement("slideshowPrev");
  const nextBtn = getElement("slideshowNext");

  if (prevBtn && !prevBtn.dataset.bound) {

    prevBtn.dataset.bound = "true";

    prevBtn.addEventListener("click", () => {
      prevSlide();
      restartSlideshowTimer();
    });
  }

  if (nextBtn && !nextBtn.dataset.bound) {

    nextBtn.dataset.bound = "true";

    nextBtn.addEventListener("click", () => {
      nextSlide();
      restartSlideshowTimer();
    });
  }
}

function showSlide(index) {

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (!slides.length) {
    return;
  }

  currentSlideIndex =
    (index + slides.length) % slides.length;

  slides.forEach((slide, idx) => {
    slide.classList.toggle(
      "active",
      idx === currentSlideIndex
    );
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle(
      "active",
      idx === currentSlideIndex
    );
  });
}

function nextSlide() {
  if (heroSlides.length <= 1) return;

  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  if (heroSlides.length <= 1) return;

  showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
  showSlide(index);
  restartSlideshowTimer();
}

function startSlideshowTimer() {

  stopSlideshowTimer();

  if (heroSlides.length <= 1) {
    return;
  }

  slideshowTimer = window.setInterval(() => {
    nextSlide();
  }, 5000);
}

function stopSlideshowTimer() {

  if (slideshowTimer) {
    window.clearInterval(slideshowTimer);
    slideshowTimer = null;
  }
}

function restartSlideshowTimer() {
  startSlideshowTimer();
}

/* =========================================================
   14. SLIDESHOW SWIPE SUPPORT
   ========================================================= */

function setupSlideshowSwipe() {

  const track = getElement("slideshowTrack");

  if (!track || track.dataset.swipeBound) {
    return;
  }

  track.dataset.swipeBound = "true";

  let startX = 0;
  let startY = 0;

  track.addEventListener(
    "touchstart",
    event => {

      const touch = event.changedTouches[0];

      startX = touch.clientX;
      startY = touch.clientY;

    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    event => {

      const touch = event.changedTouches[0];

      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      if (Math.abs(deltaX) < 50) {
        return;
      }

      if (Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
      }

      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      restartSlideshowTimer();

    },
    { passive: true }
  );
}

/* =========================================================
   15. PAUSE HERO ON HOVER
   ========================================================= */

document.addEventListener("mouseenter", event => {

  if (
    event.target &&
    event.target.closest &&
    event.target.closest(".hero")
  ) {
    stopSlideshowTimer();
  }

}, true);

document.addEventListener("mouseleave", event => {

  if (
    event.target &&
    event.target.closest &&
    event.target.closest(".hero")
  ) {
    startSlideshowTimer();
  }

}, true);

/* =========================================================
   16. SCHEDULE
   ========================================================= */

function renderSchedule(filter = "all") {

  const container =
    getElement("scheduleCardsContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const filteredItems = scheduleData.filter(item => {

    if (filter === "all") {
      return true;
    }

    return item.category.includes(filter);
  });

  if (filteredItems.length === 0) {

    container.innerHTML = `
      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:45px 20px;
        color:var(--color-text-sub);
      ">
        <span
          class="material-symbols-outlined"
          style="font-size:48px;"
        >
          event_busy
        </span>

        <h3 style="
          margin:10px 0 5px;
          font-family:var(--font-display);
        ">
          No events found
        </h3>

        <p>
          There are no events in this category.
        </p>
      </div>
    `;

    return;
  }

  filteredItems.forEach(item => {

    const card =
      document.createElement("div");

    card.className =
      `schedule-card ${
        item.isHighlight ? "highlight-card" : ""
      }`;

    const badgeClass =
      item.badgeType === "crimson"
        ? "badge-day-crimson"
        : item.badgeType === "saffron"
          ? "badge-day-saffron"
          : "badge-day-gold";

    card.innerHTML = `
      <div
        class="${
          item.isHighlight
            ? "card-accent-bar"
            : "gold-accent-bar"
        }"
        style="
          position:absolute;
          top:0;
          left:0;
        "
      ></div>

      <div class="schedule-card-header">

        <span class="schedule-day-badge ${badgeClass}">
          ${escapeHTML(item.dayNumber)}
          •
          ${escapeHTML(item.date)}
        </span>

        <span class="schedule-tag">
          ${escapeHTML(item.badgeText)}
        </span>

      </div>

      <h3 class="schedule-card-title">
        ${escapeHTML(item.title)}
      </h3>

      <div class="schedule-meta">

        <div class="meta-item">

          <span class="material-symbols-outlined">
            schedule
          </span>

          <strong>
            ${escapeHTML(item.time)}
          </strong>

        </div>

        <div class="meta-item">

          <span class="material-symbols-outlined">
            pin_drop
          </span>

          <span>
            ${escapeHTML(item.location)}
          </span>

        </div>

      </div>

      <p class="schedule-card-desc">
        ${escapeHTML(item.description)}
      </p>
    `;

    container.appendChild(card);
  });
}

window.filterSchedule = function(category) {

  const buttons =
    document.querySelectorAll(
      ".schedule-filter-btn"
    );

  buttons.forEach(button => {

    button.classList.toggle(
      "active",
      button.getAttribute("data-filter") === category
    );

  });

  renderSchedule(category);
};

/* =========================================================
   17. YAJAMAN TABLE
   ========================================================= */

function renderYajamanSlots() {

  const tbody =
    getElement("yajamanTableBody");

  if (!tbody) {
    return;
  }

  tbody.innerHTML = "";

  yajamanSlots.forEach((slot, index) => {

    const tr =
      document.createElement("tr");

    if (slot.isVacant) {

      tr.className = "row-vacant";

      const statusHtml = slot.isUrgent
        ? `
          <span
            class="badge-day-crimson"
            style="
              font-size:0.72rem;
              font-weight:700;
            "
          >
            ${escapeHTML(slot.statusBadge)}
          </span>
        `
        : `
          <span class="badge-vacant">
            ${escapeHTML(
              slot.statusBadge ||
              "VACANT / AVAILABLE"
            )}
          </span>
        `;

      tr.innerHTML = `
        <td style="
          font-weight:700;
          color:var(--color-primary);
        ">
          ${escapeHTML(slot.slot)}
        </td>

        <td style="
          font-weight:700;
          color:var(--color-text-sub);
        ">
          ${escapeHTML(slot.flat)}
        </td>

        <td style="
          font-weight:600;
          color:var(--color-text-sub);
          font-style:italic;
        ">
          ${escapeHTML(slot.family)}
        </td>

        <td>

          <div style="
            display:flex;
            align-items:center;
            gap:6px;
            flex-wrap:wrap;
          ">

            <span style="
              font-size:0.82rem;
              font-weight:600;
            ">
              ${escapeHTML(slot.seva)}
            </span>

            ${statusHtml}

          </div>

        </td>

        <td style="text-align:center;">

          <button
            type="button"
            class="btn-slot-action btn-slot-book"
            onclick="openSlotModal(${index})"
          >

            <span
              class="material-symbols-outlined"
              style="font-size:14px;"
            >
              add_circle
            </span>

            <span>Book Slot</span>

          </button>

        </td>
      `;

    } else {

      tr.innerHTML = `
        <td style="
          font-weight:700;
          color:var(--color-primary);
        ">
          ${escapeHTML(slot.slot)}
        </td>

        <td style="
          font-weight:800;
          color:var(--color-primary);
          font-size:0.95rem;
        ">
          ${escapeHTML(slot.flat)}
        </td>

        <td>

          <div style="
            font-weight:700;
            color:var(--color-text-main);
          ">
            ${escapeHTML(slot.family)}
          </div>

          ${
            slot.gotram
              ? `
                <div style="
                  font-size:0.75rem;
                  color:var(--color-text-sub);
                ">
                  ${escapeHTML(slot.gotram)}
                </div>
              `
              : ""
          }

        </td>

        <td>

          <div style="
            display:flex;
            align-items:center;
            gap:6px;
            flex-wrap:wrap;
          ">

            <span style="
              font-size:0.82rem;
              font-weight:600;
            ">
              ${escapeHTML(slot.seva)}
            </span>

            <span
              class="badge-confirmed"
            >
              ${escapeHTML(slot.statusBadge)}
            </span>

          </div>

        </td>

        <td style="text-align:center;">

          <button
            type="button"
            class="btn-slot-action btn-slot-edit"
            onclick="openSlotModal(${index})"
          >

            <span
              class="material-symbols-outlined"
              style="font-size:14px;"
            >
              edit
            </span>

            <span>Update</span>

          </button>

        </td>
      `;
    }

    tbody.appendChild(tr);
  });
}

/* =========================================================
   18. YAJAMAN MODAL
   ========================================================= */

window.openSlotModal = function(index = null) {

  const modal = getElement("slotModal");
  const slotSelect = getElement("slotSelect");
  const flatInput = getElement("flatNumberInput");
  const familyInput = getElement("familyYajamanInput");
  const sevaInput = getElement("sevaPreferenceInput");
  const gotramInput = getElement("gotramInput");
  const indexInput = getElement("slotIndexInput");

  if (!modal || !slotSelect) {
    return;
  }

  slotSelect.innerHTML = "";

  yajamanSlots.forEach((slot, idx) => {

    const option =
      document.createElement("option");

    option.value = idx;

    option.textContent =
      `${slot.slot} — ${
        slot.isVacant
          ? "Available"
          : `Flat ${slot.flat} (${slot.family})`
      }`;

    slotSelect.appendChild(option);
  });

  const firstVacantIndex =
    yajamanSlots.findIndex(slot => slot.isVacant);

  const selectedIndex =
    index !== null
      ? index
      : firstVacantIndex >= 0
        ? firstVacantIndex
        : 0;

  slotSelect.value = selectedIndex;

  indexInput.value = selectedIndex;

  populateSlotForm(selectedIndex);

  modal.classList.add("open");

  setBodyModalState(true);

  setTimeout(() => {
    flatInput?.focus();
  }, 150);
};

function populateSlotForm(index) {

  const flatInput =
    getElement("flatNumberInput");

  const familyInput =
    getElement("familyYajamanInput");

  const sevaInput =
    getElement("sevaPreferenceInput");

  const gotramInput =
    getElement("gotramInput");

  const currentSlot =
    yajamanSlots[index];

  if (!currentSlot) {
    return;
  }

  if (!currentSlot.isVacant) {

    flatInput.value =
      currentSlot.flat !== "—"
        ? currentSlot.flat
        : "";

    familyInput.value =
      currentSlot.family !==
      "Available for Booking"
        ? currentSlot.family
        : "";

  } else {

    flatInput.value = "";
    familyInput.value = "";

  }

  sevaInput.value =
    currentSlot.seva || "";

  gotramInput.value =
    currentSlot.gotram || "";
}

window.closeSlotModal = function() {

  const modal =
    getElement("slotModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("open");

  setBodyModalState(false);
};

window.onSlotSelectionChange =
  function(newIdx) {

    const indexInput =
      getElement("slotIndexInput");

    const idx =
      Number.parseInt(newIdx, 10);

    if (Number.isNaN(idx)) {
      return;
    }

    indexInput.value = idx;

    populateSlotForm(idx);
  };

window.saveSlotDetails = function(event) {

  event.preventDefault();

  const indexInput =
    getElement("slotIndexInput");

  const flatInput =
    getElement("flatNumberInput");

  const familyInput =
    getElement("familyYajamanInput");

  const sevaInput =
    getElement("sevaPreferenceInput");

  const gotramInput =
    getElement("gotramInput");

  const idx =
    Number.parseInt(indexInput.value, 10);

  if (
    Number.isNaN(idx) ||
    !yajamanSlots[idx]
  ) {
    return;
  }

  const flatVal =
    flatInput.value.trim();

  const familyVal =
    familyInput.value.trim();

  const sevaVal =
    sevaInput.value.trim();

  const gotramVal =
    gotramInput.value.trim();

  if (!flatVal || !familyVal) {

    showToast(
      "Please enter the Flat Number and Family Name.",
      "info"
    );

    return;
  }

  if (!sevaVal) {

    showToast(
      "Please enter the Seva preference.",
      "info"
    );

    return;
  }

  yajamanSlots[idx] = {
    ...yajamanSlots[idx],

    flat: flatVal,
    family: familyVal,
    seva: sevaVal,
    gotram: gotramVal,

    statusBadge: "Confirmed",

    isVacant: false,

    isUrgent: false
  };

  saveYajamanSlotsToStorage();

  renderYajamanSlots();

  closeSlotModal();

  showToast(
    `Puja Sankalpam booked for Flat ${flatVal} (${familyVal})!`,
    "success"
  );
};

window.clearSlotBooking = function() {

  const indexInput =
    getElement("slotIndexInput");

  const idx =
    Number.parseInt(indexInput.value, 10);

  if (
    Number.isNaN(idx) ||
    !yajamanSlots[idx]
  ) {
    return;
  }

  const slot =
    yajamanSlots[idx];

  if (!confirm(
    `Release the booking for "${slot.slot}"?`
  )) {
    return;
  }

  yajamanSlots[idx] = {
    ...slot,

    flat: "—",

    family: "Available for Booking",

    gotram: "",

    statusBadge:
      idx === 1
        ? "ONLY 1 SLOT LEFT"
        : "VACANT / AVAILABLE",

    isVacant: true,

    isUrgent: idx === 1
  };

  saveYajamanSlotsToStorage();

  renderYajamanSlots();

  closeSlotModal();

  showToast(
    "Slot has been marked as vacant.",
    "info"
  );
};

/* =========================================================
   19. ANNADANAM
   ========================================================= */

function renderAnnadanamDonors() {

  const tbody =
    getElement("annadanamTableBody");

  if (!tbody) {
    return;
  }

  tbody.innerHTML = "";

  annadanamDonors.forEach((donor, index) => {

    const tr =
      document.createElement("tr");

    if (donor.isVacant) {

      tr.className = "row-vacant";

      tr.innerHTML = `
        <td style="
          font-weight:600;
          color:var(--color-text-sub);
          font-style:italic;
        ">
          ${escapeHTML(donor.donor)}
        </td>

        <td style="
          font-weight:700;
          color:var(--color-text-sub);
        ">
          ${escapeHTML(donor.flat)}
        </td>

        <td style="
          font-weight:600;
          color:var(--color-text-main);
        ">
          ${escapeHTML(donor.item)}
        </td>

        <td style="text-align:right;">

          <button
            type="button"
            class="btn-slot-action btn-slot-book"
            onclick="openAnnadanamModal(${index})"
          >

            <span
              class="material-symbols-outlined"
              style="font-size:14px;"
            >
              volunteer_activism
            </span>

            <span>Sponsor</span>

          </button>

        </td>
      `;

    } else {

      tr.innerHTML = `
        <td style="
          font-weight:700;
          color:var(--color-text-main);
        ">
          ${escapeHTML(donor.donor)}
        </td>

        <td style="
          font-weight:800;
          color:var(--color-secondary);
          font-size:0.95rem;
        ">
          ${escapeHTML(donor.flat)}
        </td>

        <td style="
          font-weight:600;
          color:var(--color-text-main);
        ">
          ${escapeHTML(donor.item)}
        </td>

        <td style="text-align:right;">

          <div style="
            display:inline-flex;
            align-items:center;
            gap:6px;
          ">

            <span
              class="badge-confirmed"
              style="
                background:#fff3e0;
                color:#b43e00;
                border:1px solid #ffcc80;
                font-weight:800;
                font-size:0.75rem;
              "
            >
              ${escapeHTML(donor.value)}
            </span>

            <button
              type="button"
              class="btn-slot-action btn-slot-edit"
              onclick="openAnnadanamModal(${index})"
              aria-label="Edit sponsorship"
            >

              <span
                class="material-symbols-outlined"
                style="font-size:13px;"
              >
                edit
              </span>

            </button>

          </div>

        </td>
      `;
    }

    tbody.appendChild(tr);
  });
}

/* =========================================================
   20. ANNADANAM MODAL
   ========================================================= */

window.openAnnadanamModal =
  function(index = null) {

    const modal =
      getElement("annadanamModal");

    const select =
      getElement("annadanamItemSelect");

    const indexInput =
      getElement("annadanamIndexInput");

    if (!modal || !select) {
      return;
    }

    select.innerHTML = "";

    annadanamDonors.forEach(
      (donor, idx) => {

        const option =
          document.createElement("option");

        option.value = idx;

        option.textContent =
          `${donor.item} — ${
            donor.isVacant
              ? "Available"
              : `Flat ${donor.flat} (${donor.donor})`
          }`;

        select.appendChild(option);
      }
    );

    const firstVacantIndex =
      annadanamDonors.findIndex(
        donor => donor.isVacant
      );

    const selectedIndex =
      index !== null
        ? index
        : firstVacantIndex >= 0
          ? firstVacantIndex
          : 0;

    select.value = selectedIndex;

    indexInput.value = selectedIndex;

    populateAnnadanamForm(selectedIndex);

    modal.classList.add("open");

    setBodyModalState(true);

    setTimeout(() => {
      getElement("annadanamFlatInput")?.focus();
    }, 150);
  };

function populateAnnadanamForm(index) {

  const flatInput =
    getElement("annadanamFlatInput");

  const donorInput =
    getElement("annadanamDonorInput");

  const donor =
    annadanamDonors[index];

  if (!donor) {
    return;
  }

  if (!donor.isVacant) {

    flatInput.value =
      donor.flat !== "OPEN"
        ? donor.flat
        : "";

    donorInput.value =
      donor.donor !==
      "Available for Sponsorship"
        ? donor.donor
        : "";

  } else {

    flatInput.value = "";

    donorInput.value = "";
  }
}

window.closeAnnadanamModal =
  function() {

    const modal =
      getElement("annadanamModal");

    if (!modal) {
      return;
    }

    modal.classList.remove("open");

    setBodyModalState(false);
  };

window.onAnnadanamSelectionChange =
  function(newIdx) {

    const indexInput =
      getElement("annadanamIndexInput");

    const idx =
      Number.parseInt(newIdx, 10);

    if (Number.isNaN(idx)) {
      return;
    }

    indexInput.value = idx;

    populateAnnadanamForm(idx);
  };

window.saveAnnadanamSponsorship =
  function(event) {

    event.preventDefault();

    const indexInput =
      getElement("annadanamIndexInput");

    const flatInput =
      getElement("annadanamFlatInput");

    const donorInput =
      getElement("annadanamDonorInput");

    const idx =
      Number.parseInt(indexInput.value, 10);

    if (
      Number.isNaN(idx) ||
      !annadanamDonors[idx]
    ) {
      return;
    }

    const flatVal =
      flatInput.value.trim();

    const donorVal =
      donorInput.value.trim();

    if (!flatVal || !donorVal) {

      showToast(
        "Please enter the Flat Number and Donor Name.",
        "info"
      );

      return;
    }

    annadanamDonors[idx] = {
      ...annadanamDonors[idx],

      flat: flatVal,

      donor: donorVal,

      value: "CONFIRMED",

      isVacant: false
    };

    saveAnnadanamDonorsToStorage();

    renderAnnadanamDonors();

    closeAnnadanamModal();

    showToast(
      `Sponsorship confirmed for Flat ${flatVal} (${donorVal})!`,
      "success"
    );
  };

window.clearAnnadanamSponsorship =
  function() {

    const indexInput =
      getElement("annadanamIndexInput");

    const idx =
      Number.parseInt(indexInput.value, 10);

    if (
      Number.isNaN(idx) ||
      !annadanamDonors[idx]
    ) {
      return;
    }

    if (!confirm(
      "Release this Annadanam sponsorship slot?"
    )) {
      return;
    }

    annadanamDonors[idx] = {
      ...annadanamDonors[idx],

      flat: "OPEN",

      donor: "Available for Sponsorship",

      value: "SLOT OPEN",

      isVacant: true
    };

    saveAnnadanamDonorsToStorage();

    renderAnnadanamDonors();

    closeAnnadanamModal();

    showToast(
      "Item marked as open for voluntary sponsorship.",
      "info"
    );
  };

/* =========================================================
   21. GALLERY
   ========================================================= */

function renderGallery() {

  const grid =
    getElement("galleryGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  if (galleryData.length === 0) {

    grid.innerHTML = `
      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:3rem 1rem;
        background:var(--color-surface-low);
        border:2px dashed var(--color-border);
        border-radius:16px;
      ">

        <span
          class="material-symbols-outlined"
          style="
            font-size:48px;
            color:var(--color-text-sub);
          "
        >
          photo_library
        </span>

        <h4 style="
          font-family:var(--font-display);
          font-size:1.15rem;
          color:var(--color-text-main);
          margin-bottom:0.5rem;
        ">
          No photos in gallery
        </h4>

        <p style="
          font-size:0.85rem;
          color:var(--color-text-sub);
          margin-bottom:1rem;
        ">
          All photos have been removed.
          You can upload new photos or restore
          the original collection.
        </p>

        <button
          onclick="resetGalleryToDefault()"
          class="btn-primary-action"
        >

          <span
            class="material-symbols-outlined"
            style="font-size:18px;"
          >
            refresh
          </span>

          <span>
            Restore Default Photos
          </span>

        </button>

      </div>
    `;

    return;
  }

  galleryData.forEach((item, index) => {

    const card =
      document.createElement("div");

    card.className =
      "gallery-card";

    card.setAttribute(
      "role",
      "button"
    );

    card.setAttribute(
      "tabindex",
      "0"
    );

    card.setAttribute(
      "aria-label",
      `View photo: ${item.title}`
    );

    card.innerHTML = `
      <div class="gallery-card-actions">

        <button
          type="button"
          class="btn-gallery-delete"
          onclick="deleteGalleryPhoto(event, ${index})"
          title="Remove this photo"
          aria-label="Remove photo"
        >

          <span
            class="material-symbols-outlined"
            style="font-size:18px;"
          >
            delete
          </span>

        </button>

      </div>

      <img
        src="${escapeHTML(item.image)}"
        alt="${escapeHTML(item.alt || item.title)}"
        loading="lazy"
      />

      <div class="gallery-overlay">

        <span class="gallery-tag">
          ${escapeHTML(item.tag)}
        </span>

        <h4 class="gallery-title">
          ${escapeHTML(item.title)}
        </h4>

      </div>
    `;

    card.addEventListener(
      "click",
      event => {

        if (
          event.target.closest(
            ".btn-gallery-delete"
          )
        ) {
          return;
        }

        openLightbox(
          item.image,
          item.title,
          index
        );
      }
    );

    card.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openLightbox(
            item.image,
            item.title,
            index
          );
        }
      }
    );

    grid.appendChild(card);
  });

  setupImageFallbacks();
}

/* =========================================================
   22. LIGHTBOX
   ========================================================= */

function openLightbox(
  src,
  title,
  index = null
) {

  const modal =
    getElement("galleryModal");

  const modalImg =
    getElement("modalImg");

  const modalTitle =
    getElement("modalTitle");

  if (!modal || !modalImg) {
    return;
  }

  modalImg.src = src;

  modalImg.alt = title || "Festival photo";

  if (modalTitle) {
    modalTitle.textContent =
      title || "Festival Photo";
  }

  activeLightboxIndex = index;

  modal.classList.add("open");

  setBodyModalState(true);
}

window.closeLightbox =
  function() {

    const modal =
      getElement("galleryModal");

    if (!modal) {
      return;
    }

    modal.classList.remove("open");

    setBodyModalState(false);

    activeLightboxIndex = null;
  };

window.deleteGalleryPhoto =
  function(event, index) {

    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (
      index < 0 ||
      index >= galleryData.length
    ) {
      return;
    }

    const item =
      galleryData[index];

    if (!confirm(
      `Remove "${item.title}" from celebration gallery?`
    )) {
      return;
    }

    galleryData.splice(index, 1);

    saveGalleryDataToStorage();

    renderGallery();

    if (activeLightboxIndex === index) {
      closeLightbox();
    }

    showToast(
      `Photo "${item.title}" removed from gallery.`,
      "info"
    );
  };

window.deleteCurrentLightboxPhoto =
  function() {

    let targetIndex =
      activeLightboxIndex;

    if (
      targetIndex === null ||
      targetIndex < 0 ||
      targetIndex >= galleryData.length
    ) {

      const modalImg =
        getElement("modalImg");

      if (modalImg) {

        targetIndex =
          galleryData.findIndex(
            item =>
              item.image === modalImg.src
          );
      }
    }

    if (
      targetIndex >= 0 &&
      galleryData[targetIndex]
    ) {

      const item =
        galleryData[targetIndex];

      if (!confirm(
        `Remove "${item.title}" from celebration gallery?`
      )) {
        return;
      }

      galleryData.splice(
        targetIndex,
        1
      );

      saveGalleryDataToStorage();

      renderGallery();

      closeLightbox();

      showToast(
        `Photo "${item.title}" removed from gallery.`,
        "info"
      );

    } else {

      closeLightbox();
    }
  };

window.resetGalleryToDefault =
  function() {

    if (!confirm(
      "Reset celebration gallery to original default photos?"
    )) {
      return;
    }

    galleryData =
      [...DEFAULT_GALLERY_DATA];

    saveGalleryDataToStorage();

    renderGallery();

    showToast(
      "Gallery reset to original festival photos!",
      "success"
    );
  };

/* =========================================================
   23. PHOTO UPLOAD
   ========================================================= */

window.openPhotoUploadModal =
  function() {

    const modal =
      getElement("photoUploadModal");

    if (!modal) {
      return;
    }

    uploadedPhotoDataUrl = null;

    const form =
      getElement("photoUploadForm");

    if (form) {
      form.reset();
    }

    modal.classList.add("open");

    setBodyModalState(true);
  };

window.closePhotoUploadModal =
  function() {

    const modal =
      getElement("photoUploadModal");

    if (!modal) {
      return;
    }

    modal.classList.remove("open");

    setBodyModalState(false);
  };

window.previewSelectedPhoto =
  function(input) {

    if (
      !input.files ||
      !input.files[0]
    ) {
      return;
    }

    const file =
      input.files[0];

    if (!file.type.startsWith("image/")) {

      showToast(
        "Please select a valid image file.",
        "info"
      );

      input.value = "";

      return;
    }

    const reader =
      new FileReader();

    reader.onload = event => {

      uploadedPhotoDataUrl =
        event.target.result;
    };

    reader.readAsDataURL(file);
  };

window.handlePhotoUpload =
  function(event) {

    event.preventDefault();

    const fileInput =
      getElement("photoFileInput");

    const urlInput =
      getElement("photoUrlInput");

    const titleInput =
      getElement("photoTitleInput");

    const tagSelect =
      getElement("photoTagSelect");

    const title =
      titleInput.value.trim();

    const tag =
      tagSelect.value;

    let imageUrl =
      uploadedPhotoDataUrl ||
      (
        urlInput.value
          ? urlInput.value.trim()
          : null
      );

    if (!title) {

      showToast(
        "Please enter a photo title.",
        "info"
      );

      return;
    }

    if (
      !imageUrl &&
      fileInput.files &&
      fileInput.files[0]
    ) {

      const reader =
        new FileReader();

      reader.onload = event => {

        addPhotoToGallery(
          event.target.result,
          title,
          tag
        );
      };

      reader.readAsDataURL(
        fileInput.files[0]
      );

      return;
    }

    if (!imageUrl) {

      showToast(
        "Please choose an image file or provide an image URL.",
        "info"
      );

      return;
    }

    addPhotoToGallery(
      imageUrl,
      title,
      tag
    );
  };

function addPhotoToGallery(
  imageUrl,
  title,
  tag
) {

  const newPhoto = {
    image: imageUrl,
    tag: tag || "Festival Moments",
    title: title,
    alt: title
  };

  galleryData.unshift(newPhoto);

  saveGalleryDataToStorage();

  renderGallery();

  closePhotoUploadModal();

  showToast(
    "Photo added to Celebration Gallery!",
    "success"
  );
}

/* =========================================================
   24. HERO CAROUSEL MANAGEMENT
   ========================================================= */

window.openCarouselModal =
  function() {

    const modal =
      getElement("carouselModal");

    if (!modal) {
      return;
    }

    uploadedCarouselPhotoDataUrl = null;

    const form =
      getElement("carouselSlideForm");

    if (form) {
      form.reset();
    }

    window.switchCarouselTab("add");

    renderCarouselSlidesList();

    modal.classList.add("open");

    setBodyModalState(true);
  };

window.closeCarouselModal =
  function() {

    const modal =
      getElement("carouselModal");

    if (!modal) {
      return;
    }

    modal.classList.remove("open");

    setBodyModalState(false);
  };

window.switchCarouselTab =
  function(tab) {

    const tabAdd =
      getElement("tabBtnAddSlide");

    const tabList =
      getElement("tabBtnListSlides");

    const contentAdd =
      getElement("tabAddSlideContent");

    const contentList =
      getElement("tabListSlidesContent");

    if (
      !tabAdd ||
      !tabList ||
      !contentAdd ||
      !contentList
    ) {
      return;
    }

    const isAdd =
      tab === "add";

    tabAdd.classList.toggle(
      "active",
      isAdd
    );

    tabList.classList.toggle(
      "active",
      !isAdd
    );

    contentAdd.style.display =
      isAdd
        ? "block"
        : "none";

    contentList.style.display =
      isAdd
        ? "none"
        : "block";

    if (!isAdd) {
      renderCarouselSlidesList();
    }
  };

window.previewCarouselPhoto =
  function(input) {

    if (
      !input.files ||
      !input.files[0]
    ) {
      return;
    }

    const file =
      input.files[0];

    if (!file.type.startsWith("image/")) {

      showToast(
        "Please select a valid image file.",
        "info"
      );

      input.value = "";

      return;
    }

    const reader =
      new FileReader();

    reader.onload = event => {

      uploadedCarouselPhotoDataUrl =
        event.target.result;
    };

    reader.readAsDataURL(file);
  };

window.handleCarouselSlideUpload =
  function(event) {

    event.preventDefault();

    const fileInput =
      getElement("carouselFileInput");

    const urlInput =
      getElement("carouselUrlInput");

    const titleInput =
      getElement("carouselTitleInput");

    const tagInput =
      getElement("carouselTagInput");

    const ctaTextInput =
      getElement("carouselCtaTextInput");

    const ctaLinkInput =
      getElement("carouselCtaLinkInput");

    const title =
      titleInput.value.trim();

    const tag =
      tagInput.value.trim() ||
      "Vinayaka Mahotsav 2026";

    const ctaText =
      ctaTextInput.value.trim() ||
      "Explore Schedule";

    const ctaLink =
      ctaLinkInput.value.trim() ||
      "#schedule";

    let imageUrl =
      uploadedCarouselPhotoDataUrl ||
      (
        urlInput.value
          ? urlInput.value.trim()
          : null
      );

    if (!title) {

      showToast(
        "Please enter a slide title.",
        "info"
      );

      return;
    }

    if (
      !imageUrl &&
      fileInput.files &&
      fileInput.files[0]
    ) {

      const reader =
        new FileReader();

      reader.onload = event => {

        addSlideToCarousel(
          event.target.result,
          title,
          tag,
          ctaText,
          ctaLink
        );
      };

      reader.readAsDataURL(
        fileInput.files[0]
      );

      return;
    }

    if (!imageUrl) {

      showToast(
        "Please choose an image file or provide an image URL.",
        "info"
      );

      return;
    }

    addSlideToCarousel(
      imageUrl,
      title,
      tag,
      ctaText,
      ctaLink
    );
  };

function addSlideToCarousel(
  imageUrl,
  title,
  tag,
  ctaText,
  ctaLink
) {

  const newSlide = {
    image: imageUrl,
    title: title,
    tag: tag,
    ctaText: ctaText,
    ctaLink: ctaLink
  };

  heroSlides.unshift(newSlide);

  currentSlideIndex = 0;

  saveHeroSlidesToStorage();

  initSlideshow();

  showSlide(0);

  closeCarouselModal();

  showToast(
    `Added new slide "${title}" to hero carousel!`,
    "success"
  );
}

function renderCarouselSlidesList() {

  const listContainer =
    getElement("carouselSlidesList");

  const countBadge =
    getElement("carouselSlideCount");

  if (countBadge) {
    countBadge.textContent =
      heroSlides.length;
  }

  if (!listContainer) {
    return;
  }

  if (heroSlides.length === 0) {

    listContainer.innerHTML = `
      <p style="
        text-align:center;
        color:var(--color-text-sub);
        padding:1.5rem 0;
      ">
        No slides in carousel.
        Add one using the tab above!
      </p>
    `;

    return;
  }

  listContainer.innerHTML = "";

  heroSlides.forEach(
    (slide, index) => {

      const item =
        document.createElement("div");

      item.className =
        "carousel-slide-item";

      item.innerHTML = `
        <img
          src="${escapeHTML(slide.image)}"
          class="carousel-slide-thumb"
          alt="${escapeHTML(slide.title)}"
        />

        <div class="carousel-slide-info">

          <div
            class="carousel-slide-title"
            title="${escapeHTML(slide.title)}"
          >
            ${escapeHTML(slide.title)}
          </div>

          <div class="carousel-slide-tag">
            ${escapeHTML(
              slide.tag ||
              "Slide " + (index + 1)
            )}
          </div>

        </div>

        <button
          type="button"
          class="btn-remove-slide"
          onclick="removeCarouselSlide(${index})"
          title="Remove slide from carousel"
        >

          <span
            class="material-symbols-outlined"
            style="font-size:15px;"
          >
            delete
          </span>

          <span>Remove</span>

        </button>
      `;

      listContainer.appendChild(item);
    }
  );

  setupImageFallbacks();
}

window.removeCarouselSlide =
  function(index) {

    if (
      index < 0 ||
      index >= heroSlides.length
    ) {
      return;
    }

    const removed =
      heroSlides[index];

    if (heroSlides.length === 1) {

      if (!confirm(
        "Removing the only slide will leave the hero section blank. Proceed?"
      )) {
        return;
      }

    } else {

      if (!confirm(
        `Remove "${removed.title}" from hero carousel?`
      )) {
        return;
      }
    }

    heroSlides.splice(index, 1);

    if (
      currentSlideIndex >=
      heroSlides.length
    ) {
      currentSlideIndex =
        Math.max(
          0,
          heroSlides.length - 1
        );
    }

    saveHeroSlidesToStorage();

    initSlideshow();

    renderCarouselSlidesList();

    showToast(
      `Slide "${removed.title}" removed from carousel.`,
      "info"
    );
  };

window.resetCarouselSlidesToDefault =
  function() {

    if (!confirm(
      "Reset carousel to the original 4 default slides?"
    )) {
      return;
    }

    heroSlides =
      [...DEFAULT_HERO_SLIDES];

    currentSlideIndex = 0;

    saveHeroSlidesToStorage();

    initSlideshow();

    renderCarouselSlidesList();

    showToast(
      "Hero carousel reset to default slides!",
      "success"
    );
  };

/* =========================================================
   25. IMAGE ERROR FALLBACK
   ========================================================= */

function setupImageFallbacks() {

  document
    .querySelectorAll("img")
    .forEach(img => {

      if (img.dataset.errorBound) {
        return;
      }

      img.dataset.errorBound = "true";

      img.addEventListener(
        "error",
        () => {

          img.classList.add(
            "image-load-error"
          );

          if (
            img.closest(".slide") ||
            img.closest(".gallery-card")
          ) {

            img.style.objectFit = "cover";

            img.src =
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(`
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="500"
                  viewBox="0 0 800 500"
                >
                  <rect
                    width="800"
                    height="500"
                    fill="#3b281c"
                  />
                  <text
                    x="400"
                    y="245"
                    fill="#f5c65b"
                    text-anchor="middle"
                    font-family="Georgia"
                    font-size="32"
                  >
                    Vinayaka Festival 2026
                  </text>
                  <text
                    x="400"
                    y="285"
                    fill="#ffffff"
                    text-anchor="middle"
                    font-family="Arial"
                    font-size="18"
                  >
                    Festival image unavailable
                  </text>
                </svg>
              `);
          }
        }
      );
    });
}

/* =========================================================
   26. MODAL BACKDROP HANDLING
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const modalMap = [
      {
        id: "galleryModal",
        close: window.closeLightbox
      },
      {
        id: "slotModal",
        close: window.closeSlotModal
      },
      {
        id: "annadanamModal",
        close: window.closeAnnadanamModal
      },
      {
        id: "photoUploadModal",
        close: window.closePhotoUploadModal
      },
      {
        id: "carouselModal",
        close: window.closeCarouselModal
      }
    ];

    modalMap.forEach(item => {

      const modal =
        getElement(item.id);

      if (
        modal &&
        event.target === modal
      ) {
        item.close();
      }
    });
  }
);

/* =========================================================
   27. KEYBOARD SHORTCUTS
   ========================================================= */

function setupKeyboardShortcuts() {

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        window.closeLightbox();
        window.closeSlotModal();
        window.closeAnnadanamModal();
        window.closePhotoUploadModal();
        window.closeCarouselModal();

        return;
      }

      const galleryModal =
        getElement("galleryModal");

      if (
        galleryModal &&
        galleryModal.classList.contains("open")
      ) {

        if (event.key === "ArrowRight") {
          showNextGalleryImage();
        }

        if (event.key === "ArrowLeft") {
          showPreviousGalleryImage();
        }
      }
    }
  );
}

function showNextGalleryImage() {

  if (
    activeLightboxIndex === null ||
    galleryData.length === 0
  ) {
    return;
  }

  const nextIndex =
    (activeLightboxIndex + 1) %
    galleryData.length;

  const item =
    galleryData[nextIndex];

  openLightbox(
    item.image,
    item.title,
    nextIndex
  );
}

function showPreviousGalleryImage() {

  if (
    activeLightboxIndex === null ||
    galleryData.length === 0
  ) {
    return;
  }

  const previousIndex =
    (
      activeLightboxIndex -
      1 +
      galleryData.length
    ) %
    galleryData.length;

  const item =
    galleryData[previousIndex];

  openLightbox(
    item.image,
    item.title,
    previousIndex
  );
}

/* =========================================================
   28. MODAL ACCESSIBILITY
   ========================================================= */

function setupModalAccessibility() {

  document
    .querySelectorAll(".modal")
    .forEach(modal => {

      modal.setAttribute(
        "aria-hidden",
        "true"
      );

      const observer =
        new MutationObserver(() => {

          modal.setAttribute(
            "aria-hidden",
            modal.classList.contains("open")
              ? "false"
              : "true"
          );
        });

      observer.observe(
        modal,
        {
          attributes: true,
          attributeFilter: ["class"]
        }
      );
    });
}

/* =========================================================
   29. MOBILE NAVIGATION
   ========================================================= */

function setupMobileNav() {

  const toggleBtn =
    getElement("mobileMenuBtn");

  const drawer =
    getElement("mobileDrawer");

  const icon =
    getElement("menuIcon");

  if (!toggleBtn || !drawer) {
    return;
  }

  window.toggleMobileMenu =
    function() {

      const isOpen =
        drawer.classList.contains("open");

      drawer.classList.toggle(
        "open",
        !isOpen
      );

      toggleBtn.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      if (icon) {
        icon.textContent =
          isOpen
            ? "menu"
            : "close";
      }
    };

  if (!toggleBtn.dataset.bound) {

    toggleBtn.dataset.bound =
      "true";

    toggleBtn.addEventListener(
      "click",
      window.toggleMobileMenu
    );
  }

  drawer
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          drawer.classList.remove(
            "open"
          );

          toggleBtn.setAttribute(
            "aria-expanded",
            "false"
          );

          if (icon) {
            icon.textContent =
              "menu";
          }
        }
      );
    });
}

/* =========================================================
   30. SCROLL SPY
   ========================================================= */

function setupScrollSpy() {

  const sections =
    document.querySelectorAll(
      "section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".desktop-nav .nav-link"
    );

  if (
    !sections.length ||
    !navLinks.length
  ) {
    return;
  }

  const updateScrollSpy =
    () => {

      let currentId = "";

      const scrollPosition =
        window.scrollY + 140;

      sections.forEach(section => {

        const top =
          section.offsetTop;

        const bottom =
          top + section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          currentId =
            section.id;
        }
      });

      navLinks.forEach(link => {

        const isActive =
          link.getAttribute("href") ===
          `#${currentId}`;

        link.classList.toggle(
          "active",
          isActive
        );
      });
    };

  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {

      if (!ticking) {

        window.requestAnimationFrame(
          () => {

            updateScrollSpy();

            ticking = false;
          }
        );

        ticking = true;
      }
    },
    { passive: true }
  );

  updateScrollSpy();
}

/* =========================================================
   31. PUBLIC API
   ========================================================= */

window.VinayakaFestival = {

  config: festivalConfig,

  getHeroSlides: () =>
    [...heroSlides],

  getYajamanSlots: () =>
    [...yajamanSlots],

  getAnnadanamDonors: () =>
    [...annadanamDonors],

  getGallery: () =>
    [...galleryData],

  resetAllData: function() {

    if (!confirm(
      "Reset ALL festival portal data to defaults?"
    )) {
      return;
    }

    heroSlides =
      [...DEFAULT_HERO_SLIDES];

    yajamanSlots =
      [...DEFAULT_YAJAMAN_SLOTS];

    annadanamDonors =
      [...DEFAULT_ANNADANAM_DONORS];

    galleryData =
      [...DEFAULT_GALLERY_DATA];

    currentSlideIndex = 0;

    saveHeroSlidesToStorage();

    saveYajamanSlotsToStorage();

    saveAnnadanamDonorsToStorage();

    saveGalleryDataToStorage();

    initSlideshow();

    renderYajamanSlots();

    renderAnnadanamDonors();

    renderGallery();

    showToast(
      "All festival portal data has been restored.",
      "success"
    );
  },

  clearStorage: function() {

    if (!confirm(
      "Clear all locally saved festival changes?"
    )) {
      return;
    }

    Object.values(STORAGE_KEYS)
      .forEach(key => {
        localStorage.removeItem(key);
      });

    location.reload();
  }
};
