import React from "react";

export default function QuestionList({
  question,
  options,
  handleClick,
  currentAnswer,
}) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => {
          <li
            key={index}
            className={currentAnswer === option ? "selected" : ""}
            onClick={() => handleClick(option)}
          >
            {option}
          </li>;
        })}
      </ul>
    </div>
  );
}
