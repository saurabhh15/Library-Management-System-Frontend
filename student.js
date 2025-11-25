const books = [
  {
    title: "The Midnight Library",
    genre: "Fiction",
    year: 2020,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    status: "available",
  },
  {
    title: "Project Hail Mary",
    genre: "Sci-Fi",
    year: 2021,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
    status: "few",
  },
  {
    title: "Dune",
    genre: "Sci-Fi",
    year: 1965,
    rating: 4.7,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    status: "out",
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    year: 2018,
    rating: 4.9,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    status: "available",
  },

  // Added Dummy Books
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    year: 1997,
    rating: 4.4,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1757619021i/69571.jpg",
    status: "few",
  },
  {
    title: "The Silent Patient",
    genre: "Thriller",
    year: 2019,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
    status: "available",
  },
  {
    title: "1984",
    genre: "Dystopian",
    year: 1949,
    rating: 4.6,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
    status: "out",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic",
    year: 1960,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg",
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    year: 1988,
    rating: 4.7,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    status: "available",
  },
  {
    title: "Becoming",
    genre: "Biography",
    year: 2018,
    rating: 4.9,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
    status: "available",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    year: 1937,
    rating: 4.7,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
    status: "few",
  },
  {
    title: "Harry Potter",
    genre: "Fantasy",
    year: 1997,
    rating: 4.9,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg",
    status: "available",
  },
  {
    title: "The Great Gatsby",
    genre: "Classic",
    year: 1925,
    rating: 4.4,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg",
    status: "available",
  },
  {
    title: "Sapiens",
    genre: "History",
    year: 2011,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg",
    status: "few",
  },
  {
    title: "Ikigai",
    genre: "Self-help",
    year: 2016,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680629184i/124950497.jpg",
    status: "few",
  },
  {
    title: "The Power of Habit",
    genre: "Self-help",
    year: 2012,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1545854312i/12609433.jpg",
    status: "available",
  },
  {
    title: "The Girl on the Train",
    genre: "Mystery",
    year: 2015,
    rating: 4.2,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748242265i/22557272.jpg",
    status: "available",
  },
  {
    title: "Gone Girl",
    genre: "Thriller",
    year: 2012,
    rating: 4.4,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg",
    status: "out",
  },
  {
    title: "The Martian",
    genre: "Sci-Fi",
    year: 2011,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg",
    status: "available",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    year: 1813,
    rating: 4.6,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg",
    status: "available",
  },
  {
    title: "The Fault in Our Stars",
    genre: "Romance",
    year: 2012,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1436142804i/25856606.jpg",
    status: "available",
  },
  {
    title: "Game of Thrones",
    genre: "Fiction",
    year: 1996,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/I/71P+4DslKmL._AC_UF1000,1000_QL80_.jpg",
    status: "available",
  },
  {
    title: "Fifty Shades Of Grey",
    genre: "Romance",
    year: 2011,
    rating: 4.6,
    img: "https://fordhamobserver.com/wp-content/uploads/2012/05/Arts_50-Shades-of-grey1.jpg",
    status: "few",
  },
  {
    title: "2001: A Space Odyssey",
    genre: "Sci-Fi",
    year: 1968,
    rating: 4.7,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1432468943i/70535.jpg",
    status: "out",
  },
  {
    title: "Einstein: His Life and Universe",
    genre: "Biography",
    year: 2007,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328011405i/10884.jpg",
    status: "available",
  },
];

const container = document.getElementById("booksContainer");
const searchInput = document.getElementById("searchInput");

function renderBooks(list) {
  container.innerHTML = list
    .map(
      (b) => `
      <div class="book-card">
        <button class="fav-btn" data-title="${b.title}">
            ♡
        </button>
        
    <button class="cart-btn" data-title="${b.title}">Add to cart 🛒 </button>
    <img src="${b.img}" />
        <div class="book-title">${b.title}</div>
        <div class="book-meta">${b.genre} · ${b.year} · ⭐${b.rating}</div>
        
        <div class="status-badge ${
          b.status === "available"
            ? "status-available"
            : b.status === "few"
            ? "status-few"
            : "status-out"
        }">
            
            ${
              b.status === "available"
                ? "Available"
                : b.status === "few"
                ? "Few Copies Remaining"
                : "Out of Stock"
            }
              </div>
              <div class="bottom-expand"></div>
              
              </div>
              `
    )
    .join("");
}

renderBooks(books);

const genreSelect = document.getElementById("genreFilter");

genreSelect.addEventListener("change", () => {
  const selected = genreSelect.value;
  let filtered = books;
  if (selected) {
    filtered = books.filter(
      (b) => b.genre.toLowerCase() === selected.toLowerCase()
    );
  }
  renderBooks(filtered);
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.genre.toLowerCase().includes(q) ||
      String(b.year).includes(q)
  );
  renderBooks(filtered);
});

document.querySelectorAll(".filter-btns button").forEach((btn) => {
  btn.addEventListener("click", () => {
    // If already active → deactivate and reset book list
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      renderBooks(books); // reset to original
      return;
    }

    // Otherwise activate this and deactivate others
    document
      .querySelectorAll(".filter-btns button")
      .forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    const type = btn.dataset.filter;

    let sorted = [...books];

    if (type === "year") sorted.sort((a, b) => b.year - a.year);
    if (type === "rating") sorted.sort((a, b) => b.rating - a.rating);

    renderBooks(sorted);
  });
});

let favouriteBooks = [];
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fav-btn")) {
    const title = e.target.dataset.title;

    // find the book object
    const book = books.find((b) => b.title === title);

    // toggle active heart
    e.target.classList.toggle("active");

    // add or remove from favourites
    if (e.target.classList.contains("active")) {
      if (!favouriteBooks.some((b) => b.title === book.title)) {
        favouriteBooks.push(book);
      }
    } else {
      favouriteBooks = favouriteBooks.filter((b) => b.title !== book.title);
    }

    updateFavModal();
  }

  document.getElementById("openFavBtn").onclick = () => {
    document.getElementById("favModal").style.display = "flex";
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    updateFavModal();
  };

  document.getElementById("closeFav").onclick = () => {
    document.getElementById("favModal").style.display = "none";
    document.body.classList.remove("modal-open");
  };
  window.addEventListener("click", (e) => {
    const favModal = document.getElementById("favModal");
    const cartModal = document.getElementById("cartModal");

    // Close Favourite by clicking outside
    if (e.target === favModal) {
      favModal.style.display = "none";
      document.body.style.overflow = "auto"; // FIX SCROLL
    }

    // Close Cart by clicking outside
    if (e.target === cartModal) {
      cartModal.style.display = "none";
      document.body.style.overflow = "auto"; // FIX SCROLL
    }
  });
});
function updateFavModal() {
  const favList = document.getElementById("favList");

  if (favouriteBooks.length === 0) {
    favList.innerHTML = ` <div class="empty-msg">💗 You have no favourite books yet</div>`;
  } else {
    favList.innerHTML = favouriteBooks
      .map(
        (b) => `
              <div class="fav-item">
                <img src="${b.img}">
                <span>${b.title}</span>
                <button class="remove-fav" data-title="${b.title}">Remove</button>
                
                </div>
                <div class="modal-line"></div>
                `
      )
      .join("");
  }

  document.getElementById("favModal").style.display = "flex";
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-fav")) {
    const title = e.target.dataset.title;

    favouriteBooks = favouriteBooks.filter((b) => b.title !== title);

    updateFavModal();
  }
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeFav")) {
    document.getElementById("favModal").style.display = "none";
  }
});
let cartBooks = [];
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-btn")) {
    const title = e.target.dataset.title;
    const book = books.find((b) => b.title === title);

    // Check stock status
    if (book.status === "out") {
      showRedPopup("❌ This book is OUT OF STOCK");
      return;
    }

    // Prevent duplicates
    if (!cartBooks.some((b) => b.title === title)) {
      cartBooks.push(book);
      showGreenPopup("✔ Book added to cart");
    }

    updateCartModal();
  }
});
function showGreenPopup(msg) {
  const p = document.getElementById("greenPopup");
  p.innerText = msg;
  p.style.display = "block";
  setTimeout(() => (p.style.display = "none"), 2000);
}

function showRedPopup(msg) {
  const p = document.getElementById("redPopup");
  p.innerText = msg;
  p.style.display = "block";
  setTimeout(() => (p.style.display = "none"), 2000);
}
function updateCartModal() {
  const cartList = document.getElementById("cartList");
  if (cartBooks.length === 0) {
    cartList.innerHTML = `<div class="empty-msg">🛒 Your cart is empty</div>`;
    return;
  }

  cartList.innerHTML = cartBooks
    .map(
      (b) => `
            <div class="fav-item">
                <img src="${b.img}">
                <div>
                    <strong>${b.title}</strong><br>
                    <small>${b.genre} · ${b.year}</small>
                    </div>
                    
                    <button class="remove-cart" data-title="${b.title}">Remove</button>
                    <button class="req-btn" onclick="requestIssue('${b.title}')">Request Issue</button>
                    </div>
                    `
    )
    .join("");
}
document.getElementById("openCartBtn").onclick = () => {
  document.getElementById("cartModal").style.display = "flex";
  document.body.classList.add("modal-open");
  updateCartModal();
};

document.getElementById("closeCart").onclick = () => {
  document.getElementById("cartModal").style.display = "none";
  document.body.classList.remove("modal-open");
};
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("request-issue-btn")) {
    const title = e.target.getAttribute("data-title");
    requestIssue(title);
  }

  window.addEventListener("click", function (e) {
    const cartModal = document.getElementById("cartModal");
    const content = document.querySelector("#cartModal .fav-content");

    if (
      cartModal.style.display === "flex" &&
      !content.contains(e.target) &&
      e.target !== document.getElementById("openCartBtn")
    ) {
      cartModal.style.display = "none";
    }
  });
});
function requestIssue(title, btnElement) {
  showGreenPopup(`✔ Your issue request for has been sent`);

  // Disable the buttonF
  btnElement.innerText = "Requested";
  btnElement.disabled = true;
  btnElement.style.background = "#9ca3af";
  btnElement.style.cursor = "not-allowed";
}
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("req-btn")) {
    const title = e.target.getAttribute("data-title");
    requestIssue(title, e.target);
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-cart")) {
    const title = e.target.getAttribute("data-title");

    cartBooks = cartBooks.filter((b) => b.title !== title);

    updateCartModal();

    showGreenPopup(`Removed "${title}" from cart`);
  }
});

// Data approximation based on the provided image
const labels = [
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
];

const actualHours = [12, 17, 23, 28, 30, 36, 40, 43, 45, 49, 51];
const targetHours = [14, 20, 26, 29, 31, 37, 41, 43, 44, 50, 55];

// Function to create the gradient fill for the Actual line
function createGradient(ctx, chartArea) {
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  // Blue to transparent gradient
  gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)");
  gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
  return gradient;
}

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("readingProgressChart").getContext("2d");

  // Register a custom plugin to draw the gradient after the chart is initialized
  const gradientPlugin = {
    id: "customGradient",
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart;
      if (!chart.actualGradient && chartArea) {
        // Create gradient only if chartArea exists
        chart.actualGradient = createGradient(ctx, chartArea);
      }
      // Apply the gradient color to the dataset's fill property
      if (chart.data.datasets[0]) {
        chart.data.datasets[0].backgroundColor = chart.actualGradient;
      }
    },
  };
  Chart.register(gradientPlugin);

  const readingProgressChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Actual",
          data: actualHours,
          borderColor: "#3b82f6" /* Blue line */,
          tension: 0.4,
          fill: "origin",
          borderWidth: 3,
          pointRadius: 0,
          pointHoverRadius: 5,
        },
        {
          label: "Target",
          data: targetHours,
          borderColor: "#f97316" /* Orange line */,
          borderDash: [8, 4],
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: false,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 60,
          ticks: {
            stepSize: 15,
            callback: function (value) {
              if (
                value === 0 ||
                value === 15 ||
                value === 30 ||
                value === 45 ||
                value === 60
              ) {
                return value;
              }
              return null;
            },
            color: "#6b7280",
          },
          grid: {
            drawOnChartArea: true,
            color: "#e5e7eb",
            borderDash: [5, 5],
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#6b7280",
          },
        },
      },
    },
  });
});

const ctx = document.getElementById("progressChart").getContext("2d");
const progressChart = new Chart(ctx, {
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
      "Dec",
    ],
    datasets: [
      {
        label: "Books Read",
        data: [12, 15, 18, 20, 22, 25, 27, 28, 30, 32, 35, 38],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.15)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: "#2563eb",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#555" },
      },
      y: {
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { color: "#555", stepSize: 5 },
      },
    },
  },
});
{
  const ctx = document.getElementById("attendanceChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          data: [65, 82, 45, 95, 58, 110, 75],
          backgroundColor: "#2563eb",
          borderRadius: 6,
        },
      ],
    },

    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: {
          grid: { color: "rgba(0,0,0,0.05)" },
          ticks: { stepSize: 30, color: "#555" },
        },
      },
    },
  });
}

// Manage profile
document.getElementById("imgInput").addEventListener("change", function () {
  let file = this.files[0];
  if (file) {
    document.getElementById("profileImage").src = URL.createObjectURL(file);
  }
});

function saveInfo() {
  document.getElementById("displayName").innerText =
    document.getElementById("nameInput").value;

  document.getElementById("displayEmail").innerText =
    document.getElementById("emailInput").value;

  alert("Account details updated successfully!");
}
// ALERT DISPLAY FUNCTION
function showAlert(type, message) {
  const alertId = type === "success" ? "successAlert" : "errorAlert";
  const alertEl = document.getElementById(alertId);

  // Hide any existing alerts
  document.getElementById("successAlert").style.display = "none";
  document.getElementById("errorAlert").style.display = "none";

  // Show new alert
  alertEl.textContent = message;
  alertEl.style.display = "block";

  // Auto-hide after 5 seconds
  setTimeout(() => {
    alertEl.style.display = "none";
  }, 5000);

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// REFRESH ACCOUNT DETAILS
function refreshAccountDetails() {
  const btn = event.target;
  const originalText = btn.textContent;

  btn.disabled = true;
  btn.textContent = "🔄 Refreshing...";
  btn.style.opacity = "0.6";

  // Simulate API call to refresh data
  setTimeout(() => {
    // Update some values to show it's working
    const currentBorrows = document.querySelector(".current-borrows");
    const oldValue = parseInt(currentBorrows.textContent);
    const newValue = Math.max(0, oldValue + Math.floor(Math.random() * 3) - 1);

    currentBorrows.textContent = newValue;
    currentBorrows.style.transform = "scale(1.3)";
    currentBorrows.style.color = "#FF9800";

    setTimeout(() => {
      currentBorrows.style.transform = "scale(1)";
      currentBorrows.style.color = "#2196F3";
    }, 300);

    btn.disabled = false;
    btn.textContent = originalText;
    btn.style.opacity = "1";

    showAlert("success", "✓ Account details refreshed!");
  }, 1500);
}
// PASSWORD FORM HANDLER
document
  .getElementById("passwordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const currentPass = document.getElementById("currentPassword").value;
    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    // Validation
    if (newPass !== confirmPass) {
      showAlert("error", "✗ Passwords do not match!");
      return;
    }

    if (newPass.length < 8) {
      showAlert("error", "✗ Password must be at least 8 characters long!");
      return;
    }

    if (newPass === currentPass) {
      showAlert(
        "error",
        "✗ New password must be different from current password!"
      );
      return;
    }

    const btn = this.querySelector(".btn");
    btn.classList.add("loading");

    // Simulate API call
    setTimeout(() => {
      btn.classList.remove("loading");
      showAlert("success", "✓ Password updated successfully!");
      this.reset();
      document.getElementById("passwordStrength").style.width = "0";
    }, 1500);
  });
// TOGGLE PASSWORD VISIBILITY
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const icon = input.nextElementSibling;

  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈";
  } else {
    input.type = "password";
    icon.textContent = "👁️";
  }
}
// NOTIFICATION FORM HANDLER
document
  .getElementById("notificationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = this.querySelector(".btn");
    btn.classList.add("loading");

    // Get all checkbox states
    const notifications = {
      email: document.getElementById("emailNotif").checked,
      sms: document.getElementById("smsNotif").checked,
      newBooks: document.getElementById("newBooksNotif").checked,
      events: document.getElementById("eventNotif").checked,
      reservations: document.getElementById("reservationNotif").checked,
    };

    console.log("Notification preferences:", notifications);

    // Simulate API call
    setTimeout(() => {
      btn.classList.remove("loading");
      showAlert("success", "✓ Notification preferences saved successfully!");

      // Add visual feedback to checked items
      const checkedItems = this.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      checkedItems.forEach((item) => {
        const parent = item.closest(".notification-item");
        parent.style.background = "#E8F5E9";
        setTimeout(() => {
          parent.style.background = "#f9f9f9";
        }, 1000);
      });
    }, 1500);
  });

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
