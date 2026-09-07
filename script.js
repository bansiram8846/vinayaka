/**
 * =========================================================
 * Vinayaka Festival 2026
 * Gowtham Sai Elite Towers
 *
 * Premium Interactive Festival Portal
 * =========================================================
 */

"use strict";

/* =========================================================
   FESTIVAL CONFIGURATION
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
   STORAGE KEYS
   ========================================================= */

const STORAGE_KEYS = {
  heroSlides: "vinayaka_2026_hero_slides",
  yajamanSlots: "vinayaka_2026_yajaman_slots",
  annadanamDonors: "vinayaka_2026_annadanam_donors",
  gallery: "vinayaka_2026_gallery_moments"
};

/* =========================================================
   DEFAULT HERO SLIDES
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
   DEFAULT SCHEDULE
   ========================================================= */

const scheduleData = [
  {
    day: "Day 01",
    date: "14 September 2026",
    weekday: "Monday",
    title: "Prana Pratishtha, Ganpati Sthapana & Kalasa Puja",
    time: "10:00 AM – 12:30 PM",
    evening: "Maha Aarti at 07:30 PM",
    location: "Central Clubhouse Mandapam",
    category: "puja day1",
    description: "Sacred installation of the eco-friendly clay Ganesha idol.",
    highlight: true
  },

  {
    day: "Day 02",
    date: "15 September 2026",
    weekday: "Tuesday",
    title: "Daily Puja & Evening Maha Aarti",
    time: "07:30 PM",
    evening: "",
    location: "Tower Central Lawn Mandapam",
    category: "puja aarti",
    description: "Community puja, sankalpam and Maha Aarti."
  },

  {
    day: "Day 03",
    date: "16 September 2026",
    weekday: "Wednesday",
    title: "Daily Puja & Evening Maha Aarti",
    time: "07:30 PM",
    evening: "",
    location: "Tower Central Lawn Mandapam",
    category: "puja aarti",
    description: "Daily Ganapati puja and community Maha Aarti."
  },

  {
    day: "Day 04",
    date: "17 September 2026",
    weekday: "Thursday",
    title: "Daily Puja & Evening Maha Aarti",
    time: "07:30 PM",
    evening: "",
    location: "Tower Central Lawn Mandapam",
    category: "puja aarti",
    description: "Daily Ganapati puja and community Maha Aarti."
  },

  {
    day: "Day 05",
    date: "18 September 2026",
    weekday: "Friday",
    title: "Children’s Sloka, Rangoli & Daily Aarti",
    time: "05:00 PM – 07:30 PM",
    evening: "Maha Aarti at 07:30 PM",
    location: "Central Community Area",
    category: "children cultural aarti",
    description: "A joyful evening featuring children’s cultural activities."
  },

  {
    day: "Day 06",
    date: "19 September 2026",
    weekday: "Saturday",
    title: "Final Maha Puja & Kalasa Udvasana",
    time: "10:00 AM – 12:30 PM",
    evening: "",
    location: "Central Clubhouse Mandapam",
    category: "puja day6",
    description: "Final sacred puja followed by Kalasa Udvasana."
  },

  {
    day: "Day 06",
    date: "19 September 2026",
    weekday: "Saturday",
    title: "Grand Maha Annadanam",
    time: "12:30 PM – 03:30 PM",
    evening: "",
    location: "Community Dining Area",
    category: "annadanam day6",
    description: "Grand community feast hosted by Flat 101.",
    highlight: true
  },

  {
    day: "Day 06",
    date: "19 September 2026",
    weekday: "Saturday",
    title: "Visarjan Shobha Yatra & Laddu Auction",
    time: "04:00 PM onwards",
    evening: "",
    location: "Apartment Premises & Procession Route",
    category: "visarjan cultural day6",
    description: "Festive procession, Visarjan and Laddu Auction."
  }
];

/* =========================================================
   DEFAULT YAJAMAN SLOTS
   ========================================================= */

const DEFAULT_YAJAMAN_SLOTS = [
  {
    day: "Day 01",
    date: "14 Sept",
    time: "10:00 AM",
    flat: "201",
    family: "Praveen & Family",
    puja: "Prana Pratishtha & Sthapana Puja",
    gotram: "Kasyapa Gotram",
    status: "Confirmed (Sitting)",
    urgent: false
  },

  {
    day: "Day 01",
    date: "14 Sept",
    time: "07:30 PM",
    flat: "",
    family: "",
    puja: "Day 01 Evening Maha Aarti",
    gotram: "",
    status: "ONLY 1 SLOT LEFT",
    urgent: true
  },

  {
    day: "Day 02",
    date: "15 Sept",
    time: "07:30 PM",
    flat: "",
    family: "",
    puja: "Daily Maha Aarti",
    gotram: "",
    status: "Open",
    urgent: false
  },

  {
    day: "Day 03",
    date: "16 Sept",
    time: "07:30 PM",
    flat: "",
    family: "",
    puja: "Daily Maha Aarti",
    gotram: "",
    status: "Open",
    urgent: false
  },

  {
    day: "Day 04",
    date: "17 Sept",
    time: "07:30 PM",
    flat: "",
    family: "",
    puja: "Daily Maha Aarti",
    gotram: "",
    status: "Open",
    urgent: false
  },

  {
    day: "Day 05",
    date: "18 Sept",
    time: "07:30 PM",
    flat: "",
    family: "",
    puja: "Daily Maha Aarti",
    gotram: "",
    status: "Open",
    urgent: false
  },

  {
    day: "Day 06",
    date: "19 Sept",
    time: "10:00 AM",
    flat: "",
    family: "",
    puja: "Final Maha Puja & Kalasa Udvasana",
    gotram: "",
    status: "Open",
    urgent: false
  },

  {
    day: "Day 06",
    date: "19 Sept",
    time: "07:30 PM",
    flat: "",
    family: "",
    puja: "Visarjan Aarti",
    gotram: "",
    status: "Open",
    urgent: false
  }
];

/* =========================================================
   DEFAULT ANNADANAM DONORS
   ========================================================= */

const DEFAULT_ANNADANAM_DONORS = [
  {
    donor: "Mohan Rao & Family",
    flat: "101",
    item: "Grand Maha Annadanam Community Feast",
    date: "Saturday, 19th September",
    status: "CONFIRMED HOST"
  },

  {
    donor: "",
    flat: "",
    item: "Rice & Dal Kit",
    date: "",
    status: "Open"
  },

  {
    donor: "",
    flat: "",
    item: "Ghee & Dry Fruits",
    date: "",
    status: "Open"
  },

  {
    donor: "",
    flat: "",
    item: "Vegetables & Grocery",
    date: "",
    status: "Open"
  },

  {
    donor: "",
    flat: "",
    item: "Banana Leaf Plates & Mineral Water",
    date: "",
    status: "Open"
  }
];

/* =========================================================
   DEFAULT GALLERY
   ========================================================= */

const DEFAULT_GALLERY = [
  {
    image: "/images/eco_clay_ganesha.jpg",
    tag: "Sacred Idol",
    title: "Eco-Friendly Clay Ganesha"
  },

  {
    image: "/images/maha_annadanam_feast.jpg",
    tag: "Annadanam",
    title: "Grand Community Feast"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Decorations",
    title: "Festive Mandap Decorations"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7WXI5MOp9_13R2TiRHCyAAeavOCdMOrgfpn83lXH-9Wd07EsNXU56aca_sVSM6Ia6AD7UNfKGm6TmIINptT6BODrgr3NRkSWQg53pJKvwOCDtfYCA5zQwTtw7W0d5iyfuNXB-Rrn-V7FJTjzuww-XNSXntWOLqEdqDvvrQmDHmvyQNjV0Uy_6a6TaamPBcx1_fuSlpZIauqGSF_izG3DMWp5EQwyZPAqxCwwUrntxaFtz88mwqe0b",
    tag: "Maha Aarti",
    title: "Community Maha Aarti"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Children",
    title: "Children’s Sloka & Rangoli"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7WXI5MOp9_13R2TiRHCyAAeavOCdMOrgfpn83lXH-9Wd07EsNXU56aca_sVSM6Ia6AD7UNfKGm6TmIINptT6BODrgr3NRkSWQg53pJKvwOCDtfYCA5zQwTtw7W0d5iyfuNXB-Rrn-V7FJTjzuww-XNSXntWOLqEdqDvvrQmDHmvyQNjV0Uy_6a6TaamPBcx1_fuSlpZIauqGSF_izG3DMWp5EQwyZPAqxCwwUrntxaFtz88mwqe0b",
    tag: "Festival Food",
    title: "Modakam & Prasadam"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",
    tag: "Visarjan",
    title: "Visarjan Shobha Yatra"
  }
];

/* =========================================================
   GENERIC STORAGE HELPERS
   ========================================================= */

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);

    if (!raw) {
      return structuredCloneSafe(fallback);
    }

    const parsed = JSON.parse(raw);

    return parsed;
  } catch (error) {
    console.warn(`Unable to read localStorage key "${key}"`, error);
    return structuredCloneSafe(fallback);
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Unable to save localStorage key "${key}"`, error);

    showToast(
      "Storage limit reached. Try using smaller images.",
      "error"
    );

    return false;
  }
}

function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value));
}

/* =========================================================
   SAFE DOM HELPERS
   ========================================================= */

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== "") {
    element.textContent = text;
  }

  return element;
}

function getElement(id) {
  return document.getElementById(id);
}

/* =========================================================
   HERO CAROUSEL STATE
   ========================================================= */

let heroSlides = readStorage(
  STORAGE_KEYS.heroSlides,
  DEFAULT_HERO_SLIDES
);

let currentSlideIndex = 0;
let slideshowTimer = null;
let slideshowPaused = false;
let slideshowInitialized = false;

/* =========================================================
   HERO CAROUSEL
   ========================================================= */

function initSlideshow() {
  const track = getElement("slideshowTrack");
  const dotsContainer = getElement("slideshowDots");
  const prevButton = getElement("slideshowPrev");
  const nextButton = getElement("slideshowNext");

  if (!track) {
    return;
  }

  /* Prevent duplicate timers */
  clearSlideshowTimer();

  /* Normalize slides */
  if (!Array.isArray(heroSlides) || heroSlides.length === 0) {
    heroSlides = structuredCloneSafe(DEFAULT_HERO_SLIDES);
  }

  if (currentSlideIndex >= heroSlides.length) {
    currentSlideIndex = 0;
  }

  track.innerHTML = "";

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
  }

  heroSlides.forEach((slide, index) => {
    const slideElement = createElement(
      "div",
      `slide${index === currentSlideIndex ? " active" : ""}`
    );

    slideElement.setAttribute("aria-hidden", index === currentSlideIndex ? "false" : "true");

    const image = document.createElement("img");

    image.src = slide.image;
    image.alt = slide.title || "Vinayaka Festival image";

    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";

    if (index === 0) {
      image.fetchPriority = "high";
    }

    image.draggable = false;

    image.addEventListener("error", () => {
      image.style.background = "linear-gradient(135deg,#5d0007,#d97706)";
      image.removeAttribute("src");
    });

    const overlay = createElement("div", "slide-overlay");

    const textContainer = createElement("div", "slide-text");

    const tag = createElement(
      "span",
      "slide-caption-tag",
      slide.tag || ""
    );

    const title = createElement(
      "h2",
      "slide-title",
      slide.title || ""
    );

    textContainer.append(tag, title);

    const actions = createElement("div", "slide-actions");

    const link = document.createElement("a");

    link.className = "btn-primary-action";
    link.href = slide.ctaLink || "#";
    link.setAttribute("aria-label", slide.ctaText || "Explore");

    const linkText = createElement(
      "span",
      "",
      slide.ctaText || "Explore"
    );

    const arrow = createElement(
      "span",
      "material-symbols-outlined",
      "arrow_forward"
    );

    arrow.setAttribute("aria-hidden", "true");

    link.append(linkText, arrow);
    actions.appendChild(link);

    overlay.append(textContainer, actions);

    slideElement.append(image, overlay);

    track.appendChild(slideElement);

    if (dotsContainer) {
      const dot = document.createElement("button");

      dot.type = "button";
      dot.className =
        index === currentSlideIndex ? "active" : "";

      dot.setAttribute(
        "aria-label",
        `Go to slide ${index + 1}`
      );

      dot.setAttribute(
        "aria-current",
        index === currentSlideIndex ? "true" : "false"
      );

      dot.addEventListener("click", () => {
        goToSlide(index);
      });

      dotsContainer.appendChild(dot);
    }
  });

  /*
   * Use onclick rather than addEventListener so that
   * repeated carousel initialization never creates
   * duplicate handlers.
   */
  if (prevButton) {
    prevButton.onclick = prevSlide;
  }

  if (nextButton) {
    nextButton.onclick = nextSlide;
  }

  setupSlideshowTouch(track);

  setupSlideshowHover();

  updateSlideshowAccessibility();

  slideshowInitialized = true;

  startSlideshowTimer();
}

function showSlide(index) {
  const slides = document.querySelectorAll(
    "#slideshowTrack .slide"
  );

  const dots = document.querySelectorAll(
    "#slideshowDots button"
  );

  if (!slides.length) {
    return;
  }

  currentSlideIndex =
    (index + heroSlides.length) % heroSlides.length;

  slides.forEach((slide, i) => {
    const active = i === currentSlideIndex;

    slide.classList.toggle("active", active);

    slide.setAttribute(
      "aria-hidden",
      active ? "false" : "true"
    );
  });

  dots.forEach((dot, i) => {
    const active = i === currentSlideIndex;

    dot.classList.toggle("active", active);

    dot.setAttribute(
      "aria-current",
      active ? "true" : "false"
    );
  });

  updateSlideshowAccessibility();
}

function updateSlideshowAccessibility() {
  const slides = document.querySelectorAll(
    "#slideshowTrack .slide"
  );

  slides.forEach((slide, index) => {
    slide.setAttribute(
      "aria-hidden",
      index === currentSlideIndex ? "false" : "true"
    );
  });
}

function nextSlide() {
  if (!heroSlides.length) return;

  showSlide(currentSlideIndex + 1);
  restartSlideshowTimer();
}

function prevSlide() {
  if (!heroSlides.length) return;

  showSlide(currentSlideIndex - 1);
  restartSlideshowTimer();
}

function goToSlide(index) {
  showSlide(index);
  restartSlideshowTimer();
}

function startSlideshowTimer() {
  clearSlideshowTimer();

  if (
    heroSlides.length <= 1 ||
    slideshowPaused ||
    prefersReducedMotion()
  ) {
    return;
  }

  slideshowTimer = window.setInterval(() => {
    if (!slideshowPaused && !document.hidden) {
      showSlide(currentSlideIndex + 1);
    }
  }, 5000);
}

function restartSlideshowTimer() {
  clearSlideshowTimer();
  startSlideshowTimer();
}

function clearSlideshowTimer() {
  if (slideshowTimer) {
    clearInterval(slideshowTimer);
    slideshowTimer = null;
  }
}

function prefersReducedMotion() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

/* =========================================================
   CAROUSEL TOUCH / SWIPE
   ========================================================= */

let touchStartX = 0;
let touchStartY = 0;

function setupSlideshowTouch(track) {
  if (!track || track.dataset.touchReady === "true") {
    return;
  }

  track.dataset.touchReady = "true";

  track.addEventListener(
    "touchstart",
    event => {
      const touch = event.changedTouches[0];

      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    event => {
      const touch = event.changedTouches[0];

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (
        Math.abs(deltaX) > 45 &&
        Math.abs(deltaX) > Math.abs(deltaY)
      ) {
        if (deltaX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    },
    { passive: true }
  );
}

/* =========================================================
   CAROUSEL HOVER / FOCUS
   ========================================================= */

function setupSlideshowHover() {
  const container = document.querySelector(
    ".hero-slideshow-container"
  );

  if (!container || container.dataset.hoverReady === "true") {
    return;
  }

  container.dataset.hoverReady = "true";

  container.addEventListener("mouseenter", () => {
    slideshowPaused = true;
    clearSlideshowTimer();
  });

  container.addEventListener("mouseleave", () => {
    slideshowPaused = false;
    startSlideshowTimer();
  });

  container.addEventListener("focusin", () => {
    slideshowPaused = true;
    clearSlideshowTimer();
  });

  container.addEventListener("focusout", event => {
    if (!container.contains(event.relatedTarget)) {
      slideshowPaused = false;
      startSlideshowTimer();
    }
  });
}

/* =========================================================
   KEYBOARD CAROUSEL CONTROLS
   ========================================================= */

function setupCarouselKeyboard() {
  document.addEventListener("keydown", event => {
    const modal = getElement("carouselModal");

    if (modal && isModalVisible(modal)) {
      return;
    }

    const target = event.target;

    if (
      target &&
      (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
      )
    ) {
      return;
    }

    if (event.key === "ArrowLeft") {
      prevSlide();
    }

    if (event.key === "ArrowRight") {
      nextSlide();
    }
  });
}

/* =========================================================
   PAGE VISIBILITY
   ========================================================= */

function setupPageVisibility() {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearSlideshowTimer();
    } else {
      startSlideshowTimer();
    }
  });
}

/* =========================================================
   SCHEDULE
   ========================================================= */

function renderSchedule(filter = "all") {
  const container = getElement(
    "scheduleCardsContainer"
  );

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const normalizedFilter = String(filter)
    .toLowerCase()
    .trim();

  const filtered =
    normalizedFilter === "all"
      ? scheduleData
      : scheduleData.filter(item =>
          String(item.category)
            .toLowerCase()
            .includes(normalizedFilter)
        );

  if (!filtered.length) {
    const empty = createElement(
      "div",
      "empty-state"
    );

    empty.style.gridColumn = "1 / -1";

    const icon = createElement(
      "span",
      "material-symbols-outlined",
      "event_busy"
    );

    const title = createElement(
      "strong",
      "",
      "No events found"
    );

    const text = createElement(
      "p",
      "",
      "Try selecting another schedule category."
    );

    empty.append(icon, title, text);

    container.appendChild(empty);

    return;
  }

  filtered.forEach(item => {
    const card = createElement(
      "article",
      `schedule-card${item.highlight ? " highlighted" : ""}`
    );

    const day = createElement(
      "div",
      "schedule-day",
      `${item.day} • ${item.weekday}`
    );

    const title = createElement(
      "h3",
      "",
      item.title
    );

    const date = createElement(
      "p",
      "",
      item.date
    );

    const description = createElement(
      "p",
      "",
      item.description
    );

    const time = createElement(
      "div",
      "schedule-time"
    );

    const timeIcon = createElement(
      "span",
      "material-symbols-outlined",
      "schedule"
    );

    const timeText = createElement(
      "span",
      "",
      item.time
    );

    time.append(timeIcon, timeText);

    const location = createElement(
      "p",
      "",
      `📍 ${item.location}`
    );

    card.append(
      day,
      title,
      date,
      description,
      time,
      location
    );

    if (item.evening) {
      const evening = createElement(
        "p",
        "",
        item.evening
      );

      card.appendChild(evening);
    }

    container.appendChild(card);
  });
}

/* =========================================================
   SCHEDULE FILTERS
   ========================================================= */

function setupScheduleFilters() {
  const filterButtons = document.querySelectorAll(
    "[data-schedule-filter]"
  );

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter =
        button.dataset.scheduleFilter || "all";

      filterButtons.forEach(btn => {
        btn.classList.toggle(
          "active",
          btn === button
        );
      });

      renderSchedule(filter);
    });
  });
}

/* =========================================================
   YAJAMAN SLOTS
   ========================================================= */

let yajamanSlots = readStorage(
  STORAGE_KEYS.yajamanSlots,
  DEFAULT_YAJAMAN_SLOTS
);

let currentSlotIndex = null;

function renderYajamanSlots() {
  const tbody = getElement(
    "yajamanTableBody"
  );

  if (!tbody) {
    return;
  }

  tbody.innerHTML = "";

  yajamanSlots.forEach((slot, index) => {
    const row = document.createElement("tr");

    const cells = [
      `${slot.day} • ${slot.date}`,
      slot.time,
      slot.flat || "—",
      slot.family || "Open Slot",
      slot.puja,
      slot.gotram || "—"
    ];

    cells.forEach(value => {
      const td = createElement("td", "", value);
      row.appendChild(td);
    });

    const statusTd = document.createElement("td");

    const statusClass =
      slot.status === "Confirmed (Sitting)"
        ? "status-confirmed"
        : slot.urgent
        ? "status-urgent"
        : "status-open";

    const status = createElement(
      "span",
      `status-badge ${statusClass}`,
      slot.status || "Open"
    );

    statusTd.appendChild(status);

    const actionTd = document.createElement("td");

    const button = createElement(
      "button",
      "slot-action",
      slot.family
        ? "View / Update"
        : "Book Slot"
    );

    button.type = "button";

    button.addEventListener("click", () => {
      openSlotModal(index);
    });

    actionTd.appendChild(button);

    row.append(statusTd, actionTd);

    tbody.appendChild(row);
  });
}

function openSlotModal(index) {
  currentSlotIndex = index;

  const modal = getElement("slotModal");

  if (!modal) {
    return;
  }

  const slot = yajamanSlots[index];

  setFieldValue(
    "slotFamily",
    slot?.family || ""
  );

  setFieldValue(
    "slotFlat",
    slot?.flat || ""
  );

  setFieldValue(
    "slotGotram",
    slot?.gotram || ""
  );

  setFieldValue(
    "slotPuja",
    slot?.puja || ""
  );

  setModalVisible(modal, true);
}

function closeSlotModal() {
  closeModalById("slotModal");
  currentSlotIndex = null;
}

function onSlotSelectionChange() {
  const flat = getFieldValue("slotFlat");

  if (flat) {
    const family = getElement("slotFamily");

    if (family && !family.value) {
      family.focus();
    }
  }
}

function saveSlotDetails() {
  if (
    currentSlotIndex === null ||
    !yajamanSlots[currentSlotIndex]
  ) {
    return;
  }

  const slot = yajamanSlots[currentSlotIndex];

  slot.family = getFieldValue("slotFamily").trim();
  slot.flat = getFieldValue("slotFlat").trim();
  slot.gotram = getFieldValue("slotGotram").trim();

  if (slot.family && slot.flat) {
    slot.status = "Confirmed";
    slot.urgent = false;
  } else {
    slot.status =
      currentSlotIndex === 1
        ? "ONLY 1 SLOT LEFT"
        : "Open";

    slot.urgent = currentSlotIndex === 1;
  }

  if (
    writeStorage(
      STORAGE_KEYS.yajamanSlots,
      yajamanSlots
    )
  ) {
    renderYajamanSlots();

    closeSlotModal();

    showToast(
      slot.family
        ? `${slot.family} booking saved successfully.`
        : "Slot updated successfully."
    );
  }
}

function clearSlotBooking() {
  if (
    currentSlotIndex === null ||
    !yajamanSlots[currentSlotIndex]
  ) {
    return;
  }

  const slot = yajamanSlots[currentSlotIndex];

  slot.family = "";
  slot.flat = "";
  slot.gotram = "";

  slot.status =
    currentSlotIndex === 1
      ? "ONLY 1 SLOT LEFT"
      : "Open";

  slot.urgent = currentSlotIndex === 1;

  writeStorage(
    STORAGE_KEYS.yajamanSlots,
    yajamanSlots
  );

  renderYajamanSlots();

  closeSlotModal();

  showToast("Slot released successfully.");
}

/* =========================================================
   ANNADANAM
   ========================================================= */

let annadanamDonors = readStorage(
  STORAGE_KEYS.annadanamDonors,
  DEFAULT_ANNADANAM_DONORS
);

let currentAnnadanamIndex = null;

function renderAnnadanamDonors() {
  const tbody = getElement(
    "annadanamTableBody"
  );

  if (!tbody) {
    return;
  }

  tbody.innerHTML = "";

  annadanamDonors.forEach((donor, index) => {
    const row = document.createElement("tr");

    const values = [
      donor.item,
      donor.donor || "Open Sponsorship",
      donor.flat || "—",
      donor.date || "Festival Day",
      donor.status
    ];

    values.forEach((value, valueIndex) => {
      const td = createElement(
        "td",
        "",
        value
      );

      if (valueIndex === 4) {
        const statusClass =
          donor.status === "CONFIRMED HOST"
            ? "status-confirmed"
            : "status-open";

        td.innerHTML = "";

        const badge = createElement(
          "span",
          `status-badge ${statusClass}`,
          donor.status
        );

        td.appendChild(badge);
      }

      row.appendChild(td);
    });

    const actionTd = document.createElement("td");

    const button = createElement(
      "button",
      "table-action",
      donor.donor
        ? "View / Update"
        : "Sponsor"
    );

    button.type = "button";

    button.addEventListener("click", () => {
      openAnnadanamModal(index);
    });

    actionTd.appendChild(button);

    row.appendChild(actionTd);

    tbody.appendChild(row);
  });
}

function openAnnadanamModal(index) {
  currentAnnadanamIndex = index;

  const modal = getElement(
    "annadanamModal"
  );

  if (!modal) {
    return;
  }

  const donor =
    annadanamDonors[index];

  setFieldValue(
    "annadanamDonor",
    donor?.donor || ""
  );

  setFieldValue(
    "annadanamFlat",
    donor?.flat || ""
  );

  setModalVisible(modal, true);
}

function closeAnnadanamModal() {
  closeModalById("annadanamModal");
  currentAnnadanamIndex = null;
}

function onAnnadanamSelectionChange() {
  const donor = getFieldValue(
    "annadanamDonor"
  );

  if (donor) {
    const flat = getElement(
      "annadanamFlat"
    );

    if (flat && !flat.value) {
      flat.focus();
    }
  }
}

function saveAnnadanamSponsorship() {
  if (
    currentAnnadanamIndex === null ||
    !annadanamDonors[currentAnnadanamIndex]
  ) {
    return;
  }

  const donor =
    annadanamDonors[currentAnnadanamIndex];

  donor.donor =
    getFieldValue("annadanamDonor").trim();

  donor.flat =
    getFieldValue("annadanamFlat").trim();

  donor.status =
    donor.donor
      ? "CONFIRMED"
      : "Open";

  if (
    writeStorage(
      STORAGE_KEYS.annadanamDonors,
      annadanamDonors
    )
  ) {
    renderAnnadanamDonors();

    closeAnnadanamModal();

    showToast(
      donor.donor
        ? `${donor.donor} sponsorship saved.`
        : "Sponsorship updated."
    );
  }
}

function clearAnnadanamSponsorship() {
  if (
    currentAnnadanamIndex === null ||
    !annadanamDonors[currentAnnadanamIndex]
  ) {
    return;
  }

  const donor =
    annadanamDonors[currentAnnadanamIndex];

  donor.donor = "";
  donor.flat = "";
  donor.status = "Open";

  writeStorage(
    STORAGE_KEYS.annadanamDonors,
    annadanamDonors
  );

  renderAnnadanamDonors();

  closeAnnadanamModal();

  showToast("Annadanam sponsorship released.");
}

/* =========================================================
   GALLERY
   ========================================================= */

let galleryMoments = readStorage(
  STORAGE_KEYS.gallery,
  DEFAULT_GALLERY
);

let currentLightboxIndex = null;

function renderGallery() {
  const grid = getElement("galleryGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  if (!galleryMoments.length) {
    const empty = createElement(
      "div",
      "empty-state"
    );

    empty.style.gridColumn = "1 / -1";

    const icon = createElement(
      "span",
      "material-symbols-outlined",
      "photo_library"
    );

    const title = createElement(
      "strong",
      "",
      "No festival photos yet"
    );

    const text = createElement(
      "p",
      "",
      "Add the first festival moment to the gallery."
    );

    empty.append(icon, title, text);

    grid.appendChild(empty);

    return;
  }

  galleryMoments.forEach((photo, index) => {
    const card = createElement(
      "article",
      "gallery-card"
    );

    card.tabIndex = 0;
    card.setAttribute(
      "role",
      "button"
    );

    card.setAttribute(
      "aria-label",
      `Open ${photo.title || "festival photo"}`
    );

    const image = document.createElement("img");

    image.src = photo.image;
    image.alt =
      photo.title ||
      "Vinayaka Festival moment";

    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("error", () => {
      image.removeAttribute("src");
      image.style.background =
        "linear-gradient(135deg,#650008,#d97706)";
    });

    const overlay = createElement(
      "div",
      "gallery-overlay"
    );

    const tag = createElement(
      "span",
      "gallery-tag",
      photo.tag || "Festival Moment"
    );

    const title = createElement(
      "div",
      "gallery-title",
      photo.title || "Festival Moment"
    );

    overlay.append(tag, title);

    const deleteButton = createElement(
      "button",
      "gallery-delete-btn"
    );

    deleteButton.type = "button";
    deleteButton.title = "Delete photo";
    deleteButton.setAttribute(
      "aria-label",
      "Delete photo"
    );

    const deleteIcon = createElement(
      "span",
      "material-symbols-outlined",
      "delete"
    );

    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener(
      "click",
      event => {
        event.stopPropagation();

        deleteGalleryPhoto(index);
      }
    );

    card.append(
      image,
      overlay,
      deleteButton
    );

    card.addEventListener(
      "click",
      event => {
        if (
          event.target.closest(
            ".gallery-delete-btn"
          )
        ) {
          return;
        }

        openLightbox(index);
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

          openLightbox(index);
        }
      }
    );

    grid.appendChild(card);
  });
}

/* =========================================================
   LIGHTBOX
   ========================================================= */

function openLightbox(index) {
  currentLightboxIndex = index;

  const modal = getElement(
    "galleryModal"
  );

  const image = getElement(
    "modalImg"
  );

  if (!modal || !image) {
    return;
  }

  const photo =
    galleryMoments[index];

  if (!photo) {
    return;
  }

  image.src = photo.image;
  image.alt =
    photo.title ||
    "Festival photograph";

  setModalVisible(modal, true);
}

function closeLightbox() {
  closeModalById("galleryModal");

  currentLightboxIndex = null;

  const image = getElement("modalImg");

  if (image) {
    image.removeAttribute("src");
  }
}

function deleteGalleryPhoto(index) {
  if (
    index < 0 ||
    index >= galleryMoments.length
  ) {
    return;
  }

  const photo =
    galleryMoments[index];

  const confirmed = window.confirm(
    `Delete "${photo.title || "this photo"}"?`
  );

  if (!confirmed) {
    return;
  }

  galleryMoments.splice(index, 1);

  writeStorage(
    STORAGE_KEYS.gallery,
    galleryMoments
  );

  renderGallery();

  showToast("Photo deleted.");
}

function deleteCurrentLightboxPhoto() {
  if (
    currentLightboxIndex === null
  ) {
    return;
  }

  const index =
    currentLightboxIndex;

  closeLightbox();

  deleteGalleryPhoto(index);
}

function resetGalleryToDefault() {
  const confirmed = window.confirm(
    "Reset the gallery to the default festival photos?"
  );

  if (!confirmed) {
    return;
  }

  galleryMoments =
    structuredCloneSafe(
      DEFAULT_GALLERY
    );

  writeStorage(
    STORAGE_KEYS.gallery,
    galleryMoments
  );

  renderGallery();

  showToast(
    "Gallery restored to default photos."
  );
}

/* =========================================================
   IMAGE UPLOAD / OPTIMIZATION
   ========================================================= */

function previewSelectedPhoto(event) {
  const file =
    event?.target?.files?.[0];

  const preview =
    getElement("photoPreview");

  if (!file || !preview) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    showToast(
      "Please select an image file.",
      "error"
    );

    event.target.value = "";

    return;
  }

  const reader =
    new FileReader();

  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = "block";
  };

  reader.readAsDataURL(file);
}

async function handlePhotoUpload(event) {
  event?.preventDefault();

  const input =
    getElement("photoFile");

  const file =
    input?.files?.[0];

  if (!file) {
    showToast(
      "Please select a photo first.",
      "warning"
    );

    return;
  }

  try {
    const optimized =
      await optimizeImageFile(
        file,
        1920,
        0.82
      );

    addPhotoToGallery(
      optimized,
      getFieldValue("photoTitle").trim(),
      getFieldValue("photoTag").trim()
    );

    if (input) {
      input.value = "";
    }

    const form =
      getElement("photoUploadForm");

    if (form) {
      form.reset();
    }

    const preview =
      getElement("photoPreview");

    if (preview) {
      preview.removeAttribute("src");
      preview.style.display = "none";
    }

    closePhotoUploadModal();

    showToast(
      "Festival photo added successfully."
    );
  } catch (error) {
    console.error(error);

    showToast(
      "Unable to process this image.",
      "error"
    );
  }
}

function addPhotoToGallery(
  imageData,
  title = "",
  tag = ""
) {
  galleryMoments.unshift({
    image: imageData,
    title: title || "Festival Moment",
    tag: tag || "Festival Memory"
  });

  if (
    writeStorage(
      STORAGE_KEYS.gallery,
      galleryMoments
    )
  ) {
    renderGallery();
  }
}

/* =========================================================
   IMAGE OPTIMIZATION
   ========================================================= */

function optimizeImageFile(
  file,
  maxDimension = 1920,
  quality = 0.82
) {
  return new Promise(
    (resolve, reject) => {
      if (!file.type.startsWith("image/")) {
        reject(
          new Error(
            "Unsupported image type."
          )
        );

        return;
      }

      if (file.size > 12 * 1024 * 1024) {
        reject(
          new Error(
            "Image is larger than 12 MB."
          )
        );

        return;
      }

      const reader =
        new FileReader();

      reader.onerror = () =>
        reject(
          new Error(
            "Unable to read image."
          )
        );

      reader.onload = () => {
        const image =
          new Image();

        image.onload = () => {
          let width = image.width;
          let height = image.height;

          const scale =
            Math.min(
              1,
              maxDimension /
                Math.max(
                  width,
                  height
                )
            );

          width = Math.round(
            width * scale
          );

          height = Math.round(
            height * scale
          );

          const canvas =
            document.createElement(
              "canvas"
            );

          canvas.width = width;
          canvas.height = height;

          const context =
            canvas.getContext(
              "2d",
              {
                alpha: false
              }
            );

          if (!context) {
            reject(
              new Error(
                "Canvas is unavailable."
              )
            );

            return;
          }

          context.imageSmoothingEnabled =
            true;

          context.imageSmoothingQuality =
            "high";

          context.drawImage(
            image,
            0,
            0,
            width,
            height
          );

          const output =
            canvas.toDataURL(
              "image/jpeg",
              quality
            );

          resolve(output);
        };

        image.onerror = () =>
          reject(
            new Error(
              "Unable to decode image."
            )
          );

        image.src =
          reader.result;
      };

      reader.readAsDataURL(file);
    }
  );
}

/* =========================================================
   PHOTO UPLOAD MODAL
   ========================================================= */

function openPhotoUploadModal() {
  const modal =
    getElement(
      "photoUploadModal"
    );

  if (modal) {
    setModalVisible(
      modal,
      true
    );
  }
}

function closePhotoUploadModal() {
  closeModalById(
    "photoUploadModal"
  );
}

/* =========================================================
   CAROUSEL MANAGEMENT
   ========================================================= */

function openCarouselModal() {
  const modal =
    getElement(
      "carouselModal"
    );

  if (!modal) {
    return;
  }

  renderCarouselSlidesList();

  setModalVisible(
    modal,
    true
  );
}

function closeCarouselModal() {
  closeModalById(
    "carouselModal"
  );
}

function switchCarouselTab(tabName) {
  document
    .querySelectorAll(
      "[data-carousel-tab]"
    )
    .forEach(tab => {
      tab.classList.toggle(
        "active",
        tab.dataset.carouselTab ===
          tabName
      );
    });

  document
    .querySelectorAll(
      "[data-carousel-panel]"
    )
    .forEach(panel => {
      panel.style.display =
        panel.dataset.carouselPanel ===
        tabName
          ? ""
          : "none";
    });
}

function previewCarouselPhoto(event) {
  const file =
    event?.target?.files?.[0];

  const preview =
    getElement(
      "carouselPhotoPreview"
    );

  if (!file || !preview) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    showToast(
      "Please select an image file.",
      "error"
    );

    event.target.value = "";

    return;
  }

  const reader =
    new FileReader();

  reader.onload = () => {
    preview.src =
      reader.result;

    preview.style.display =
      "block";
  };

  reader.readAsDataURL(file);
}

async function handleCarouselSlideUpload(
  event
) {
  event?.preventDefault();

  const input =
    getElement(
      "carouselPhotoFile"
    );

  const file =
    input?.files?.[0];

  if (!file) {
    showToast(
      "Please select a slide image.",
      "warning"
    );

    return;
  }

  try {
    const optimized =
      await optimizeImageFile(
        file,
        1920,
        0.82
      );

    addSlideToCarousel(
      optimized,
      getFieldValue(
        "carouselSlideTag"
      ).trim(),
      getFieldValue(
        "carouselSlideTitle"
      ).trim(),
      getFieldValue(
        "carouselSlideCta"
      ).trim(),
      getFieldValue(
        "carouselSlideLink"
      ).trim()
    );

    if (input) {
      input.value = "";
    }

    const form =
      getElement(
        "carouselUploadForm"
      );

    if (form) {
      form.reset();
    }

    const preview =
      getElement(
        "carouselPhotoPreview"
      );

    if (preview) {
      preview.removeAttribute(
        "src"
      );

      preview.style.display =
        "none";
    }

    showToast(
      "Carousel slide added successfully."
    );
  } catch (error) {
    console.error(error);

    showToast(
      "Unable to process the slide image.",
      "error"
    );
  }
}

function addSlideToCarousel(
  image,
  tag,
  title,
  ctaText,
  ctaLink
) {
  heroSlides.push({
    image,
    tag:
      tag ||
      "Vinayaka Festival 2026",
    title:
      title ||
      "Festival Celebration",
    ctaText:
      ctaText ||
      "Explore Festival",
    ctaLink:
      ctaLink ||
      "#schedule"
  });

  if (
    writeStorage(
      STORAGE_KEYS.heroSlides,
      heroSlides
    )
  ) {
    currentSlideIndex =
      heroSlides.length - 1;

    initSlideshow();

    renderCarouselSlidesList();
  }
}

function renderCarouselSlidesList() {
  const container =
    getElement(
      "carouselSlidesList"
    );

  if (!container) {
    return;
  }

  container.innerHTML = "";

  heroSlides.forEach(
    (slide, index) => {
      const item =
        createElement(
          "div",
          "carousel-slide-item"
        );

      const image =
        document.createElement(
          "img"
        );

      image.src =
        slide.image;

      image.alt =
        slide.title ||
        `Slide ${index + 1}`;

      image.loading = "lazy";

      const details =
        createElement(
          "div"
        );

      const title =
        createElement(
          "strong",
          "",
          slide.title ||
            `Slide ${index + 1}`
        );

      const tag =
        createElement(
          "span",
          "",
          slide.tag || ""
        );

      details.append(
        title,
        tag
      );

      const remove =
        createElement(
          "button",
          "table-action",
          "Remove"
        );

      remove.type =
        "button";

      remove.addEventListener(
        "click",
        () => {
          removeCarouselSlide(
            index
          );
        }
      );

      item.append(
        image,
        details,
        remove
      );

      container.appendChild(
        item
      );
    }
  );
}

function removeCarouselSlide(
  index
) {
  if (
    heroSlides.length <= 1
  ) {
    showToast(
      "At least one carousel slide is required.",
      "warning"
    );

    return;
  }

  const slide =
    heroSlides[index];

  const confirmed =
    window.confirm(
      `Remove "${slide.title || "this slide"}"?`
    );

  if (!confirmed) {
    return;
  }

  heroSlides.splice(
    index,
    1
  );

  if (
    currentSlideIndex >=
    heroSlides.length
  ) {
    currentSlideIndex =
      heroSlides.length - 1;
  }

  writeStorage(
    STORAGE_KEYS.heroSlides,
    heroSlides
  );

  initSlideshow();

  renderCarouselSlidesList();

  showToast(
    "Carousel slide removed."
  );
}

function resetCarouselSlidesToDefault() {
  const confirmed =
    window.confirm(
      "Reset the carousel to the original festival slides?"
    );

  if (!confirmed) {
    return;
  }

  heroSlides =
    structuredCloneSafe(
      DEFAULT_HERO_SLIDES
    );

  currentSlideIndex = 0;

  writeStorage(
    STORAGE_KEYS.heroSlides,
    heroSlides
  );

  initSlideshow();

  renderCarouselSlidesList();

  showToast(
    "Carousel restored to default slides."
  );
}

/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function setupMobileNav() {
  const drawer =
    document.querySelector(
      ".mobile-drawer"
    );

  const toggle =
    document.querySelector(
      ".mobile-menu-toggle"
    );

  if (!drawer || !toggle) {
    return;
  }

  window.toggleMobileMenu =
    function () {
      const open =
        drawer.classList.toggle(
          "open"
        );

      toggle.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

      document.body.style.overflow =
        open ? "hidden" : "";
    };

  toggle.setAttribute(
    "aria-expanded",
    "false"
  );

  toggle.addEventListener(
    "click",
    window.toggleMobileMenu
  );

  drawer
    .querySelectorAll("a")
    .forEach(link => {
      link.addEventListener(
        "click",
        () => {
          if (
            drawer.classList.contains(
              "open"
            )
          ) {
            window.toggleMobileMenu();
          }
        }
      );
    });

  document.addEventListener(
    "click",
    event => {
      if (
        !drawer.classList.contains(
          "open"
        )
      ) {
        return;
      }

      if (
        !drawer.contains(
          event.target
        ) &&
        !toggle.contains(
          event.target
        )
      ) {
        window.toggleMobileMenu();
      }
    }
  );

  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key === "Escape" &&
        drawer.classList.contains(
          "open"
        )
      ) {
        window.toggleMobileMenu();

        toggle.focus();
      }
    }
  );

  window.addEventListener(
    "resize",
    () => {
      if (
        window.innerWidth > 960 &&
        drawer.classList.contains(
          "open"
        )
      ) {
        window.toggleMobileMenu();
      }
    }
  );
}

/* =========================================================
   SCROLL SPY
   ========================================================= */

function setupScrollSpy() {
  const links =
    document.querySelectorAll(
      ".desktop-nav .nav-link"
    );

  if (!links.length) {
    return;
  }

  const sections = [];

  links.forEach(link => {
    const href =
      link.getAttribute(
        "href"
      );

    if (
      href &&
      href.startsWith("#")
    ) {
      const section =
        document.querySelector(
          href
        );

      if (section) {
        sections.push({
          section,
          link
        });
      }
    }
  });

  if (!sections.length) {
    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {
        entries.forEach(
          entry => {
            if (
              entry.isIntersecting
            ) {
              sections.forEach(
                item => {
                  item.link.classList.toggle(
                    "active",
                    item.section ===
                      entry.target
                  );
                }
              );
            }
          }
        );
      },
      {
        rootMargin:
          "-25% 0px -60% 0px",
        threshold: 0
      }
    );

  sections.forEach(
    item =>
      observer.observe(
        item.section
      )
  );
}

/* =========================================================
   MODAL HELPERS
   ========================================================= */

function isModalVisible(
  modal
) {
  if (!modal) {
    return false;
  }

  const style =
    window.getComputedStyle(
      modal
    );

  return (
    style.display !== "none" &&
    style.visibility !== "hidden"
  );
}

function setModalVisible(
  modal,
  visible
) {
  if (!modal) {
    return;
  }

  if (visible) {
    modal.classList.add(
      "open"
    );

    modal.style.display =
      "flex";

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";
  } else {
    modal.classList.remove(
      "open"
    );

    modal.style.display =
      "none";

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    restoreBodyScroll();
  }
}

function closeModalById(
  id
) {
  const modal =
    getElement(id);

  if (!modal) {
    return;
  }

  modal.classList.remove(
    "open"
  );

  modal.style.display =
    "none";

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  restoreBodyScroll();
}

function restoreBodyScroll() {
  const anyModalOpen =
    Array.from(
      document.querySelectorAll(
        ".modal, .modal-overlay, #galleryModal"
      )
    ).some(
      modal =>
        modal.classList.contains(
          "open"
        ) ||
        isModalVisible(modal)
    );

  const drawerOpen =
    document.querySelector(
      ".mobile-drawer.open"
    );

  if (
    !anyModalOpen &&
    !drawerOpen
  ) {
    document.body.style.overflow =
      "";
  }
}

/* =========================================================
   BACKDROP + ESCAPE HANDLERS
   ========================================================= */

function setupGlobalModalHandlers() {
  document.addEventListener(
    "click",
    event => {
      const target =
        event.target;

      if (
        target.classList.contains(
          "modal"
        ) ||
        target.classList.contains(
          "modal-overlay"
        ) ||
        target.id ===
          "galleryModal"
      ) {
        const id =
          target.id;

        if (id) {
          closeModalById(id);
        }
      }
    }
  );

  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key !== "Escape"
      ) {
        return;
      }

      closeModalById(
        "slotModal"
      );

      closeModalById(
        "annadanamModal"
      );

      closeModalById(
        "photoUploadModal"
      );

      closeModalById(
        "carouselModal"
      );

      closeLightbox();
    }
  );
}

/* =========================================================
   FIELD HELPERS
   ========================================================= */

function getFieldValue(
  id
) {
  const element =
    getElement(id);

  return element
    ? String(
        element.value || ""
      )
    : "";
}

function setFieldValue(
  id,
  value
) {
  const element =
    getElement(id);

  if (element) {
    element.value =
      value ?? "";
  }
}

/* =========================================================
   TOAST
   ========================================================= */

function showToast(
  message,
  type = "success"
) {
  let container =
    getElement(
      "toastContainer"
    );

  if (!container) {
    container =
      createElement(
        "div"
      );

    container.id =
      "toastContainer";

    document.body.appendChild(
      container
    );
  }

  const toast =
    createElement(
      "div",
      `toast ${type}`
    );

  const iconName =
    type === "error"
      ? "error"
      : type === "warning"
      ? "warning"
      : "check_circle";

  const icon =
    createElement(
      "span",
      "material-symbols-outlined",
      iconName
    );

  icon.setAttribute(
    "aria-hidden",
    "true"
  );

  const text =
    createElement(
      "div",
      "",
      String(message)
    );

  toast.append(
    icon,
    text
  );

  container.appendChild(
    toast
  );

  window.setTimeout(
    () => {
      toast.style.opacity =
        "0";

      toast.style.transform =
        "translateY(8px)";

      window.setTimeout(
        () => {
          toast.remove();
        },
        220
      );
    },
    3200
  );
}

/* =========================================================
   SMOOTH ANCHOR LINKS
   ========================================================= */

function setupSmoothLinks() {
  document.addEventListener(
    "click",
    event => {
      const link =
        event.target.closest(
          'a[href^="#"]'
        );

      if (!link) {
        return;
      }

      const href =
        link.getAttribute(
          "href"
        );

      if (
        !href ||
        href === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(
          href
        );

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior:
          prefersReducedMotion()
            ? "auto"
            : "smooth",
        block: "start"
      });
    }
  );
}

/* =========================================================
   PRELOAD FIRST HERO IMAGE
   ========================================================= */

function preloadFirstHeroImage() {
  if (
    !heroSlides.length ||
    !heroSlides[0]?.image
  ) {
    return;
  }

  const image =
    new Image();

  image.src =
    heroSlides[0].image;
}

/* =========================================================
   GLOBAL PUBLIC API
   ========================================================= */

window.openSlotModal =
  openSlotModal;

window.closeSlotModal =
  closeSlotModal;

window.onSlotSelectionChange =
  onSlotSelectionChange;

window.saveSlotDetails =
  saveSlotDetails;

window.clearSlotBooking =
  clearSlotBooking;

window.openAnnadanamModal =
  openAnnadanamModal;

window.closeAnnadanamModal =
  closeAnnadanamModal;

window.onAnnadanamSelectionChange =
  onAnnadanamSelectionChange;

window.saveAnnadanamSponsorship =
  saveAnnadanamSponsorship;

window.clearAnnadanamSponsorship =
  clearAnnadanamSponsorship;

window.openLightbox =
  openLightbox;

window.closeLightbox =
  closeLightbox;

window.deleteGalleryPhoto =
  deleteGalleryPhoto;

window.deleteCurrentLightboxPhoto =
  deleteCurrentLightboxPhoto;

window.resetGalleryToDefault =
  resetGalleryToDefault;

window.openPhotoUploadModal =
  openPhotoUploadModal;

window.closePhotoUploadModal =
  closePhotoUploadModal;

window.previewSelectedPhoto =
  previewSelectedPhoto;

window.handlePhotoUpload =
  handlePhotoUpload;

window.openCarouselModal =
  openCarouselModal;

window.closeCarouselModal =
  closeCarouselModal;

window.switchCarouselTab =
  switchCarouselTab;

window.previewCarouselPhoto =
  previewCarouselPhoto;

window.handleCarouselSlideUpload =
  handleCarouselSlideUpload;

window.addSlideToCarousel =
  addSlideToCarousel;

window.renderCarouselSlidesList =
  renderCarouselSlidesList;

window.removeCarouselSlide =
  removeCarouselSlide;

window.resetCarouselSlidesToDefault =
  resetCarouselSlidesToDefault;

window.nextSlide =
  nextSlide;

window.prevSlide =
  prevSlide;

window.goToSlide =
  goToSlide;

/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    initSlideshow();

    preloadFirstHeroImage();

    renderSchedule();

    renderYajamanSlots();

    renderAnnadanamDonors();

    renderGallery();

    setupMobileNav();

    setupScrollSpy();

    setupScheduleFilters();

    setupCarouselKeyboard();

    setupPageVisibility();

    setupGlobalModalHandlers();

    setupSmoothLinks();
  }
);
