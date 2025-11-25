class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <header>
      <div class="container">
        <nav class="navbar">
          <div class="logo">
            <span>
              <img src="logo.png" alt="ReadON" />
            </span>
          </div>
          <ul class="nav-links">
            <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="book.html"><i class="fas fa-book"></i> Books</a></li>
            <li><a href="blog.html"><i class="fas fa-newspaper"></i> Blog</a></li>
            <li><a href="about.html"><i class="fas fa-info-circle"></i> About Us</a></li>
            <li><a href="#" class="login-btn" id="StuLogin"><i class="fas fa-user-graduate"></i>Login</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Login Modal -->
    <div id="loginModal" class="modal">
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2 id="loginTitle">Login</h2>

    <!-- Tab Buttons -->
    <div class="login-tabs">
      <button class="tab-btn active" data-type="student">Student</button>
      <button class="tab-btn" data-type="admin">Admin</button>
    </div>

    <!-- Login Form -->
    <form id="loginForm">
      <div class="form-group">
        <label for="username">Username / ID</label>
        <input type="text" id="username" placeholder="Enter Username" required>
      </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" required>
        </div>
        <button type="submit" class="btn">Login</button>

        <div class="demo-reset-wrapper">
          <button type="button" class="demoBtn">Demo Login</button>
          <button type="button" class="resetBtn hidden">Reset</button>
        </div>
        </form>
      </div>
    </div>
       `;

    const loginModal = this.querySelector("#loginModal");
    const loginTitle = this.querySelector("#loginTitle");
    const closeBtn = this.querySelector(".close-btn");
    const tabButtons = this.querySelectorAll(".tab-btn");
    const usernameInput = this.querySelector("#username");
    const passwordInput = this.querySelector("#password");
    const loginForm = this.querySelector("#loginForm");
    const getStartedBtn = document.getElementById("heroLoginBtn");
    const demoBtn = this.querySelector(".demoBtn");
    const resetBtn = this.querySelector(".resetBtn");

    this.querySelector("#StuLogin").addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.style.display = "flex";
      setLoginType("student");
    });

    if (getStartedBtn) {
      getStartedBtn.addEventListener("click", () => {
        loginModal.style.display = "flex";
      });
    }

    closeBtn.addEventListener("click", () => {
      loginModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        loginModal.style.display = "none";
      }
    });

    // Function to reset form and UI
    const resetFormUI = () => {
      loginForm.reset();
      demoBtn.classList.remove("hidden");
      resetBtn.classList.add("hidden");
    };

    const setLoginType = (type) => {
      tabButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.type === type);
      });

      if (type === "student") {
        loginTitle.textContent = "Student Login";
        usernameInput.placeholder = "Enter Student ID";
      } else {
        loginTitle.textContent = "Admin Login";
        usernameInput.placeholder = "Enter Admin Username";
      }

      // Reset form when switching tabs
      resetFormUI();
    };

    // Add tab click events
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => setLoginType(btn.dataset.type));
    });

    //submit handler
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const activeTab = [...tabButtons].find((btn) =>
        btn.classList.contains("active")
      );

      if (activeTab.dataset.type === "student") {
        window.location.href = "student.html";
      } else if (activeTab.dataset.type === "admin") {
        window.location.href = "admin.html";
      }
    });

    demoBtn.addEventListener("click", () => {
      const activeTab = [...tabButtons].find((btn) =>
        btn.classList.contains("active")
      );

      if (activeTab.dataset.type === "student") {
        usernameInput.value = "student";
        passwordInput.value = "123";
      } else {
        usernameInput.value = "admin";
        passwordInput.value = "123";
      }

      demoBtn.classList.add("hidden");
      resetBtn.classList.remove("hidden");
    });

    resetBtn.addEventListener("click", resetFormUI);
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>About ReadON</h3>
                    <p>ReadON Library is committed to providing free access to information, fostering literacy, and serving as a community hub for learning and connection.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#"><i class="fas fa-info-circle"></i> About Us</a></li>
                        <li><a href="#"><i class="fas fa-book"></i> Collections</a></li>
                        <li><a href="#"><i class="fas fa-calendar-alt"></i> Events</a></li>
                        <li><a href="#"><i class="fas fa-newspaper"></i> Blog</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Resources</h3>
                    <ul class="footer-links">
                        <li><a href="#"><i class="fas fa-digital-tachograph"></i> Digital Library</a></li>
                        <li><a href="#"><i class="fas fa-graduation-cap"></i> Research Help</a></li>
                        <li><a href="#"><i class="fas fa-laptop"></i> Technology Lending</a></li>
                        <li><a href="#"><i class="fas fa-users"></i> Study Rooms</a></li>
                        <li><a href="#"><i class="fas fa-child"></i> Children's Programs</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Contact Us</h3>
                    <ul class="footer-links">
                        <li><a href="#"><i class="fas fa-map-marker-alt"></i> 123 Library Lane, Bookville</a></li>
                        <li><a href="#"><i class="fas fa-phone"></i> (555) 123-4567</a></li>
                        <li><a href="#"><i class="fas fa-envelope"></i> info@readonlibrary.org</a></li>
                        <li><a href="#"><i class="fas fa-clock"></i> Mon-Fri: 9am-8pm</a></li>
                        <li><a href="#"><i class="fas fa-clock"></i> Sat-Sun: 10am-6pm</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2023 ReadON Library. All rights reserved.</p>
            </div>
        </div>
    </footer>
       `;
  }
}

class SpecialBlogs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="post-container">
      <main class="blog-posts">
        <article class="post">
          <div class="post-img">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Library Management"
            />
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span><i class="far fa-calendar"></i> June 15, 2025</span>
              <span><i class="far fa-user"></i> Admin</span>
            </div>
            <h2>Best Practices for Modern College Library Management</h2>
            <p>
              Libraries are evolving from traditional book repositories to
              dynamic learning hubs. Learn how to transform your college library
              with these management strategies that enhance user experience and
              optimize resource utilization.
            </p>
            <a
              href="https://www.creatrixcampus.com/blog/5-strategies-improving-school-library-services"
              class="read-more"
              >Read More</a
            >
          </div>
        </article>

        <article class="post">
          <div class="post-img">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Digital Resources"
            />
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span><i class="far fa-calendar"></i> June 8, 2025</span>
              <span><i class="far fa-user"></i> Librarian</span>
            </div>
            <h2>Integrating Digital Resources in Your Library System</h2>
            <p>
              The digital transformation of libraries is no longer optional.
              Discover how to seamlessly integrate e-books, online journals, and
              digital databases into your existing library management system for
              enhanced accessibility.
            </p>
            <a href="https://accessitlibrary.com/project/including-digital-resources-in-your-library/" class="read-more">Read More</a>
          </div>
        </article>
    <article class="post">
          <div class="post-img">
            <img
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Student Engagement"
            />
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span><i class="far fa-calendar"></i> May 30, 2025</span>
              <span><i class="far fa-user"></i> Library Assistant</span>
            </div>
            <h2>Increasing Student Engagement with Library Resources</h2>
            <p>
              Many students underutilize library resources. Explore innovative
              approaches to promote library services, increase footfall, and
              encourage students to make the most of available resources for
              academic success.
            </p>
            <a href="https://crl.acrl.org/index.php/crl/article/view/25844/34595" class="read-more">Read More</a>
          </div>
        </article>
      </main>

      <aside class="sidebar-aside">
        <div class="sidebar-widget">
          <h3>Search</h3>
          <form>
            <input
              type="text"
              placeholder="Search blog..."
              class="search-input"
            />
            <button
              type="submit"
              class="btn btn-signup"
              style="margin-top: 10px"
            >
              Search
            </button>
          </form>
        </div>

        <div class="sidebar-widget">
          <h3>Categories</h3>
          <ul class="categories">
            <li>
              <a href="#">Library Management <span>(12)</span></a>
            </li>
            <li>
              <a href="#">Digital Resources <span>(8)</span></a>
            </li>
            <li>
              <a href="#">Student Engagement <span>(5)</span></a>
            </li>
            <li>
              <a href="#">Technology Integration <span>(10)</span></a>
            </li>
            <li>
              <a href="#">Collection Development <span>(7)</span></a>
            </li>
          </ul>
        </div>

        <div class="sidebar-widget">
          <h3>Recent Posts</h3>
          <div class="recent-post">
            <img
              src="https://wp-demco-s3-bucket.s3.amazonaws.com/ideas/2016/05/WisCelMathClass.jpg"
              alt="Recent Post"
            />
            <div class="recent-post-content">
              <!-- https://westvancouverschools.ca/ridgeview-elementary/rethinking-and-modernizing-our-library-space/ -->
              <h4>Modernizing Library Spaces for Collaborative Learning</h4>
              <span>June 5, 2023</span>
            </div>
          </div>
          <div class="recent-post">
            <img
              src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Recent Post"
            />
            <div class="recent-post-content">
              <h4>Data-Driven Decisions for Library Collections</h4>
              <span>May 22, 2023</span>
            </div>
          </div>
        </div>

        <div class="sidebar-widget">
          <h3>Tags</h3>
          <div class="tags">
            <a href="#" class="tag">Libraries</a>
            <a href="#" class="tag">Management</a>
            <a href="#" class="tag">Education</a>
            <a href="#" class="tag">Technology</a>
            <a href="#" class="tag">E-books</a>
            <a href="#" class="tag">Students</a>
            <a href="#" class="tag">Research</a>
          </div>
        </div>

        <div class="sidebar-widget newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates on library management tips</p>
          <form>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </aside>
    </div>`;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
customElements.define("special-blogs", SpecialBlogs);

document.addEventListener("DOMContentLoaded", function () {
  const featureCards = document.querySelectorAll(".feature-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate when visible
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        } else {
          // Reset when hidden (so it animates again later)
          entry.target.style.opacity = 0;
          entry.target.style.transform = "translateY(20px)";
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  // Initialize cards with hidden state + staggered delay
  featureCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-in-out";
    card.style.transitionDelay = `${index * 0.15}s`; // stagger effect
    observer.observe(card);
  });

  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Show corresponding content
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

// Toggle sidebar on mobile
document.getElementById("toggleSidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
});

// Close sidebar when clicking outside on mobile
document.addEventListener("click", function (event) {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  if (
    window.innerWidth < 992 &&
    !sidebar.contains(event.target) &&
    !toggleBtn.contains(event.target) &&
    sidebar.classList.contains("active")
  ) {
    sidebar.classList.remove("active");
  }
});

const menuItems = document.querySelectorAll(".menu-item");
const sections = {
  Dashboard: document.getElementById("dashboardSection"),
  "Book Catalog": document.getElementById("bookManagementSection"),
  Blogs: document.getElementById("blogSection"),
  "My Borrowing History": document.getElementById("borrowingHistory"),
  "Manage My Account": document.getElementById("UserManage"),
};

// Add active class to clicked menu item
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");

    const pageTitle = this.querySelector("span").textContent;
    document.querySelector(".content .header h1").textContent = pageTitle;

    // Hide all sections first
    Object.values(sections).forEach((sec) => (sec.style.display = "none"));

    // Show the clicked one
    if (sections[pageTitle]) {
      sections[pageTitle].style.display = "block";
    }
  });
});

// Reading Book progress
let readprog_books = [
  {
    name: "Atomic Habits",
    image: "https://m.media-amazon.com/images/I/81bGKUa1e0L.jpg",
    totalPages: 300,
    pagesRead: 240,
    hours: 20,
  },
  {
    name: "The Alchemist",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    totalPages: 200,
    pagesRead: 60,
    hours: 5,
  },
];

/* ------------ Render UI ------------ */
function readprog_render() {
  const list = document.getElementById("readprog_bookList");
  list.innerHTML = "";

  readprog_books.forEach((bk, i) => {
    const percent = Math.round((bk.pagesRead / bk.totalPages) * 100);
    const color = percent >= 70 ? "red" : percent >= 40 ? "orange" : "gold";

    const div = document.createElement("div");
    div.className = "readprog_bookCard";

    div.innerHTML = `
            <button class="readprog_deleteBtn" onclick="readprog_delete(${i})">🗑</button>

            <img src="${bk.image}" />

            <div class="readprog_bookInfo">
              <h4>${bk.name}</h4>
              <p>Hours Reading: <strong>${bk.hours}</strong></p>
              <p>Pages: ${bk.pagesRead} / ${bk.totalPages}</p>

              <div class="readprog_progressContainer">
                <div class="readprog_progressBar" style="width:${percent}%;background:${color};"></div>
              </div>

              <div class="readprog_progressText">${percent}%</div>
            </div>
          `;

    list.appendChild(div);
  });
}

readprog_render();

/* ------------ Open Modals ------------ */
const qModal = document.getElementById("readprog_quickModal");
const uModal = document.getElementById("readprog_updateModal");

document.getElementById("readprog_quickBtn").onclick = () =>
  (qModal.style.display = "flex");

document.getElementById("readprog_updateBtn").onclick = () => {
  uModal.style.display = "flex";
  readprog_populateSelect();
};

/* ------------ Close Modals ------------ */
document.getElementById("readprog_closeQuick").onclick = () =>
  (qModal.style.display = "none");

document.getElementById("readprog_closeUpdate").onclick = () =>
  (uModal.style.display = "none");

window.onclick = (e) => {
  if (e.target === qModal) qModal.style.display = "none";
  if (e.target === uModal) uModal.style.display = "none";
};

/* ------------ Add Book ------------ */
document.getElementById("readprog_saveQuick").onclick = () => {
  const name = document.getElementById("readprog_newName").value.trim();
  const img =
    document.getElementById("readprog_newImg").value.trim() ||
    "https://via.placeholder.com/80x100?text=Book";
  const pages = parseInt(document.getElementById("readprog_newPages").value);

  if (!name || pages <= 0) return alert("Enter valid book data!");

  readprog_books.push({
    name,
    image: img,
    totalPages: pages,
    pagesRead: 0,
    hours: 0,
  });

  readprog_render();
  qModal.style.display = "none";
};

/* ------------ Populate Select ------------ */
function readprog_populateSelect() {
  const sel = document.getElementById("readprog_selectBook");
  sel.innerHTML = "";

  readprog_books.forEach((b, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = b.name;
    sel.appendChild(opt);
  });
}

/* ------------ Update Progress ------------ */
document.getElementById("readprog_saveUpdate").onclick = () => {
  const idx = parseInt(document.getElementById("readprog_selectBook").value);
  const hours =
    parseFloat(document.getElementById("readprog_addHours").value) || 0;
  const pages =
    parseInt(document.getElementById("readprog_addPages").value) || 0;

  readprog_books[idx].hours += hours;
  readprog_books[idx].pagesRead = Math.min(
    readprog_books[idx].pagesRead + pages,
    readprog_books[idx].totalPages
  );

  readprog_render();
  uModal.style.display = "none";
};

/* ------------ Delete Book ------------ */
function readprog_delete(i) {
  if (confirm(`Delete "${readprog_books[i].name}"?`)) {
    readprog_books.splice(i, 1);
    readprog_render();
  }
}

// annual book
// Simple in-memory storage for demo (replace with localStorage or backend)
let readingData = {
  booksRead: 34,
  target: 50,
};

// Initialize on page load
window.addEventListener("load", () => {
  updateDashboard(readingData);
});

function updateDashboard(data) {
  const booksRead = data.booksRead;
  const target = data.target;
  const percentage = target > 0 ? (booksRead / target) * 100 : 0;
  const booksRemaining = Math.max(0, target - booksRead);
  const progressWidth = Math.min(100, percentage);
  const angle = Math.min(360, percentage * 3.6);

  // Update pie chart
  const chart = document.getElementById("pie-chart");
  chart.style.background = `conic-gradient(
                var(--primary-blue) 0deg ${angle}deg,
                var(--light-gray) ${angle}deg 360deg
            )`;

  // Update text values
  document.getElementById("chart-percentage").textContent = `${Math.round(
    percentage
  )}%`;
  document.getElementById("books-read-val").textContent = booksRead;
  document.getElementById("target-val").textContent = target;
  document.getElementById("books-remaining-val").textContent = booksRemaining;
  document.getElementById(
    "progress-bar-fill"
  ).style.width = `${progressWidth}%`;

  // Update modal text
  document.getElementById(
    "mark-complete-text"
  ).innerHTML = `<strong>${booksRead}</strong> books completed &rarr; <strong>${
    booksRead + 1
  }</strong> books (Target: <strong>${target}</strong>)`;

  // Update modal input fields
  document.getElementById("update-books-completed").value = booksRead;
  document.getElementById("update-target-books").value = target;

  console.log(
    `Dashboard updated: ${booksRead}/${target} (${percentage.toFixed(1)}%)`
  );
}

function handleUpdateGoal() {
  const booksCompleted = parseInt(
    document.getElementById("update-books-completed").value
  );
  const targetBooks = parseInt(
    document.getElementById("update-target-books").value
  );

  if (
    isNaN(booksCompleted) ||
    isNaN(targetBooks) ||
    booksCompleted < 0 ||
    targetBooks <= 0
  ) {
    showAlert(
      "Please enter valid numbers. Books read must be non-negative and target must be positive.",
      "error"
    );
    return;
  }

  if (booksCompleted > targetBooks) {
    showAlert("Books read cannot exceed the target goal.", "error");
    return;
  }

  readingData.booksRead = booksCompleted;
  readingData.target = targetBooks;

  updateDashboard(readingData);
  closeModal("modal-update-goal");
  showAlert("Reading goal updated successfully!", "success");
}

function handleMarkComplete() {
  readingData.booksRead += 1;

  updateDashboard(readingData);
  closeModal("modal-mark-complete");
  showAlert(`Book #${readingData.booksRead} marked complete!`, "success");
}

function openModal(id) {
  // Update modal fields with current data before opening
  updateDashboard(readingData);
  document.getElementById(id).classList.add("is-open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("is-open");
}

function swapToUpdateGoal() {
  closeModal("modal-mark-complete");
  openModal("modal-update-goal");
}

function swapToMarkComplete() {
  closeModal("modal-update-goal");
  openModal("modal-mark-complete");
}

function showAlert(message, type = "error") {
  const alertBox = document.getElementById("custom-alert");
  alertBox.textContent = message;

  let bgColor;
  if (type === "success") {
    bgColor = "#10B981";
  } else if (type === "warning") {
    bgColor = "#FBBF24";
  } else {
    bgColor = "#EF4444";
  }
  alertBox.style.backgroundColor = bgColor;

  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
}

// Sample borrowing history data with book images
const borrowingHistory = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    isbn: "978-0262033848",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
    borrowDate: "2024-10-15",
    dueDate: "2024-11-15",
    returnDate: "2024-11-10",
    status: "returned",
    fine: "$0.00",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    borrowDate: "2024-11-01",
    dueDate: "2024-12-01",
    returnDate: null,
    status: "borrowed",
    fine: "$0.00",
  },
  {
    id: 3,
    title: "Design Patterns",
    author: "Gang of Four",
    isbn: "978-0201633612",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    borrowDate: "2024-10-20",
    dueDate: "2024-11-13",
    returnDate: null,
    status: "overdue",
    fine: "$2.00",
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    isbn: "978-0135957059",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
    borrowDate: "2024-09-15",
    dueDate: "2024-10-15",
    returnDate: "2024-10-12",
    status: "returned",
    fine: "$0.00",
  },
  {
    id: 5,
    title: "Head First Design Patterns",
    author: "Eric Freeman",
    isbn: "978-0596007126",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&h=400&fit=crop",
    borrowDate: "2024-11-05",
    dueDate: "2024-12-05",
    returnDate: null,
    status: "borrowed",
    fine: "$0.00",
  },
  {
    id: 6,
    title: "Refactoring",
    author: "Martin Fowler",
    isbn: "978-0134757599",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop",
    borrowDate: "2024-08-20",
    dueDate: "2024-09-20",
    returnDate: "2024-09-18",
    status: "returned",
    fine: "$0.00",
  },
  {
    id: 7,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    isbn: "978-0596517748",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    borrowDate: "2024-10-28",
    dueDate: "2024-11-28",
    returnDate: null,
    status: "borrowed",
    fine: "$0.00",
  },
  {
    id: 8,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    isbn: "978-1491904244",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=400&fit=crop",
    borrowDate: "2024-09-01",
    dueDate: "2024-10-01",
    returnDate: "2024-09-28",
    status: "returned",
    fine: "$0.00",
  },
];

let filteredData = [...borrowingHistory];
let currentPage = 1;
const itemsPerPage = 5;

function renderRecords(data, page = 1) {
  const container = document.getElementById("records-container");
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = data.slice(start, end);

  if (paginatedData.length === 0) {
    container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">📭</div>
                        <h3>No Records Found</h3>
                        <p>There are no borrowing records matching your filters.</p>
                    </div>
                `;
    return;
  }

  container.innerHTML = paginatedData
    .map(
      (item) => `
                <div class="record-item">
                    <div class="book-image-container">
                        <img src="${item.image}" alt="${
        item.title
      }" class="book-image">
                    </div>
                    <div class="books-content">
                        <div class="book-main-info">
                            <h3>${item.title}</h3>
                            <p class="author">by ${item.author}</p>
                            <span class="isbn">ISBN: ${item.isbn}</span>
                        </div>
                        <div class="date-info">
                            <div>
                                <div class="date-label">Borrowed</div>
                                <div class="date-value">${formatDate(
                                  item.borrowDate
                                )}</div>
                            </div>
                            <div>
                                <div class="date-label">Due Date</div>
                                <div class="date-value">${formatDate(
                                  item.dueDate
                                )}</div>
                            </div>
                            ${
                              item.returnDate
                                ? `
                                <div>
                                    <div class="date-label">Returned</div>
                                    <div class="date-value">${formatDate(
                                      item.returnDate
                                    )}</div>
                                </div>
                            `
                                : ""
                            }
                        </div>
                        <div class="status-section">
                            <span class="status-badge status-${item.status}">
                                ${getStatusIcon(item.status)} ${item.status}
                            </span>
                            <span class="fine-badge ${
                              item.fine !== "$0.00"
                                ? "fine-pending"
                                : "fine-none"
                            }">
                                ${item.fine !== "$0.00" ? "💰 " : "✓ "} ${
        item.fine
      }
                            </span>
                        </div>
                        <div class="action-section">
                            <button class="action-btn view-btn" onclick="viewDetails(${
                              item.id
                            })">
                                👁️ View Details
                            </button>
                            ${
                              item.status === "borrowed"
                                ? `
                                <button class="action-btn renew-btn" onclick="renewBook(${item.id})">
                                    🔄 Renew
                                </button>
                            `
                                : ""
                            }
                        </div>
                    </div>
                </div>
            `
    )
    .join("");

  renderPagination(data.length, page);
}

function getStatusIcon(status) {
  const icons = {
    returned: "✓",
    borrowed: "📖",
    overdue: "⚠️",
  };
  return icons[status] || "";
}

function renderPagination(totalItems, currentPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById("pagination");

  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  let html =
    '<button class="page-btn" onclick="changePage(' +
    (currentPage - 1) +
    ')" ' +
    (currentPage === 1 ? "disabled" : "") +
    ">←</button>";

  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? "active" : ""}" 
                         onclick="changePage(${i})">${i}</button>`;
  }

  html +=
    '<button class="page-btn" onclick="changePage(' +
    (currentPage + 1) +
    ')" ' +
    (currentPage === totalPages ? "disabled" : "") +
    ">→</button>";

  pagination.innerHTML = html;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderRecords(filteredData, currentPage);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function applyFilters() {
  const statusFilter = document.getElementById("status-filter").value;
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  filteredData = borrowingHistory.filter((item) => {
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchInput) ||
      item.author.toLowerCase().includes(searchInput);
    const matchesDateRange =
      (!startDate || item.borrowDate >= startDate) &&
      (!endDate || item.borrowDate <= endDate);

    return matchesStatus && matchesSearch && matchesDateRange;
  });

  currentPage = 1;
  renderRecords(filteredData, currentPage);
  updateStats();
}

function resetFilters() {
  document.getElementById("status-filter").value = "all";
  document.getElementById("search-input").value = "";
  document.getElementById("start-date").value = "";
  document.getElementById("end-date").value = "";
  filteredData = [...borrowingHistory];
  currentPage = 1;
  renderRecords(filteredData, currentPage);
  updateStats();
}

function updateStats() {
  const totalBorrowed = borrowingHistory.length;
  const totalReturned = borrowingHistory.filter(
    (x) => x.status === "returned"
  ).length;
  const currentlyBorrowed = borrowingHistory.filter(
    (x) => x.status === "borrowed"
  ).length;
  const overdueCount = borrowingHistory.filter(
    (x) => x.status === "overdue"
  ).length;

  document.getElementById("total-borrowed").innerText = totalBorrowed;
  document.getElementById("total-returned").innerText = totalReturned;
  document.getElementById("currently-borrowed").innerText = currentlyBorrowed;
  document.getElementById("overdue-count").innerText = overdueCount;
}

// Export to CSV
function exportHistory() {
  const rows = [
    [
      "Title",
      "Author",
      "ISBN",
      "Borrow Date",
      "Due Date",
      "Return Date",
      "Status",
      "Fine",
    ],
    ...filteredData.map((item) => [
      item.title,
      item.author,
      item.isbn,
      item.borrowDate,
      item.dueDate,
      item.returnDate ? item.returnDate : "Not Returned",
      item.status,
      item.fine,
    ]),
  ];

  let csvContent =
    "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");

  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(csvContent));
  link.setAttribute("download", "borrowing_history.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Placeholder for view details
function viewDetails(id) {
  const book = borrowingHistory.find((x) => x.id === id);
  alert("Viewing details for: " + book.title);
}

// Placeholder for renew function
function renewBook(id) {
  const book = borrowingHistory.find((x) => x.id === id);
  alert("Renew request submitted for: " + book.title);
}

// Initial load
renderRecords(filteredData, currentPage);
updateStats();




