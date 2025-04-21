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