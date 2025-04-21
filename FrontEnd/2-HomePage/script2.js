document.addEventListener("DOMContentLoaded", () => {
    const quizListElement = document.getElementById("quiz-list");
    const welcomemessage = document.getElementById("welcome-msg");
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Please login first.");
      window.location.href = "index.html";
      return;
    }
    welcomemessage.textContent = `Hello, ${user.email}! Ready to take a quiz?`;
});