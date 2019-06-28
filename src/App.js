import React, { useState, useEffect } from "react";
import { getTips } from "./store";
import Computer from "./Computer";
import Recreation from "./Components/Recreation/Recreation";
import CurrentConsumption from "./Components/CurrentConsumption/CurrentConsumption";
import { getRealTimeData } from "./store";
import Quiz from "./Components/Quiz/Quiz";
import Graph from './Components/graph/Graph';

const questions = [
  {
    content: "Which element takes the form of a liquid at normal room temperature?",
    answerA: "Mercury",
    answerB: "Helium",
    answerC: "Nitrogen",
    answerD: "Oxygen",
    explanation: "Response A: At 1 atm of pressure, the boiling point of mercury is well above 20 degrees C (room temperature) while the others are all well below, meaning they are in a gaseous state. Bromine is the only other element that is liquid at room temperature and Gallium's melting point is so low that it melts in your hand!"
  }, {
    content: "What scientific phenomenon explains the appearance of the colors of a rainbow?",
    answerA: "Reflection",
    answerB: "Radiation",
    answerC: "Induction",
    answerD: "Refraction",
    explanation: "Response D: Refraction is the bending of light when light moves from one medium to another. For rainbows, light moves from air to water. The index of refraction (a measure of how far the light bends) is larger for blue light than green light, and larger for green light than yellow and so on. For this reason the water in the air acts like a prism producing a rainbow."
  },
  {
    content: "Iodine is used to test for the presence of what substance in potatoes?",
    answerA: "Starch",
    answerB: "Glucose",
    answerC: "Theology",
    answerD: "Proteins",
    explanation: "Response A: Iodine reacts with amylose, a component of starch, creating a dark blue color. If there is no starch in the potato then the iodine won't react and no dark blue color will show."
  },

  {
    content: "What scientist was the first person to observe a moon orbiting a planet besides our own?",
    answerA: "Tycho Brahe",
    answerB: "William Gilbert",
    answerC: "Galileo Galilei",
    answerD: "Sir Isaac Newton",
    explanation: "Response C: Using one of the first primitive telescopes, Galileo was able to observe small points of light that appeared to move back and forth near Jupiter. He determined (correctly) that this must mean that there are 4 objects (now known as Jupiter's Galilean moons) orbiting around Jupiter. This was an important piece of evidence to help people accept that the Earth was not the center of the universe."
  },
  {
    content: "The display on a computer screen is calibrated on an RGB scale. What do the letters R, G, and B stand for?",
    answerA: "Regular grain blankscreen",
    answerB: "Red, green, blue",
    answerC: "Reading glaze, backlit",
    answerD: "Ranging glass buffer",
    explanation: "Response B: Using one of the first primitive telescopes, Galileo was able to observe small points of light that appeared to move back and forth near Jupiter. He determined (correctly) that this must mean that there are 4 objects (now known as Jupiter's Galilean moons) orbiting around Jupiter. This was an important piece of evidence to help people accept that the Earth was not the center of the universe."
  }
]

function App() {
  const [isLoading, setLoading] = useState(true);
  const [consumed, setConsumed] = useState({});
  const [tip, setTip] = useState("");
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    getRealTimeData(data => {
      setConsumed(data);
    });
    getTips(tips => {
      manageTips(tips);
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

  const getDiff = () => Math.round(consumed.injectidx - consumed.soutiridx);

  return (
    <div>
      <div className="container nav-bar ui-card">
        <div className="d-flex logo">
          <i className="icon icon-sun"></i>
          <p>Sunny Box</p>
        </div>
        <i onClick={() => alert('Wacko Cool 4 life !!! \n\nTeam: \nEric, Anaïs, Florin, Manoa, Cédric\n\nTechno: \nJavaScript, React, SCSS, Bootstrap, PHP, Symphony, API Platform\n\nProjet Hackathon (2 Jours)')} className="icon icon-info"></i>
      </div>
      <div className="container">
        <CurrentConsumption percentage={getConsumed()} chiffre={getDiff()} />
        <div className="my-2">
          <Recreation
            tip={tip}
            startQuiz={() => { setVisibility(true) }}
          />
        </div>
      </div>
      <div className={(isVisible ? "" : "d-none")}>
        <Quiz
          questions={questions}
          closeQuiz={() => {
            setVisibility(false);
          }} />
      </div>
      <div className="container ui-card pb-5">
        <Graph/>
      </div>

    </div>
  );
}

export default App;
