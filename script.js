// script.js

window.onload = function () {
  const body = document.body;

  // Heading
  const heading = document.createElement("h1");
  heading.innerText = "Login Form";
  body.appendChild(heading);

  // Form
  const form = document.createElement("form");
  body.appendChild(form);

  // --- Username ---
  const userLabel = document.createElement("label");
  userLabel.htmlFor = "username";
  userLabel.innerText = "Username:";
  form.appendChild(userLabel);

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  form.appendChild(usernameInput);

  form.appendChild(document.createElement("br"));

  // --- Password ---
  const passLabel = document.createElement("label");
  passLabel.htmlFor = "password";
  passLabel.innerText = "Password:";
  form.appendChild(passLabel);

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  form.appendChild(passwordInput);

  form.appendChild(document.createElement("br"));

  // --- Checkbox ---
  const checkLabel = document.createElement("label");
  checkLabel.htmlFor = "checkbox";
  checkLabel.innerText = "Remember me:";
  form.appendChild(checkLabel);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  form.appendChild(checkbox);

  form.appendChild(document.createElement("br"));

  // --- Submit button ---
  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.id = "submit";
  submitBtn.value = "Submit";
  form.appendChild(submitBtn);

  // --- Existing user button ---
  const existingBtn = document.createElement("button");
  existingBtn.id = "existing";
  existingBtn.innerText = "Login as existing user";
  existingBtn.style.display = "none";
  body.appendChild(existingBtn);

  // --- Check if credentials exist ---
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "block";
  }

  // --- Form submission ---
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    alert("Logged in as " + username);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });

  // --- Existing user login ---
  existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert("Logged in as " + savedUsername);
    }
  });
};
