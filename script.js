/*
 * ============================================================
 * VINAYAKA FESTIVAL 2026
 * GOWTHAM SAI ELITE TOWERS
 *
 * Supabase-powered version
 *
 * IMPORTANT:
 * Replace:
 *
 * YOUR_SUPABASE_PROJECT_URL
 * YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY
 *
 * with your actual Supabase values.
 *
 * NEVER put the Supabase SERVICE_ROLE key here.
 * ============================================================
 */


/* ============================================================
   SUPABASE CONFIGURATION
============================================================ */

const SUPABASE_URL =
  "YOUR_SUPABASE_PROJECT_URL";

const SUPABASE_ANON_KEY =
  "YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY";


let supabaseClient = null;

let currentUser = null;
let isAdmin = false;

let pujaSlots = [];
let annadanamSlots = [];
let annadanamDonors = [];
let galleryItems = [];

let currentGalleryIndex = -1;


/* ============================================================
   FESTIVAL DATA
============================================================ */

const scheduleData = [

  {
    day: "Day 01",
    date: "14 Sept 2026",
    type: "Puja",
    title: "Ganpati Sthapana & Kalasa Puja",
    time: "10:00 AM – 12:30 PM",
    location: "Clubhouse Central Mandapam",
    description:
      "Prana Pratishtha, Vedic chanting, Panchamrutha Abhishekam and evening Maha Aarti.",
    category: ["puja", "special"]
  },

  {
    day: "Day 02",
    date: "15 Sept 2026",
    type: "Puja",
    title: "Daily Puja & Evening Maha Aarti",
    time: "07:30 PM",
    location: "Central Lawn Mandapam",
    description:
      "Daily family sankalpam followed by community Maha Aarti.",
    category: ["puja"]
  },

  {
    day: "Day 03",
    date: "16 Sept 2026",
    type: "Puja",
    title: "Ganapathi Homam & Aarti",
    time: "07:30 PM",
    location: "Central Lawn Mandapam",
    description:
      "Devotional homam and evening Maha Aarti for residents.",
    category: ["puja"]
  },

  {
    day: "Day 04",
    date: "17 Sept 2026",
    type: "Puja",
    title: "Gotra Archana & Evening Aarti",
    time: "07:30 PM",
    location: "Central Lawn Mandapam",
    description:
      "Family Gotra Archana followed by community Maha Aarti.",
    category: ["puja"]
  },

  {
    day: "Day 05",
    date: "18 Sept 2026",
    type: "Cultural",
    title: "Children's Sloka, Rangoli & Art Fair",
    time: "05:00 PM – 07:30 PM",
    location: "Multi-Purpose Hall",
    description:
      "Children's activities, Rangoli, clay Ganesha art and Bhajan Sandhya.",
    category: ["cultural", "puja"]
  },

  {
    day: "Day 06",
    date: "19 Sept 2026",
    type: "Special",
    title: "Final Maha Puja & Kalasa Udvasana",
    time: "10:00 AM – 12:30 PM",
    location: "Clubhouse Central Mandapam",
    description:
      "Maha Purnahuti, Kalasa Udvasana and final blessings.",
    category: ["puja", "special"]
  },

  {
    day: "Day 06",
    date: "19 Sept 2026",
    type: "Special",
    title: "Grand Maha Annadanam",
    time: "12:30 PM – 03:30 PM",
    location: "Central Banquet Lawn",
    description:
      "Community feast for residents, staff, security and devotees.",
    category: ["special"]
  },

  {
    day: "Day 06",
    date: "19 Sept 2026",
    type: "Special",
    title: "Visarjan Shobha Yatra",
    time: "04:00 PM onwards",
    location: "Festival Procession",
    description:
      "Shobha Yatra, devotional celebrations and eco-friendly immersion.",
    category: ["special", "puja"]
  }

];


/* ============================================================
   INITIALIZATION
============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    setupNavigation();
    setupScheduleFilters();
    setupModals();
    setupForms();
    setupGalleryPreview();

    renderSchedule();

    if (
      SUPABASE_URL.startsWith("YOUR_") ||
      SUPABASE_ANON_KEY.startsWith("YOUR_")
    ) {

      showToast(
        "Please add your Supabase URL and publishable/anon key in script.js.",
        "error"
      );

      document.getElementById("galleryStatus").textContent =
        "Supabase configuration required.";

      return;
    }


    try {

      supabaseClient =
        window.supabase.createClient(
          SUPABASE_URL,
          SUPABASE_ANON_KEY
        );

      await initializeSupabase();

    } catch (error) {

      console.error(error);

      showToast(
        "Unable to connect to Supabase.",
        "error"
      );

    }

  }
);


/* ============================================================
   SUPABASE INITIALIZATION
============================================================ */

async function initializeSupabase() {

  const {
    data,
    error
  } = await supabaseClient.auth.getSession();


  if (error) {

    console.error(error);

    return;
  }


  currentUser =
    data?.session?.user || null;


  await refreshAdminState();

  await Promise.all([
    loadPujaSlots(),
    loadAnnadanamSlots(),
    loadGallery(),
    loadContributionSummary()
  ]);


  supabaseClient.auth.onAuthStateChange(
    async (_event, session) => {

      currentUser =
        session?.user || null;

      await refreshAdminState();

    }
  );

}


/* ============================================================
   ADMIN STATE
============================================================ */

async function refreshAdminState() {

  isAdmin = false;


  if (currentUser) {

    try {

      const {
        data,
        error
      } = await supabaseClient.rpc(
        "is_admin"
      );


      if (!error) {

        isAdmin = data === true;

      }

    } catch (error) {

      console.error(
        "Admin check failed:",
        error
      );

    }

  }


  updateAdminUI();

}


/* ============================================================
   ADMIN UI
============================================================ */

function updateAdminUI() {

  const adminPanel =
    document.getElementById("adminPanel");

  const galleryButton =
    document.getElementById("adminGalleryButton");

  const adminUpload =
    document.getElementById("adminUploadPhoto");

  const adminWelcome =
    document.getElementById("adminWelcome");


  if (isAdmin) {

    document.body.classList.add(
      "admin-mode"
    );

    adminPanel?.classList.remove(
      "hidden"
    );

    galleryButton?.classList.remove(
      "hidden"
    );


    if (adminWelcome) {

      adminWelcome.textContent =
        `Signed in as ${currentUser.email}`;

    }

  } else {

    document.body.classList.remove(
      "admin-mode"
    );

    adminPanel?.classList.add(
      "hidden"
    );

    galleryButton?.classList.add(
      "hidden"
    );

  }


  if (adminUpload) {

    adminUpload.onclick =
      openGalleryUpload;

  }


  document.getElementById(
    "adminLoginNav"
  )?.replaceWith(
    createAdminNavButton()
  );

}


/* ============================================================
   ADMIN NAV BUTTON
============================================================ */

function createAdminNavButton() {

  const button =
    document.createElement("button");

  button.id = "adminLoginNav";

  button.className =
    "nav-admin-btn";

  button.type = "button";


  if (isAdmin) {

    button.textContent =
      "Admin Panel";

    button.onclick = () => {

      document
        .getElementById("adminPanel")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    };

  } else {

    button.textContent =
      "Admin";

    button.onclick =
      openLoginModal;

  }


  return button;

}


/* ============================================================
   LOGIN
============================================================ */

async function loginAdmin(event) {

  event.preventDefault();


  if (!supabaseClient) {

    showToast(
      "Supabase is not configured.",
      "error"
    );

    return;
  }


  const email =
    document
      .getElementById("loginEmail")
      .value
      .trim();


  const password =
    document
      .getElementById("loginPassword")
      .value;


  const errorElement =
    document.getElementById(
      "loginError"
    );


  errorElement.classList.add(
    "hidden"
  );


  const {
    data,
    error
  } =
    await supabaseClient.auth
      .signInWithPassword({
        email,
        password
      });


  if (error) {

    console.error(error);

    errorElement.textContent =
      error.message;

    errorElement.classList.remove(
      "hidden"
    );

    return;
  }


  currentUser =
    data.user;


  await refreshAdminState();


  if (!isAdmin) {

    await supabaseClient.auth.signOut();

    errorElement.textContent =
      "This account is not registered as a festival administrator.";

    errorElement.classList.remove(
      "hidden"
    );

    return;
  }


  closeModal("loginModal");

  document
    .getElementById("loginForm")
    ?.reset();


  showToast(
    "Admin login successful."
  );


  document
    .getElementById("adminPanel")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


/* ============================================================
   LOGOUT
============================================================ */

async function logoutAdmin() {

  if (!supabaseClient) return;


  const {
    error
  } =
    await supabaseClient.auth.signOut();


  if (error) {

    showToast(
      "Unable to logout.",
      "error"
    );

    return;
  }


  currentUser = null;
  isAdmin = false;

  updateAdminUI();

  showToast(
    "Admin logged out.",
    "info"
  );

}


/* ============================================================
   LOAD PUJA
============================================================ */

async function loadPujaSlots() {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("puja_seva")
      .select("*")
      .order("seva_date", {
        ascending: true
      })
      .order("slot_number", {
        ascending: true
      });


  if (error) {

    console.error(
      "Puja load error:",
      error
    );

    showToast(
      "Unable to load Puja Seva.",
      "error"
    );

    return;
  }


  pujaSlots =
    Array.isArray(data)
      ? data
      : [];


  renderPujaSlots();

}


/* ============================================================
   RENDER PUJA
============================================================ */

function renderPujaSlots() {

  const tbody =
    document.getElementById(
      "pujaTableBody"
    );


  if (!tbody) return;


  const available =
    pujaSlots.filter(
      slot => !slot.family_name
    );


  document.getElementById(
    "availablePujaCount"
  ).textContent =
    available.length;


  if (!pujaSlots.length) {

    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-table">
          No Puja Seva slots have been configured yet.
        </td>
      </tr>
    `;

    return;
  }


  tbody.innerHTML =
    pujaSlots
      .map(slot => {

        const booked =
          Boolean(
            slot.family_name
          );


        const date =
          formatDate(
            slot.seva_date
          );


        const action =
          booked
            ? `
              ${
                isAdmin
                  ? `
                    <button
                      class="action-btn"
                      onclick="adminEditPuja('${slot.id}')"
                    >
                      Manage
                    </button>
                  `
                  : `
                    <button
                      class="action-btn"
                      disabled
                    >
                      Booked
                    </button>
                  `
              }
            `
            : `
              <button
                class="action-btn"
                onclick="openPujaBooking('${slot.id}')"
              >
                Book Slot
              </button>
            `;


        return `
          <tr>

            <td>
              <strong>
                ${escapeHtml(date)}
              </strong>
            </td>

            <td>
              Slot ${escapeHtml(slot.slot_number)}
            </td>

            <td>
              ${
                booked
                  ? `
                    <strong>
                      ${escapeHtml(slot.family_name)}
                    </strong>

                    <small>
                      Flat ${escapeHtml(slot.flat_number || "")}
                    </small>
                  `
                  : `
                    <span class="badge available">
                      Available
                    </span>
                  `
              }
            </td>

            <td>
              ${escapeHtml(
                slot.notes ||
                "Puja Seva"
              )}
            </td>

            <td>
              ${
                booked
                  ? `
                    <span class="badge confirmed">
                      Confirmed
                    </span>
                  `
                  : `
                    <span class="badge available">
                      Available
                    </span>
                  `
              }
            </td>

            <td>
              ${action}
            </td>

          </tr>
        `;

      })
      .join("");

}


/* ============================================================
   PUBLIC PUJA BOOKING
============================================================ */

function openPujaBooking(id) {

  const slot =
    pujaSlots.find(
      item => item.id === id
    );


  if (!slot) return;


  if (slot.family_name) {

    showToast(
      "This Puja Seva slot is already booked.",
      "info"
    );

    return;
  }


  document.getElementById(
    "pujaSlotId"
  ).value = id;


  openModal("pujaModal");

}


async function submitPujaBooking(event) {

  event.preventDefault();


  const slotId =
    document.getElementById(
      "pujaSlotId"
    ).value;


  const flat =
    document.getElementById(
      "pujaFlatNumber"
    ).value.trim();


  const family =
    document.getElementById(
      "pujaFamilyName"
    ).value.trim();


  const contact =
    document.getElementById(
      "pujaContact"
    ).value.trim();


  const notes =
    document.getElementById(
      "pujaNotes"
    ).value.trim();


  if (!flat || !family) {

    showToast(
      "Please enter flat number and family name.",
      "info"
    );

    return;
  }


  const slot =
    pujaSlots.find(
      item => item.id === slotId
    );


  if (!slot) {

    showToast(
      "Puja slot no longer exists.",
      "error"
    );

    return;
  }


  const {
    error
  } =
    await supabaseClient
      .from("puja_seva")
      .update({
        flat_number: flat,
        family_name: family,
        contact_number:
          contact || null,
        notes:
          notes || null
      })
      .eq("id", slotId)
      .is("family_name", null);


  if (error) {

    console.error(error);

    if (
      error.code === "23505"
    ) {

      showToast(
        "This slot was just booked by another family.",
        "error"
      );

    } else {

      showToast(
        error.message,
        "error"
      );

    }

    return;
  }


  closeModal("pujaModal");

  document
    .getElementById("pujaForm")
    ?.reset();


  showToast(
    "Puja Seva registration confirmed."
  );


  await loadPujaSlots();

}


/* ============================================================
   ADMIN PUJA
============================================================ */

async function openAdminPujaManager() {

  if (!isAdmin) {

    showToast(
      "Administrator access required.",
      "error"
    );

    return;
  }


  renderAdminPujaList();

  openModal(
    "adminPujaModal"
  );

}


function renderAdminPujaList() {

  const container =
    document.getElementById(
      "adminPujaList"
    );


  if (!container) return;


  container.innerHTML =
    pujaSlots.map(slot => {

      const booked =
        Boolean(
          slot.family_name
        );


      return `
        <div class="admin-list-item">

          <div>

            <strong>
              ${escapeHtml(
                formatDate(
                  slot.seva_date
                )
              )}
              · Slot ${escapeHtml(
                slot.slot_number
              )}
            </strong>

            <small>
              ${
                booked
                  ? `Flat ${escapeHtml(
                      slot.flat_number || ""
                    )}
                    ·
                    ${escapeHtml(
                      slot.family_name
                    )}`
                  : "Available"
              }
            </small>

          </div>

          <div class="admin-list-actions">

            <button
              class="small-btn edit"
              onclick="adminEditPuja('${slot.id}')"
            >
              ${booked ? "Edit" : "Assign"}
            </button>

            ${
              booked
                ? `
                  <button
                    class="small-btn delete"
                    onclick="adminClearPuja('${slot.id}')"
                  >
                    Clear
                  </button>
                `
                : ""
            }

          </div>

        </div>
      `;

    })
    .join("");

}


function adminEditPuja(id) {

  if (!isAdmin) return;


  const slot =
    pujaSlots.find(
      item => item.id === id
    );


  if (!slot) return;


  document.getElementById(
    "pujaSlotId"
  ).value = id;


  document.getElementById(
    "pujaFlatNumber"
  ).value =
    slot.flat_number || "";


  document.getElementById(
    "pujaFamilyName"
  ).value =
    slot.family_name || "";


  document.getElementById(
    "pujaContact"
  ).value =
    slot.contact_number || "";


  document.getElementById(
    "pujaNotes"
  ).value =
    slot.notes || "";


  closeModal(
    "adminPujaModal"
  );


  openModal(
    "pujaModal"
  );

}


async function adminClearPuja(id) {

  if (!isAdmin) return;


  if (
    !confirm(
      "Make this Puja Seva slot available again?"
    )
  ) {
    return;
  }


  const {
    error
  } =
    await supabaseClient
      .from("puja_seva")
      .update({
        flat_number: null,
        family_name: null,
        contact_number: null,
        notes: null
      })
      .eq("id", id);


  if (error) {

    showToast(
      error.message,
      "error"
    );

    return;
  }


  showToast(
    "Puja slot is now available.",
    "info"
  );


  await loadPujaSlots();

  renderAdminPujaList();

}


/* ============================================================
   ANNADANAM SLOTS
============================================================ */

async function loadAnnadanamSlots() {

  const {
    data: slots,
    error
  } =
    await supabaseClient
      .from("annadanam_slots")
      .select("*")
      .order("slot_number", {
        ascending: true
      });


  if (error) {

    console.error(
      "Annadanam slots error:",
      error
    );

    showToast(
      "Unable to load Annadanam slots.",
      "error"
    );

    return;
  }


  annadanamSlots =
    Array.isArray(slots)
      ? slots.slice(0, 3)
      : [];


  if (!annadanamSlots.length) {

    renderAnnadanam();

    return;
  }


  const slotIds =
    annadanamSlots.map(
      slot => slot.id
    );


  const {
    data: donors,
    error: donorError
  } =
    await supabaseClient
      .from("annadanam_donors")
      .select("*")
      .in("slot_id", slotIds)
      .order("created_at", {
        ascending: true
      });


  if (donorError) {

    console.error(
      "Annadanam donors error:",
      donorError
    );

    annadanamDonors = [];

  } else {

    annadanamDonors =
      Array.isArray(donors)
        ? donors
        : [];

  }


  renderAnnadanam();

}


/* ============================================================
   RENDER ANNADANAM
============================================================ */

function renderAnnadanam() {

  const container =
    document.getElementById(
      "annadanamContainer"
    );


  if (!container) return;


  if (!annadanamSlots.length) {

    container.innerHTML = `
      <div class="empty-table">
        Annadanam slots have not been configured yet.
      </div>
    `;

    return;
  }


  container.innerHTML =
    annadanamSlots.map(slot => {

      const donors =
        annadanamDonors.filter(
          donor =>
            donor.slot_id === slot.id
        );


      const description =
        slot.description ||
        `Annadanam Slot ${slot.slot_number}`;


      return `
        <article class="annadanam-card">

          <div class="annadanam-card-header">

            <span class="annadanam-number">
              ${escapeHtml(
                slot.slot_number
              )}
            </span>

            <span class="badge available">
              ${donors.length}
              ${donors.length === 1
                ? "family"
                : "families"}
            </span>

          </div>


          <h3>
            Annadanam Slot
            ${escapeHtml(
              slot.slot_number
            )}
          </h3>


          <p>
            ${escapeHtml(
              description
            )}
          </p>


          <div class="donor-list">

            ${
              donors.length
                ? donors.map(
                    donor => `
                      <div class="donor-item">

                        <strong>
                          ${escapeHtml(
                            donor.family_name
                          )}
                        </strong>

                        <small>
                          Flat ${escapeHtml(
                            donor.flat_number
                          )}
                        </small>

                      </div>
                    `
                  ).join("")
                : `
                  <div class="empty-donor">
                    No families registered yet.
                  </div>
                `
            }

          </div>


          <button
            class="btn btn-primary btn-full"
            onclick="openAnnadanamBooking('${slot.id}')"
          >
            <span class="material-symbols-outlined">
              volunteer_activism
            </span>

            Join This Slot
          </button>

        </article>
      `;

    })
    .join("");

}


/* ============================================================
   ANNADANAM BOOKING
============================================================ */

function openAnnadanamBooking(id) {

  const slot =
    annadanamSlots.find(
      item => item.id === id
    );


  if (!slot) return;


  document.getElementById(
    "annadanamSlotId"
  ).value = id;


  document.getElementById(
    "annadanamModalDescription"
  ).textContent =
    slot.description ||
    `You are joining Annadanam Slot ${slot.slot_number}.`;


  openModal(
    "annadanamModal"
  );

}


async function submitAnnadanam(event) {

  event.preventDefault();


  const slotId =
    document.getElementById(
      "annadanamSlotId"
    ).value;


  const flat =
    document.getElementById(
      "annadanamFlatNumber"
    ).value.trim();


  const family =
    document.getElementById(
      "annadanamFamilyName"
    ).value.trim();


  const contact =
    document.getElementById(
      "annadanamContact"
    ).value.trim();


  const notes =
    document.getElementById(
      "annadanamNotes"
    ).value.trim();


  if (!flat || !family) {

    showToast(
      "Please enter flat number and family name.",
      "info"
    );

    return;
  }


  const {
    error
  } =
    await supabaseClient
      .from("annadanam_donors")
      .insert({
        slot_id: slotId,
        flat_number: flat,
        family_name: family,
        contact_number:
          contact || null,
        notes:
          notes || null
      });


  if (error) {

    console.error(error);

    showToast(
      error.message,
      "error"
    );

    return;
  }


  closeModal(
    "annadanamModal"
  );


  document
    .getElementById(
      "annadanamForm"
    )
    ?.reset();


  showToast(
    "Annadanam participation registered."
  );


  await loadAnnadanamSlots();

}


/* ============================================================
   ADMIN ANNADANAM
============================================================ */

function openAdminAnnadanamManager() {

  if (!isAdmin) {

    showToast(
      "Administrator access required.",
      "error"
    );

    return;
  }


  renderAdminAnnadanamList();

  openModal(
    "adminAnnadanamModal"
  );

}


function renderAdminAnnadanamList() {

  const container =
    document.getElementById(
      "adminAnnadanamList"
    );


  if (!container) return;


  container.innerHTML =
    annadanamSlots.map(slot => {

      const donors =
        annadanamDonors.filter(
          donor =>
            donor.slot_id === slot.id
        );


      return `
        <div class="admin-list-item">

          <div>

            <strong>
              Annadanam Slot
              ${escapeHtml(
                slot.slot_number
              )}
            </strong>

            <small>
              ${
                donors.length
              }
              registered family/families
            </small>

          </div>

          <div class="admin-list-actions">

            ${
              donors.map(
                donor => `
                  <button
                    class="small-btn delete"
                    onclick="adminDeleteAnnadanamDonor('${donor.id}')"
                  >
                    Remove
                    ${escapeHtml(
                      donor.family_name
                    )}
                  </button>
                `
              ).join("")
            }

          </div>

        </div>
      `;

    })
    .join("");

}


async function adminDeleteAnnadanamDonor(
  donorId
) {

  if (!isAdmin) return;


  if (
    !confirm(
      "Remove this Annadanam registration?"
    )
  ) {
    return;
  }


  const {
    error
  } =
    await supabaseClient
      .from("annadanam_donors")
      .delete()
      .eq("id", donorId);


  if (error) {

    showToast(
      error.message,
      "error"
    );

    return;
  }


  showToast(
    "Annadanam registration removed.",
    "info"
  );


  await loadAnnadanamSlots();

  renderAdminAnnadanamList();

}


/* ============================================================
   GALLERY
============================================================ */

async function loadGallery() {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("gallery")
      .select("*")
      .order("created_at", {
        ascending: false
      });


  if (error) {

    console.error(
      "Gallery error:",
      error
    );

    document.getElementById(
      "galleryStatus"
    ).textContent =
      "Unable to load gallery.";

    return;
  }


  galleryItems =
    Array.isArray(data)
      ? data
      : [];


  renderGallery();

}


/* ============================================================
   GALLERY URL
============================================================ */

function getGalleryUrl(
  storagePath
) {

  if (!storagePath) {
    return "";
  }


  const {
    data
  } =
    supabaseClient.storage
      .from("festival-images")
      .getPublicUrl(
        storagePath
      );


  return data?.publicUrl || "";

}


/* ============================================================
   RENDER GALLERY
============================================================ */

function renderGallery() {

  const grid =
    document.getElementById(
      "galleryGrid"
    );


  const status =
    document.getElementById(
      "galleryStatus"
    );


  if (!grid) return;


  if (!galleryItems.length) {

    grid.innerHTML = `
      <div
        style="
          grid-column:1/-1;
          padding:50px;
          text-align:center;
          color:rgba(255,255,255,.6);
        "
      >
        <div style="font-size:45px;">
          📷
        </div>

        <h3>
          No festival photos yet
        </h3>

        <p>
          Photos uploaded by the administrator
          will appear here.
        </p>
      </div>
    `;


    if (status) {

      status.textContent =
        "Shared gallery • No photos yet";

    }


    return;
  }


  if (status) {

    status.textContent =
      `${galleryItems.length} shared festival photo${
        galleryItems.length === 1
          ? ""
          : "s"
      }`;

  }


  grid.innerHTML =
    galleryItems
      .map(
        (item, index) => {

          const imageUrl =
            getGalleryUrl(
              item.storage_path
            );


          return `
            <article
              class="gallery-card"
              onclick="openGalleryImage(${index})"
            >

              ${
                isAdmin
                  ? `
                    <button
                      class="gallery-delete-btn"
                      onclick="deleteGalleryImage(event, '${item.id}')"
                      aria-label="Delete image"
                    >
                      ×
                    </button>
                  `
                  : ""
              }


              <img
                src="${escapeHtml(
                  imageUrl
                )}"
                alt="${escapeHtml(
                  item.caption ||
                  "Festival photo"
                )}"
                loading="lazy"
              >


              <div class="gallery-overlay">

                <strong>
                  ${escapeHtml(
                    item.caption ||
                    "Festival Moment"
                  )}
                </strong>

                <small>
                  ${formatDateTime(
                    item.created_at
                  )}
                </small>

              </div>

            </article>
          `;

        }
      )
      .join("");

}


/* ============================================================
   GALLERY UPLOAD
============================================================ */

function openGalleryUpload() {

  if (!isAdmin) {

    showToast(
      "Only the administrator can upload images.",
      "error"
    );

    return;
  }


  document
    .getElementById(
      "galleryUploadForm"
    )
    ?.reset();


  document
    .getElementById(
      "imagePreview"
    )
    ?.classList.add(
      "hidden"
    );


  openModal(
    "galleryUploadModal"
  );

}


async function uploadGalleryImage(
  event
) {

  event.preventDefault();


  if (!isAdmin || !currentUser) {

    showToast(
      "Administrator login required.",
      "error"
    );

    return;
  }


  const file =
    document.getElementById(
      "galleryFile"
    ).files[0];


  const caption =
    document.getElementById(
      "galleryCaption"
    ).value.trim();


  if (!file) {

    showToast(
      "Please select an image.",
      "info"
    );

    return;
  }


  if (!file.type.startsWith("image/")) {

    showToast(
      "Only image files are allowed.",
      "error"
    );

    return;
  }


  const maxSize =
    10 * 1024 * 1024;


  if (file.size > maxSize) {

    showToast(
      "Image must be smaller than 10 MB.",
      "error"
    );

    return;
  }


  const safeName =
    sanitizeFileName(
      file.name
    );


  const uniqueName =
    `${crypto.randomUUID()}-${safeName}`;


  try {

    showToast(
      "Uploading image...",
      "info"
    );


    const {
      error: uploadError
    } =
      await supabaseClient.storage
        .from("festival-images")
        .upload(
          uniqueName,
          file,
          {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type
          }
        );


    if (uploadError) {

      throw uploadError;

    }


    const {
      error: dbError
    } =
      await supabaseClient
        .from("gallery")
        .insert({
          file_name: file.name,
          storage_path: uniqueName,
          caption:
            caption ||
            "Festival Moment",
          uploaded_by:
            currentUser.id
        });


    if (dbError) {

      /*
       * If database insertion fails,
       * remove the uploaded file to avoid
       * leaving an orphaned storage object.
       */

      await supabaseClient.storage
        .from("festival-images")
        .remove([
          uniqueName
        ]);


      throw dbError;

    }


    closeModal(
      "galleryUploadModal"
    );


    showToast(
      "Festival photo uploaded successfully."
    );


    await loadGallery();

  } catch (error) {

    console.error(
      "Gallery upload error:",
      error
    );


    showToast(
      error.message ||
      "Image upload failed.",
      "error"
    );

  }

}


/* ============================================================
   DELETE GALLERY IMAGE
============================================================ */

async function deleteGalleryImage(
  event,
  id
) {

  event?.stopPropagation();


  if (!isAdmin) {

    showToast(
      "Only the administrator can delete images.",
      "error"
    );

    return;
  }


  const item =
    galleryItems.find(
      gallery =>
        gallery.id === id
    );


  if (!item) return;


  if (
    !confirm(
      "Delete this festival photo permanently?"
    )
  ) {
    return;
  }


  try {

    const {
      error: storageError
    } =
      await supabaseClient.storage
        .from("festival-images")
        .remove([
          item.storage_path
        ]);


    if (storageError) {

      console.warn(
        "Storage delete warning:",
        storageError
      );

    }


    const {
      error: dbError
    } =
      await supabaseClient
        .from("gallery")
        .delete()
        .eq("id", id);


    if (dbError) {

      throw dbError;

    }


    showToast(
      "Festival photo deleted.",
      "info"
    );


    await loadGallery();

  } catch (error) {

    console.error(error);

    showToast(
      error.message ||
      "Unable to delete photo.",
      "error"
    );

  }

}


/* ============================================================
   LIGHTBOX
============================================================ */

function openGalleryImage(index) {

  const item =
    galleryItems[index];


  if (!item) return;


  currentGalleryIndex =
    index;


  const imageUrl =
    getGalleryUrl(
      item.storage_path
    );


  document.getElementById(
    "lightboxImage"
  ).src =
    imageUrl;


  document.getElementById(
    "lightboxImage"
  ).alt =
    item.caption ||
    "Festival photo";


  document.getElementById(
    "lightboxTitle"
  ).textContent =
    item.caption ||
    "Festival Moment";


  document.getElementById(
    "lightboxDate"
  ).textContent =
    formatDateTime(
      item.created_at
    );


  const deleteButton =
    document.getElementById(
      "lightboxDelete"
    );


  if (isAdmin) {

    deleteButton.classList.remove(
      "hidden"
    );

    deleteButton.onclick =
      () => {

        deleteGalleryImage(
          null,
          item.id
        );

        closeModal(
          "lightboxModal"
        );

      };

  } else {

    deleteButton.classList.add(
      "hidden"
    );

  }


  openModal(
    "lightboxModal"
  );

}


/* ============================================================
   CONTRIBUTION SUMMARY
============================================================ */

async function loadContributionSummary() {

  try {

    const {
      data,
      error
    } =
      await supabaseClient.rpc(
        "get_contribution_summary"
      );


    if (error) {

      console.warn(
        "Contribution summary:",
        error
      );

      return;
    }


    if (!data) return;


    /*
     * The website intentionally displays
     * only aggregate information.
     */

    if (
      typeof data === "object" &&
      !Array.isArray(data)
    ) {

      const contributorCount =
        data.contributor_count ??
        data.total_contributors ??
        data.contributors;


      const flatCount =
        data.flat_count ??
        data.total_flats ??
        data.participating_flats;


      if (
        contributorCount !== undefined
      ) {

        document.getElementById(
          "statContributors"
        ).textContent =
          contributorCount;

      }


      if (
        flatCount !== undefined
      ) {

        document.getElementById(
          "statFlats"
        ).textContent =
          flatCount;

      }

    }

  } catch (error) {

    console.warn(
      "Summary unavailable:",
      error
    );

  }

}


/* ============================================================
   SCHEDULE
============================================================ */

function renderSchedule(
  filter = "all"
) {

  const container =
    document.getElementById(
      "scheduleContainer"
    );


  if (!container) return;


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
      item => `
        <article
          class="schedule-card ${
            item.type === "Special"
              ? "highlight"
              : ""
          }"
        >

          <div class="schedule-card-top">

            <span class="day-badge">
              ${escapeHtml(
                item.day
              )}
              ·
              ${escapeHtml(
                item.date
              )}
            </span>

            <span class="schedule-type">
              ${escapeHtml(
                item.type
              )}
            </span>

          </div>


          <h3>
            ${escapeHtml(
              item.title
            )}
          </h3>


          <div class="schedule-meta">

            <div>

              <span class="material-symbols-outlined">
                schedule
              </span>

              ${escapeHtml(
                item.time
              )}

            </div>


            <div>

              <span class="material-symbols-outlined">
                location_on
              </span>

              ${escapeHtml(
                item.location
              )}

            </div>

          </div>


          <p>
            ${escapeHtml(
              item.description
            )}
          </p>

        </article>
      `
    )
    .join("");

}


function setupScheduleFilters() {

  document
    .querySelectorAll(
      ".schedule-filter"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".schedule-filter"
            )
            .forEach(
              item =>
                item.classList.remove(
                  "active"
                )
            );


          button.classList.add(
            "active"
          );


          renderSchedule(
            button.dataset.filter
          );

        }
      );

    });

}


/* ============================================================
   NAVIGATION
============================================================ */

function setupNavigation() {

  const menuButton =
    document.getElementById(
      "mobileMenuBtn"
    );


  const drawer =
    document.getElementById(
      "mobileDrawer"
    );


  menuButton?.addEventListener(
    "click",
    () => {

      drawer?.classList.toggle(
        "open"
      );

    }
  );


  drawer
    ?.querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          drawer.classList.remove(
            "open"
          );

        }
      );

    });


  document.getElementById(
    "adminLoginNav"
  )?.addEventListener(
    "click",
    openLoginModal
  );


  document.getElementById(
    "mobileAdminLogin"
  )?.addEventListener(
    "click",
    () => {

      drawer?.classList.remove(
        "open"
      );

      if (isAdmin) {

        document
          .getElementById(
            "adminPanel"
          )
          ?.scrollIntoView({
            behavior: "smooth"
          });

      } else {

        openLoginModal();

      }

    }
  );

}


/* ============================================================
   FORMS
============================================================ */

function setupForms() {

  document.getElementById(
    "loginForm"
  )?.addEventListener(
    "submit",
    loginAdmin
  );


  document.getElementById(
    "pujaForm"
  )?.addEventListener(
    "submit",
    submitPujaBooking
  );


  document.getElementById(
    "annadanamForm"
  )?.addEventListener(
    "submit",
    submitAnnadanam
  );


  document.getElementById(
    "galleryUploadForm"
  )?.addEventListener(
    "submit",
    uploadGalleryImage
  );


  document.getElementById(
    "adminLogout"
  )?.addEventListener(
    "click",
    logoutAdmin
  );


  document.getElementById(
    "adminManagePuja"
  )?.addEventListener(
    "click",
    openAdminPujaManager
  );


  document.getElementById(
    "adminManageAnnadanam"
  )?.addEventListener(
    "click",
    openAdminAnnadanamManager
  );


  document.getElementById(
    "adminGalleryButton"
  )?.addEventListener(
    "click",
    openGalleryUpload
  );

}


/* ============================================================
   GALLERY PREVIEW
============================================================ */

function setupGalleryPreview() {

  const input =
    document.getElementById(
      "galleryFile"
    );


  const preview =
    document.getElementById(
      "imagePreview"
    );


  input?.addEventListener(
    "change",
    () => {

      const file =
        input.files?.[0];


      if (!file) {

        preview.classList.add(
          "hidden"
        );

        preview.innerHTML =
          "";

        return;
      }


      if (
        !file.type.startsWith(
          "image/"
        )
      ) {

        showToast(
          "Please select an image file.",
          "error"
        );

        input.value = "";

        return;
      }


      const url =
        URL.createObjectURL(
          file
        );


      preview.innerHTML = `
        <img
          src="${url}"
          alt="Image preview"
        >
      `;


      preview.classList.remove(
        "hidden"
      );

    }
  );

}


/* ============================================================
   MODALS
============================================================ */

function setupModals() {

  document
    .querySelectorAll(
      "[data-close-modal]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          closeModal(
            button.dataset.closeModal
          );

        }
      );

    });


  document
    .querySelectorAll(".modal")
    .forEach(modal => {

      modal.addEventListener(
        "click",
        event => {

          if (
            event.target === modal
          ) {

            closeModal(
              modal.id
            );

          }

        }
      );

    });


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        document
          .querySelectorAll(
            ".modal.open"
          )
          .forEach(
            modal =>
              closeModal(
                modal.id
              )
          );

      }

    }
  );

}


function openModal(id) {

  document
    .getElementById(id)
    ?.classList.add(
      "open"
    );

}


function closeModal(id) {

  document
    .getElementById(id)
    ?.classList.remove(
      "open"
    );

}


function openLoginModal() {

  if (isAdmin) {

    document
      .getElementById(
        "adminPanel"
      )
      ?.scrollIntoView({
        behavior: "smooth"
      });

    return;
  }


  document
    .getElementById(
      "loginError"
    )
    ?.classList.add(
      "hidden"
    );


  openModal(
    "loginModal"
  );

}


/* ============================================================
   UTILITIES
============================================================ */

function escapeHtml(
  value = ""
) {

  return String(value)
    .replace(
      /[&<>"']/g,
      character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      })[character]
    );

}


function sanitizeFileName(
  filename
) {

  return filename
    .toLowerCase()
    .replace(
      /[^a-z0-9._-]/g,
      "-"
    )
    .replace(
      /-+/g,
      "-"
    );

}


function formatDate(
  dateString
) {

  if (!dateString) {
    return "";
  }


  const date =
    new Date(
      `${dateString}T00:00:00`
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return dateString;

  }


  return date.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );

}


function formatDateTime(
  dateString
) {

  if (!dateString) {
    return "";
  }


  const date =
    new Date(
      dateString
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return "";

  }


  return date.toLocaleString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
  );

}


/* ============================================================
   TOAST
============================================================ */

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
    document.createElement(
      "div"
    );


  toast.className =
    `toast ${type}`;


  toast.textContent =
    message;


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
        ".25s";

      setTimeout(
        () =>
          toast.remove(),
        250
      );

    },
    3200
  );

}


/* ============================================================
   GLOBAL FUNCTIONS
============================================================ */

window.openPujaBooking =
  openPujaBooking;

window.adminEditPuja =
  adminEditPuja;

window.adminClearPuja =
  adminClearPuja;

window.openAnnadanamBooking =
  openAnnadanamBooking;

window.adminDeleteAnnadanamDonor =
  adminDeleteAnnadanamDonor;

window.openGalleryImage =
  openGalleryImage;

window.deleteGalleryImage =
  deleteGalleryImage;

window.openLoginModal =
  openLoginModal;

window.openGalleryUpload =
  openGalleryUpload;
