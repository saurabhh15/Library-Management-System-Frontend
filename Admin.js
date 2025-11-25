document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const dashboardSection = document.getElementById("dashboard-section");
  const blogSection = document.getElementById("blog-sectionAdmin");
  const bookCatalogSection = document.getElementById(
    "Books-catalog-sectionAdmin"
  );
  const USerMAnageSection = document.getElementById("MAnage-USer-Adimn");
  const AccountMAnageSection = document.getElementById("MAnage-Account-Admin");

  // Hide all sections
  function hideAllSections() {
    dashboardSection.style.display = "none";
    blogSection.style.display = "none";
    bookCatalogSection.style.display = "none";
    bookCatalogSection.style.display = "none";
    USerMAnageSection.style.display = "none";
    AccountMAnageSection.style.display = "none";
  }

  // Show selected section
  function showSection(section) {
    hideAllSections();
    section.style.display = "block";
  }

  // Add click events
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove previous active state
      menuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const text = item.querySelector("span").innerText.trim();

      if (text === "Dashboard") {
        showSection(dashboardSection);
      } else if (text === "Manage Blogs") {
        showSection(blogSection);
      } else if (text === "Manage Book") {
        showSection(bookCatalogSection);
      } else if (text === "Manage Users") {
        showSection(USerMAnageSection);
      } else if (text === "Manage My Account") {
        showSection(AccountMAnageSection);
      } else {
        hideAllSections(); // hide all if other buttons are clicked
      }
    });
  });

  // Show dashboard by default
  showSection(dashboardSection);
});

// Quickadd dashboard

const optBlog = document.getElementById("opt-blog");
const optBook = document.getElementById("opt-book");
const expandBlog = document.getElementById("expand-blog");
const expandBook = document.getElementById("expand-book");
const quickRight = document.querySelector(".quick-right");
const quickCard = document.querySelector(".quick-card");

// BLOG HOVER
optBlog.addEventListener("mouseenter", () => {
  quickRight.style.width = "420px";
  quickRight.style.opacity = "1";
  quickRight.style.pointerEvents = "auto";
  expandBlog.classList.add("active");
  expandBook.classList.remove("active");
});

// BOOK HOVER
optBook.addEventListener("mouseenter", () => {
  quickRight.style.width = "420px";
  quickRight.style.opacity = "1";
  quickRight.style.pointerEvents = "auto";
  expandBook.classList.add("active");
  expandBlog.classList.remove("active");
});

// LEAVE AREA → CLOSE PANEL
quickCard.addEventListener("mouseleave", () => {
  quickRight.style.width = "0px";
  quickRight.style.opacity = "0";
  quickRight.style.pointerEvents = "none";
  expandBlog.classList.remove("active");
  expandBook.classList.remove("active");
});

const overlay = document.getElementById("modal-overlay");
const blogModal = document.getElementById("blog-modal");
const bookModal = document.getElementById("book-modal");
const closeBtns = document.querySelectorAll(".close-modal");

// OPEN BLOG MODAL
optBlog.addEventListener("click", () => {
  overlay.style.display = "block";
  blogModal.style.display = "block";
});

// OPEN BOOK MODAL
optBook.addEventListener("click", () => {
  overlay.style.display = "block";
  bookModal.style.display = "block";
});

// CLOSE MODAL BUTTONS
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.style.display = "none";
    blogModal.style.display = "none";
    bookModal.style.display = "none";
  });
});

// CLICKING OVERLAY CLOSES MODAL
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  blogModal.style.display = "none";
  bookModal.style.display = "none";
});

// BLOG FORM SUBMIT
document
  .querySelector("#blog-modal form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm(this)) {
      showSuccess("Please fill all fields!", true);
      return;
    }

    showSuccess("Blog Published Successfully!");
    closeAllModals();
  });

// BOOK FORM SUBMIT
document
  .querySelector("#book-modal form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateForm(this)) {
      showSuccess("Please fill all fields!", true);
      return;
    }

    showSuccess("Book Added Successfully!");
    closeAllModals();
  });

// Function to close everything
function closeAllModals() {
  overlay.style.display = "none";
  blogModal.style.display = "none";
  bookModal.style.display = "none";

  // clear forms
  document.querySelectorAll(".modal-form").forEach((f) => f.reset());
}

// Success popup
function showSuccess(message) {
  const box = document.createElement("div");
  box.className = "success-popup";
  box.innerText = message;
  document.body.appendChild(box);

  setTimeout(() => {
    box.classList.add("show");
  }, 10);

  setTimeout(() => {
    box.classList.remove("show");
    setTimeout(() => box.remove(), 300);
  }, 1800);
}
function showSuccess(message, isError = false) {
  const box = document.createElement("div");
  box.className = "success-popup";
  if (isError) box.classList.add("error");
  box.innerText = message;

  document.body.appendChild(box);

  setTimeout(() => box.classList.add("show"), 10);
  setTimeout(() => {
    box.classList.remove("show");
    setTimeout(() => box.remove(), 300);
  }, 1800);
}

function validateForm(form) {
  let isValid = true;

  form
    .querySelectorAll("input[required], textarea[required]")
    .forEach((field) => {
      field.style.borderColor = "#d1d5db"; // reset border

      if (!field.value.trim()) {
        field.style.borderColor = "red"; // highlight empty field
        isValid = false;
      }
    });

  return isValid;
}
// Charts
const borrowingCtx = document.getElementById("borrowingChart").getContext("2d");
const borrowingChart = new Chart(borrowingCtx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Books Borrowed",
        data: [24, 32, 18, 27, 35, 22, 30],
        borderColor: "#4CAF50",
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(76, 175, 80, 0.1)",
      },
      {
        label: "Books Returned",
        data: [18, 25, 22, 30, 26, 20, 25],
        borderColor: "#2196F3",
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(33, 150, 243, 0.1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

const collectionCtx = document
  .getElementById("collectionChart")
  .getContext("2d");
const collectionChart = new Chart(collectionCtx, {
  type: "doughnut",
  data: {
    labels: ["Computer Science", "Literature", "Science", "History", "Art"],
    datasets: [
      {
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#F44336",
          "#9C27B0",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});

const ctx7 = document.getElementById("sec7-borrowChart");

new Chart(ctx7, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "Borrowed",
        data: [48, 52, 50, 55, 58, 60, 70, 72, 75, 78, 85],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.15)",
        borderWidth: 3,
        tension: 0.3,
      },
      {
        label: "Returned",
        data: [45, 50, 48, 53, 56, 58, 66, 69, 72, 74, 80],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.18)",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
      },
      {
        label: "Overdue",
        data: [3, 1, 2, 5, 3, 2, 2, 3, 1, 2, 5],
        borderColor: "#ef4444",
        backgroundColor: "transparent",
        borderWidth: 2,
        pointRadius: 5,
        tension: 0.2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: { stepSize: 25 },
      },
    },
  },
});
const ctx8 = document.getElementById("sec8-growthChart");

new Chart(ctx8, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "Blog Posts",
        data: [8, 7, 10, 11, 12, 14, 15, 18, 19, 20, 21],
        borderColor: "#f97316",
        backgroundColor: "transparent",
        pointRadius: 5,
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Total Books",
        data: [900, 920, 950, 980, 1005, 1020, 1050, 1080, 1100, 1130, 1150],
        borderColor: "#2563eb",
        backgroundColor: "transparent",
        borderWidth: 3,
        tension: 0.3,
      },
      {
        label: "Total Students",
        data: [
          1000, 1040, 1070, 1100, 1125, 1150, 1180, 1210, 1250, 1290, 1330,
        ],
        borderColor: "#8b5cf6",
        backgroundColor: "transparent",
        borderWidth: 3,
        pointRadius: 6,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 0,
        max: 1400,
        ticks: { stepSize: 350 },
      },
    },
  },
});

/* Manage Book (WORKING) */

// Initial image URL for the first book (simulating a publicly hosted image)
const INITIAL_IMAGE_URL =
  "https://rukminim2.flixcart.com/image/480/480/k1nw9zk0/book/4/6/7/to-kill-a-mockingbird-original-imafezb9xghaaq3c.jpeg?q=90";

const INITIAL_IMAGE_URL2 =
  "https://m.media-amazon.com/images/I/61HkdyBpKOL._AC_UF1000,1000_QL80_.jpg";

const INITIAL_IMAGE_URL3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwVUu5ZKDlaeZn5S7XPEkEjAscw3T-EEbgQ&s";

const INITIAL_IMAGE_URL4 =
  "https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg";

const INITIAL_IMAGE_URL5 =
  "https://m.media-amazon.com/images/I/91fQEUwFMyL.jpg";

let books = [
  // Uses the public URL
  {
    id: 1,
    image: INITIAL_IMAGE_URL,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0-06-112008",
    stock: 15,
    category: "Literature",
  },
  // Uses the text placeholder
  {
    id: 2,
    image: INITIAL_IMAGE_URL2,
    title: "1984",
    author: "George Orwell",
    isbn: "978-0-452-28423",
    stock: 3,
    category: "Science Fiction",
  },
  {
    id: 3,
    image: INITIAL_IMAGE_URL3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0-7432-7356",
    stock: 0,
    category: "Literature",
  },
  {
    id: 4,
    image: INITIAL_IMAGE_URL4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-0-14-143951",
    stock: 8,
    category: "Romance",
  },
  {
    id: 5,
    image: INITIAL_IMAGE_URL5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "978-0-316-76948",
    stock: 2,
    category: "Literature",
  },
];

let requests = [];
let nextBookId = 6;
let bookToDeleteId = null;

/* ------------ UTILITIES ------------ */
/**
 * Converts a File object to a Base64 data URL.
 * @param {File} file The image file.
 * @returns {Promise<string>} A promise that resolves with the Base64 data URL.
 */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(TEXT_PLACEHOLDER); // Return placeholder if no file
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

/* ------------ RENDER BOOKS ------------ */
function renderBooks() {
  let tbody = document.getElementById("booksTableBody");
  if (!tbody) {
    console.error("Table body element 'booksTableBody' not found.");
    return;
  }

  let searchInput = document.getElementById("searchBooks");
  let search = searchInput ? searchInput.value.toLowerCase() : "";

  let filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search) ||
      b.author.toLowerCase().includes(search) ||
      b.isbn.includes(search) ||
      b.category.toLowerCase().includes(search)
  );

  tbody.innerHTML = filtered
    .map(
      (book) => `
                        <tr>
                            <td><img src="${
                              book.image || TEXT_PLACEHOLDER
                            }" alt="${
        book.title
      } cover" class="book-cover"></td>
                            <td class="font-semibold text-gray-800">${
                              book.title
                            }</td>
                            <td class="text-gray-600">${book.author}</td>
                            <td class="font-mono text-xs">${book.isbn}</td>
                            <td class="font-bold">${book.stock}</td>
                            <td><span class="manage_books_stock_badge ${getStockClass(
                              book.stock
                            )}">${getStockStatus(book.stock)}</span></td>
                            <td class="manage_books_action_btn_container">
                                <button class="manage_books_action_btn manage_books_btn_edit" onclick="openEditBookModal(${
                                  book.id
                                })">✏️ Edit</button>
                                <button class="manage_books_action_btn manage_books_btn_delete" onclick="deleteBook(${
                                  book.id
                                })">🗑️ Delete</button>
                            </td>
                        </tr>
                    `
    )
    .join("");

  updateStats();
}

/* ------------ STOCK BADGES and STATS are unchanged, but included for completeness ------------ */
function getStockClass(stock) {
  if (stock === 0) return "manage_books_stock_out";
  if (stock <= 5) return "manage_books_stock_low";
  return "manage_books_stock_high";
}

function getStockStatus(stock) {
  if (stock === 0) return "Out of Stock";
  if (stock <= 5) return "Low Stock";
  return "In Stock";
}

function updateStats() {
  const total = document.getElementById("totalBooksCount");
  const outOfStock = document.getElementById("outOfStockCount");
  const lowStock = document.getElementById("lowStockCount");
  const pendingRequests = document.getElementById("pendingRequestsCount");

  if (total) total.textContent = books.length;
  if (outOfStock)
    outOfStock.textContent = books.filter((b) => b.stock === 0).length;
  if (lowStock)
    lowStock.textContent = books.filter(
      (b) => b.stock > 0 && b.stock <= 5
    ).length;
  if (pendingRequests) pendingRequests.textContent = requests.length;
}

function filterBooks() {
  renderBooks();
}

/* ------------ ADD BOOK MODAL ------------ */
function openAddBookModal() {
  document.getElementById("addBookModal").style.display = "flex";
}
function closeAddBookModal() {
  document.getElementById("addBookModal").style.display = "none";
  document.getElementById("addBookForm").reset();
}

document
  .getElementById("addBookForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const imageFile = document.getElementById("bookImage").files[0];

    // Wait for the image file to be converted to Base64 (or use placeholder if none selected)
    const imageBase64 = await fileToBase64(imageFile);

    let newBook = {
      id: nextBookId++,
      image: imageBase64, // Uses Base64 or placeholder SVG
      title: document.getElementById("bookTitle").value,
      author: document.getElementById("bookAuthor").value,
      isbn: document.getElementById("bookISBN").value,
      stock: parseInt(document.getElementById("bookStock").value),
      category: document.getElementById("bookCategory").value,
    };

    books.push(newBook);
    renderBooks();
    closeAddBookModal();
  });

/* ------------ EDIT BOOK MODAL ------------ */
function openEditBookModal(id) {
  let book = books.find((b) => b.id === id);
  if (!book) return;

  document.getElementById("editBookId").value = book.id;
  document.getElementById("editBookTitle").value = book.title;
  document.getElementById("editBookAuthor").value = book.author;
  document.getElementById("editBookISBN").value = book.isbn;
  document.getElementById("editBookStock").value = book.stock;
  document.getElementById("editBookCategory").value = book.category;

  // Display current image preview (handles both URL and Base64 images)
  const preview = document.getElementById("editImagePreview");
  const previewContainer = document.getElementById("editImagePreviewContainer");
  preview.src = book.image || TEXT_PLACEHOLDER;
  previewContainer.classList.remove("hidden");

  // Clear file input for security (cannot pre-set value, user must re-select to change)
  document.getElementById("editBookImage").value = "";

  document.getElementById("editBookModal").style.display = "flex";
}

function closeEditBookModal() {
  document.getElementById("editBookModal").style.display = "none";
  document.getElementById("editImagePreviewContainer").classList.add("hidden");
}

document
  .getElementById("editBookForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    let id = parseInt(document.getElementById("editBookId").value);
    let book = books.find((b) => b.id === id);
    if (!book) return;

    const fileInput = document.getElementById("editBookImage");

    // Check if a new file was selected during the edit
    if (fileInput.files.length > 0) {
      const imageBase64 = await fileToBase64(fileInput.files[0]);
      book.image = imageBase64; // Update image to new Base64 string
    }
    // Note: If no new file is selected, the existing book.image (URL or Base64) is kept.

    // Update text properties
    book.title = document.getElementById("editBookTitle").value;
    book.author = document.getElementById("editBookAuthor").value;
    book.isbn = document.getElementById("editBookISBN").value;
    book.stock = parseInt(document.getElementById("editBookStock").value);
    book.category = document.getElementById("editBookCategory").value;

    renderBooks();
    closeEditBookModal();
  });

/* ------------ DELETE BOOK (Custom Modal Logic) ------------ */

function deleteBook(id) {
  if (confirm("Are you sure you want to delete this book?")) {
    books = books.filter((b) => b.id !== id);
    renderBooks();
  }
}
window.onclick = function (event) {
  if (event.target.id === "addBookModal") closeAddBookModal();
  if (event.target.id === "editBookModal") closeEditBookModal();
};

/* ------------ INITIAL LOAD ------------ */
document.addEventListener("DOMContentLoaded", renderBooks);

let request_data = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    user: "John Doe",
    email: "john@email.com",
    date: "2025-11-15",
  },
  {
    id: 2,
    title: "The Hobbit",
    user: "Jane Smith",
    email: "jane@email.com",
    date: "2025-11-14",
  },
  {
    id: 3,
    title: "Dune",
    user: "Bob Wilson",
    email: "bob@email.com",
    date: "2025-11-13",
  },
];

/* ---------------------
   Render Request Cards
---------------------- */
function loadRequests() {
  const box = document.getElementById("request_list");

  if (request_data.length === 0) {
    box.innerHTML = `<p style="color:#718096; padding:20px; text-align:center;">No pending requests</p>`;
    return;
  }

  box.innerHTML = request_data
    .map(
      (req) => `
        <div class="request_card" id="req_${req.id}">
            <div class="request_book_title">${req.title}</div>

            <div class="request_user">👤 ${req.user} • ${req.email}</div>
            <div class="request_date">📅 ${req.date}</div>

            <div class="request_btn_box">
                <button class="request_btn btn_approve" onclick="approveRequest(${req.id})">✔ Approve</button>
                <button class="request_btn btn_reject" onclick="rejectRequest(${req.id})">✖ Reject</button>
            </div>
        </div>
    `
    )
    .join("");
}

/*
   Approve Request */
function approveRequest(id) {
  removeCard(id);
  showNotification("Request Approved ✔", "success");
}

/* 
   Reject Request */
function rejectRequest(id) {
  removeCard(id);
  showNotification("Request Rejected ✖", "error");
}

/* 
   Remove Card Smoothly
 */
function removeCard(id) {
  const card = document.getElementById(`req_${id}`);

  card.classList.add("fade_out");

  setTimeout(() => {
    request_data = request_data.filter((r) => r.id !== id);
    loadRequests();
  }, 300);
}

/* 
   Notification Pop-up
*/
function showNotification(msg, type) {
  const notif = document.getElementById("request_notification");

  notif.textContent = msg;
  notif.className = "";
  notif.style.display = "block";

  if (type === "success") notif.classList.add("notif_success");
  else notif.classList.add("notif_error");

  setTimeout(() => (notif.style.display = "none"), 2600);
}

/* Init */
loadRequests();

// Manage Blogs
// Global Variables
let blogsDatabase = [
  {
    id: 1,
    title: "10 Must-Read Books of 2025",
    author: "Saurabh",
    category: "Book Reviews",
    status: "published",
    date: "2025-11-15",
    views: 1250,
    content:
      "Discover the most captivating books that defined this year. From thrilling mysteries to heartwarming romances, these books have captured the hearts of readers worldwide.",
  },
  {
    id: 2,
    title: "New Library Digital System Launch",
    author: "Priyanshu",
    category: "Library News",
    status: "published",
    date: "2025-11-10",
    views: 890,
    content:
      "We're excited to announce our new digital catalog system that makes finding and borrowing books easier than ever. Check out the new features and improvements.",
  },
  {
    id: 3,
    title: "Speed Reading Techniques for Students",
    author: "Michael Chen",
    category: "Prachi",
    status: "draft",
    date: "2025-11-08",
    views: 450,
    content:
      "Learn proven techniques to double your reading speed while maintaining comprehension. Perfect for students and busy professionals.",
  },
  {
    id: 4,
    title: "Interview with J.K. Rowling",
    author: "Amit",
    category: "Author Interviews",
    status: "archived",
    date: "2025-10-20",
    views: 2100,
    content:
      "An exclusive conversation with the beloved author about her writing process, inspiration, and upcoming projects.",
  },
  {
    id: 5,
    title: "How to Build a Reading Habit",
    author: "Rohit",
    category: "Reading Tips",
    status: "published",
    date: "2025-11-12",
    views: 780,
    content:
      "Simple strategies to develop a consistent reading habit, even with a busy schedule. Start your reading journey today.",
  },
  {
    id: 6,
    title: "Library Renovations Complete",
    author: "Anmol",
    category: "Library News",
    status: "published",
    date: "2025-11-05",
    views: 620,
    content:
      "Our library renovations are complete! Come visit and experience our new reading spaces, study rooms, and technology center.",
  },
];

let editingBlogId = null;
let activeFilter = "all";
let currentPage = 1;
let blogsPerPage = 5;
let selectedBlogs = [];

// DOM Elements
const modalOverlay = document.getElementById("modal_blog_form");
const addBlogButton = document.getElementById("btn_add_new_blog");
const closeModalButton = document.getElementById("btn_close_modal");
const cancelFormButton = document.getElementById("btn_cancel_form");
const blogForm = document.getElementById("blog_form_main");
const modalTitle = document.getElementById("modal_title_display");
const searchInput = document.getElementById("search_input_blogs");
const filterButtons = document.querySelectorAll(".filter_button_item");
const selectAllCheckbox = document.getElementById("select_all_checkbox_blogs");
const bulkPublishBtn = document.getElementById("bulk_publish_button");
const bulkDeleteBtn = document.getElementById("bulk_delete_button");
const bulkExportBtn = document.getElementById("bulk_export_button");
const notificationToast = document.getElementById("notification_toast_blogs");
const notificationMessage = document.getElementById(
  "notification_message_text"
);

// Initialize Application
function initializeApp() {
  renderBlogsTable();
  updateStatistics();
  setupEventListeners();
  updatePagination();
}

// Setup Event Listeners
function setupEventListeners() {
  addBlogButton.addEventListener("click", function () {
    openModal("add");
  });

  closeModalButton.addEventListener("click", closeModal);
  cancelFormButton.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  blogForm.addEventListener("submit", handleFormSubmit);

  searchInput.addEventListener("input", function (e) {
    currentPage = 1;
    renderBlogsTable();
    updatePagination();
  });

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) {
        b.classList.remove("active_filter_button");
      });
      this.classList.add("active_filter_button");
      activeFilter = this.getAttribute("data-filter");
      currentPage = 1;
      renderBlogsTable();
      updatePagination();
    });
  });

  selectAllCheckbox.addEventListener("change", function () {
    const checkboxes = document.querySelectorAll(".row_checkbox_blogs");
    checkboxes.forEach(function (cb) {
      cb.checked = selectAllCheckbox.checked;
    });
    updateSelectedBlogs();
  });

  bulkPublishBtn.addEventListener("click", bulkPublishBlogs);
  bulkDeleteBtn.addEventListener("click", bulkDeleteBlogs);
  bulkExportBtn.addEventListener("click", exportToCSV);
}

// Render Blogs Table
function renderBlogsTable() {
  const tableBody = document.getElementById("table_body_blogs");
  let filteredBlogs = getFilteredBlogs();

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);

  if (paginatedBlogs.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="9" class="no_data_message">No blogs found</td></tr>';
    return;
  }

  let html = "";
  paginatedBlogs.forEach(function (blog) {
    html += "<tr>";
    html +=
      '<td class="checkbox_cell_blogs"><input type="checkbox" class="row_checkbox_blogs" data-id="' +
      blog.id +
      '"></td>';
    html += "<td><strong>#" + blog.id + "</strong></td>";
    html += "<td><strong>" + blog.title + "</strong></td>";
    html += "<td>" + blog.author + "</td>";
    html += "<td>" + blog.category + "</td>";
    html +=
      '<td><span class="status_badge_display status_' +
      blog.status +
      '_badge">' +
      blog.status +
      "</span></td>";
    html += "<td>" + blog.views + "</td>";
    html += "<td>" + formatDate(blog.date) + "</td>";
    html += '<td><div class="actions_cell_blogs">';
    html +=
      '<button class="action_button_blog view_button_blog" onclick="viewBlogDetails(' +
      blog.id +
      ')">View</button>';
    html +=
      '<button class="action_button_blog edit_button_blog" onclick="editBlogItem(' +
      blog.id +
      ')">Edit</button>';
    html +=
      '<button class="action_button_blog delete_button_blog" onclick="deleteBlogItem(' +
      blog.id +
      ')">Delete</button>';
    html += "</div></td>";
    html += "</tr>";
  });

  tableBody.innerHTML = html;

  // Attach checkbox listeners
  document.querySelectorAll(".row_checkbox_blogs").forEach(function (cb) {
    cb.addEventListener("change", updateSelectedBlogs);
  });
}

// Get Filtered Blogs
function getFilteredBlogs() {
  let filtered = blogsDatabase;
  const searchTerm = searchInput.value.toLowerCase();

  // Apply status filter
  if (activeFilter !== "all") {
    filtered = filtered.filter(function (blog) {
      return blog.status === activeFilter;
    });
  }

  // Apply search filter
  if (searchTerm) {
    filtered = filtered.filter(function (blog) {
      return (
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.author.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm)
      );
    });
  }

  return filtered;
}

// Format Date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Update Statistics
function updateStatistics() {
  document.getElementById("stat_total_blogs").textContent =
    blogsDatabase.length;
  document.getElementById("stat_published_blogs").textContent =
    blogsDatabase.filter(function (b) {
      return b.status === "published";
    }).length;
  document.getElementById("stat_draft_blogs").textContent =
    blogsDatabase.filter(function (b) {
      return b.status === "draft";
    }).length;
  document.getElementById("stat_archived_blogs").textContent =
    blogsDatabase.filter(function (b) {
      return b.status === "archived";
    }).length;
}

// Open Modal
function openModal(mode, blogId) {
  modalOverlay.classList.add("modal_visible");
  document.body.style.overflow = "hidden";

  if (mode === "add") {
    modalTitle.textContent = "Add New Blog";
    blogForm.reset();
    editingBlogId = null;
  } else if (mode === "edit") {
    modalTitle.textContent = "Edit Blog";
    editingBlogId = blogId;
    const blog = blogsDatabase.find(function (b) {
      return b.id === blogId;
    });

    document.getElementById("input_blog_title").value = blog.title;
    document.getElementById("input_blog_author").value = blog.author;
    document.getElementById("select_blog_category").value = blog.category;
    document.getElementById("textarea_blog_content").value = blog.content;
    document.getElementById("select_blog_status").value = blog.status;
  }
}

// Close Modal
function closeModal() {
  modalOverlay.classList.remove("modal_visible");
  document.body.style.overflow = "auto";
  blogForm.reset();
  editingBlogId = null;
}

// Handle Form Submit
function handleFormSubmit(e) {
  e.preventDefault();

  const blogData = {
    id: editingBlogId || Date.now(),
    title: document.getElementById("input_blog_title").value,
    author: document.getElementById("input_blog_author").value,
    category: document.getElementById("select_blog_category").value,
    content: document.getElementById("textarea_blog_content").value,
    status: document.getElementById("select_blog_status").value,
    date: new Date().toISOString().split("T")[0],
    views: editingBlogId
      ? blogsDatabase.find(function (b) {
          return b.id === editingBlogId;
        }).views
      : 0,
  };

  if (editingBlogId) {
    const index = blogsDatabase.findIndex(function (b) {
      return b.id === editingBlogId;
    });
    blogsDatabase[index] = blogData;
    showNotification("Blog updated successfully!", "success");
  } else {
    blogsDatabase.unshift(blogData);
    showNotification("Blog added successfully!", "success");
  }

  closeModal();
  renderBlogsTable();
  updateStatistics();
  updatePagination();
}

// View Blog Details
window.viewBlogDetails = function (id) {
  const blog = blogsDatabase.find(function (b) {
    return b.id === id;
  });
  let message = "BLOG DETAILS\n\n";
  message += "Title: " + blog.title + "\n\n";
  message += "Author: " + blog.author + "\n\n";
  message += "Category: " + blog.category + "\n\n";
  message += "Status: " + blog.status + "\n\n";
  message += "Views: " + blog.views + "\n\n";
  message += "Date: " + formatDate(blog.date) + "\n\n";
  message += "Content:\n" + blog.content;

  alert(message);
};

// Edit Blog Item
window.editBlogItem = function (id) {
  openModal("edit", id);
};

// Delete Blog Item
window.deleteBlogItem = function (id) {
  if (confirm("Are you sure you want to delete this blog?")) {
    blogsDatabase = blogsDatabase.filter(function (b) {
      return b.id !== id;
    });
    renderBlogsTable();
    updateStatistics();
    updatePagination();
    showNotification("Blog deleted successfully!", "success");
  }
};

// Update Selected Blogs
function updateSelectedBlogs() {
  selectedBlogs = [];
  document
    .querySelectorAll(".row_checkbox_blogs:checked")
    .forEach(function (cb) {
      selectedBlogs.push(parseInt(cb.getAttribute("data-id")));
    });
}

// Bulk Publish Blogs
function bulkPublishBlogs() {
  if (selectedBlogs.length === 0) {
    alert("Please select at least one blog");
    return;
  }

  if (confirm("Publish " + selectedBlogs.length + " selected blog(s)?")) {
    blogsDatabase.forEach(function (blog) {
      if (selectedBlogs.includes(blog.id)) {
        blog.status = "published";
      }
    });
    renderBlogsTable();
    updateStatistics();
    showNotification(selectedBlogs.length + " blog(s) published!", "success");
    selectAllCheckbox.checked = false;
    selectedBlogs = [];
  }
}

// Bulk Delete Blogs
function bulkDeleteBlogs() {
  if (selectedBlogs.length === 0) {
    alert("Please select at least one blog");
    return;
  }

  if (confirm("Delete " + selectedBlogs.length + " selected blog(s)?")) {
    blogsDatabase = blogsDatabase.filter(function (blog) {
      return !selectedBlogs.includes(blog.id);
    });
    renderBlogsTable();
    updateStatistics();
    updatePagination();
    showNotification(selectedBlogs.length + " blog(s) deleted!", "success");
    selectAllCheckbox.checked = false;
    selectedBlogs = [];
  }
}

// Export to CSV
function exportToCSV() {
  let csv = "ID,Title,Author,Category,Status,Views,Date,Content\n";

  blogsDatabase.forEach(function (blog) {
    csv += blog.id + ",";
    csv += '"' + blog.title + '",';
    csv += '"' + blog.author + '",';
    csv += '"' + blog.category + '",';
    csv += blog.status + ",";
    csv += blog.views + ",";
    csv += blog.date + ",";
    csv += '"' + blog.content.replace(/"/g, '""') + '"\n';
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download =
    "blogs_export_" + new Date().toISOString().split("T")[0] + ".csv";
  a.click();
  window.URL.revokeObjectURL(url);

  showNotification("Blogs exported to CSV!", "success");
}

// Update Pagination
function updatePagination() {
  const container = document.getElementById("pagination_container_blogs");
  const filteredBlogs = getFilteredBlogs();
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html =
    '<button class="pagination_button" onclick="changePage(' +
    (currentPage - 1) +
    ')" ' +
    (currentPage === 1 ? "disabled" : "") +
    ">Previous</button>";

  for (let i = 1; i <= totalPages; i++) {
    html +=
      '<button class="pagination_button ' +
      (i === currentPage ? "active_page" : "") +
      '" onclick="changePage(' +
      i +
      ')">' +
      i +
      "</button>";
  }

  html +=
    '<button class="pagination_button" onclick="changePage(' +
    (currentPage + 1) +
    ')" ' +
    (currentPage === totalPages ? "disabled" : "") +
    ">Next</button>";

  container.innerHTML = html;
}

// Change Page
window.changePage = function (page) {
  const filteredBlogs = getFilteredBlogs();
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderBlogsTable();
  updatePagination();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Show Notification
function showNotification(message, type) {
  notificationMessage.textContent = message;
  notificationToast.className =
    "notification_toast show_notification " + type + "_notification";

  setTimeout(function () {
    notificationToast.classList.remove("show_notification");
  }, 3000);
}

// Initialize on page load
initializeApp();

/* ============================
   Manage User Admin
   ============================ */
const muState = {
  users: [
    {
      id: 1,
      name: "Aman Sharma",
      email: "aman.sharma@mail.com",
      role: "Student",
      status: "active",
      history: [
        { when: "2025-11-10 09:12", msg: "Account created" },
        {
          when: "2025-11-12 11:30",
          msg: "Borrowed 'Operating Systems' book",
        },
        { when: "2025-11-15 16:10", msg: "Profile updated" },
      ],
    },
    {
      id: 2,
      name: "Riya Kapoor",
      email: "riya.kapoor@mail.com",
      role: "Student",
      status: "inactive",
      history: [{ when: "2025-09-01 10:00", msg: "Account created" }],
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@mail.com",
      role: "Librarian",
      status: "active",
      history: [{ when: "2025-08-21 09:30", msg: "Set as librarian" }],
    },
    {
      id: 4,
      name: "Nisha Verma",
      email: "nisha.verma@mail.com",
      role: "Student",
      status: "active",
      history: [{ when: "2025-11-14 12:00", msg: "Password reset" }],
    },
    {
      id: 5,
      name: "Rahul Singh",
      email: "rahul.singh@mail.com",
      role: "Member",
      status: "inactive",
      history: [],
    },
    {
      id: 6,
      name: "Priya J",
      email: "priya.j@mail.com",
      role: "Student",
      status: "active",
      history: [],
    },
    {
      id: 7,
      name: "Kumar A",
      email: "kumar.a@mail.com",
      role: "Member",
      status: "active",
      history: [],
    },
    {
      id: 8,
      name: "Sara Ali",
      email: "sara.ali@mail.com",
      role: "Student",
      status: "active",
      history: [],
    },
    {
      id: 9,
      name: "Vikram P",
      email: "vikram.p@mail.com",
      role: "Student",
      status: "inactive",
      history: [],
    },
    {
      id: 10,
      name: "Zoya Khan",
      email: "zoya.khan@mail.com",
      role: "Student",
      status: "active",
      history: [],
    },
    {
      id: 11,
      name: "Deepak M",
      email: "deepak.m@mail.com",
      role: "Student",
      status: "active",
      history: [],
    },
    {
      id: 12,
      name: "Sunita R",
      email: "sunita.r@mail.com",
      role: "Member",
      status: "active",
      history: [],
    },
  ],
  filters: {
    search: "",
    role: "all",
    sort: "name-asc",
    page: 1,
    pageSize: 8,
  },
};

const rolesSet = (() => {
  const r = new Set();
  muState.users.forEach((u) => r.add(u.role));
  return Array.from(r);
})();

/* ============================
   Helpers
   ============================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function showToast(text, timeout = 2600) {
  const toast = $("#mu-toast");
  $("#mu-toast-text").textContent = text;
  toast.classList.add("mu-show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("mu-show"), timeout);
}

/* safe text */
function esc(s) {
  return String(s || "");
}

/* ============================
   Rendering
   ============================ */
function renderRoleFilter() {
  const sel = $("#mu-role-filter");
  sel.innerHTML = `<option value="all">Filter: All roles</option>`;
  rolesSet.forEach((r) => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = `Role: ${r}`;
    sel.appendChild(opt);
  });
}

function getFilteredSorted() {
  const { search, role, sort } = muState.filters;
  let arr = muState.users.slice();

  if (search && search.trim() !== "") {
    const q = search.toLowerCase();
    arr = arr.filter((u) => (u.name + " " + u.email).toLowerCase().includes(q));
  }
  if (role !== "all") {
    arr = arr.filter((u) => u.role === role);
  }

  // sort
  const [key, dir] = sort.split("-");
  arr.sort((a, b) => {
    if (key === "name" || key === "email") {
      const A = a[key].toLowerCase(),
        B = b[key].toLowerCase();
      if (A < B) return dir === "asc" ? -1 : 1;
      if (A > B) return dir === "asc" ? 1 : -1;
      return 0;
    }
    if (key === "status") {
      const A = a.status === "active" ? 1 : 0;
      const B = b.status === "active" ? 1 : 0;
      return dir === "asc" ? A - B : B - A;
    }
    return 0;
  });

  return arr;
}

function renderTable() {
  const tbody = $("#mu-tbody");
  tbody.innerHTML = "";

  const list = getFilteredSorted();
  const { page, pageSize } = muState.filters;
  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (page > pages) muState.filters.page = pages;

  const start = (muState.filters.page - 1) * pageSize;
  const pageItems = list.slice(start, start + pageSize);

  pageItems.forEach((u, idx) => {
    const tr = document.createElement("tr");
    tr.className = "mu-row-hover";
    tr.setAttribute("data-id", u.id);

    tr.innerHTML = `
      <td>${start + idx + 1}</td>
      <td>
        <div class="mu-user">
          <div class="mu-avatar" aria-hidden="true">${avatarLetters(
            u.name
          )}</div>
          <div class="mu-meta">
            <div class="mu-name">${esc(u.name)}</div>
            <div class="mu-email">${esc(u.email)}</div>
          </div>
        </div>
      </td>
      <td>${esc(u.email)}</td>
      <td><span class="mu-badge mu-role">${esc(u.role)}</span></td>
      <td>
        <span class="mu-badge ${
          u.status === "active" ? "active" : "inactive"
        } user-status">${u.status.toUpperCase()}</span>
      </td>
      <td>
        <div class="mu-actions" aria-hidden="false">
          <button class="mu-icon-btn mu-status-btn" data-action="toggle" title="Toggle status"><i class="fa fa-user-check"></i></button>
          <button class="mu-icon-btn mu-email-btn" data-action="email" title="Send email"><i class="fa fa-envelope"></i></button>
          <button class="mu-icon-btn mu-menu-btn" data-action="menu" aria-haspopup="true" title="More actions"><i class="fa fa-ellipsis-vertical"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  renderPagination(list.length);
  attachRowListeners();
}

/* pagination renderer */
function renderPagination(totalItems) {
  const { pageSize } = muState.filters;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const pagesDiv = $("#mu-pages");
  pagesDiv.innerHTML = "";

  // ensure current page valid
  if (muState.filters.page < 1) muState.filters.page = 1;
  if (muState.filters.page > totalPages) muState.filters.page = totalPages;

  // show up to 7 page buttons centered
  const maxButtons = 7;
  let start = Math.max(1, muState.filters.page - Math.floor(maxButtons / 2));
  let end = Math.min(totalPages, start + maxButtons - 1);
  if (end - start + 1 < maxButtons) start = Math.max(1, end - maxButtons + 1);

  for (let p = start; p <= end; p++) {
    const btn = document.createElement("button");
    btn.className =
      "mu-page-btn" + (p === muState.filters.page ? " active" : "");
    btn.textContent = p;
    btn.dataset.page = p;
    pagesDiv.appendChild(btn);
  }
  $(
    "#mu-page-info"
  ).textContent = `Page ${muState.filters.page} of ${totalPages} · ${totalItems} users`;
}

/* attach row-level listeners (delegated for the buttons) */
function attachRowListeners() {
  // close any open dropdown
  closeDropdown();

  $$("#mu-tbody tr").forEach((tr) => {
    const id = Number(tr.dataset.id);
    const actions = tr.querySelector(".mu-actions");

    // button listeners
    actions.querySelectorAll("button").forEach((btn) => {
      const act = btn.dataset.action;
      if (act === "toggle") {
        btn.onclick = () => toggleStatus(id);
      } else if (act === "email") {
        btn.onclick = () => sendEmail(id);
      } else if (act === "menu") {
        btn.onclick = (e) => openRowMenu(e.currentTarget, id);
      }
    });
  });
}

/* ---------- small util: initials ---------- */
function avatarLetters(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .slice(0, 2);
  if (!parts.length) return "U";
  return (
    parts.length === 1 ? parts[0][0] : parts[0][0] + parts[1][0]
  ).toUpperCase();
}

/* ============================
   Actions: status/email/menu
   ============================ */
function findUser(id) {
  return muState.users.find((u) => u.id === id);
}

function toggleStatus(id) {
  const u = findUser(id);
  if (!u) return;
  u.status = u.status === "active" ? "inactive" : "active";
  u.history = u.history || [];
  u.history.unshift({
    when: nowStr(),
    msg: `Status changed to ${u.status}`,
  });
  renderTable();
  showToast(`${u.name} is now ${u.status.toUpperCase()}`);
}

function sendEmail(id) {
  const u = findUser(id);
  if (!u) return;
  // pretend sending email: show toast
  showToast(`Email sent to ${u.email}`);
  // update history
  u.history = u.history || [];
  u.history.unshift({ when: nowStr(), msg: "Notification email sent" });
}

let activeDropdown = null;
function openRowMenu(btn, id) {
  // clone template and show near target button; only one dropdown exists at a time
  closeDropdown();

  const rect = btn.getBoundingClientRect();
  const tpl = $("#mu-dropdown-template");
  const dd = tpl.cloneNode(true);
  dd.id = "mu-active-dropdown";
  dd.classList.add("mu-open");
  dd.style.position = "fixed";

  // position to the right of the button
  dd.style.left = rect.right - 220 + "px";
  dd.style.top = rect.bottom + 8 + "px";
  document.body.appendChild(dd);
  activeDropdown = { el: dd, userId: id };

  // attach item listeners
  dd.querySelectorAll(".mu-item").forEach((item) => {
    item.onclick = (e) => {
      const action = item.dataset.action;
      handleDropdownAction(action, id);
      closeDropdown();
      e.stopPropagation();
    };
  });

  // stop click from bubbling (so outside click can close)
  dd.onclick = (e) => e.stopPropagation();
}

/* close dropdown */
function closeDropdown() {
  const existing = $("#mu-active-dropdown");
  if (existing) existing.remove();
  activeDropdown = null;
}

/* dropdown actions */
function handleDropdownAction(action, id) {
  const u = findUser(id);
  if (!u) return;
  if (action === "view") {
    openViewModal(u);
  } else if (action === "reset") {
    // simulate reset
    u.history.unshift({ when: nowStr(), msg: "Password reset" });
    renderTable();
    showToast(`Password reset link sent to ${u.email}`);
  } else if (action === "edit") {
    openEditModal(u);
  } else if (action === "delete") {
    openDeleteModal(u);
  }
}

/* ============================
   MODALS: edit / history / delete
   ============================ */

function openEditModal(user) {
  const overlay = $("#mu-edit-overlay");
  $("#mu-edit-id").value = user.id;
  $("#mu-edit-name").value = user.name;
  $("#mu-edit-email").value = user.email;
  $("#mu-edit-role").value = user.role;
  $("#mu-edit-status").value = user.status;
  $("#edit-sub").textContent = `Editing profile of ${user.name}`;
  overlay.classList.add("mu-show");
  overlay.style.display = "flex";
}

function closeEditModal() {
  const overlay = $("#mu-edit-overlay");
  overlay.classList.remove("mu-show");
  overlay.style.display = "none";
}

function openViewModal(user) {
  const overlay = $("#mu-history-overlay");

  const detailsBox = $("#mu-view-details");

  const joined = user.history?.length
    ? user.history[user.history.length - 1].when.split(" ")[0]
    : "—";

  const fines = user.fines ? `$${user.fines.toFixed(2)}` : "$0.00";

  detailsBox.innerHTML = `
        <div><strong>Full Name:</strong> <span style="float:right;">${user.name}</span></div>
        <div><strong>Email:</strong> <span style="float:right;">${user.email}</span></div>
        <div><strong>Member ID:</strong> <span style="float:right;">#${user.id}</span></div>
        <div><strong>Joined Date:</strong> <span style="float:right;">${joined}</span></div>
        <div><strong>Outstanding Fines:</strong> 
            <span style="float:right; color:red; font-weight:600;">${fines}</span>
        </div>
    `;

  // ACTIVITY TIMELINE (same as before)
  const container = $("#mu-history-content");
  container.innerHTML = "";

  const list = (user.history || []).slice(0, 50);

  if (!list.length) {
    container.innerHTML = `<div class="mu-event">
                <div class="mu-dot" style="background:#ddd"></div>
                <div class="mu-ev-content mu-subtle">No recent activity</div>
             </div>`;
  } else {
    list.forEach((ev) => {
      const el = document.createElement("div");
      el.className = "mu-event";
      el.innerHTML = `
                <div class="mu-dot"></div>
                <div class="mu-ev-content">
                    <div style="font-weight:600">${ev.msg}</div>
                    <div class="mu-subtle" style="margin-top:6px;font-size:12px">${ev.when}</div>
                </div>`;
      container.appendChild(el);
    });
  }

  overlay.classList.add("mu-show");
  overlay.style.display = "flex";
}

function closeHistory() {
  const overlay = $("#mu-history-overlay");
  overlay.classList.remove("mu-show");
  overlay.style.display = "none";
}

/* Delete modal */
let muPendingDeleteUser = null;
function openDeleteModal(user) {
  muPendingDeleteUser = user;
  $(
    "#mu-delete-sub"
  ).textContent = `Permanently delete ${user.name} (${user.email})? This action cannot be undone.`;
  const overlay = $("#mu-delete-overlay");
  overlay.classList.add("mu-show");
  overlay.style.display = "flex";
}

function closeDeleteModal() {
  muPendingDeleteUser = null;
  const overlay = $("#mu-delete-overlay");
  overlay.classList.remove("mu-show");
  overlay.style.display = "none";
}

function confirmDelete() {
  if (!muPendingDeleteUser) return;
  const id = muPendingDeleteUser.id;
  const idx = muState.users.findIndex((u) => u.id === id);
  if (idx >= 0) {
    muState.users.splice(idx, 1);
    showToast(`${muPendingDeleteUser.name} removed`);
    // update roles list
    rebuildRoles();
    renderTable();
  }
  closeDeleteModal();
}

// Close modal when clicking outside the modal box
document.querySelectorAll(".mu-overlay").forEach((overlay) => {
  overlay.addEventListener("click", function (e) {
    // If the user clicks directly on overlay (NOT modal)
    if (e.target === overlay) {
      overlay.style.display = "none";
      overlay.classList.remove("mu-show");
    }
  });
});

/* ============================
   Edit modal save
   ============================ */
$("#mu-edit-save").onclick = () => {
  const id = Number($("#mu-edit-id").value);
  const name = $("#mu-edit-name").value.trim();
  const email = $("#mu-edit-email").value.trim();
  const role = $("#mu-edit-role").value;
  const status = $("#mu-edit-status").value;

  if (!name || !email) {
    alert("Please enter name and email");
    return;
  }
  const u = findUser(id);
  if (!u) return;

  u.name = name;
  u.email = email;
  u.role = role;
  u.status = status;
  u.history = u.history || [];
  u.history.unshift({ when: nowStr(), msg: "Profile updated" });

  // Maybe role was new; rebuild roles list
  rebuildRoles();

  closeEditModal();
  renderTable();
  showToast(`Saved changes for ${name}`);
};

$("#mu-edit-cancel").onclick = closeEditModal;

/* history close */
$("#mu-history-close").onclick = closeHistory;

/* delete modal buttons */
$("#mu-delete-cancel").onclick = closeDeleteModal;
$("#mu-delete-confirm").onclick = confirmDelete;

/* add user button */
$("#mu-add-btn").onclick = () => {
  // create blank user and open edit modal as "Add"
  const nextId = Math.max(0, ...muState.users.map((u) => u.id)) + 1;
  const newUser = {
    id: nextId,
    name: "New User",
    email: `user${nextId}@mail.com`,
    role: rolesSet[0] || "Student",
    status: "active",
    history: [{ when: nowStr(), msg: "Account created" }],
  };
  muState.users.unshift(newUser);
  rebuildRoles();
  renderTable();
  openEditModal(newUser);
  showToast("New user added (edit to customize)");
};

/* ============================
   Search / filter / sort / paging
   ============================ */
$("#mu-search").addEventListener("input", (e) => {
  muState.filters.search = e.target.value;
  muState.filters.page = 1;
  $("#mu-clear-search").style.display = e.target.value
    ? "inline-block"
    : "none";
  renderTable();
});
$("#mu-clear-search").onclick = () => {
  $("#mu-search").value = "";
  $("#mu-clear-search").style.display = "none";
  muState.filters.search = "";
  renderTable();
};

$("#mu-role-filter").onchange = (e) => {
  muState.filters.role = e.target.value;
  muState.filters.page = 1;
  renderTable();
};
$("#mu-sort").onchange = (e) => {
  muState.filters.sort = e.target.value;
  renderTable();
};
$("#mu-page-size").onchange = (e) => {
  muState.filters.pageSize = Number(e.target.value);
  muState.filters.page = 1;
  renderTable();
};

/* pagination nav (delegated) */
$("#mu-pages").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn || !btn.dataset.page) return;
  muState.filters.page = Number(btn.dataset.page);
  renderTable();
});
$("#mu-prev").onclick = () => {
  muState.filters.page = Math.max(1, muState.filters.page - 1);
  renderTable();
};
$("#mu-next").onclick = () => {
  const total = getFilteredSorted().length;
  const totalPages = Math.max(1, Math.ceil(total / muState.filters.pageSize));
  muState.filters.page = Math.min(totalPages, muState.filters.page + 1);
  renderTable();
};

/* keyboard escape to close modals/dropdown */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdown();
    closeEditModal();
    closeHistory();
    closeDeleteModal();
  }
});

/* outside click to close dropdown */
document.addEventListener("click", (e) => {
  // if click not inside any dropdown or modal, close dropdown
  if (!e.target.closest(".mu-dropdown") && !e.target.closest(".mu-menu-btn")) {
    closeDropdown();
  }
});

/* utility to rebuild roles when users change */
function rebuildRoles() {
  rolesSet.length = 0;
  const set = new Set();
  muState.users.forEach((u) => set.add(u.role));
  set.forEach((r) => rolesSet.push(r));
  renderRoleFilter();
  // update edit modal role selector
  const editRole = $("#mu-edit-role");
  editRole.innerHTML = "";
  rolesSet.forEach((r) => {
    const o = document.createElement("option");
    o.value = r;
    o.textContent = r;
    editRole.appendChild(o);
  });
  // keep selected filter if possible
  if (!rolesSet.includes(muState.filters.role)) muState.filters.role = "all";
}

/* ============================
   Utilities
   ============================ */
function nowStr() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

/* initial setup */
(function init() {
  renderRoleFilter();
  // populate edit-role selector
  rebuildRoles();

  // initial table render
  renderTable();
})();

// menu cards
function updateDashboardStats() {
  const total = muState.users.length;
  const active = muState.users.filter((u) => u.status === "active").length;

  document.getElementById("mu-total-users").textContent = total;
  document.getElementById("mu-active-users").textContent = active;
  document.getElementById("mu-total-dues").textContent = "$17.50";
}
updateDashboardStats();

// And also call inside renderTable() after changes:
const originalRender = renderTable;
renderTable = function () {
  originalRender();
  updateDashboardStats();
};

/* ========= 
Manage MY account 
========= */
const Adm = {
  qs: (s) => document.querySelector(s),
  qsa: (s) => Array.from(document.querySelectorAll(s)),
  showSuccess: (msg) => {
    const el = Adm.qs("#adm-success");
    el.textContent = msg;
    el.style.display = "block";
    setTimeout(() => (el.style.display = "none"), 4200);
  },
  showError: (msg) => {
    const el = Adm.qs("#adm-error");
    el.textContent = msg;
    el.style.display = "block";
    setTimeout(() => (el.style.display = "none"), 5400);
  },
};

/* ===== profile image change ===== */
const imgInput = Adm.qs("#adm-img-input");
const imgElem = Adm.qs("#adm-profile-img");
Adm.qs("#adm-change-photo").addEventListener("click", () => imgInput.click());
imgInput.addEventListener("change", function () {
  const f = this.files && this.files[0];
  if (!f) return;
  if (!f.type.startsWith("image/")) {
    Adm.showError("Please select an image file.");
    return;
  }
  const url = URL.createObjectURL(f);
  imgElem.src = url;
  Adm.showSuccess("Profile photo updated (preview).");
});

/* remove photo -> fallback to uploaded file path default image */
Adm.qs("#adm-remove-photo").addEventListener("click", () => {
  imgElem.src = "/mnt/data/3b4ebcab-8e87-482f-9cdc-3d2be75396fc.png";
  Adm.showSuccess("Profile photo removed.");
});

/* ===== Save account info ===== */
Adm.qs("#adm-save-info").addEventListener("click", () => {
  const name = Adm.qs("#adm-name").value.trim();
  const email = Adm.qs("#adm-email").value.trim();
  if (!name || !email) {
    Adm.showError("Name and email are required.");
    return;
  }

  Adm.qs("#adm-display-name").textContent = name;
  Adm.qs("#adm-display-email").textContent = email;
  Adm.showSuccess("Account information saved.");
});

/* top save */
Adm.qs("#adm-save-top").addEventListener("click", () =>
  Adm.qs("#adm-save-info").click()
);
Adm.qs("#adm-reset-form").addEventListener("click", () => {
  // simple reset to default demo-values
  Adm.qs("#adm-name").value = "Saurabh Kumar";
  Adm.qs("#adm-email").value = "saurabh123@gmail.com";
  Adm.qs("#adm-phone").value = "9876543210";
  Adm.qs("#adm-dob").value = "1990-05-15";
  Adm.showSuccess("Form reset to original values.");
});

/* ===== password logic ===== */
function admTogglePw(id) {
  const el = Adm.qs("#" + id);
  if (!el) return;
  el.type = el.type === "password" ? "text" : "password";
}
Adm.qs("#adm-new-pw").addEventListener("input", function () {
  const v = this.value;
  const meter = Adm.qs("#adm-strength i");
  // simple strength calc
  let score = 0;
  if (v.length >= 8) score += 1;
  if (/[A-Z]/.test(v)) score += 1;
  if (/[0-9]/.test(v)) score += 1;
  if (/[^A-Za-z0-9]/.test(v)) score += 1;
  const pct = Math.min(100, (score / 4) * 100);
  meter.style.width = pct + "%";
  // color via gradient handled in CSS
});
Adm.qs("#adm-save-pw").addEventListener("click", () => {
  const cur = Adm.qs("#adm-current-pw").value;
  const nw = Adm.qs("#adm-new-pw").value;
  const cf = Adm.qs("#adm-confirm-pw").value;
  if (!nw || nw.length < 8) {
    Adm.showError("New password must be at least 8 characters.");
    return;
  }
  if (nw !== cf) {
    Adm.showError("Passwords do not match.");
    return;
  }
  if (nw === cur) {
    Adm.showError("New password must differ from current.");
    return;
  }
  // simulate save
  Adm.showSuccess("Password updated successfully.");
  Adm.qs("#adm-current-pw").value = "";
  Adm.qs("#adm-new-pw").value = "";
  Adm.qs("#adm-confirm-pw").value = "";
  Adm.qs("#adm-strength i").style.width = "0%";
});

/* ===== notifications ===== */
Adm.qs("#adm-save-notif").addEventListener("click", () => {
  const prefs = {
    email: Adm.qs("#adm-email-notif").checked,
    sms: Adm.qs("#adm-sms-notif").checked,
    newbooks: Adm.qs("#adm-newbooks-notif").checked,
    events: Adm.qs("#adm-events-notif").checked,
  };
  console.log("Admin notification prefs:", prefs);
  Adm.showSuccess("Notification preferences saved.");
});
Adm.qs("#adm-reset-notif").addEventListener("click", () => {
  Adm.qs("#adm-email-notif").checked = true;
  Adm.qs("#adm-sms-notif").checked = false;
  Adm.qs("#adm-newbooks-notif").checked = true;
  Adm.qs("#adm-events-notif").checked = false;
  Adm.showSuccess("Notification preferences reset.");
});

/* ===== preview button (just demonstrates) ===== */
Adm.qs("#adm-preview-btn").addEventListener("click", () => {
  Adm.showSuccess("Preview opened (demo).");
});

/* ===== small helpers ===== */
(function init() {
  // populate small stat values (demo)
  Adm.qs("#adm-stat-books").textContent = "5,247";
  Adm.qs("#adm-stat-active").textContent = "1,538";
  Adm.qs("#adm-stat-borrowed").textContent = "684";
})();

// For Logout btn
function adminLogout() {
  // Optional: Clear any saved session data
  localStorage.clear();
  sessionStorage.clear();

  // Show confirmation message (optional)
  alert("You have been logged out successfully!");

  // Redirect to home/index page
  window.location.href = "index.html";
}