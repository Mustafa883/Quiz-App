document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const submitBtn = document.getElementById("submit-btn");
    const resultBox = document.getElementById("result");
    const quizTitle = document.getElementById("quiz-title");  
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
        label.appendChild(document.createTextNode(` ${option}`));
        optionsDiv.appendChild(label);
      });
      block.appendChild(question);
      block.appendChild(optionsDiv);
      quizForm.appendChild(block);
    });
    submitBtn.onclick = () => {
      let score = 0;
      quiz.questions.slice(0, 3).forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.answer) {
          score++;
        }
      });
      resultBox.textContent = `You scored ${score} out of 3.`;
      resultBox.classList.remove("hidden");
      const allScores = JSON.parse(localStorage.getItem("scores") || "{}");
      if (!allScores[user.email]) allScores[user.email] = [];
      allScores[user.email].push({
        quizTitle: quiz.title,
        score,
        date: new Date().toLocaleString()
      });
      localStorage.setItem("scores", JSON.stringify(allScores));
      submitBtn.disabled = true;
    };
  });  