document.addEventListener("DOMContentLoaded", () => {
    const quizListElement = document.getElementById("quiz-list");
    const welcomeMsg = document.getElementById("welcome-msg");
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Please login first.");
      window.location.href = "index.html";
      return;
    }
});