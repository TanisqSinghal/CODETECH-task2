NAME: TANISHAK SINGHAL

COMPANY: CODTECH IT SOLUTIONS

ID: CT08DS8670

DOMAIN: FRONTEND DEVELOPMENT

DURATION: OCTOBER TO NOVEMBER 2024

MENTOR: NEELA SANTHU


Interactive Quiz Application
An interactive quiz application built using HTML, CSS, and JavaScript. This app allows users to answer multiple-choice questions, track their scores in real time, and view their results at the end of the quiz.

Features
Dynamic Questions: Questions and options are dynamically loaded from a JavaScript array.
Real-Time Scoring: The score updates as the user progresses through the quiz.
Feedback on Answers: Alerts inform users whether their answers are correct or incorrect.
Responsive UI: Designed to work seamlessly on different screen sizes.
Restart Quiz: Users can restart the quiz at the end to try again.
Technologies Used
HTML: For structuring the application.
CSS: For styling and improving the visual appeal.
JavaScript: For handling quiz logic, scoring, and dynamic content.
Getting Started
1. Clone the Repository (https://github.com/TanisqSinghal/CODETECH-task2)
2. Navigate to the Project Directory
bash
Copy code
cd interactive-quiz
3. Open the Application
Simply open the index.html file in any modern web browser to start the quiz.

Project Structure
graphql
Copy code
interactive-quiz/
│
├── index.html      # Main HTML structure
├── styles.css      # Stylesheet for UI design
├── script.js       # JavaScript for quiz logic
└── README.md       # Project documentation
How to Use
Open the quiz in a browser by double-clicking index.html.
Answer the questions by selecting the options and clicking Submit.
View real-time updates to your score at the top of the quiz.
Click Next Question to move to the next question.
After the last question, view your final score.
Use the Restart Quiz button to play again.
Customization
1. Add Questions
To add more questions, update the quizData array in the script.js file:

javascript
Copy code
const quizData = [
  {
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0, // Index of the correct option
  },
  // Add more questions here
];
2. Change Styling
Modify styles.css to customize the look and feel of the application.

Demo

Future Enhancements
Add a timer for each question.
Display a progress bar during the quiz.
Store quiz data and scores in local storage for persistence.
Create a leaderboard for multiple users.
License
This project is open-source and available under the MIT License.

Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.