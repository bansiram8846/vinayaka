/* =========================================================
   VINAYAKA FESTIVAL 2026
   Gowtham Sai Elite Towers

   Supabase-powered version

   IMPORTANT:
   Replace the two values below with:

   SUPABASE_URL
   SUPABASE_PUBLISHABLE_OR_ANON_KEY

   NEVER put service_role/secret key here.
   ========================================================= */


/* =========================================================
   SUPABASE CONFIGURATION
   ========================================================= */

const SUPABASE_URL = "https://pezibfmuogaorcyyhqaj.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_70bx8FZ74U7Cm1ykDNF-CQ_92f145Bz";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );


/* =========================================================
   FESTIVAL CONFIGURATION
   ========================================================= */

const festivalConfig = {

  title: "Vinayaka Festival 2026",

  societyName: "Gowtham Sai Elite Towers",

  association: "Residents Welfare Association",

  dates: "14th September – 19th September 2026",

  durationText: "6 Auspicious Days",

  mandapLocation: "Ground Floor",

  idolDonor: {
    name: "Praveen & Family",
    flat: "201"
  },

  annadanamHost: {
    name: "Mohan Rao",
    flat: "102",
    date: "2026-09-19"
  }

};


/* =========================================================
   DEFAULT HERO SLIDES
   Used only when Supabase has no carousel records.
   ========================================================= */

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

    tag: "Saturday, 19 Sept • Flat 102",

    title: "Grand Maha Annadanam Community Feast",

    ctaText: "View Annadanam",

    ctaLink: "#puja-annadanam"
  },

  {
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b9c0e1c7c0?auto=format&fit=crop&w=1400&q=85",

    tag: "Every Evening • 07:30 PM",

    title: "Community Maha Aarti & Gotra Archana",

    ctaText: "Book Sankalpam",

    ctaLink: "#puja-annadanam"
  }

];


/* =========================================================
   FESTIVAL SCHEDULE
   ========================================================= */

const scheduleData = [

  {
    dayNumber: "Day 01",

    date: "14 Sept (Mon)",

    badgeText: "Prana Pratishtha",

    badgeType: "gold",

    title: "Ganpati Sthapana & Kalasa Puja",

    time: "10:00 AM – 12:30 PM • Aarti 07:30 PM",

    location: "Ground Floor",

    description:
      "Ceremonial 7ft eco-clay idol installation followed by Vedic chanting, Panchamrutha Abhishekam and evening Maha Aarti.",

    category: "puja special",

    isHighlight: false
  },

  {
    dayNumber: "Day 02",

    date: "15 Sept (Tue)",

    badgeText: "Daily Puja",

    badgeType: "saffron",

    title: "Daily Puja & Evening Maha Aarti",

    time: "07:30 PM",

    location: "Ground Floor",

    description:
      "Daily family sankalpam, Ganapati Puja and community Maha Aarti.",

    category: "puja",

    isHighlight: false
  },

  {
    dayNumber: "Day 03",

    date: "16 Sept (Wed)",

    badgeText: "Daily Puja",

    badgeType: "saffron",

    title: "Ganapathi Homam & Evening Aarti",

    time: "07:30 PM",

    location: "Ground Floor",

    description:
      "Sacred Ganapathi Homam followed by family sankalpam and Maha Aarti.",

    category: "puja",

    isHighlight: false
  },

  {
    dayNumber: "Day 04",

    date: "17 Sept (Thu)",

    badgeText: "Daily Puja",

    badgeType: "saffron",

    title: "Gotra Archana & Evening Maha Aarti",

    time: "07:30 PM",

    location: "Ground Floor",

    description:
      "Family Gotra Archana and community Maha Aarti.",

    category: "puja",

    isHighlight: false
  },

  {
    dayNumber: "Day 05",

    date: "18 Sept (Fri)",

    badgeText: "Youth & Cultural",

    badgeType: "gold",

    title: "Children's Sloka, Rangoli & Cultural Evening",

    time: "05:00 PM – 07:30 PM",

    location: "Ground Floor",

    description:
      "Children's clay Ganesha art, Rangoli, Sloka and Bhajan Sandhya followed by Maha Aarti.",

    category: "cultural puja",

    isHighlight: false
  },

  {
    dayNumber: "Day 06",

    date: "19 Sept (Sat)",

    badgeText: "Grand Finale Puja",

    badgeType: "gold",

    title: "Final Maha Puja & Kalasa Udvasana",

    time: "10:00 AM – 12:30 PM",

    location: "Ground Floor",

    description:
      "Maha Purnahuti, Kalasa Udvasana and Rajopachara Puja.",

    category: "puja special",

    isHighlight: false
  },

  {
    dayNumber: "Day 06",

    date: "19 Sept (Sat)",

    badgeText: "Grand Community Feast",

    badgeType: "crimson",

    title: "Grand Maha Annadanam",

    time: "12:30 PM – 03:30 PM",

    location: "Ground Floor",

    description:
      "Traditional Satvik community feast by Mohan Rao, Flat 102, for residents, staff, security and devotees.",

    category: "special",

    isHighlight: true
  },

  {
    dayNumber: "Day 06",

    date: "19 Sept (Sat)",

    badgeText: "Grand Finale",

    badgeType: "crimson",

    title: "Visarjan Shobha Yatra",

    time: "04:00 PM Onwards",

    location: "Ground Floor",

    description:
      "Sacred procession and eco-friendly Ganesha immersion ceremony.",

    category: "special puja",

    isHighlight: false
  }

];


/* =========================================================
   PUJA DATES
   Exactly 3 families per day.
   ========================================================= */

const PUJA_DATES = [

  {
    date: "2026-09-14",
    label: "14 Sept (Mon)"
  },

  {
    date: "2026-09-15",
    label: "15 Sept (Tue)"
  },

  {
    date: "2026-09-16",
    label: "16 Sept (Wed)"
  },

  {
    date: "2026-09-17",
    label: "17 Sept (Thu)"
  },

  {
    date: "2026-09-18",
    label: "18 Sept (Fri)"
  },

  {
    date: "2026-09-19",
    label: "19 Sept (Sat)"
  }

];


/* =========================================================
   ANNADANAM DISPLAY ITEMS

   Exactly 3 sponsorship slots in the UI.
   Multiple donors can support each slot through
   annadanam_donors.
   ========================================================= */

const ANNADANAM_ITEMS = [

  "Grand Maha Annadanam Community Feast",

  "Food & Grocery Support",

  "Serving & Dining Support"

];


/* =========================================================
   STATE
   ========================================================= */

let heroSlides = [];

let currentSlideIndex = 0;

let slideshowTimer = null;

let galleryData = [];

let pujaBookings = [];

let annadanamDonors = [];

let currentLightboxItem = null;

let currentPujaRecord = null;

let currentAnnadanamSlot = null;
let currentAnnadanamDonor = null;

let isAdmin = false;

let currentUser = null;


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    setupMobileNav();

    setupScrollSpy();

    setupModalAccessibility();
    setupFestivalEffects();

    renderSchedule();

    setupPujaDateSelect();

    await checkAdminSession();

    await loadCarousel();

    await loadGallery();

    await loadPujaBookings();

    await loadAnnadanamDonors();

  }
);


/* =========================================================
   SECURITY / ADMIN
   ========================================================= */

async function checkAdminSession() {

  try {

    const {
      data: {
        session
      }
    } = await supabaseClient.auth.getSession();

    if (!session) {

      setAdminState(false);

      return;

    }

    currentUser = session.user;

    const {
      data,
      error
    } = await supabaseClient.rpc("is_admin");

    if (error) {

      console.error(error);

      setAdminState(false);

      return;

    }

    setAdminState(Boolean(data));

  }
  catch (error) {

    console.error(
      "Admin session error:",
      error
    );

    setAdminState(false);

  }

}


function setAdminState(value) {

  isAdmin = value === true;

  document.body.classList.toggle("admin-mode", isAdmin);

  const toolbar =
    document.getElementById(
      "adminToolbar"
    );

  const loginBtn =
    document.getElementById(
      "adminLoginBtn"
    );

  const logoutBtn =
    document.getElementById(
      "adminLogoutBtn"
    );

  const mobileBtn =
    document.getElementById(
      "mobileAdminBtn"
    );

  if (toolbar) {

    toolbar.style.display =
      isAdmin ? "flex" : "none";

  }

  if (loginBtn) {

    loginBtn.style.display =
      isAdmin ? "none" : "inline-flex";

  }

  if (logoutBtn) {

    logoutBtn.style.display =
      isAdmin ? "inline-flex" : "none";

  }

  if (mobileBtn) {

    mobileBtn.textContent =
      isAdmin
        ? "Admin Logout"
        : "Admin Login";

    mobileBtn.onclick =
      isAdmin
        ? adminLogout
        : openAdminLoginModal;

  }

  renderGallery();

  renderPujaTable();

  renderAnnadanamTable();

}


/* =========================================================
   ADMIN LOGIN
   ========================================================= */

window.openAdminLoginModal = function () {

  if (isAdmin) {

    adminLogout();

    return;

  }

  document
    .getElementById("adminLoginModal")
    ?.classList.add("open");

  document.body.classList.add("modal-open");

};


window.closeAdminLoginModal = function () {

  closeModal(
    document.getElementById(
      "adminLoginModal"
    )
  );

};


window.adminLogin = async function (event) {

  event.preventDefault();

  const email =
    document
      .getElementById("adminEmail")
      .value
      .trim();

  const password =
    document
      .getElementById("adminPassword")
      .value;

  if (!email || !password) {

    showToast(
      "Please enter your email and password.",
      "info"
    );

    return;

  }

  try {

    showToast(
      "Signing in...",
      "info"
    );

    const {
      data,
      error
    } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if (error) {

      throw error;

    }

    currentUser = data.user;

    const {
      data: adminResult,
      error: adminError
    } =
      await supabaseClient.rpc(
        "is_admin"
      );

    if (adminError) {

      await supabaseClient.auth.signOut();

      throw adminError;

    }

    if (!adminResult) {

      await supabaseClient.auth.signOut();

      setAdminState(false);

      throw new Error(
        "This account is not registered as a festival administrator."
      );

    }

    setAdminState(true);

    closeAdminLoginModal();

    showToast(
      "Admin login successful."
    );

  }
  catch (error) {

    console.error(error);

    showToast(
      error.message ||
      "Unable to sign in.",
      "error"
    );

  }

};


window.adminLogout = async function () {

  await supabaseClient.auth.signOut();

  currentUser = null;

  setAdminState(false);

  showToast(
    "Admin logged out.",
    "info"
  );

};


/* =========================================================
   SUPABASE STORAGE HELPERS
   ========================================================= */

const STORAGE_BUCKET =
  "festival-images";


function sanitizeFileName(
  fileName
) {

  return fileName

    .toLowerCase()

    .replace(/[^a-z0-9._-]/g, "-")

    .replace(/-+/g, "-");

}


function createStoragePath(
  folder,
  file
) {

  const unique =
    `${Date.now()}-${crypto.randomUUID()}`;

  return `${folder}/${unique}-${sanitizeFileName(file.name)}`;

}


function getPublicStorageUrl(
  storagePath
) {

  const {
    data
  } =
    supabaseClient
      .storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(storagePath);

  return data.publicUrl;

}


async function uploadImage(
  file,
  folder
) {

  if (!file) {

    throw new Error(
      "Please select an image."
    );

  }

  if (!file.type.startsWith("image/")) {

    throw new Error(
      "Only image files are allowed."
    );

  }

  const MAX_SIZE =
    5 * 1024 * 1024;

  if (file.size > MAX_SIZE) {

    throw new Error(
      "Image is larger than 5 MB. Please choose a smaller image."
    );

  }

  const storagePath =
    createStoragePath(
      folder,
      file
    );

  const {
    error
  } =
    await supabaseClient
      .storage
      .from(STORAGE_BUCKET)
      .upload(
        storagePath,
        file,
        {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type
        }
      );

  if (error) {

    throw error;

  }

  return {
    storagePath,
    publicUrl:
      getPublicStorageUrl(
        storagePath
      )
  };

}


/* =========================================================
   CAROUSEL
   ========================================================= */

async function loadCarousel() {

  try {

    const {
      data,
      error
    } =
      await supabaseClient

        .from("carousel_slides")

        .select("*")

        .order(
          "sort_order",
          {
            ascending: true
          }
        )

        .order(
          "created_at",
          {
            ascending: true
          }
        );

    if (error) {

      console.warn(
        "Carousel table unavailable:",
        error
      );

      heroSlides =
        clone(DEFAULT_HERO_SLIDES);

      initSlideshow();

      return;

    }

    if (!data || !data.length) {

      heroSlides =
        clone(DEFAULT_HERO_SLIDES);

      initSlideshow();

      return;

    }

    heroSlides =
      data.map(
        row => ({
          id: row.id,

          image:
            row.image_url,

          storagePath:
            row.storage_path,

          tag:
            row.tag || "",

          title:
            row.title,

          ctaText:
            row.cta_text || "Explore",

          ctaLink:
            row.cta_link || "#schedule"
        })
      );

    initSlideshow();

  }
  catch (error) {

    console.error(
      "Unable to load carousel:",
      error
    );

    heroSlides =
      clone(DEFAULT_HERO_SLIDES);

    initSlideshow();

  }

}


function initSlideshow() {

  const track =
    document.getElementById(
      "slideshowTrack"
    );

  const dots =
    document.getElementById(
      "slideshowDots"
    );

  if (!track || !dots) {

    return;

  }

  clearInterval(
    slideshowTimer
  );

  track.innerHTML = "";

  dots.innerHTML = "";

  if (!heroSlides.length) {

    track.innerHTML = `

      <div class="slide active">

        <div
          style="
            height:100%;
            display:grid;
            place-items:center;
            color:#fff;
            padding:30px;
            text-align:center;
          ">

          No festival slides available.

        </div>

      </div>

    `;

    return;

  }

  currentSlideIndex =
    Math.min(
      currentSlideIndex,
      heroSlides.length - 1
    );

  heroSlides.forEach(
    (slide, index) => {

      const slideDiv =
        document.createElement(
          "div"
        );

      slideDiv.className =
        `slide ${
          index === currentSlideIndex
            ? "active"
            : ""
        }`;

      slideDiv.innerHTML = `

        <img
          src="${escapeHtml(slide.image)}"
          alt="${escapeHtml(slide.title)}"
          loading="${
            index === 0
              ? "eager"
              : "lazy"
          }">

        <div class="slide-overlay">

          <div>

            <span class="slide-caption-tag">
              ${escapeHtml(
                slide.tag ||
                "Vinayaka Mahotsav 2026"
              )}
            </span>

            <h2 class="slide-title">
              ${escapeHtml(
                slide.title
              )}
            </h2>

          </div>

          <a
            href="${escapeHtml(
              slide.ctaLink ||
              "#schedule"
            )}"
            class="btn-primary-action">

            ${escapeHtml(
              slide.ctaText ||
              "Explore"
            )}

            <span
              class="material-symbols-outlined"
              style="font-size:16px">

              arrow_forward

            </span>

          </a>

        </div>

      `;

      track.appendChild(
        slideDiv
      );


      const dot =
        document.createElement(
          "button"
        );

      dot.className =
        `dot ${
          index === currentSlideIndex
            ? "active"
            : ""
        }`;

      dot.type = "button";

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

      dots.appendChild(dot);

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

    prev.onclick = () => {

      prevSlide();

      restartSlideshowTimer();

    };

  }


  if (next) {

    next.onclick = () => {

      nextSlide();

      restartSlideshowTimer();

    };

  }


  startSlideshowTimer();

}


function showSlide(index) {

  const slides =
    document.querySelectorAll(".slide");

  const dots =
    document.querySelectorAll(".dot");

  if (!slides.length) return;

  const previousIndex = currentSlideIndex;
  const nextIndex = (index + slides.length) % slides.length;
  const direction = nextIndex >= previousIndex ? "next" : "prev";

  if (nextIndex === previousIndex) {
    slides[previousIndex]?.classList.add("active");
    return;
  }

  const current = slides[previousIndex];
  const incoming = slides[nextIndex];

  current?.classList.remove("is-entering-next", "is-entering-prev");
  incoming?.classList.remove("is-leaving-next", "is-leaving-prev");

  current?.classList.add(direction === "next" ? "is-leaving-next" : "is-leaving-prev");
  incoming?.classList.add(direction === "next" ? "is-entering-next" : "is-entering-prev");

  /* Force the initial state before activating the incoming slide. */
  void incoming?.offsetWidth;

  currentSlideIndex = nextIndex;
  incoming?.classList.add("active");
  current?.classList.remove("active");

  window.setTimeout(() => {
    current?.classList.remove("is-leaving-next", "is-leaving-prev");
    incoming?.classList.remove("is-entering-next", "is-entering-prev");
  }, 1100);

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlideIndex);
  });

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

  if (heroSlides.length > 1) {

    slideshowTimer =
      setInterval(
        nextSlide,
        5000
      );

  }

}


function restartSlideshowTimer() {

  startSlideshowTimer();

}


/* =========================================================
   CAROUSEL ADMIN
   ========================================================= */

window.openCarouselModal =
  function () {

    if (!isAdmin) {

      openAdminLoginModal();

      return;

    }

    document
      .getElementById(
        "carouselSlideForm"
      )
      ?.reset();

    switchCarouselTab(
      "add"
    );

    renderCarouselSlidesList();

    openModal(
      document.getElementById(
        "carouselModal"
      )
    );

  };


window.closeCarouselModal =
  function () {

    closeModal(
      document.getElementById(
        "carouselModal"
      )
    );

  };


window.switchCarouselTab =
  function (tab) {

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

    const adding =
      tab === "add";

    addButton?.classList.toggle(
      "active",
      adding
    );

    listButton?.classList.toggle(
      "active",
      !adding
    );

    if (addContent) {

      addContent.style.display =
        adding
          ? "block"
          : "none";

    }

    if (listContent) {

      listContent.style.display =
        adding
          ? "none"
          : "block";

    }

    if (!adding) {

      renderCarouselSlidesList();

    }

  };


window.handleCarouselSlideUpload =
  async function (event) {

    event.preventDefault();

    if (!isAdmin || !currentUser) {

      showToast(
        "Admin login is required to upload carousel images.",
        "error"
      );

      return;

    }

    const file =
      document
        .getElementById(
          "carouselFileInput"
        )
        .files[0];

    const title =
      document
        .getElementById(
          "carouselTitleInput"
        )
        .value
        .trim();

    const tag =
      document
        .getElementById(
          "carouselTagInput"
        )
        .value
        .trim();

    const ctaText =
      document
        .getElementById(
          "carouselCtaTextInput"
        )
        .value
        .trim() ||
      "Explore Schedule";

    const ctaLink =
      document
        .getElementById(
          "carouselCtaLinkInput"
        )
        .value
        .trim() ||
      "#schedule";


    if (!file || !title) {

      showToast(
        "Please select an image and enter a title.",
        "info"
      );

      return;

    }


    try {

      showToast(
        "Uploading carousel image...",
        "info"
      );


      const uploaded =
        await uploadImage(
          file,
          "carousel"
        );


      const {
        data: existing
      } =
        await supabaseClient
          .from(
            "carousel_slides"
          )
          .select("sort_order")
          .order(
            "sort_order",
            {
              ascending: false
            }
          )
          .limit(1);


      const nextOrder =
        existing &&
        existing.length
          ? Number(
              existing[0].sort_order
            ) + 1
          : 1;


      const {
        error
      } =
        await supabaseClient
          .from(
            "carousel_slides"
          )
          .insert({

            image_url:
              uploaded.publicUrl,

            storage_path:
              uploaded.storagePath,

            title,

            tag,

            cta_text:
              ctaText,

            cta_link:
              ctaLink,

            sort_order:
              nextOrder,

            uploaded_by:
              currentUser.id

          });


      if (error) {

        await deleteStorageFile(
          uploaded.storagePath
        );

        throw error;

      }


      await loadCarousel();

      document
        .getElementById(
          "carouselSlideForm"
        )
        ?.reset();

      showToast(
        "Carousel image uploaded successfully."
      );

    }
    catch (error) {

      console.error(error);

      showToast(
        error.message ||
        "Carousel upload failed.",
        "error"
      );

    }

  };


async function renderCarouselSlidesList() {

  const container =
    document.getElementById(
      "carouselSlidesList"
    );

  const count =
    document.getElementById(
      "carouselSlideCount"
    );

  if (!container) {

    return;

  }

  if (!isAdmin) {

    container.innerHTML = "";

    return;

  }


  const {
    data,
    error
  } =
    await supabaseClient

      .from(
        "carousel_slides"
      )

      .select("*")

      .order(
        "sort_order",
        {
          ascending: true
        }
      );


  if (error) {

    container.innerHTML = `

      <p>
        Unable to load carousel slides.
      </p>

    `;

    return;

  }


  if (count) {

    count.textContent =
      data?.length || 0;

  }


  if (!data?.length) {

    container.innerHTML = `

      <p
        style="
          text-align:center;
          color:var(--muted);
          padding:25px;
        ">

        No uploaded hero slides yet.

      </p>

    `;

    return;

  }


  container.innerHTML =
    data.map(
      slide => `

        <div class="carousel-slide-item">

          <img
            class="carousel-slide-thumb"
            src="${escapeHtml(
              slide.image_url
            )}"
            alt="">

          <div>

            <div class="carousel-slide-title">

              ${escapeHtml(
                slide.title
              )}

            </div>

            <div class="carousel-slide-tag">

              ${escapeHtml(
                slide.tag ||
                "Festival slide"
              )}

            </div>

          </div>

          <button
            type="button"
            class="btn-remove-slide"
            onclick="removeCarouselSlide('${slide.id}')">

            <span
              class="material-symbols-outlined"
              style="font-size:15px">

              delete

            </span>

            Remove

          </button>

        </div>

      `
    ).join("");

}


window.removeCarouselSlide =
  async function (id) {

    if (!isAdmin) {

      return;

    }

    const slide =
      heroSlides.find(
        item =>
          item.id === id
      );

    if (!slide) {

      return;

    }

    if (
      !confirm(
        `Remove "${slide.title}" from the hero carousel?`
      )
    ) {

      return;

    }


    try {

      const {
        error
      } =
        await supabaseClient

          .from(
            "carousel_slides"
          )

          .delete()

          .eq(
            "id",
            id
          );


      if (error) {

        throw error;

      }


      if (slide.storagePath) {

        await deleteStorageFile(
          slide.storagePath
        );

      }


      await loadCarousel();

      await renderCarouselSlidesList();

      showToast(
        "Hero slide removed.",
        "info"
      );

    }
    catch (error) {

      console.error(error);

      showToast(
        error.message ||
        "Unable to remove slide.",
        "error"
      );

    }

  };


/* =========================================================
   GALLERY
   ========================================================= */

async function loadGallery() {

  try {

    const {
      data,
      error
    } =
      await supabaseClient

        .from("gallery")

        .select("*")

        .order(
          "created_at",
          {
            ascending: false
          }
        );


    if (error) {

      throw error;

    }


    galleryData =
      (data || []).map(
        row => ({

          id:
            row.id,

          image:
            row.storage_path
              ? getPublicStorageUrl(
                  row.storage_path
                )
              : row.image_url ||
                "",

          storagePath:
            row.storage_path,

          title:
            row.caption ||
            row.file_name ||
            "Festival Photo",

          tag:
            row.category ||
            "Festival",

          alt:
            row.caption ||
            row.file_name ||
            "Festival Photo"

        })
      );


    renderGallery();

  }
  catch (error) {

    console.error(
      "Gallery load error:",
      error
    );

    galleryData = [];

    renderGallery();

    showToast(
      "Unable to load gallery from Supabase.",
      "error"
    );

  }

}


function renderGallery() {

  const grid =
    document.getElementById(
      "galleryGrid"
    );

  if (!grid) {

    return;

  }


  if (!galleryData.length) {

    grid.innerHTML = `

      <div
        style="
          grid-column:1/-1;
          text-align:center;
          padding:45px 20px;
          border:1px dashed rgba(255,255,255,.25);
          border-radius:18px;
          color:#cdbdb5;
        ">

        <span
          class="material-symbols-outlined"
          style="font-size:44px">

          photo_library

        </span>

        <h3
          style="
            font-family:var(--font-display);
          ">

          No photos yet

        </h3>

        <p>
          Festival photos will appear here.
        </p>

      </div>

    `;

    return;

  }


  grid.innerHTML =
    galleryData.map(
      (item, index) => `

        <article
          class="gallery-card"
          role="button"
          tabindex="0"
          aria-label="View ${escapeHtml(item.title)}"
          onclick="openLightbox(${index})"
          onkeydown="galleryKeydown(event,${index})">

          ${
            isAdmin
              ? `

                <div class="gallery-card-actions">

                  <button
                    type="button"
                    class="btn-gallery-delete"
                    onclick="deleteGalleryPhoto(event,${index})"
                    aria-label="Remove photo">

                    <span class="material-symbols-outlined">
                      delete
                    </span>

                  </button>

                </div>

              `
              : ""
          }

          <img
            src="${escapeHtml(item.image)}"
            alt="${escapeHtml(item.alt)}"
            loading="lazy">

          <div class="gallery-overlay">

            <span class="gallery-tag">
              ${escapeHtml(item.tag)}
            </span>

            <h4 class="gallery-title">
              ${escapeHtml(item.title)}
            </h4>

          </div>

        </article>

      `
    ).join("");

}


window.openPhotoUploadModal =
  function () {

    if (!isAdmin) {

      openAdminLoginModal();

      return;

    }

    document
      .getElementById(
        "photoUploadModal"
      )
      ?.classList.add("open");

    document.body.classList.add(
      "modal-open"
    );

  };


window.closePhotoUploadModal =
  function () {

    closeModal(
      document.getElementById(
        "photoUploadModal"
      )
    );

  };


window.handlePhotoUpload =
  async function (event) {

    event.preventDefault();

    if (!isAdmin || !currentUser) {

      showToast(
        "Admin login is required.",
        "error"
      );

      return;

    }


    const file =
      document
        .getElementById(
          "photoFileInput"
        )
        .files[0];

    const title =
      document
        .getElementById(
          "photoTitleInput"
        )
        .value
        .trim();

    const tag =
      document
        .getElementById(
          "photoTagSelect"
        )
        .value;


    if (!file || !title) {

      showToast(
        "Please select an image and enter a title.",
        "info"
      );

      return;

    }


    try {

      showToast(
        "Uploading photo...",
        "info"
      );


      const uploaded =
        await uploadImage(
          file,
          "gallery"
        );


      const {
        error
      } =
        await supabaseClient

          .from("gallery")

          .insert({

            file_name:
              file.name,

            storage_path:
              uploaded.storagePath,

            caption:
              title,

            uploaded_by:
              currentUser.id

          });


      if (error) {

        await deleteStorageFile(
          uploaded.storagePath
        );

        throw error;

      }


      await loadGallery();

      closePhotoUploadModal();

      document
        .getElementById(
          "photoFileInput"
        )
        .value = "";

      document
        .getElementById(
          "photoTitleInput"
        )
        .value = "";

      showToast(
        "Festival photo uploaded successfully."
      );

    }
    catch (error) {

      console.error(error);

      showToast(
        error.message ||
        "Photo upload failed.",
        "error"
      );

    }

  };


window.deleteGalleryPhoto =
  async function (event, index) {

    event?.stopPropagation();

    event?.preventDefault();

    if (!isAdmin) {

      showToast(
        "Admin login is required.",
        "error"
      );

      return;

    }


    const item =
      galleryData[index];

    if (!item) {

      return;

    }


    if (
      !confirm(
        `Remove "${item.title}" from the gallery?`
      )
    ) {

      return;

    }


    try {

      if (item.id) {

        const {
          error
        } =
          await supabaseClient

            .from("gallery")

            .delete()

            .eq(
              "id",
              item.id
            );


        if (error) {

          throw error;

        }

      }


      if (item.storagePath) {

        await deleteStorageFile(
          item.storagePath
        );

      }


      await loadGallery();

      closeLightbox();

      showToast(
        "Photo removed.",
        "info"
      );

    }
    catch (error) {

      console.error(error);

      showToast(
        error.message ||
        "Unable to remove photo.",
        "error"
      );

    }

  };


async function deleteStorageFile(
  storagePath
) {

  if (!storagePath) {

    return;

  }

  const {
    error
  } =
    await supabaseClient

      .storage

      .from(
        STORAGE_BUCKET
      )

      .remove([
        storagePath
      ]);

  if (error) {

    console.warn(
      "Storage deletion warning:",
      error
    );

  }

}


/* =========================================================
   LIGHTBOX
   ========================================================= */

window.galleryKeydown =
  function (
    event,
    index
  ) {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      openLightbox(index);

    }

  };


window.openLightbox =
  function (index) {

    const item =
      galleryData[index];

    if (!item) {

      return;

    }

    currentLightboxItem =
      item;

    const modal =
      document.getElementById(
        "galleryModal"
      );

    const image =
      document.getElementById(
        "modalImg"
      );

    const title =
      document.getElementById(
        "modalTitle"
      );

    const deleteButton =
      document.getElementById(
        "deleteLightboxBtn"
      );


    image.src =
      item.image;

    image.alt =
      item.alt ||
      item.title;

    title.textContent =
      item.title;


    if (deleteButton) {

      deleteButton.style.display =
        isAdmin
          ? "inline-flex"
          : "none";

    }


    openModal(modal);

  };


window.closeLightbox =
  function () {

    closeModal(
      document.getElementById(
        "galleryModal"
      )
    );

    currentLightboxItem =
      null;

  };


window.deleteCurrentLightboxPhoto =
  async function () {

    if (!currentLightboxItem) {

      return;

    }


    const index =
      galleryData.findIndex(
        item =>
          item.id ===
          currentLightboxItem.id
      );


    if (index >= 0) {

      await deleteGalleryPhoto(
        null,
        index
      );

    }

  };


/* =========================================================
   PUJA SEVA
   ========================================================= */

function setupPujaDateSelect() {

  const select =
    document.getElementById(
      "slotDateInput"
    );

  if (!select) {

    return;

  }


  select.innerHTML =
    PUJA_DATES.map(
      day => `

        <option
          value="${day.date}">

          ${day.label}

        </option>

      `
    ).join("");

}


async function loadPujaBookings() {

  try {

    const {
      data,
      error
    } =
      await supabaseClient

        .from("puja_seva")

        .select("*")

        .order(
          "seva_date",
          {
            ascending: true
          }
        )

        .order(
          "slot_number",
          {
            ascending: true
          }
        );


    if (error) {

      throw error;

    }


    pujaBookings =
      data || [];


    renderPujaTable();

  }
  catch (error) {

    console.error(
      "Puja load error:",
      error
    );

    pujaBookings = [];

    renderPujaTable();

    showToast(
      "Unable to load Puja Seva bookings.",
      "error"
    );

  }

}


function renderPujaTable() {

  const tbody =
    document.getElementById(
      "yajamanTableBody"
    );

  if (!tbody) {

    return;

  }


  let rows = [];

  let availableCount = 0;


  PUJA_DATES.forEach(
    day => {

      for (
        let slotNumber = 1;
        slotNumber <= 3;
        slotNumber++
      ) {

        const booking =
          pujaBookings.find(
            item =>
              item.seva_date ===
                day.date &&
              Number(
                item.slot_number
              ) === slotNumber
          );


        if (booking) {

          rows.push({

            day,

            slotNumber,

            booking

          });

        }
        else {

          availableCount++;

          rows.push({

            day,

            slotNumber,

            booking: null

          });

        }

      }

    }
  );


  const count =
    document.getElementById(
      "availableSlotCount"
    );

  if (count) {

    count.textContent =
      availableCount;

  }


  tbody.innerHTML =
    rows.map(
      row => {

        if (row.booking) {

          const b =
            row.booking;

          return `

            <tr>

              <td>
                <strong>
                  ${escapeHtml(
                    row.day.label
                  )}
                </strong>
              </td>

              <td>
                Slot ${row.slotNumber}
              </td>

              <td>
                <strong>
                  ${escapeHtml(
                    b.flat_number
                  )}
                </strong>
              </td>

              <td>

                <strong>
                  ${escapeHtml(
                    b.family_name
                  )}
                </strong>

                ${
                  b.notes
                    ? `
                      <small
                        style="
                          display:block;
                          color:var(--muted);
                          font-size:.65rem;
                        ">

                        ${escapeHtml(
                          b.notes
                        )}

                      </small>
                    `
                    : ""
                }

              </td>

              <td>

                ${escapeHtml(
                  b.notes ||
                  "Puja Seva"
                )}

                <span class="badge-confirmed">
                  Confirmed
                </span>

              </td>

              <td>

                ${
                  isAdmin
                    ? `

                      <button
                        class="btn-slot-action btn-slot-edit"
                        onclick="openPujaEdit('${b.id}')">

                        <span
                          class="material-symbols-outlined"
                          style="font-size:14px">

                          edit

                        </span>

                        Update

                      </button>

                    `
                    : `

                      <span class="badge-confirmed">
                        Booked
                      </span>

                    `
                }

              </td>

            </tr>

          `;

        }


        return `

          <tr class="row-vacant">

            <td>

              <strong>
                ${escapeHtml(
                  row.day.label
                )}
              </strong>

            </td>

            <td>
              Slot ${row.slotNumber}
            </td>

            <td>—</td>

            <td>

              <span class="badge-vacant">
                Available
              </span>

            </td>

            <td>
              Puja Seva
            </td>

            <td>

              ${
                isAdmin
                  ? `
                    <button
                      class="btn-slot-action btn-slot-book"
                      onclick="openPujaBooking('${row.day.date}',${row.slotNumber})">

                      <span
                        class="material-symbols-outlined"
                        style="font-size:14px">
                        add_circle
                      </span>

                      Add Booking
                    </button>
                  `
                  : `
                    <span
                      class="badge-vacant admin-managed-badge"
                      title="Only the festival administrator can manage Puja bookings">
                      Admin Managed
                    </span>
                  `
              }

            </td>

          </tr>

        `;

      }
    ).join("");

}


window.openPujaBooking =
  function (
    date,
    slotNumber
  ) {

    if (!isAdmin) {
      showToast(
        "Only the festival administrator can add Puja bookings.",
        "error"
      );
      return;
    }

    currentPujaRecord =
      null;

    document
      .getElementById(
        "slotModalTitle"
      )
      .textContent =
      "Book Puja Seva";


    document
      .getElementById(
        "slotIdInput"
      )
      .value = "";


    document
      .getElementById(
        "slotDateInput"
      )
      .value =
      date;


    document
      .getElementById(
        "slotNumberInput"
      )
      .value =
      String(slotNumber);


    document
      .getElementById(
        "flatNumberInput"
      )
      .value = "";


    document
      .getElementById(
        "familyYajamanInput"
      )
      .value = "";


    document
      .getElementById(
        "sevaPreferenceInput"
      )
      .value =
      "Puja Seva";


    document
      .getElementById(
        "gotramInput"
      )
      .value = "";


    document
      .getElementById(
        "clearSlotBtn"
      )
      .style.display =
      "none";


    openModal(
      document.getElementById(
        "slotModal"
      )
    );

  };


window.openPujaEdit =
  async function (id) {

    if (!isAdmin) {

      openAdminLoginModal();

      return;

    }


    const booking =
      pujaBookings.find(
        item =>
          item.id === id
      );

    if (!booking) {

      return;

    }


    currentPujaRecord =
      booking;


    document
      .getElementById(
        "slotModalTitle"
      )
      .textContent =
      "Update Puja Seva";


    document
      .getElementById(
        "slotIdInput"
      )
      .value =
      booking.id;


    document
      .getElementById(
        "slotDateInput"
      )
      .value =
      booking.seva_date;


    document
      .getElementById(
        "slotNumberInput"
      )
      .value =
      String(
        booking.slot_number
      );


    document
      .getElementById(
        "flatNumberInput"
      )
      .value =
      booking.flat_number ||
      "";


    document
      .getElementById(
        "familyYajamanInput"
      )
      .value =
      booking.family_name ||
      "";


    document
      .getElementById(
        "sevaPreferenceInput"
      )
      .value =
      booking.notes ||
      "Puja Seva";


    document
      .getElementById(
        "gotramInput"
      )
      .value = "";


    document
      .getElementById(
        "clearSlotBtn"
      )
      .style.display =
      "inline-flex";


    openModal(
      document.getElementById(
        "slotModal"
      )
    );

  };


window.saveSlotDetails =
  async function (event) {

    event.preventDefault();

    /* Existing records may only be modified by an administrator.
       Empty currentPujaRecord means this is a new public booking. */
    if (currentPujaRecord?.id && !isAdmin) {
      showToast("Only the festival administrator can update Puja slots.", "error");
      closeSlotModal();
      return;
    }


    const date =
      document
        .getElementById(
          "slotDateInput"
        )
        .value;

    const slotNumber =
      Number(
        document
          .getElementById(
            "slotNumberInput"
          )
          .value
      );

    const flat =
      document
        .getElementById(
          "flatNumberInput"
        )
        .value
        .trim();

    const family =
      document
        .getElementById(
          "familyYajamanInput"
        )
        .value
        .trim();

    const seva =
      document
        .getElementById(
          "sevaPreferenceInput"
        )
        .value
        .trim();

    const gotram =
      document
        .getElementById(
          "gotramInput"
        )
        .value
        .trim();


    if (!date || !flat || !family) {

      showToast(
        "Please enter date, flat number and family name.",
        "info"
      );

      return;

    }


    const payload = {

      seva_date:
        date,

      slot_number:
        slotNumber,

      flat_number:
        flat,

      family_name:
        family,

      notes:
        [
          seva,
          gotram
            ? `Gotram: ${gotram}`
            : ""
        ]
        .filter(Boolean)
        .join(" • ")

    };


    try {

      if (
        currentPujaRecord &&
        currentPujaRecord.id
      ) {

        if (!isAdmin) {

          showToast(
            "Only the admin can update an existing booking.",
            "error"
          );

          return;

        }


        const {
          error
        } =
          await supabaseClient

            .from("puja_seva")

            .update(payload)

            .eq(
              "id",
              currentPujaRecord.id
            );


        if (error) {

          throw error;

        }


        showToast(
          "Puja Seva booking updated."
        );

      }
      else {

        const {
          error
        } =
          await supabaseClient

            .from("puja_seva")

            .insert(payload);


        if (error) {

          if (
            error.code === "23505"
          ) {

            showToast(
              "This Puja slot has already been booked. Please choose another slot.",
              "error"
            );

            return;

          }

          throw error;

        }


        showToast(
          "Puja Seva slot booked successfully."
        );

      }


      closeSlotModal();

      await loadPujaBookings();

    }
    catch (error) {

      console.error(error);

      showToast(
        error.message ||
        "Unable to save Puja booking.",
        "error"
      );

    }

  };


window.clearSlotBooking =
  async function () {

    if (
      !isAdmin ||
      !currentPujaRecord
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


    try {

      const {
        error
      } =
        await supabaseClient

          .from("puja_seva")

          .delete()

          .eq(
            "id",
            currentPujaRecord.id
          );


      if (error) {

        throw error;

      }


      closeSlotModal();

      await loadPujaBookings();

      showToast(
        "Puja slot is now available.",
        "info"
      );

    }
    catch (error) {

      console.error(error);

      showToast(
        error.message ||
        "Unable to clear slot.",
        "error"
      );

    }

  };


window.closeSlotModal =
  function () {

    closeModal(
      document.getElementById(
        "slotModal"
      )
    );

    currentPujaRecord =
      null;

  };


/* =========================================================
   ANNADANAM
   ========================================================= */

async function loadAnnadanamDonors() {

  try {

    const {
      data,
      error
    } =
      await supabaseClient

        .from(
          "annadanam_donors"
        )

        .select(
          `
            id,
            flat_number,
            family_name,
            contact_number,
            notes,
            slot_id,
            created_at,
            annadanam_slots (
              slot_number
            )
          `
        )

        .order(
          "created_at",
          {
            ascending: true
          }
        );


    if (error) {

      throw error;

    }


    annadanamDonors =
      data || [];


    renderAnnadanamTable();

  }
  catch (error) {

    console.error(
      "Annadanam load error:",
      error
    );

    annadanamDonors = [];

    renderAnnadanamTable();

  }

}


function renderAnnadanamTable() {

  const tbody =
    document.getElementById(
      "annadanamTableBody"
    );

  if (!tbody) {

    return;

  }


  const grouped =
    ANNADANAM_ITEMS.map(
      (
        item,
        index
      ) => {

        const slotNumber =
          index + 1;

        const donors =
          annadanamDonors.filter(
            donor =>
              Number(
                donor
                  .annadanam_slots
                  ?.slot_number
              ) === slotNumber
          );


        return {
          item,
          slotNumber,
          donors
        };

      }
    );


  tbody.innerHTML =
    grouped.map(
      group => {

        const donorText =
          group.donors.length
            ? group.donors
                .map(
                  donor =>
                    `${escapeHtml(
                      donor.family_name
                    )} · Flat ${escapeHtml(
                      donor.flat_number
                    )}`
                )
                .join("<br>")
            : `
              <span class="badge-vacant">
                Open for Support
              </span>
            `;


        const action =
          isAdmin
            ? (group.donors.length
                ? group.donors.map(donor => `
                    <span class="admin-annadanam-actions">
                      <button
                        class="btn-slot-action btn-slot-edit admin-only-control"
                        onclick="openAnnadanamEdit('${donor.id}')">
                        <span class="material-symbols-outlined" style="font-size:14px">edit</span>
                        Update
                      </button>
                      <button
                        class="btn-slot-action btn-danger-outline admin-only-control"
                        onclick="deleteAnnadanamDonor('${donor.id}')">
                        <span class="material-symbols-outlined" style="font-size:14px">delete</span>
                        Remove
                      </button>
                    </span>
                  `).join("")
                : `
                    <button
                      class="btn-slot-action btn-slot-book"
                      onclick="openAnnadanamModal('${group.slotNumber}')">
                      <span class="material-symbols-outlined" style="font-size:14px">volunteer_activism</span>
                      Add Donor
                    </button>
                  `)
            : `
                <span
                  class="badge-vacant admin-managed-badge"
                  title="Only the festival administrator can manage Annadanam">
                  Admin Managed
                </span>
              `;


        return `

          <tr>

            <td>

              ${
                group.donors.length
                  ? `
                    <strong>
                      ${donorText}
                    </strong>
                  `
                  : `
                    <span
                      style="
                        font-weight:800;
                      ">

                      Available

                    </span>
                  `
              }

            </td>

            <td>

              ${
                group.donors.length
                  ? group.donors
                      .map(
                        donor =>
                          escapeHtml(
                            donor.flat_number
                          )
                      )
                      .join("<br>")
                  : "—"
              }

            </td>

            <td>

              <strong>
                ${escapeHtml(
                  group.item
                )}
              </strong>

              <small
                style="
                  display:block;
                  color:var(--muted);
                  margin-top:3px;
                ">

                Slot ${group.slotNumber}

              </small>

            </td>

            <td>

              ${action}

            </td>

          </tr>

        `;

      }
    ).join("");

}


window.openAnnadanamModal =
  async function (
    slotNumber
  ) {

    if (!isAdmin) {
      showToast(
        "Only the festival administrator can add Annadanam donors.",
        "error"
      );
      return;
    }

    currentAnnadanamDonor = null;
    currentAnnadanamSlot =
      Number(slotNumber);


    document
      .getElementById(
        "annadanamSlotIdInput"
      )
      .value =
      String(slotNumber);

    const heading = document.querySelector("#annadanamModal .modal-heading h3");
    if (heading) heading.textContent = "Support Annadanam";


    document
      .getElementById(
        "annadanamFlatInput"
      )
      .value = "";


    document
      .getElementById(
        "annadanamDonorInput"
      )
      .value = "";


    document
      .getElementById(
        "annadanamNotesInput"
      )
      .value = "";


    openModal(
      document.getElementById(
        "annadanamModal"
      )
    );

  };


window.openAnnadanamEdit =
  function (id) {

    if (!isAdmin) {
      showToast("Only the festival administrator can update Annadanam entries.", "error");
      openAdminLoginModal();
      return;
    }

    const donor = annadanamDonors.find(item => item.id === id);
    if (!donor) return;

    currentAnnadanamDonor = donor;
    currentAnnadanamSlot = Number(donor.annadanam_slots?.slot_number || 1);

    document.getElementById("annadanamSlotIdInput").value = String(currentAnnadanamSlot);
    document.getElementById("annadanamFlatInput").value = donor.flat_number || "";
    document.getElementById("annadanamDonorInput").value = donor.family_name || "";
    document.getElementById("annadanamNotesInput").value = donor.notes || "";

    const heading = document.querySelector("#annadanamModal .modal-heading h3");
    if (heading) heading.textContent = "Update Annadanam Support";

    openModal(document.getElementById("annadanamModal"));
  };


window.deleteAnnadanamDonor =
  async function (id) {

    if (!isAdmin) {
      showToast("Only the festival administrator can remove Annadanam entries.", "error");
      return;
    }

    const donor = annadanamDonors.find(item => item.id === id);
    if (!donor) return;

    if (!confirm(`Remove ${donor.family_name || "this sponsor"} from Annadanam?`)) return;

    try {
      const { error } = await supabaseClient
        .from("annadanam_donors")
        .delete()
        .eq("id", id);

      if (error) throw error;

      await loadAnnadanamDonors();
      showToast("Annadanam entry removed.", "info");
    } catch (error) {
      console.error(error);
      showToast(error.message || "Unable to remove Annadanam entry.", "error");
    }
  };


window.saveAnnadanamSponsorship =
  async function (event) {

    event.preventDefault();

    if (!isAdmin || !currentUser) {
      showToast(
        "Only the festival administrator can add Annadanam donors.",
        "error"
      );
      return;
    }

    const slotNumber =
      Number(
        document
          .getElementById(
            "annadanamSlotIdInput"
          )
          .value
      );

    const flat =
      document
        .getElementById(
          "annadanamFlatInput"
        )
        .value
        .trim();

    const donor =
      document
        .getElementById(
          "annadanamDonorInput"
        )
        .value
        .trim();

    const notes =
      document
        .getElementById(
          "annadanamNotesInput"
        )
        .value
        .trim();


    if (
      !slotNumber ||
      !flat ||
      !donor
    ) {

      showToast(
        "Please enter flat number and sponsor name.",
        "info"
      );

      return;

    }


    try {

      const {
        data: slot,
        error: slotError
      } =
        await supabaseClient

          .from(
            "annadanam_slots"
          )

          .select("id")

          .eq(
            "slot_number",
            slotNumber
          )

          .maybeSingle();


      if (slotError) {

        throw slotError;

      }


      if (!slot) {

        throw new Error(
          "Annadanam slot is not available."
        );

      }


      let error;

      if (currentAnnadanamDonor?.id) {
        if (!isAdmin) {
          showToast("Only the festival administrator can update Annadanam entries.", "error");
          return;
        }

        ({ error } = await supabaseClient
          .from("annadanam_donors")
          .update({
            flat_number: flat,
            family_name: donor,
            notes: notes || null
          })
          .eq("id", currentAnnadanamDonor.id));
      } else {
        ({ error } = await supabaseClient
          .from("annadanam_donors")
          .insert({
            slot_id: slot.id,
            flat_number: flat,
            family_name: donor,
            notes: notes || null
          }));
      }

      if (error) throw error;

      closeAnnadanamModal();
      await loadAnnadanamDonors();

      showToast(
        currentAnnadanamDonor?.id
          ? "Annadanam entry updated successfully."
          : "Annadanam support registered successfully."
      );

      currentAnnadanamDonor = null;

    }
    catch (error) {

      console.error(error);

      showToast(
        error.message ||
        "Unable to register Annadanam support.",
        "error"
      );

    }

  };


window.closeAnnadanamModal =
  function () {

    closeModal(
      document.getElementById(
        "annadanamModal"
      )
    );

    currentAnnadanamSlot = null;
    currentAnnadanamDonor = null;

    const heading = document.querySelector("#annadanamModal .modal-heading h3");
    if (heading) heading.textContent = "Support Annadanam";

  };


/* =========================================================
   SCHEDULE
   ========================================================= */

function renderSchedule(
  filter = "all"
) {

  const container =
    document.getElementById(
      "scheduleCardsContainer"
    );

  if (!container) {

    return;

  }


  const filtered =
    scheduleData.filter(
      item =>
        filter === "all" ||
        item.category.includes(
          filter
        )
    );


  container.innerHTML =
    filtered.map(
      item => {

        const badgeClass =
          item.badgeType === "crimson"
            ? "badge-day-crimson"
            : item.badgeType === "saffron"
              ? "badge-day-saffron"
              : "badge-day-gold";


        return `

          <article
            class="
              schedule-card
              ${
                item.isHighlight
                  ? "highlight-card"
                  : ""
              }
            ">

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
              ">
            </div>

            <div class="schedule-card-header">

              <span
                class="
                  schedule-day-badge
                  ${badgeClass}
                ">

                ${escapeHtml(
                  item.dayNumber
                )}
                •
                ${escapeHtml(
                  item.date
                )}

              </span>

              <span class="schedule-tag">

                ${escapeHtml(
                  item.badgeText
                )}

              </span>

            </div>

            <h3 class="schedule-card-title">

              ${escapeHtml(
                item.title
              )}

            </h3>

            <div class="schedule-meta">

              <div class="meta-item">

                <span
                  class="material-symbols-outlined">

                  schedule

                </span>

                <strong>

                  ${escapeHtml(
                    item.time
                  )}

                </strong>

              </div>


              <div class="meta-item">

                <span
                  class="material-symbols-outlined">

                  location_on

                </span>

                <span>

                  ${escapeHtml(
                    item.location
                  )}

                </span>

              </div>

            </div>

            <p class="schedule-card-desc">

              ${escapeHtml(
                item.description
              )}

            </p>

          </article>

        `;

      }
    ).join("");

}


window.filterSchedule =
  function (category) {

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

    renderSchedule(
      category
    );

  };


/* =========================================================
   NAVIGATION
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

  const icon =
    document.getElementById(
      "menuIcon"
    );

  if (!toggle || !drawer) {

    return;

  }


  toggle.addEventListener(
    "click",
    () => {

      const open =
        drawer.classList.toggle(
          "open"
        );

      if (icon) {

        icon.textContent =
          open
            ? "close"
            : "menu";

      }

      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );

    }
  );


  drawer
    .querySelectorAll("a")
    .forEach(
      link => {

        link.addEventListener(
          "click",
          () => {

            drawer.classList.remove(
              "open"
            );

            if (icon) {

              icon.textContent =
                "menu";

            }

            toggle.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      }
    );

}


function setupScrollSpy() {

  const sections =
    [
      ...document.querySelectorAll(
        "section[id]"
      )
    ];

  const links =
    [
      ...document.querySelectorAll(
        ".desktop-nav .nav-link"
      )
    ];


  if (
    !sections.length ||
    !links.length
  ) {

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }

            links.forEach(
              link => {

                link.classList.toggle(
                  "active",
                  link.getAttribute(
                    "href"
                  ) ===
                    `#${entry.target.id}`
                );

              }
            );

          }
        );

      },
      {
        rootMargin:
          "-25% 0px -65% 0px",

        threshold: 0
      }
    );


  sections.forEach(
    section =>
      observer.observe(
        section
      )
  );

}


/* =========================================================
   MODAL HELPERS
   ========================================================= */

function openModal(modal) {

  if (!modal) {

    return;

  }

  modal.classList.add(
    "open"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function closeModal(modal) {

  if (!modal) {

    return;

  }

  modal.classList.remove(
    "open"
  );

  if (
    !document.querySelector(
      ".modal.open"
    )
  ) {

    document.body.classList.remove(
      "modal-open"
    );

  }

}


function setupModalAccessibility() {

  document.addEventListener(
    "click",
    event => {

      const modals = [

        "adminLoginModal",

        "galleryModal",

        "slotModal",

        "annadanamModal",

        "photoUploadModal",

        "carouselModal"

      ];


      modals.forEach(
        id => {

          const modal =
            document.getElementById(
              id
            );

          if (
            event.target ===
            modal
          ) {

            closeModal(
              modal
            );

          }

        }
      );

    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !==
        "Escape"
      ) {

        return;

      }


      const open =
        document.querySelector(
          ".modal.open"
        );


      if (open) {

        closeModal(
          open
        );

      }

    }
  );

}


/* =========================================================
   FESTIVAL EFFECTS
   Temple bell + flower shower
   ========================================================= */

function setupFestivalEffects() {
  // The buttons use direct onclick handlers in index.html so the effects
  // remain reliable even if other initialization code changes.
  // Keep this hook for future festival effects without double-binding clicks.
}

function ringTempleBell() {
  const button = document.getElementById("templeBellBtn");
  if (button) {
    button.classList.remove("bell-ringing");
    void button.offsetWidth;
    button.classList.add("bell-ringing");
    window.setTimeout(() => button.classList.remove("bell-ringing"), 1200);
  }

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) throw new Error("Web Audio API unavailable");

    const ctx = new AudioContext();
    const now = ctx.currentTime;

    // Rich temple-bell style resonance: fundamental + metallic partials,
    // with a long natural decay of approximately 10 seconds.
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.30, now + 0.018);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 9.85);
    master.connect(ctx.destination);

    const partials = [
      [196.00, 0.30, "sine"],
      [392.00, 0.22, "sine"],
      [523.25, 0.15, "triangle"],
      [659.25, 0.11, "triangle"],
      [783.99, 0.08, "sine"],
      [1046.50, 0.045, "sine"],
      [1318.51, 0.025, "sine"]
    ];

    partials.forEach(([frequency, volume, type], index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, now);
      osc.detune.setValueAtTime(index * 1.7 - 4, now);
      osc.frequency.exponentialRampToValueAtTime(frequency * 0.992, now + 8.8);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2400 + index * 180, now);
      filter.Q.setValueAtTime(0.7, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(volume, now + 0.012 + index * 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 9.55 - index * 0.08);

      osc.connect(gain);
      gain.connect(filter);
      filter.connect(master);

      osc.start(now);
      osc.stop(now + 10.0);
    });

    // Short metallic strike transient for a more convincing bell attack.
    const strike = ctx.createOscillator();
    const strikeGain = ctx.createGain();
    strike.type = "triangle";
    strike.frequency.setValueAtTime(1450, now);
    strike.frequency.exponentialRampToValueAtTime(480, now + 0.18);
    strikeGain.gain.setValueAtTime(0.0001, now);
    strikeGain.gain.exponentialRampToValueAtTime(0.16, now + 0.004);
    strikeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
    strike.connect(strikeGain);
    strikeGain.connect(master);
    strike.start(now);
    strike.stop(now + 0.6);

    window.setTimeout(() => {
      try { ctx.close(); } catch (_) {}
    }, 10500);
  }
  catch (error) {
    console.warn("Temple bell audio unavailable:", error);
    showToast("Temple bell effect played.", "info");
  }
}

function scatterFlowers() {
  // Remove an existing shower so repeated clicks always produce a fresh effect.
  document.querySelectorAll(".flower-shower-layer").forEach(layer => layer.remove());

  const layer = document.createElement("div");
  layer.className = "flower-shower-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  const flowers = ["🌸", "🌺", "🌼", "🪷", "🌻", "💮", "🌷"];
  const count = window.innerWidth < 600 ? 42 : 72;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "falling-flower";
    petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    const startX = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 320;
    const size = 17 + Math.random() * 22;
    const duration = 3.4 + Math.random() * 3.1;
    const delay = Math.random() * 0.9;
    const rotation = Math.random() * 360;

    petal.style.left = `${startX}vw`;
    petal.style.fontSize = `${size}px`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.setProperty("--drift", `${drift}px`);
    petal.style.setProperty("--rotation", `${rotation}deg`);

    layer.appendChild(petal);
  }

  window.setTimeout(() => layer.remove(), 7600);
}

/* =========================================================
   UTILITIES
   ========================================================= */

function escapeHtml(
  value = ""
) {

  return String(value)
    .replace(
      /[&<>"']/g,
      char => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

      }[char])
    );

}


function clone(value) {

  return JSON.parse(
    JSON.stringify(value)
  );

}


function showToast(
  message,
  type = "success"
) {

  const container =
    document.getElementById(
      "toastContainer"
    );

  if (!container) {

    return;

  }


  const icon =
    type === "success"
      ? "check_circle"
      : type === "error"
        ? "error"
        : "info";


  const toast =
    document.createElement(
      "div"
    );

  toast.className =
    `toast ${type}`;


  toast.innerHTML = `

    <span
      class="material-symbols-outlined">

      ${icon}

    </span>

    <span>
      ${escapeHtml(message)}
    </span>

  `;


  container.appendChild(
    toast
  );


  setTimeout(
    () => {

      toast.style.opacity =
        "0";

      toast.style.transform =
        "translateY(10px)";

      toast.style.transition =
        "all .25s ease";


      setTimeout(
        () => toast.remove(),
        250
      );

    },
    3500
  );

}


/* =========================================================
   SUPABASE AUTH LISTENER
   ========================================================= */

supabaseClient.auth.onAuthStateChange(
  async (
    event,
    session
  ) => {

    if (session) {

      currentUser =
        session.user;

      if (
        event ===
        "SIGNED_IN"
      ) {

        await checkAdminSession();

      }

    }
    else {

      currentUser =
        null;

      setAdminState(
        false
      );

    }

  }
);
