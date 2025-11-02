// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    const profileDropdown = document.getElementById("profileDropdown");
    const profileLinks = document.querySelectorAll('#profileLinkDesktop, #profileLinkMobile');
    const menuToggle = document.getElementById("menuToggle");
    const userInfoDesktop = document.getElementById("userInfoDesktop");
    const userInfoMobile = document.getElementById("userInfoMobile");
    const walletSummaryText = document.getElementById("walletSummaryText");
    const walletSummaryTextDesktop = document.getElementById("walletSummaryTextDesktop");
    const proceedBtn = document.getElementById("proceedBtn");
    const vehicleInput = document.getElementById("vehicleInput");
    const pageLoader = document.getElementById("pageLoader");

    // --- Session state ---
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail') || '';

    // --- Toggle profile dropdown ---
    if (profileLinks && profileLinks.length) {
        profileLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                if (!loggedIn) {
                    return; // allow default navigation to login.html
                }
                e.preventDefault();
                if (profileDropdown) {
                    // Populate email in dropdown
                    const emailEl = document.getElementById('userEmailDisplay');
                    if (emailEl && userEmail) emailEl.textContent = userEmail;
                    profileDropdown.classList.toggle("d-none");
                }
            });
        });
    }

    // --- Mobile menu toggle ---
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            document.body.classList.toggle("menu-open");
        });
    }

    // --- Simulated user login info (dummy data) ---
    const user = {
        id: "LOG123",
        name: "Arpit Sharma",
        vehicle: "UP19A9714",
        wallet: 0,
        lastRecharge: 0,
    };

    // Populate user info if available
    // Keep user info hidden for simplified navbar and set Wallet labels
    if (walletSummaryText && walletSummaryTextDesktop) {
        walletSummaryText.textContent = 'Wallet';
        walletSummaryTextDesktop.textContent = 'Wallet';
    }

    // --- FASTag Recharge Proceed Button ---
    if (proceedBtn && vehicleInput) {
        proceedBtn.addEventListener("click", () => {
            const vehicleNo = vehicleInput.value.trim();
            if (!vehicleNo) {
                alert("Please enter your vehicle number");
                return;
            }
            if (!loggedIn) {
                alert("Please log in with Gmail to continue.");
                window.location.href = 'login.html';
                return;
            }
            // Persist and redirect to recharge page with prefilled vehicle
            localStorage.setItem('currentVehicle', vehicleNo);
            const q = encodeURIComponent(vehicleNo);
            window.location.href = `recharge.html?vehicle=${q}`;
        });
    }

    // --- Profile Options ---
    window.viewProfile = function () {
        alert("View Profile Clicked");
    };

    window.editProfile = function () {
        alert("Edit Profile Clicked");
    };

    window.viewWallet = function () {
        alert("Wallet Balance: ₹" + user.wallet);
    };

    window.logout = function () {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userEmail');
        alert("Logged out successfully!");
        window.location.href = "login.html";
    };

    // --- Scroll to Top Function ---
    window.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // --- FAQ Toggle ---
    const faqButtons = document.querySelectorAll(".faq-question");
    faqButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector(".icon");
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            } else {
                document.querySelectorAll(".faq-answer").forEach((el) => (el.style.maxHeight = null));
                document.querySelectorAll(".faq-question .icon").forEach((i) => (i.textContent = "+"));
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "-";
            }
        });
    });

    // --- Hide dropdown when clicking outside ---
    document.addEventListener("click", (e) => {
        if (profileDropdown && profileLinks && profileLinks.length) {
            const clickedOnLink = Array.from(profileLinks).some(l => l.contains(e.target));
            if (!profileDropdown.contains(e.target) && !clickedOnLink) {
                profileDropdown.classList.add("d-none");
            }
        }
    });
});
