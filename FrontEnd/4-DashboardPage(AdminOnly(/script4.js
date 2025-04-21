document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user || user.email !== "admin@quiz.com") {
        alert("You must be an admin to access this page.");
        window.location.href = "index.html";
        return;
      }
});