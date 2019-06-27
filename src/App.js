import React from "react";
import "./App.css";
import ConsumptionReport from "./Components/ConsumptionReport/ConsumptionReport";
import PrevisionalConsumption from "./Components/PrevisionalConsumption/PrevisionalConsuption";
import Quizz from "./Components/Quizz/Quizz";
import Tips from "./Components/Tips/Tips";
import CurrentConsumption from "./CurrentConsumption/CurrentConsumption";
import { getRealTimeData, getTips } from "./store";

import Computer from "./Computer";

function App() {
  getRealTimeData(data => console.log(data));
  getTips(data => console.log(data));

  console.log(
    Computer.computePercentageConsumed(11.817760236000648, 162.3747006409853)
  );

  return (
    <div className="App">
      <div className="col-6">
        <CurrentConsumption />
      </div>
      <div className="col-6">
        <ConsumptionReport />
      </div>
      <div className="col-6">
        <Tips />
      </div>
      <div className="col-6">
        <Quizz />
      </div>
      <PrevisionalConsumption />
    </div>
  );
}

export default App;
