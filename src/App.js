import React from 'react';
import './App.css';
import ConsumptionReport from './Components/ConsumptionReport/ConsumptionReport';
import PrevisionalConsumption from './Components/PrevisionalConsumption/PrevisionalConsuption';
import Quizz from './Components/Quizz/Quizz';
import Tips from './Components/Tips/Tips';
import CurrentConsumption from './CurrentConsumption/CurrentConsuption';

function App() {
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
