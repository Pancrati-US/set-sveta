
const answers = {
  1: ["творец", "Творец", "ТВОРЕЦ"]
};

function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const validAnswers = answers[1].map(a => a.toLowerCase());

  if (validAnswers.includes(input)) {
    window.location.href = "sfera.html";
  } else {
    document.getElementById("result").innerText = "Свет Сознания закрыт. Это не правильный ответ";
  }
}
