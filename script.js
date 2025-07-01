// Encrypt text using Base64 encoding
function encrypt(text) {
  return btoa(text);
}

// Decrypt text from Base64 encoding
function decrypt(text) {
  return atob(text);
}

// Retrieve saved passwords from localStorage
function getPasswords() {
  return JSON.parse(localStorage.getItem('passwords') || '[]');
}

// Save password array to localStorage
function savePasswords(data) {
  localStorage.setItem('passwords', JSON.stringify(data));
}

// Display all saved passwords in the UI
function renderPasswords() {
  const list = document.getElementById('password-list');
  list.innerHTML = '';

  const passwords = getPasswords();

  // If no passwords saved, show a message
  if (passwords.length === 0) {
    list.innerHTML = '<li class="list-group-item">No passwords saved.</li>';
    return;
  }

  // Loop through each saved password entry
  passwords.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item password-item';

    // Create the text section showing site and username
    const passwordText = document.createElement('span');
    passwordText.className = 'password-details';
    passwordText.innerHTML = `
      <strong>${item.website}</strong><br>
      ${item.username} | <span id="pw-${index}">••••••••</span>
    `;

    // Create Show/Hide toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn btn-sm btn-outline-secondary toggle-btn';
    toggleBtn.innerText = 'Show';
    toggleBtn.onclick = () => toggleVisibility(index, item.password, toggleBtn);

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger ms-2';
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = () => deletePassword(index);

    // Append everything to the list item
    li.appendChild(passwordText);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    // Add the list item to the password list
    list.appendChild(li);
  });
}

// Toggle password visibility (Show/Hide)
function toggleVisibility(index, encryptedPassword, button) {
  const span = document.getElementById(`pw-${index}`);
  if (button.innerText === 'Show') {
    span.innerText = decrypt(encryptedPassword); // Show actual password
    button.innerText = 'Hide';
  } else {
    span.innerText = '••••••••'; // Hide the password
    button.innerText = 'Show';
  }
}

// Handle form submission to add a new password
document.getElementById('password-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user input values
  const website = document.getElementById('website').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Ensure no field is empty
  if (!website || !username || !password) return alert('Please fill in all fields.');

  // Save the new password
  const passwords = getPasswords();
  passwords.push({ website, username, password: encrypt(password) });
  savePasswords(passwords);
  renderPasswords();

  // Clear form inputs
  this.reset();
});

// Delete a password entry by its index
function deletePassword(index) {
  const passwords = getPasswords();
  passwords.splice(index, 1);         // Remove item at the given index
  savePasswords(passwords);           // Update localStorage
  renderPasswords();                  // Re-render the list
}

// Show existing passwords on initial load
renderPasswords();
