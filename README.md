# Password Manager

A browser-based password manager built with HTML, CSS and vanilla JavaScript. Your passwords are encrypted with a master password using the Web Crypto API and stored only in your own browser. Nothing is sent to a server.

**Live demo:** https://shoikotsen.github.io/password-manager/

> This is a learning project. For important accounts, use a dedicated, audited password manager.

## How the security works

- You create a **master password** the first time you open the app. It is never stored.
- A key is derived from it with **PBKDF2** (SHA-256, 600,000 iterations and a random salt).
- Your entries are encrypted with **AES-256-GCM** before they are saved to `localStorage`, using a fresh random IV each time.
- A wrong master password fails to decrypt, so the app can tell you it is wrong.
- If you forget the master password, the data cannot be recovered.

## Features

- Create a vault protected by a master password
- Add and edit saved logins, with categories and notes
- Delete entries, or reset the whole vault
- Show or hide each password
- Copy a password; the clipboard is cleared after 20 seconds
- Password generator with length and character options
- Strength meter that estimates bits of entropy
- Security summary: total, weak and reused passwords
- Search, filter by category and sort
- Auto-lock after inactivity, plus a manual lock button
- Export and import an encrypted backup
- Dark mode and a mobile-friendly layout

## Run locally

Download the repository and open `index.html` in a browser. No build tools or server needed. (The Web Crypto API needs a secure context, so use `https://` or `localhost` if you serve it.)

## Tech stack

HTML5, CSS3, JavaScript (vanilla), Web Crypto API, `localStorage`

## Limitations

- Data lives in one browser on one device. Use the encrypted backup to move it.
- Anyone with access to your unlocked browser session can see your passwords, so lock the vault when you step away.
- It has not had a professional security review.

## Author

Shoikot Sen, Computer Science student at the University of South Florida.
GitHub: [@shoikotsen](https://github.com/shoikotsen)
