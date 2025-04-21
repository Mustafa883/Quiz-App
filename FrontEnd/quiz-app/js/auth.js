const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
loginTab.onclick = () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
};
registerTab.onclick = () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
};
registerForm.onsubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(user => user.email === email)) {
    alert("User already exists!");
    return;
  }
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please log in.");
  loginTab.click();
};
loginForm.onsubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  if (email === "admin@quiz.com" && password === "admin123") {
    localStorage.setItem("currentUser", JSON.stringify({ email, isAdmin: true }));
    window.location.href = "dashboard.html";
    return;
  }
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify({ email, isAdmin: false }));
    window.location.href = "quiz.html";
  } else {
    alert("Invalid email or password.");
  }
};
