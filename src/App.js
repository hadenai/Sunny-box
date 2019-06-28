import React, { useState, useEffect } from "react";
import { getTips } from "./store";
import Computer from "./Computer";
import Recreation from "./Components/Recreation/Recreation";
import CurrentConsumption from "./Components/CurrentConsumption/CurrentConsumption";
import { getRealTimeData, getQuiz } from "./store";
import Quiz from "./Components/Quiz/Quiz";

// const questions = [
//   {
//     content:
//       "What scientific phenomenon explains the appearance of the colors of a rainbow?",
//     answerA: "Reflection",
//     answerB: "Radiation",
//     answerC: "Induction",
//     answerD: "Refraction",
//     explanation:
//       "Response D: Refraction is the bending of light when light moves from one medium to another. For rainbows, light moves from air to water. The index of refraction (a measure of how far the light bends) is larger for blue light than green light, and larger for green light than yellow and so on. For this reason the water in the air acts like a prism producing a rainbow."
//   },
//];

function App() {
  const [isLoading, setLoading] = useState(true);
  const [consumed, setConsumed] = useState({});
  const [tip, setTip] = useState("");
  const [isVisible, setVisibility] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getRealTimeData(data => {
      setConsumed(data);
    });
    getTips(tips => {
      manageTips(tips);
    });

    getQuiz(res => {
      setQuestions(res);
    });

    setLoading(false);
  }, []);

  const manageTips = params => {
    const computedTip = Computer.computeRandomTip(params);
    setTip(computedTip);
  };

  const getConsumed = () =>
    Computer.computePercentageConsumed(consumed.autoconsoidx, consumed.prodidx);

  if (isLoading) {
    return <div />;
  }

  if (!questions.length) {
    return <div />;
  }

  console.log(questions);
  return (
    <div>
      <div className="container">
        <CurrentConsumption percentage={getConsumed()} />
        <div className="my-2">
          <Recreation
            tip={tip}
            startQuiz={() => {
              setVisibility(true);
            }}
          />
        </div>
      </div>
      <div className={isVisible ? "" : "d-none"}>
        <Quiz
          questions={questions}
          closeQuiz={() => {
            setVisibility(false);
          }}
        />
      </div>
    </div>
  );
}

export default App;
