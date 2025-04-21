document.addEventListener("DOMContentLoaded", () => {
    const quizTitle = document.getElementById("quiz-title");
    const quizForm = document.getElementById("quiz-form");
    const submitBtn = document.getElementById("submit-btn");
    const resultBox = document.getElementById("result");
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Please login first.");
      window.location.href = "index.html";
      return;
    }
    const quiz = JSON.parse(localStorage.getItem("currentQuiz"));
    if (!quiz) {
      alert("No quiz selected.");
      window.location.href = "quiz.html";
      return;
    }
});