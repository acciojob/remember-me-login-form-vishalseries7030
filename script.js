//your JS code here. If required.
// script.js

// When the page loads
window.onload = function () {
  // Create form structure dynamically (as per assignment requirements)
  const body = document.body;

  // Heading
  const heading = document.createElement("h1");
  heading.innerText = "Login Form";
  body.appendChild(heading);

  // Form
  const form = document.createElement("form");
  body.appendChild(form);

  // Username field
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  usernameInput.placeholder = "Username";
  form.appendChild(usernameInput);

  form.appendChild(document.createElement("br"));

  // Password field
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.placeholder = "Password";
  form.appendChild(passwordInput);

  form.appendChild(document.createElement("br"));

  // Remember Me checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";

  const checkboxLabel = document.createElement("label");
  checkboxLabel.htmlFor = "checkbox";
  checkboxLabel.innerText = " Remember me.";

  form.appendChild(checkbox);
  form.appendChild(checkboxLabel);

  form.appendChild(document.createElement("br"));

  // Submit button
  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.id = "submit";
  submitBtn.value = "Submit";
  form.appendChild(submitBtn);

  // Existing user login button
  const existingBtn = document.createElement("button");
  existingBtn.id = "existing";
  existingBtn.innerText = "Login as existing user";
  existingBtn.style.display = "none"; // hidden initially
  body.appendChild(existingBtn);

  // --- Functionality ---

  // Check if credentials are already saved
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "block";
  }

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    alert("Logged in as " + username);

    if (checkbox.checked) {
      // Save credentials
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      // Remove credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });

  // Handle existing user login
  existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert("Logged in as " + savedUsername);
    }
  });
};
