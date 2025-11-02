# Logiclead FASTag Recharge Website

A responsive, multi-page web application for **FASTag recharges**, designed with HTML, CSS (Bootstrap 5), and JavaScript. The project replicates the **Logiclead** FASTag recharge portal, allowing users to log in, enter their vehicle details, and simulate recharge flows.

---

## 🧩 Features

* **Responsive Design** – Fully mobile and desktop compatible using Bootstrap 5.
* **User Login Simulation** – Simple localStorage-based authentication for demo use.
* **FASTag Recharge Page** – Vehicle entry and amount handling with mock data.
* **Dynamic Wallet Summary** – Local storage-driven wallet and transaction overview.
* **Profile Dropdown** – View, edit, and logout options for logged-in users.
* **FAQ Section** – Common FASTag queries with accordion-style toggle.
* **Provider Carousel** – Display of partner bank logos and information cards.
* **App Download & About Sections** – Informational and promotional blocks.
* **Custom Navbar & Mobile Menu** – Adaptive header and side navigation drawer.
* **Analytics Integration** – Google Tag Manager embedded for production environments.

---

## 🏗️ Project Structure

```
logiclead/
├── index.html                 # Home page
├── login.html                 # User login page
├── recharge.html              # FASTag recharge interface
├── assets/
│   ├── css/
│   │   ├── style.css          # Main styling
│   │   └── responsive.css     # Mobile responsive rules
│   ├── js/
│   │   └── script.js          # UI interactions & localStorage logic
│   ├── img/
│   │   ├── banking_logo/      # Bank and brand logos
│   │   ├── icons/             # Icon graphics
│   │   └── ...                # Additional UI images
└── README.md
```

---

## ⚙️ Technologies Used

| Component          | Technology                                 |
| ------------------ | ------------------------------------------ |
| Frontend Framework | HTML5, CSS3, JavaScript                    |
| Styling            | Bootstrap 5, Font Awesome, Bootstrap Icons |
| Scripting          | Vanilla JavaScript + jQuery                |
| Analytics          | Google Tag Manager (conditional)           |
| Fonts/Icons        | Font Awesome 6.5, Bootstrap Icons          |
| Responsive Design  | Bootstrap Grid + Custom CSS                |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/logiclead-fastag.git
cd logiclead-fastag
```

### 2. Run the Project

Simply open `index.html` in your browser, or use a lightweight development server:

```bash
# Using VS Code Live Server or
npx serve
```

Then navigate to:

```
http://localhost:3000
```

---

## 🧠 How It Works

* **Login Flow**
  The user enters a User ID on `login.html`.
  It’s saved to `localStorage` as `loggedInUserId`.

* **Dashboard Update**
  Once logged in, the user’s info and wallet summary are shown on all pages.

* **Recharge Flow**
  Enter a vehicle number on the home page → click “Proceed” → redirects to `recharge.html?vehicle=ABC1234`.

* **Wallet Summary**
  Simulated total recharges and last transactions are maintained in browser storage.

---

## 📱 Responsiveness

Custom CSS (`responsive.css`) ensures layouts adapt fluidly across:

* Mobiles (≤576px)
* Tablets (≤992px)
* Desktops (≥1200px)

All grids, cards, and navbars are Bootstrap-based for consistent responsiveness.

---

## 📧 Contact

**Logiclead Technologies Pvt. Ltd.**
Office No 15, Ground Floor, D-29, Sector 3, Noida,
Gautam Buddha Nagar, Uttar Pradesh – 201301
📩 [ops@logiclead.in](mailto:ops@logiclead.in) | [tech@logiclead.in](mailto:tech@logiclead.in)

---

## 📝 License

This project is for **educational and demonstration purposes** only.
Logiclead branding and assets are property of their respective owners.
