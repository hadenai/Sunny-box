import React from 'react';
import './App.css';
import ConsumptionReport from './Components/ConsumptionReport/ConsumptionReport';
import PrevisionalConsumption from './Components/PrevisionalConsumption/PrevisionalConsuption';
import Quizz from './Components/Quizz/Quizz';
import Tips from './Components/Tips/Tips';
import CurrentConsumption from './Components/CurrentConsumption/CurrentConsuption';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className="col-12">
          <CurrentConsumption />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ConsumptionReport />
        </div>
        <div className="col-6">
          <Tips />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Quizz />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PrevisionalConsumption />
        </div>
      </div>
    </div>
  );
}

export default App;
