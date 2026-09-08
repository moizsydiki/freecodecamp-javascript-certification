// ** start of script.js **

const questions = [
  {
    category: "JavaScript Basics",
    question: "What is the correct way to declare a variable in JavaScript?",
    choices: ["A. variable x = 10", "B. let x = 10", "C. int x = 10"],
    answer: "B. let x = 10",
  },
  {
    category: "React.js",
    question: "Which hook is used to manage component state?",
    choices: ["A. useEffect", "B. useState", "C. useRef"],
    answer: "B. useState",
  },
  {
    category: "HTML",
    question: "Which HTML tag is used for the largest heading?",
    choices: ["A. <h3>", "B. <h3>", "C. <h1>"],
    answer: "C. <h1>",
  },
  {
    category: "CSS",
    question: "Which property is used to change text color in CSS?",
    choices: ["A. font-color", "B. text-style", "C. color"],
    answer: "C. color",
  },
  {
    category: "General Knowledge",
    question: "What is the capital city of France?",
    choices: ["A. Berlin", "B. Paris", "C. Rome"],
    answer: "B. Paris",
  },
];

function getRandomQuestion(question) {
  const random = Math.floor(Math.random() * 5);
  question = questions[random];
  return question;
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const selectedQuestion = getRandomQuestion(questions);
const selectedAnswer = getRandomComputerChoice(selectedQuestion.choices);

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

console.log(getResults(questions, questions.choices));

// ** end of script.js **
