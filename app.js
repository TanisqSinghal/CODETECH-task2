const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2,
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correct: 1,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Creative Style System",
        "Computer Style Syntax",
      ],
      correct: 0,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  const nextButton = document.getElementById("next");
  const resultsContainer = document.getElementById("results");
  const scoreDisplay = document.getElementById("score-display");
  const totalQuestions = document.getElementById("total-questions");
  
  totalQuestions.textContent = quizData.length;
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
    quizContainer.innerHTML = `
      <h2>${current.question}</h2>
      <ul>
        ${current.options
          .map(
            (option, index) =>
              `<li>
                <input type="radio" name="answer" id="option${index}" value="${index}">
                <label for="option${index}">${option}</label>
              </li>`
          )
          .join("")}
      </ul>
    `;
    submitButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    resultsContainer.classList.add("hidden");
  }
  
  function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("Please select an answer!");
      return;
    }
  
    const answer = parseInt(selected.value);
    if (answer === quizData[currentQuestion].correct) {
      score++;
      alert("Correct!");
    } else {
      alert(
        `Wrong! The correct answer is "${quizData[currentQuestion].options[quizData[currentQuestion].correct]}".`
      );
    }
  
    scoreDisplay.textContent = score;
    submitButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  }
  
  function showResults() {
    quizContainer.innerHTML = "";
    submitButton.classList.add("hidden");
    nextButton.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    resultsContainer.innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>Your final score is ${score} out of ${quizData.length}.</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreDisplay.textContent = score;
    loadQuestion();
  }
  
  submitButton.addEventListener("click", () => {
    checkAnswer();
  });
  
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });
  
  // Initialize quiz
  loadQuestion();
  