# 🔐 Password Manager App

A simple and secure web-based password manager built with **HTML**, **CSS**, and **JavaScript**. This app allows users to save, view, and delete passwords for various websites with **Base64 encryption**, **Bootstrap styling**, and the ability to **toggle password visibility**.

## 📌 Features

- ✅ Add passwords for different websites
- 🔐 Basic password encryption using `btoa()` (Base64 encoding)
- 👁 Toggle password visibility (show/hide)
- ❌ Delete any saved password
- 💾 Uses `localStorage` to persist data even after page reloads
- 🎨 Styled with **Bootstrap 5** for a modern UI

---

## 🖥️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5 (CDN)
- LocalStorage API

---

## 🚀 How It Works

1. **Enter Website, Username, and Password**
2. Click **"Add Password"**
3. Your entry is:
   - Saved to the browser’s `localStorage`
   - Displayed in a neatly styled list
   - Password is **hidden** by default
4. Click **"Show"** to see the password
5. Click **"Delete"** to remove it from the list

---

## 🔐 Sample Screenshot

![Password Manager Preview](preview.png)  
*Note: Replace `preview.png` with your actual screenshot image filename.*

---

## 📁 Project Structure
password-manager/
├── index.html
├── style.css
├── script.js
└── README.md


---

## 📦 How to Run the App

### Option 1: Locally

1. Download or clone this repository:
   ```bash
   git clone https://github.com/your-username/password-manager.git

