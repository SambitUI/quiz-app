import React, { useState } from "react";
import QuestionList from "./QuestionList";
import QuizCSS from "./Quiz.css";

export default function Quiz() {
  const questions = [
    {
      Question: "JavaScript is the programming language of the",
      options: "Desktop,Mobile,Web,Server",
      answer: "Web",
    },
    {
      Question: " Which type of JavaScript language is",
      options:
        "Object-oriented,Object based,Functional programming,All of the above",
      answer: "Object based",
    },
    {
      Question: "JavaScript code can be written in _",
      options:
        "JavaScript file (.js file),HTML document directly,JavaScript file and in HTML document directly,In style sheets (.css file)",
      answer: "JavaScript file and in HTML document directly",
    },
    {
      Question: " JavaScript ignores?",
      options: "newlines,tabs,spaces,All of the above",
      answer: "All of the above",
    },
  ];

  const [questionList, setQuestionList] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[questionList].answer) setScore(score + 1);
  };
  const handleQuestion = () => {
    setQuestionList(questionList + 1);
    setCurrentAnswer(null);
  };
  return (
    <div>
      {questionList < questions.length ? (
        <div>
          <QuestionList
            question={questions[questionList].question}
            options={questions[questionList].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer == null}
            className={currentAnswer === null ? "button-disable" : "button"}
            on
            onClick={handleQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div>Your Score is {score}</div>
      )}
    </div>
  );
}
