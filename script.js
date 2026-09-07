/**
 * =========================================================
 * VINAYAKA FESTIVAL 2026
 * GOWTHAM SAI ELITE TOWERS
 *
 * Modern Festival Portal
 * Interactive Data + LocalStorage Management
 * =========================================================
 */


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

  contributionDefault: 1500,

  festivalStart: "2026-09-14T10:00:00",

  festivalEnd: "2026-09-19T23:59:59",

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
   2. HERO SLIDES
========================================================= */

const DEFAULT_HERO_SLIDES = [

  {
    image: "/images/eco_clay_ganesha.jpg",

    tag:
      "Sacred Idol Donated by Praveen (Flat 201)",

    title:
      "Eco-Friendly 7ft Clay Ganesha Murti",

    ctaText:
      "Explore Puja Slots",

    ctaLink:
      "#puja-annadanam"
  },

  {
    image: "/images/maha_annadanam_feast.jpg",

    tag:
      "Saturday, 19 Sept • Hosted by Mohan Rao (Flat 101)",

    title:
      "Grand Maha Annadanam Community Feast",

    ctaText:
      "View Annadanam Details",

    ctaLink:
      "#puja-annadanam"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",

    tag:
      "Every Evening at 07:30 PM",

    title:
      "Community Maha Aarti & Gotra Archana",

    ctaText:
      "Book Sankalpam Slot",

    ctaLink:
      "#puja-annadanam"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7WXI5MOp9_13R2TiRHCyAAeavOCdMOrgfpn83lXH-9Wd07EsNXU56aca_sVSM6Ia6AD7UNfKGm6TmIINptT6BODrgr3NRkSWQg53pJKvwOCDtfYCA5zQwTtw7W0d5iyfuNXB-Rrn-V7FJTjzuww-XNSXntWOLqEdqDvvrQmDHmvyQNjV0Uy_6a6TaamPBcx1_fuSlpZIauqGSF_izG3DMWp5EQwyZPAqxCwwUrntxaFtz88mwqe0b",

    tag:
      "Clubhouse Central Mandapam",

    title:
      "Vighnaharta Maha Mandap 2026",

    ctaText:
      "View Daily Schedule",

    ctaLink:
      "#schedule"
  }

];


let heroSlides = loadStorageArray(
  "vinayaka_2026_hero_slides",
  DEFAULT_HERO_SLIDES
);


/* =========================================================
   3. FESTIVAL SCHEDULE
========================================================= */

const scheduleData = [

  {
    dayNumber: "Day 01",
    date: "14 Sept (Mon)",
    badgeText: "Prana Pratishtha",
    badgeType: "gold",

    title:
      "Ganpati Sthapana & Kalasa Puja",

    time:
      "10:00 AM – 12:30 PM (Evening Aarti: 07:30 PM)",

    location:
      "Central Clubhouse Mandapam",

    description:
      "Ceremonial 7ft eco-clay idol installation donated by Praveen - Flat 201 around 10:00 AM followed by Vedic chanting, Panchamrutha Abhishekam, and evening Maha Aarti at 7:30 PM.",

    category:
      "puja special",

    isHighlight:
      false
  },


  {
    dayNumber: "Days 02 – 04",
    date: "15–17 Sept",
    badgeText: "Daily Puja Ritual",
    badgeType: "saffron",

    title:
      "Daily Puja & Evening Maha Aarti",

    time:
      "Every Day at 07:30 PM",

    location:
      "Tower Central Lawn Mandapam",

    description:
      "Daily Vedic sankalpam recited for registered resident families, followed by society evening Maha Aarti & Gotra Archana at 07:30 PM.",

    category:
      "puja",

    isHighlight:
      false
  },


  {
    dayNumber: "Day 05",
    date: "18 Sept (Fri)",
    badgeText: "Youth & Cultural",
    badgeType: "gold",

    title:
      "Children's Sloka, Rangoli & Daily Aarti",

    time:
      "05:00 PM – 07:30 PM (Aarti at 07:30 PM)",

    location:
      "Ground Floor Multi-Purpose Hall",

    description:
      "Kids clay Ganesha art competition, Rangoli contest, and Bhajan Sandhya followed by society evening Maha Aarti at 7:30 PM sharp.",

    category:
      "cultural puja",

    isHighlight:
      false
  },


  {
    dayNumber: "Day 06",
    date: "19 Sept (Sat) Morning",
    badgeText: "Grand Finale Puja",
    badgeType: "gold",

    title:
      "Final Maha Puja & Kalasa Udvasana",

    time:
      "10:00 AM – 12:30 PM",

    location:
      "Clubhouse Central Mandapam",

    description:
      "Maha Purnahuti, Kalasa Udvasana, Rajopachara Puja, and final blessings before the grand community Annadanam feast.",

    category:
      "puja special",

    isHighlight:
      false
  },


  {
    dayNumber: "Day 06",
    date: "19 Sept (Sat) Afternoon",
    badgeText: "Grand Community Feast",
    badgeType: "crimson",

    title:
      "Grand Maha Annadanam Community Feast",

    time:
      "12:30 PM – 03:30 PM",

    location:
      "Central Banquet Lawn & Dining Tent",

    description:
      "Grand festive traditional Satvik banana leaf banquet feast booked and hosted by Mohan Rao & Family (Flat 101) for all tower families, housekeeping staff, security guards, and devotees.",

    category:
      "special",

    isHighlight:
      true
  },


  {
    dayNumber: "Day 06",
    date: "19 Sept (Sat) Evening",
    badgeText: "Grand Finale",
    badgeType: "crimson",

    title:
      "Visarjan Shobha Yatra & Laddu Auction",

    time:
      "04:00 PM Onwards",

    location:
      "Mandapam to Hussain Sagar Immersion Point",

    description:
      "Sacred 21-Kg Laddu auction, Dappu vadyam & garba procession across our tower gates, concluding with ceremonial eco-immersion.",

    category:
      "special puja",

    isHighlight:
      false
  }

];


/* =========================================================
   4. PUJA YAJAMAN SLOTS
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


let yajamanSlots = loadStorageArray(
  "vinayaka_2026_yajaman_slots",
  DEFAULT_YAJAMAN_SLOTS
);


/* =========================================================
   5. ANNADANAM
========================================================= */

const DEFAULT_ANNADANAM_DONORS = [

  {
    donor: "Mohan Rao & Family",
    flat: "101",

    item:
      "Grand Maha Annadanam Community Feast (Saturday 19th Sept)",

    value:
      "CONFIRMED HOST",

    isVacant:
      false
  },

  {
    donor: "Available for Sponsorship",
    flat: "OPEN",

    item:
      "Sona Masoori Rice & Dal Kit (5 Bags)",

    value:
      "SLOT OPEN",

    isVacant:
      true
  },

  {
    donor: "Available for Sponsorship",
    flat: "OPEN",

    item:
      "Pure Desi Cow Ghee & Dry Fruits Kit",

    value:
      "SLOT OPEN",

    isVacant:
      true
  },

  {
    donor: "Available for Sponsorship",
    flat: "OPEN",

    item:
      "Fresh Cooking Vegetables & Grocery Kit",

    value:
      "SLOT OPEN",

    isVacant:
      true
  },

  {
    donor: "Available for Sponsorship",
    flat: "OPEN",

    item:
      "Eco-Friendly Banana Leaf Dining Plates & Mineral Water",

    value:
      "SLOT OPEN",

    isVacant:
      true
  }

];


let annadanamDonors = loadStorageArray(
  "vinayaka_2026_annadanam_donors",
  DEFAULT_ANNADANAM_DONORS
);


/* =========================================================
   6. GALLERY
========================================================= */

const DEFAULT_GALLERY_DATA = [

  {
    image: "/images/eco_clay_ganesha.jpg",
    tag: "Sacred Idol (Flat 201)",
    title: "Eco-Friendly 7ft Clay Ganesha Murti",
    alt:
      "Sacred 7ft eco-friendly clay Ganesha idol with floral garlands donated by Praveen (Flat 201)"
  },

  {
    image: "/images/maha_annadanam_feast.jpg",
    tag: "Annadanam (Flat 101)",
    title: "Grand Maha Annadanam Feast Setup",
    alt:
      "Traditional Satvik community feast on banana leaf hosted by Mohan Rao & Family (Flat 101)"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH7ps91U7ZGZ3vO0BiDCoTpARrEvQRkRHsN5gs5dnmHMIJIr9V2xAv7pYbAsSOV0JoXdO6qudjJ84Mic6moZk_INo_hJumvz_TlWppbGfx1ZAfxOZoCQpaTUshbP5ePWcD5a9s324FMjeQs-L2L0wafw2uqNcOV2a1cSrGtQxIxMYbB5JME4FKyJg6sdAofOdpfxIaPjadve0QIQL9PsspxPzVJrWaod-ciflez312eeRTOnGj9Z2C",

    tag: "Decorations",

    title:
      "Sacred Mandapam & Marigold Toran",

    alt:
      "Decorated festive Ganesha mandapam with warm golden brass diya lamps and marigold garlands"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCllnUoaC6qrMkEK_moydxUlHbu-hdkkmC1nO1XoWFeECkypipJ7vdadlpoF155p915hIFAD0hU7ughXi8qy-VxWTAi2vBrVh3NFPQ343I9vygxPgkaNIkq0iXsRba1B5FCfZh1ExnnzXp0uHooPGmz4hN7ylQ7_E3hV6IX2s6cFQkAzF0lSyTibPC78K-sglbYsctQ8UeLXB9OYhmnDUcA8EQPt1gm9JjFDP1ya9XUmPHOWTGbfgNy",

    tag: "Aarti",

    title:
      "Evening Maha Aarti & Devotional Hymns",

    alt:
      "Residents gathering for evening Maha Aarti with glowing brass lamps and devotional hymns"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXaPj0XdhZSSOYNmeic47VXfwKfHOL4AAUhdYI1fNpK6PfCLUeFaQ5SA8Y03okuCNdt6nMPyoCk3MTSneLAaGDnI8O7mo2lbiLCBPzhjZqcIIQ1OkgmMdMZ60Am5qkWWWE5aVKtzZYsdL7_PnlA2fqhKwYRi4h-Zmc3tZo-5E324c4G3wcO482jUPcJ-WTOo_tnGlaBBmkXymabqlse_H36h-TRSRTIwhQoq8AHJXC7Eu7riVo7WTF",

    tag: "Cultural",

    title:
      "Children's Rangoli & Art Fair",

    alt:
      "Society children participating in colorful Rangoli competition creating intricate floral mandalas"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPXg1eyUq-5ZghaKs92wu8mze2jzIe_Lat7tPCa3FbM1RVwk7fp3T2EF5Rh7MbAP2-jmr0pk0SuKmsxavT_j3EwxzCM9hrZ53kMJalE38RauujZ7KlDuHdV_9VgXCJ030jNIN8-AxmNtyFeg0GpOJFh3a6uZ438ift9OLLrfaHmjD-nSG_pXrvz50LOHyl_wIt_0M2dERe46sMGturl7gt6P-Mg8_PU3hFH3nqbPZQ9IXfIQIpvpxj",

    tag: "Prasadam",

    title:
      "108 Modakam Naivedyam Preparation",

    alt:
      "Traditional Indian sweet modaks and golden laddus arranged on sacred platters with jasmine flowers"
  },

  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuk0Kv_u8AituR5DWMzMvKsLRRS1PLZ1OYFxf9gp08WJXNIHU3IINBpl0muuQdz8ObQw7uIA0vrI_qILSBBzyUPJWzw8i78JsJHfSawtljWXsymI0t3lr8Dkz8LNSxLnH9q4B1fQg_I-A-TmGnCwTAphvUP7cJ403iGtlYUPAhg_PqIdUCnUgAEy3F6mpIuUZbUvH-F_U2famN09kLjUkVlWxE49-iQ_SU60kYtSzQJ5gW25OxMxUo",

    tag: "Visarjan",

    title:
      "Shobha Yatra & Eco-Immersion",

    alt:
      "Grand Visarjan procession of eco-friendly clay Ganesha idol with music and flower shower"
  }

];


let galleryData = loadStorageArray(
  "vinayaka_2026_gallery_moments",
  DEFAULT_GALLERY_DATA
);


/* =========================================================
   7. CONTRIBUTION DATA
========================================================= */

const DEFAULT_CONTRIBUTIONS = Array.from(
  { length: festivalConfig.totalFlats },
  (_, index) => {

    const flatNumber = 101 + index;

    return {

      flat:
        String(flatNumber),

      family:
        flatNumber === 101
          ? "Mohan Rao & Family"
          : flatNumber === 201
            ? "Praveen & Family"
            : "Available / Resident",

      amount:
        flatNumber === 101 || flatNumber === 201
          ? festivalConfig.contributionDefault
          : 0,

      status:
        flatNumber === 101 || flatNumber === 201
          ? "Paid"
          : "Pending"

    };

  }
);


let contributions = loadStorageArray(
  "vinayaka_2026_contributions",
  DEFAULT_CONTRIBUTIONS
);


/* =========================================================
   8. STORAGE HELPERS
========================================================= */

function loadStorageArray(key, fallback) {

  try {

    const saved =
      localStorage.getItem(key);

    if (!saved) {
      return [...fallback];
    }

    const parsed =
      JSON.parse(saved);

    if (Array.isArray(parsed)) {
      return parsed;
    }

  } catch (error) {

    console.warn(
      `Unable to load ${key}`,
      error
    );

  }

  return [...fallback];
}


function saveStorage(key, data) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(data)
    );

    return true;

  } catch (error) {

    console.warn(
      `Unable to save ${key}`,
      error
    );

    showToast(
      "Unable to save changes in this browser.",
      "info"
    );

    return false;
  }
}


/* =========================================================
   9. DOM READY
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initSlideshow();

    renderSchedule();

    renderYajamanSlots();

    renderAnnadanamDonors();

    renderGallery();

    renderContributions();

    setupMobileNav();

    setupScrollSpy();

    setupHeaderScroll();

    setupCountdown();

    setupKeyboardShortcuts();

    setupImageFallbacks();

  }
);


/* =========================================================
   10. GENERAL UTILITIES
========================================================= */

window.scrollToSection = function(id) {

  const element =
    document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

};


function showToast(
  message,
  type = "success"
) {

  const container =
    document.getElementById(
      "toastContainer"
    );

  if (!container) return;

  const toast =
    document.createElement("div");

  toast.className =
    `toast ${type}`;

  toast.innerHTML = `

    <span class="material-symbols-outlined">
      ${
        type === "success"
          ? "check_circle"
          : "info"
      }
    </span>

    <span>
      ${escapeHtml(message)}
    </span>

  `;

  container.appendChild(toast);

  setTimeout(
    () => {

      toast.style.opacity = "0";

      toast.style.transform =
        "translateY(10px)";

      setTimeout(
        () => toast.remove(),
        300
      );

    },
    3500
  );

}


function escapeHtml(value) {

  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   11. HEADER
========================================================= */

function setupHeaderScroll() {

  const header =
    document.getElementById(
      "siteHeader"
    );

  if (!header) return;

  const update =
    () => {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 20
      );

    };

  update();

  window.addEventListener(
    "scroll",
    update,
    { passive: true }
  );

}


/* =========================================================
   12. COUNTDOWN
========================================================= */

function setupCountdown() {

  const update =
    () => {

      const target =
        new Date(
          festivalConfig.festivalStart
        ).getTime();

      const now =
        Date.now();

      const distance =
        target - now;


      const days =
        document.getElementById(
          "countdownDays"
        );

      const hours =
        document.getElementById(
          "countdownHours"
        );

      const minutes =
        document.getElementById(
          "countdownMinutes"
        );

      const seconds =
        document.getElementById(
          "countdownSeconds"
        );


      if (
        !days ||
        !hours ||
        !minutes ||
        !seconds
      ) {
        return;
      }


      if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

      }


      const d =
        Math.floor(
          distance /
          (1000 * 60 * 60 * 24)
        );

      const h =
        Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
        );

      const m =
        Math.floor(
          (distance %
            (1000 * 60 * 60)) /
          (1000 * 60)
        );

      const s =
        Math.floor(
          (distance %
            (1000 * 60)) /
          1000
        );


      days.textContent =
        String(d).padStart(2, "0");

      hours.textContent =
        String(h).padStart(2, "0");

      minutes.textContent =
        String(m).padStart(2, "0");

      seconds.textContent =
        String(s).padStart(2, "0");

    };


  update();

  setInterval(
    update,
    1000
  );

}


/* =========================================================
   13. HERO SLIDESHOW
========================================================= */

let currentSlideIndex = 0;

let slideshowTimer = null;


function initSlideshow() {

  const track =
    document.getElementById(
      "slideshowTrack"
    );

  const dotsContainer =
    document.getElementById(
      "slideshowDots"
    );

  if (
    !track ||
    !dotsContainer
  ) {
    return;
  }


  clearInterval(slideshowTimer);


  track.innerHTML = "";

  dotsContainer.innerHTML = "";


  if (!heroSlides.length) {

    track.innerHTML = `

      <div class="slide active">

        <div style="
          height:100%;
          display:grid;
          place-items:center;
          background:#f1dfcc;
          color:#8f1d14;
          text-align:center;
          padding:30px;
        ">

          <div>

            <span
              class="material-symbols-outlined"
              style="font-size:60px;"
            >
              temple_hindu
            </span>

            <h3>
              Vinayaka Mahotsav 2026
            </h3>

          </div>

        </div>

      </div>

    `;

    return;
  }


  heroSlides.forEach(
    (slide, index) => {

      const slideDiv =
        document.createElement("div");

      slideDiv.className =
        `slide ${
          index === 0
            ? "active"
            : ""
        }`;


      slideDiv.innerHTML = `

        <img
          src="${escapeHtml(slide.image)}"
          alt="${escapeHtml(slide.title)}"
          loading="${index === 0 ? "eager" : "lazy"}"
        >

        <div class="slide-overlay">

          <div>

            <span class="slide-caption-tag">
              ${escapeHtml(slide.tag || "")}
            </span>

            <h2 class="slide-title">
              ${escapeHtml(slide.title || "")}
            </h2>

          </div>

          <div>

            <a
              href="${escapeHtml(slide.ctaLink || "#schedule")}"
              class="btn-primary-action"
            >

              <span>
                ${escapeHtml(
                  slide.ctaText ||
                  "Explore Schedule"
                )}
              </span>

              <span class="material-symbols-outlined">
                arrow_forward
              </span>

            </a>

          </div>

        </div>

      `;


      track.appendChild(
        slideDiv
      );


      const dot =
        document.createElement(
          "button"
        );

      dot.type = "button";

      dot.className =
        `dot ${
          index === 0
            ? "active"
            : ""
        }`;

      dot.setAttribute(
        "aria-label",
        `Go to slide ${index + 1}`
      );

      dot.addEventListener(
        "click",
        () => {
          goToSlide(index);
        }
      );

      dotsContainer.appendChild(
        dot
      );

    }
  );


  const prev =
    document.getElementById(
      "slideshowPrev"
    );

  const next =
    document.getElementById(
      "slideshowNext"
    );


  if (prev) {

    prev.onclick =
      () => {

        prevSlide();

        restartSlideshowTimer();

      };

  }


  if (next) {

    next.onclick =
      () => {

        nextSlide();

        restartSlideshowTimer();

      };

  }


  currentSlideIndex = 0;

  showSlide(0);

  startSlideshowTimer();

}


function showSlide(index) {

  const slides =
    document.querySelectorAll(
      ".slide"
    );

  const dots =
    document.querySelectorAll(
      ".dot"
    );

  if (!slides.length) return;


  currentSlideIndex =
    (
      index +
      slides.length
    ) %
    slides.length;


  slides.forEach(
    (slide, i) => {

      slide.classList.toggle(
        "active",
        i === currentSlideIndex
      );

    }
  );


  dots.forEach(
    (dot, i) => {

      dot.classList.toggle(
        "active",
        i === currentSlideIndex
      );

    }
  );

}


function nextSlide() {

  showSlide(
    currentSlideIndex + 1
  );

}


function prevSlide() {

  showSlide(
    currentSlideIndex - 1
  );

}


function goToSlide(index) {

  showSlide(index);

  restartSlideshowTimer();

}


function startSlideshowTimer() {

  clearInterval(
    slideshowTimer
  );

  if (heroSlides.length <= 1) {
    return;
  }

  slideshowTimer =
    setInterval(
      nextSlide,
      5000
    );

}


function restartSlideshowTimer() {

  startSlideshowTimer();

}


/* =========================================================
   14. SCHEDULE
========================================================= */

function renderSchedule(
  filter = "all"
) {

  const container =
    document.getElementById(
      "scheduleCardsContainer"
    );

  if (!container) return;


  container.innerHTML = "";


  const filtered =
    scheduleData.filter(
      item =>
        filter === "all" ||
        item.category.includes(filter)
    );


  if (!filtered.length) {

    container.innerHTML = `

      <div style="
        grid-column:1/-1;
        padding:40px;
        text-align:center;
        color:#75645e;
      ">

        No events found.

      </div>

    `;

    return;
  }


  filtered.forEach(
    item => {

      const card =
        document.createElement("article");

      card.className =
        `schedule-card ${
          item.isHighlight
            ? "highlight-card"
            : ""
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
            ${escapeHtml(item.dayNumber)}
            •
            ${escapeHtml(item.date)}
          </span>

          <span class="schedule-tag">
            ${escapeHtml(item.badgeText)}
          </span>

        </div>


        <h3 class="schedule-card-title">
          ${escapeHtml(item.title)}
        </h3>


        <div class="schedule-meta">

          <div class="meta-item">

            <span class="material-symbols-outlined">
              schedule
            </span>

            <strong>
              ${escapeHtml(item.time)}
            </strong>

          </div>


          <div class="meta-item">

            <span class="material-symbols-outlined">
              location_on
            </span>

            <span>
              ${escapeHtml(item.location)}
            </span>

          </div>

        </div>


        <p class="schedule-card-desc">
          ${escapeHtml(item.description)}
        </p>

      `;


      container.appendChild(card);

    }
  );

}


window.filterSchedule =
  function(category) {

    document
      .querySelectorAll(
        ".schedule-filter-btn"
      )
      .forEach(
        button => {

          button.classList.toggle(
            "active",
            button.dataset.filter ===
            category
          );

        }
      );


    renderSchedule(category);

  };


/* =========================================================
   15. PUJA YAJAMAN
========================================================= */

function renderYajamanSlots() {

  const tbody =
    document.getElementById(
      "yajamanTableBody"
    );

  if (!tbody) return;


  tbody.innerHTML = "";


  yajamanSlots.forEach(
    (slot, index) => {

      const tr =
        document.createElement("tr");


      if (slot.isVacant) {

        tr.className =
          "row-vacant";


        const statusHtml =
          slot.isUrgent

            ? `
              <span class="badge-day-crimson">
                ${escapeHtml(slot.statusBadge)}
              </span>
            `

            : `
              <span class="badge-vacant">
                ${escapeHtml(
                  slot.statusBadge ||
                  "VACANT / AVAILABLE"
                )}
              </span>
            `;


        tr.innerHTML = `

          <td>
            <strong style="color:var(--color-primary);">
              ${escapeHtml(slot.slot)}
            </strong>
          </td>

          <td>
            <strong>—</strong>
          </td>

          <td>
            <em>
              Available for Booking
            </em>
          </td>

          <td>

            <div style="
              display:flex;
              align-items:center;
              gap:7px;
              flex-wrap:wrap;
            ">

              <span>
                ${escapeHtml(slot.seva)}
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

              <span class="material-symbols-outlined">
                add_circle
              </span>

              Book Slot

            </button>

          </td>

        `;

      } else {

        tr.innerHTML = `

          <td>
            <strong style="color:var(--color-primary);">
              ${escapeHtml(slot.slot)}
            </strong>
          </td>

          <td>
            <strong style="color:var(--color-primary);">
              ${escapeHtml(slot.flat)}
            </strong>
          </td>

          <td>

            <strong>
              ${escapeHtml(slot.family)}
            </strong>

            ${
              slot.gotram
                ? `
                  <small style="
                    display:block;
                    color:var(--color-text-muted);
                    margin-top:3px;
                  ">
                    ${escapeHtml(slot.gotram)}
                  </small>
                `
                : ""
            }

          </td>

          <td>

            <div style="
              display:flex;
              align-items:center;
              gap:7px;
              flex-wrap:wrap;
            ">

              <span>
                ${escapeHtml(slot.seva)}
              </span>

              <span class="badge-confirmed">
                ${escapeHtml(
                  slot.statusBadge ||
                  "Confirmed"
                )}
              </span>

            </div>

          </td>

          <td style="text-align:center;">

            <button
              type="button"
              class="btn-slot-action btn-slot-edit"
              onclick="openSlotModal(${index})"
            >

              <span class="material-symbols-outlined">
                edit
              </span>

              Update

            </button>

          </td>

        `;

      }


      tbody.appendChild(tr);

    }
  );

}


/* =========================================================
   16. PUJA MODAL
========================================================= */

window.openSlotModal =
  function(index = null) {

    const modal =
      document.getElementById(
        "slotModal"
      );

    const select =
      document.getElementById(
        "slotSelect"
      );

    if (!modal || !select) return;


    select.innerHTML = "";


    yajamanSlots.forEach(
      (slot, idx) => {

        const option =
          document.createElement(
            "option"
          );

        option.value = idx;

        option.textContent =
          `${slot.slot} — ${
            slot.isVacant
              ? "Available"
              : "Flat " +
                slot.flat +
                " (" +
                slot.family +
                ")"
          }`;

        select.appendChild(
          option
        );

      }
    );


    const selectedIndex =
      index !== null
        ? index
        : (
          yajamanSlots.findIndex(
            slot =>
              slot.isVacant
          ) !== -1
            ? yajamanSlots.findIndex(
                slot =>
                  slot.isVacant
              )
            : 1
        );


    select.value =
      selectedIndex;


    document.getElementById(
      "slotIndexInput"
    ).value =
      selectedIndex;


    populateSlotForm(
      selectedIndex
    );


    openModal(modal);

  };


function populateSlotForm(index) {

  const current =
    yajamanSlots[index];

  if (!current) return;


  const flat =
    document.getElementById(
      "flatNumberInput"
    );

  const family =
    document.getElementById(
      "familyYajamanInput"
    );

  const seva =
    document.getElementById(
      "sevaPreferenceInput"
    );

  const gotram =
    document.getElementById(
      "gotramInput"
    );


  if (current.isVacant) {

    flat.value = "";

    family.value = "";

    seva.value =
      current.seva || "";

    gotram.value = "";

  } else {

    flat.value =
      current.flat === "—"
        ? ""
        : current.flat;

    family.value =
      current.family ===
      "Available for Booking"
        ? ""
        : current.family;

    seva.value =
      current.seva || "";

    gotram.value =
      current.gotram || "";

  }

}


window.onSlotSelectionChange =
  function(newIndex) {

    const index =
      Number.parseInt(
        newIndex,
        10
      );

    if (
      Number.isNaN(index) ||
      !yajamanSlots[index]
    ) {
      return;
    }


    document.getElementById(
      "slotIndexInput"
    ).value = index;


    populateSlotForm(index);

  };


window.saveSlotDetails =
  function(event) {

    event.preventDefault();


    const index =
      Number.parseInt(
        document.getElementById(
          "slotIndexInput"
        ).value,
        10
      );


    if (
      Number.isNaN(index) ||
      !yajamanSlots[index]
    ) {
      return;
    }


    const flat =
      document.getElementById(
        "flatNumberInput"
      ).value.trim();

    const family =
      document.getElementById(
        "familyYajamanInput"
      ).value.trim();

    const seva =
      document.getElementById(
        "sevaPreferenceInput"
      ).value.trim();

    const gotram =
      document.getElementById(
        "gotramInput"
      ).value.trim();


    if (!flat || !family) {

      showToast(
        "Please enter Flat Number and Family Name.",
        "info"
      );

      return;
    }


    const slot =
      yajamanSlots[index];


    slot.flat =
      flat;

    slot.family =
      family;

    slot.seva =
      seva ||
      slot.seva;

    slot.gotram =
      gotram;

    slot.statusBadge =
      "Confirmed";

    slot.isVacant =
      false;

    slot.isUrgent =
      false;


    saveStorage(
      "vinayaka_2026_yajaman_slots",
      yajamanSlots
    );


    renderYajamanSlots();

    closeSlotModal();


    showToast(
      `Puja Sankalpam booked for Flat ${flat} (${family}).`,
      "success"
    );

  };


window.clearSlotBooking =
  function() {

    const index =
      Number.parseInt(
        document.getElementById(
          "slotIndexInput"
        ).value,
        10
      );


    if (
      Number.isNaN(index) ||
      !yajamanSlots[index]
    ) {
      return;
    }


    if (
      !confirm(
        "Mark this Puja slot as vacant?"
      )
    ) {
      return;
    }


    const slot =
      yajamanSlots[index];


    slot.flat =
      "—";

    slot.family =
      "Available for Booking";

    slot.gotram =
      "";

    slot.statusBadge =
      "VACANT / AVAILABLE";

    slot.isVacant =
      true;

    slot.isUrgent =
      false;


    saveStorage(
      "vinayaka_2026_yajaman_slots",
      yajamanSlots
    );


    renderYajamanSlots();

    closeSlotModal();


    showToast(
      "Puja slot has been marked vacant.",
      "info"
    );

  };


window.closeSlotModal =
  function() {

    closeModal(
      document.getElementById(
        "slotModal"
      )
    );

  };


/* =========================================================
   17. ANNADANAM
========================================================= */

function renderAnnadanamDonors() {

  const tbody =
    document.getElementById(
      "annadanamTableBody"
    );

  if (!tbody) return;


  tbody.innerHTML = "";


  annadanamDonors.forEach(
    (donor, index) => {

      const tr =
        document.createElement("tr");


      if (donor.isVacant) {

        tr.className =
          "row-vacant";


        tr.innerHTML = `

          <td>
            <em>
              Available for Sponsorship
            </em>
          </td>

          <td>
            <strong>OPEN</strong>
          </td>

          <td>
            ${escapeHtml(donor.item)}
          </td>

          <td>

            <button
              type="button"
              class="btn-slot-action btn-slot-book"
              onclick="openAnnadanamModal(${index})"
            >

              <span class="material-symbols-outlined">
                volunteer_activism
              </span>

              Sponsor

            </button>

          </td>

        `;

      } else {

        tr.innerHTML = `

          <td>
            <strong>
              ${escapeHtml(donor.donor)}
            </strong>
          </td>

          <td>
            <strong style="
              color:var(--color-secondary);
            ">
              ${escapeHtml(donor.flat)}
            </strong>
          </td>

          <td>
            ${escapeHtml(donor.item)}
          </td>

          <td>

            <div style="
              display:inline-flex;
              align-items:center;
              gap:6px;
            ">

              <span class="badge-confirmed">
                ${escapeHtml(
                  donor.value ||
                  "CONFIRMED"
                )}
              </span>

              <button
                type="button"
                class="btn-slot-action btn-slot-edit"
                onclick="openAnnadanamModal(${index})"
              >

                <span class="material-symbols-outlined">
                  edit
                </span>

              </button>

            </div>

          </td>

        `;

      }


      tbody.appendChild(tr);

    }
  );

}


window.openAnnadanamModal =
  function(index = null) {

    const modal =
      document.getElementById(
        "annadanamModal"
      );

    const select =
      document.getElementById(
        "annadanamItemSelect"
      );


    if (!modal || !select) {
      return;
    }


    select.innerHTML = "";


    annadanamDonors.forEach(
      (item, idx) => {

        const option =
          document.createElement(
            "option"
          );

        option.value =
          idx;

        option.textContent =
          `${item.item} — ${
            item.isVacant
              ? "Available"
              : "Flat " +
                item.flat +
                " (" +
                item.donor +
                ")"
          }`;

        select.appendChild(
          option
        );

      }
    );


    let selectedIndex =
      index;


    if (selectedIndex === null) {

      selectedIndex =
        annadanamDonors.findIndex(
          item =>
            item.isVacant
        );


      if (
        selectedIndex === -1
      ) {
        selectedIndex = 1;
      }

    }


    select.value =
      selectedIndex;


    document.getElementById(
      "annadanamIndexInput"
    ).value =
      selectedIndex;


    populateAnnadanamForm(
      selectedIndex
    );


    openModal(modal);

  };


function populateAnnadanamForm(
  index
) {

  const item =
    annadanamDonors[index];

  if (!item) return;


  const flat =
    document.getElementById(
      "annadanamFlatInput"
    );

  const donor =
    document.getElementById(
      "annadanamDonorInput"
    );


  if (item.isVacant) {

    flat.value = "";

    donor.value = "";

  } else {

    flat.value =
      item.flat === "OPEN"
        ? ""
        : item.flat;

    donor.value =
      item.donor ===
      "Available for Sponsorship"
        ? ""
        : item.donor;

  }

}


window.onAnnadanamSelectionChange =
  function(newIndex) {

    const index =
      Number.parseInt(
        newIndex,
        10
      );

    if (
      Number.isNaN(index) ||
      !annadanamDonors[index]
    ) {
      return;
    }


    document.getElementById(
      "annadanamIndexInput"
    ).value =
      index;


    populateAnnadanamForm(
      index
    );

  };


window.saveAnnadanamSponsorship =
  function(event) {

    event.preventDefault();


    const index =
      Number.parseInt(
        document.getElementById(
          "annadanamIndexInput"
        ).value,
        10
      );


    if (
      Number.isNaN(index) ||
      !annadanamDonors[index]
    ) {
      return;
    }


    const flat =
      document.getElementById(
        "annadanamFlatInput"
      ).value.trim();

    const donor =
      document.getElementById(
        "annadanamDonorInput"
      ).value.trim();


    if (!flat || !donor) {

      showToast(
        "Please enter Flat Number and Donor Name.",
        "info"
      );

      return;
    }


    const item =
      annadanamDonors[index];


    item.flat =
      flat;

    item.donor =
      donor;

    item.value =
      "CONFIRMED";

    item.isVacant =
      false;


    saveStorage(
      "vinayaka_2026_annadanam_donors",
      annadanamDonors
    );


    renderAnnadanamDonors();

    closeAnnadanamModal();


    showToast(
      `Annadanam sponsorship confirmed for Flat ${flat}.`,
      "success"
    );

  };


window.clearAnnadanamSponsorship =
  function() {

    const index =
      Number.parseInt(
        document.getElementById(
          "annadanamIndexInput"
        ).value,
        10
      );


    if (
      Number.isNaN(index) ||
      !annadanamDonors[index]
    ) {
      return;
    }


    if (
      !confirm(
        "Mark this Annadanam requirement as open?"
      )
    ) {
      return;
    }


    const item =
      annadanamDonors[index];


    item.flat =
      "OPEN";

    item.donor =
      "Available for Sponsorship";

    item.value =
      "SLOT OPEN";

    item.isVacant =
      true;


    saveStorage(
      "vinayaka_2026_annadanam_donors",
      annadanamDonors
    );


    renderAnnadanamDonors();

    closeAnnadanamModal();


    showToast(
      "Annadanam requirement marked open.",
      "info"
    );

  };


window.closeAnnadanamModal =
  function() {

    closeModal(
      document.getElementById(
        "annadanamModal"
      )
    );

  };


/* =========================================================
   18. GALLERY
========================================================= */

let activeLightboxIndex = null;


function renderGallery() {

  const grid =
    document.getElementById(
      "galleryGrid"
    );

  if (!grid) return;


  grid.innerHTML = "";


  if (!galleryData.length) {

    grid.innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:50px 20px;
        background:#fff;
        border:2px dashed var(--color-border);
        border-radius:18px;
      ">

        <span
          class="material-symbols-outlined"
          style="
            font-size:50px;
            color:var(--color-text-muted);
          "
        >
          photo_library
        </span>

        <h3 style="
          font-family:var(--font-display);
          font-size:1.7rem;
        ">
          No photos yet
        </h3>

        <p style="
          color:var(--color-text-sub);
          font-size:.72rem;
          margin:5px 0 15px;
        ">
          Add your first festival memory.
        </p>

        <button
          type="button"
          class="btn btn-primary"
          onclick="openPhotoUploadModal()"
        >
          Add Photo
        </button>

      </div>

    `;

    return;
  }


  galleryData.forEach(
    (item, index) => {

      const card =
        document.createElement("article");

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
            title="Remove photo"
            aria-label="Remove photo"
          >

            <span class="material-symbols-outlined">
              delete
            </span>

          </button>

        </div>


        <img
          src="${escapeHtml(item.image)}"
          alt="${escapeHtml(
            item.alt ||
            item.title
          )}"
          loading="lazy"
        >


        <div class="gallery-overlay">

          <span class="gallery-tag">
            ${escapeHtml(item.tag)}
          </span>

          <h4 class="gallery-title">
            ${escapeHtml(item.title)}
          </h4>

        </div>

      `;


      const deleteButton =
        card.querySelector(
          ".btn-gallery-delete"
        );


      deleteButton.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          deleteGalleryPhoto(
            index
          );

        }
      );


      card.addEventListener(
        "click",
        () => {

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

    }
  );

}


function openLightbox(
  src,
  title,
  index = null
) {

  const modal =
    document.getElementById(
      "galleryModal"
    );

  const img =
    document.getElementById(
      "modalImg"
    );

  const titleElement =
    document.getElementById(
      "modalTitle"
    );


  if (!modal || !img) {
    return;
  }


  img.src = src;

  img.alt =
    title || "Festival photo";


  if (titleElement) {

    titleElement.textContent =
      title || "Festival Moment";

  }


  activeLightboxIndex =
    index;


  openModal(modal);

}


window.closeLightbox =
  function() {

    closeModal(
      document.getElementById(
        "galleryModal"
      )
    );

    activeLightboxIndex =
      null;

  };


window.deleteGalleryPhoto =
  function(index) {

    if (
      index < 0 ||
      index >= galleryData.length
    ) {
      return;
    }


    const item =
      galleryData[index];


    if (
      !confirm(
        `Remove "${item.title}" from the gallery?`
      )
    ) {
      return;
    }


    galleryData.splice(
      index,
      1
    );


    saveStorage(
      "vinayaka_2026_gallery_moments",
      galleryData
    );


    renderGallery();

    closeLightbox();


    showToast(
      "Photo removed from gallery.",
      "info"
    );

  };


window.deleteCurrentLightboxPhoto =
  function() {

    if (
      activeLightboxIndex === null
    ) {
      return;
    }


    deleteGalleryPhoto(
      activeLightboxIndex
    );

  };


window.resetGalleryToDefault =
  function() {

    if (
      !confirm(
        "Restore the original festival gallery?"
      )
    ) {
      return;
    }


    galleryData =
      [...DEFAULT_GALLERY_DATA];


    saveStorage(
      "vinayaka_2026_gallery_moments",
      galleryData
    );


    renderGallery();


    showToast(
      "Gallery restored to default photos.",
      "success"
    );

  };


/* =========================================================
   19. PHOTO UPLOAD
========================================================= */

let uploadedPhotoDataUrl = null;


window.openPhotoUploadModal =
  function() {

    const modal =
      document.getElementById(
        "photoUploadModal"
      );

    const form =
      document.getElementById(
        "photoUploadForm"
      );


    uploadedPhotoDataUrl =
      null;


    if (form) {
      form.reset();
    }


    openModal(modal);

  };


window.closePhotoUploadModal =
  function() {

    closeModal(
      document.getElementById(
        "photoUploadModal"
      )
    );

  };


window.previewSelectedPhoto =
  function(input) {

    if (
      !input.files ||
      !input.files[0]
    ) {
      return;
    }


    const reader =
      new FileReader();


    reader.onload =
      event => {

        uploadedPhotoDataUrl =
          event.target.result;

      };


    reader.readAsDataURL(
      input.files[0]
    );

  };


window.handlePhotoUpload =
  function(event) {

    event.preventDefault();


    const fileInput =
      document.getElementById(
        "photoFileInput"
      );

    const urlInput =
      document.getElementById(
        "photoUrlInput"
      );

    const titleInput =
      document.getElementById(
        "photoTitleInput"
      );

    const tagSelect =
      document.getElementById(
        "photoTagSelect"
      );


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


    if (
      !imageUrl &&
      fileInput.files &&
      fileInput.files[0]
    ) {

      const reader =
        new FileReader();


      reader.onload =
        event => {

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
        "Please select an image or provide an image URL.",
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

  galleryData.unshift({

    image:
      imageUrl,

    tag:
      tag,

    title:
      title,

    alt:
      title

  });


  saveStorage(
    "vinayaka_2026_gallery_moments",
    galleryData
  );


  renderGallery();

  closePhotoUploadModal();


  showToast(
    "Photo added to Celebration Gallery.",
    "success"
  );

}


/* =========================================================
   20. HERO CAROUSEL MANAGEMENT
========================================================= */

let uploadedCarouselPhotoDataUrl =
  null;


window.openCarouselModal =
  function() {

    const modal =
      document.getElementById(
        "carouselModal"
      );

    const form =
      document.getElementById(
        "carouselSlideForm"
      );


    uploadedCarouselPhotoDataUrl =
      null;


    if (form) {
      form.reset();
    }


    switchCarouselTab(
      "add"
    );


    renderCarouselSlidesList();


    openModal(modal);

  };


window.closeCarouselModal =
  function() {

    closeModal(
      document.getElementById(
        "carouselModal"
      )
    );

  };


window.switchCarouselTab =
  function(tab) {

    const addButton =
      document.getElementById(
        "tabBtnAddSlide"
      );

    const listButton =
      document.getElementById(
        "tabBtnListSlides"
      );

    const addContent =
      document.getElementById(
        "tabAddSlideContent"
      );

    const listContent =
      document.getElementById(
        "tabListSlidesContent"
      );


    if (
      !addButton ||
      !listButton ||
      !addContent ||
      !listContent
    ) {
      return;
    }


    const isAdd =
      tab === "add";


    addButton.classList.toggle(
      "active",
      isAdd
    );

    listButton.classList.toggle(
      "active",
      !isAdd
    );


    addContent.style.display =
      isAdd
        ? "block"
        : "none";

    listContent.style.display =
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


    const reader =
      new FileReader();


    reader.onload =
      event => {

        uploadedCarouselPhotoDataUrl =
          event.target.result;

      };


    reader.readAsDataURL(
      input.files[0]
    );

  };


window.handleCarouselSlideUpload =
  function(event) {

    event.preventDefault();


    const fileInput =
      document.getElementById(
        "carouselFileInput"
      );

    const urlInput =
      document.getElementById(
        "carouselUrlInput"
      );

    const titleInput =
      document.getElementById(
        "carouselTitleInput"
      );

    const tagInput =
      document.getElementById(
        "carouselTagInput"
      );

    const ctaTextInput =
      document.getElementById(
        "carouselCtaTextInput"
      );

    const ctaLinkInput =
      document.getElementById(
        "carouselCtaLinkInput"
      );


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


    if (
      !imageUrl &&
      fileInput.files &&
      fileInput.files[0]
    ) {

      const reader =
        new FileReader();


      reader.onload =
        event => {

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
        "Please select an image or provide an image URL.",
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

  heroSlides.unshift({

    image:
      imageUrl,

    title:
      title,

    tag:
      tag,

    ctaText:
      ctaText,

    ctaLink:
      ctaLink

  });


  saveStorage(
    "vinayaka_2026_hero_slides",
    heroSlides
  );


  initSlideshow();


  closeCarouselModal();


  showToast(
    `Added "${title}" to hero carousel.`,
    "success"
  );

}


function renderCarouselSlidesList() {

  const list =
    document.getElementById(
      "carouselSlidesList"
    );

  const count =
    document.getElementById(
      "carouselSlideCount"
    );


  if (count) {
    count.textContent =
      heroSlides.length;
  }


  if (!list) return;


  if (!heroSlides.length) {

    list.innerHTML = `

      <div style="
        padding:35px 0;
        text-align:center;
        color:var(--color-text-sub);
      ">

        No slides in the carousel.

      </div>

    `;

    return;
  }


  list.innerHTML = "";


  heroSlides.forEach(
    (slide, index) => {

      const item =
        document.createElement("div");

      item.className =
        "carousel-slide-item";


      item.innerHTML = `

        <img
          src="${escapeHtml(slide.image)}"
          class="carousel-slide-thumb"
          alt="${escapeHtml(slide.title)}"
        >


        <div class="carousel-slide-info">

          <div
            class="carousel-slide-title"
            title="${escapeHtml(slide.title)}"
          >
            ${escapeHtml(slide.title)}
          </div>

          <div class="carousel-slide-tag">
            ${escapeHtml(
              slide.tag ||
              `Slide ${index + 1}`
            )}
          </div>

        </div>


        <button
          type="button"
          class="btn-remove-slide"
          onclick="removeCarouselSlide(${index})"
        >

          <span class="material-symbols-outlined">
            delete
          </span>

          Remove

        </button>

      `;


      list.appendChild(item);

    }
  );

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


    if (
      !confirm(
        `Remove "${removed.title}" from hero carousel?`
      )
    ) {
      return;
    }


    heroSlides.splice(
      index,
      1
    );


    saveStorage(
      "vinayaka_2026_hero_slides",
      heroSlides
    );


    initSlideshow();

    renderCarouselSlidesList();


    showToast(
      "Hero slide removed.",
      "info"
    );

  };


window.resetCarouselSlidesToDefault =
  function() {

    if (
      !confirm(
        "Restore the original 4 hero slides?"
      )
    ) {
      return;
    }


    heroSlides =
      [...DEFAULT_HERO_SLIDES];


    saveStorage(
      "vinayaka_2026_hero_slides",
      heroSlides
    );


    initSlideshow();

    renderCarouselSlidesList();


    showToast(
      "Hero carousel restored.",
      "success"
    );

  };


/* =========================================================
   21. CONTRIBUTION MANAGEMENT
========================================================= */

function renderContributions() {

  const tbody =
    document.getElementById(
      "contributionTableBody"
    );

  if (!tbody) return;


  tbody.innerHTML = "";


  contributions.forEach(
    (item, index) => {

      const tr =
        document.createElement("tr");


      const paid =
        Number(item.amount) > 0 &&
        item.status === "Paid";


      tr.innerHTML = `

        <td>

          <strong style="
            color:var(--color-primary);
          ">
            ${escapeHtml(item.flat)}
          </strong>

        </td>


        <td>

          <strong>
            ${escapeHtml(item.family)}
          </strong>

        </td>


        <td>

          <strong>
            ₹${formatCurrency(
              Number(item.amount) || 0
            )}
          </strong>

        </td>


        <td>

          <span class="${
            paid
              ? "badge-confirmed"
              : "badge-vacant"
          }">

            ${
              paid
                ? "PAID"
                : "PENDING"
            }

          </span>

        </td>


        <td>

          <button
            type="button"
            class="btn-slot-action ${
              paid
                ? "btn-slot-edit"
                : "btn-slot-book"
            }"
            onclick="editContribution(${index})"
          >

            <span class="material-symbols-outlined">
              edit
            </span>

            Update

          </button>

        </td>

      `;


      tbody.appendChild(tr);

    }
  );


  updateContributionSummary();

}


function updateContributionSummary() {

  const total =
    contributions.reduce(
      (
        sum,
        item
      ) =>
        sum +
        (
          Number(item.amount) ||
          0
        ),
      0
    );


  const paidCount =
    contributions.filter(
      item =>
        item.status === "Paid"
    ).length;


  const pendingCount =
    contributions.length -
    paidCount;


  const percentage =
    contributions.length
      ? Math.round(
          (
            paidCount /
            contributions.length
          ) *
          100
        )
      : 0;


  const totalElement =
    document.getElementById(
      "totalContributionAmount"
    );

  const paidElement =
    document.getElementById(
      "collectedFlatCount"
    );

  const pendingElement =
    document.getElementById(
      "pendingFlatCount"
    );

  const percentageElement =
    document.getElementById(
      "contributionPercentage"
    );

  const progress =
    document.getElementById(
      "contributionProgress"
    );


  if (totalElement) {

    totalElement.textContent =
      `₹${formatCurrency(total)}`;

  }


  if (paidElement) {

    paidElement.textContent =
      paidCount;

  }


  if (pendingElement) {

    pendingElement.textContent =
      pendingCount;

  }


  if (percentageElement) {

    percentageElement.textContent =
      `${percentage}%`;

  }


  if (progress) {

    progress.style.width =
      `${percentage}%`;

  }

}


window.editContribution =
  function(index) {

    const item =
      contributions[index];

    if (!item) return;


    const flat =
      prompt(
        "Flat Number:",
        item.flat
      );

    if (
      flat === null
    ) {
      return;
    }


    const family =
      prompt(
        "Resident / Family:",
        item.family
      );

    if (
      family === null
    ) {
      return;
    }


    const amount =
      prompt(
        "Contribution Amount:",
        item.amount ||
        festivalConfig.contributionDefault
      );

    if (
      amount === null
    ) {
      return;
    }


    const numericAmount =
      Number(amount);


    if (
      Number.isNaN(
        numericAmount
      ) ||
      numericAmount < 0
    ) {

      showToast(
        "Please enter a valid amount.",
        "info"
      );

      return;
    }


    const status =
      numericAmount > 0
        ? "Paid"
        : "Pending";


    item.flat =
      flat.trim();

    item.family =
      family.trim();

    item.amount =
      numericAmount;

    item.status =
      status;


    saveStorage(
      "vinayaka_2026_contributions",
      contributions
    );


    renderContributions();


    showToast(
      `Contribution updated for Flat ${item.flat}.`,
      "success"
    );

  };


function formatCurrency(
  value
) {

  return Number(
    value || 0
  ).toLocaleString(
    "en-IN"
  );

}


/* =========================================================
   22. MODAL UTILITIES
========================================================= */

function openModal(modal) {

  if (!modal) return;

  modal.classList.add(
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function closeModal(modal) {

  if (!modal) return;

  modal.classList.remove(
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  const anyOpen =
    document.querySelector(
      ".modal.open"
    );

  if (!anyOpen) {

    document.body.classList.remove(
      "modal-open"
    );

  }

}


/* =========================================================
   23. GLOBAL MODAL CLICK
========================================================= */

document.addEventListener(
  "click",
  event => {

    const modals =
      document.querySelectorAll(
        ".modal"
      );


    modals.forEach(
      modal => {

        if (
          event.target === modal
        ) {

          closeModal(modal);

          if (
            modal.id ===
            "galleryModal"
          ) {

            activeLightboxIndex =
              null;

          }

        }

      }
    );

  }
);


/* =========================================================
   24. MOBILE NAV
========================================================= */

function setupMobileNav() {

  const toggle =
    document.getElementById(
      "mobileMenuBtn"
    );

  const drawer =
    document.getElementById(
      "mobileDrawer"
    );

  const overlay =
    document.getElementById(
      "drawerOverlay"
    );

  const icon =
    document.getElementById(
      "menuIcon"
    );


  if (
    !toggle ||
    !drawer
  ) {
    return;
  }


  window.toggleMobileMenu =
    function() {

      const isOpen =
        drawer.classList.contains(
          "open"
        );


      drawer.classList.toggle(
        "open",
        !isOpen
      );


      if (overlay) {

        overlay.classList.toggle(
          "open",
          !isOpen
        );

      }


      if (icon) {

        icon.textContent =
          isOpen
            ? "menu"
            : "close";

      }

    };


  toggle.onclick =
    window.toggleMobileMenu;


  if (overlay) {

    overlay.onclick =
      () => {

        if (
          drawer.classList.contains(
            "open"
          )
        ) {

          window.toggleMobileMenu();

        }

      };

  }


  drawer
    .querySelectorAll("a")
    .forEach(
      link => {

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

      }
    );

}


/* =========================================================
   25. SCROLL SPY
========================================================= */

function setupScrollSpy() {

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const desktopLinks =
    document.querySelectorAll(
      ".desktop-nav .nav-link"
    );


  const mobileLinks =
    document.querySelectorAll(
      ".mobile-bottom-link"
    );


  if (!sections.length) {
    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (!entry.isIntersecting) {
              return;
            }


            const id =
              entry.target.id;


            desktopLinks.forEach(
              link => {

                link.classList.toggle(
                  "active",
                  link.getAttribute(
                    "href"
                  ) === `#${id}`
                );

              }
            );


            mobileLinks.forEach(
              link => {

                link.classList.toggle(
                  "active",
                  link.getAttribute(
                    "href"
                  ) === `#${id}`
                );

              }
            );

          }
        );

      },
      {
        rootMargin:
          "-30% 0px -60% 0px",

        threshold: 0
      }
    );


  sections.forEach(
    section =>
      observer.observe(section)
  );

}


/* =========================================================
   26. KEYBOARD
========================================================= */

function setupKeyboardShortcuts() {

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Escape"
      ) {

        document
          .querySelectorAll(
            ".modal.open"
          )
          .forEach(
            modal =>
              closeModal(modal)
          );


        const drawer =
          document.getElementById(
            "mobileDrawer"
          );


        if (
          drawer &&
          drawer.classList.contains(
            "open"
          )
        ) {

          window.toggleMobileMenu();

        }

      }


      if (
        event.key ===
        "ArrowRight"
      ) {

        const activeElement =
          document.activeElement;

        if (
          activeElement &&
          activeElement.closest(
            ".gallery-modal"
          )
        ) {
          return;
        }

        nextSlide();

      }


      if (
        event.key ===
        "ArrowLeft"
      ) {

        prevSlide();

      }

    }
  );

}


/* =========================================================
   27. IMAGE FALLBACKS
========================================================= */

function setupImageFallbacks() {

  document.addEventListener(
    "error",
    event => {

      const image =
        event.target;


      if (
        image.tagName !==
        "IMG"
      ) {
        return;
      }


      if (
        image.dataset.fallbackApplied
      ) {
        return;
      }


      image.dataset.fallbackApplied =
        "true";


      image.style.background =
        "#f1dfcc";


      image.style.objectFit =
        "contain";


      image.alt =
        image.alt ||
        "Festival image";

    },
    true
  );

}


/* =========================================================
   28. EXPOSE STORAGE HELPERS
   Useful for future admin/dashboard upgrades
========================================================= */

window.VinayakaFestival = {

  config:
    festivalConfig,

  getContributions:
    () => contributions,

  getYajamanSlots:
    () => yajamanSlots,

  getAnnadanam:
    () => annadanamDonors,

  getGallery:
    () => galleryData,

  getHeroSlides:
    () => heroSlides,

  resetAllData:
    function() {

      if (
        !confirm(
          "Reset ALL festival portal data to defaults?"
        )
      ) {
        return;
      }


      localStorage.removeItem(
        "vinayaka_2026_contributions"
      );

      localStorage.removeItem(
        "vinayaka_2026_yajaman_slots"
      );

      localStorage.removeItem(
        "vinayaka_2026_annadanam_donors"
      );

      localStorage.removeItem(
        "vinayaka_2026_gallery_moments"
      );

      localStorage.removeItem(
        "vinayaka_2026_hero_slides"
      );


      location.reload();

    }

};
