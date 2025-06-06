document.addEventListener("DOMContentLoaded", () => {
    const quizListElement = document.getElementById("quiz-list");
    const welcomeMsg = document.getElementById("welcome-msg");
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Please login first.");
      window.location.href = "./index.html";
      return;
    }
    welcomeMsg.textContent = `Hello, ${user.email}! Ready to take a quiz?`;
    const quizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
    if (quizzes.length === 0) {
      quizListElement.innerHTML = "<li>No quizzes available.</li>";
      return;
    }
    quizzes.forEach((quiz) => {
      const li = document.createElement("li");
      li.textContent = quiz.title;
      li.onclick = () => {
        localStorage.setItem("currentQuiz", JSON.stringify(quiz));
        window.location.href = "./take-quiz.html";
      };
      quizListElement.appendChild(li);
    });
  });
  