document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user || user.email !== "admin@quiz.com") {
      alert("You must be an admin to access this page.");
      window.location.href = "index.html"; 
      return;
    }
    const allScores = JSON.parse(localStorage.getItem("scores") || "{}");
    const userScoresBody = document.getElementById("user-scores-body");
    for (const email in allScores) {
      const tr = document.createElement("tr");
      const tdEmail = document.createElement("td");
      tdEmail.textContent = email;
      const tdScores = document.createElement("td");
      tdScores.textContent = allScores[email].map(score => `${score.quizTitle}: ${score.score}`).join(", ");
      tr.appendChild(tdEmail);
      tr.appendChild(tdScores);
      userScoresBody.appendChild(tr);
    }
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.onclick = () => {
      localStorage.removeItem("currentUser");
      window.location.href = "index.html";
    };
  });  