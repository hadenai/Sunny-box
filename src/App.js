import React, { useState, useEffect } from "react";
import "./App.css";
import { getTips } from "./store";
import Computer from "./Computer";
import Recreation from "./Components/Recreation/Recreation";
import PrevisionalConsumption from "./Components/PrevisionalConsumption/PrevisionalConsuption";
import CurrentConsumption from "./Components/CurrentConsumption/CurrentConsumption";
import { getRealTimeData } from "./store";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [consumed, setConsumed] = useState({});
  const [tip, setTip] = useState("");

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

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CurrentConsumption percentage={getConsumed()} />
          </div>
        </div>
        <div className="m-2">
          <Recreation tip={tip} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
