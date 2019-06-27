import React from "react";
import "./Recreation.css";

const Recreation = ({ tip, startQuiz }) => {
  return (
    <div className="row">
      <div className=" col-sm-6 astuce ui-card">
        <h2>Astuce</h2>
        <p>{tip.content}</p>
      </div>

      <div className="col-sm-6 quiz-trigger ui-card" onClick={startQuiz}>
        <h2>Quiz</h2>
      </div>
    </div>
  );
};

export default Recreation;
