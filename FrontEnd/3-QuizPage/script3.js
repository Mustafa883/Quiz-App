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
    quizTitle.textContent = quiz.title;
    quiz.questions.slice(0, 3).forEach((q, index) => {
        const block = document.createElement("div");
        block.className = "question-block";
    
        const question = document.createElement("h3");
        question.textContent = `${index + 1}. ${q.question}`;
    
        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";
    
        q.options.forEach(option => {
          const label = document.createElement("label");
          const input = document.createElement("input");
    
          input.type = "radio";
          input.name = `question${index}`;
          input.value = option;
    
          label.appendChild(input);
          label.append(` ${option}`);
          optionsDiv.appendChild(label);
        });
    
        block.appendChild(question);
        block.appendChild(optionsDiv);
        quizForm.appendChild(block);
      });
});