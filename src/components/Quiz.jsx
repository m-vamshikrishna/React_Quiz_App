import { useState } from "react";
import QUESTIONS from "../questions.js";
import QUIZ_COMPLETE from "../assets/quiz-complete.png";
export default function Quiz() {
  //   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;
  function handleSelectAnswers(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
  if (quizIsComplete) {
    return (
      <div id="summary">
        <h2>Quiz Completed!!!</h2>
        <img src={QUIZ_COMPLETE} alt="Trophy Icon" />
      </div>
    );
  }
  const suffeledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  suffeledAnswers.sort(() => Math.random() - 0.5);
  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {suffeledAnswers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswers(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
