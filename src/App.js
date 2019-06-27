import React, { useState, useEffect } from "react";
import "./App.css";
import { getTips } from "./store";

import Computer from "./Computer";
import Recreation from "./Components/Recreation/Recreation";

function App() {
  getTips(data => console.log(data));

  const [tips, setTips] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [tip, setTip] = useState("");

  useEffect(() => {
    getTips(tips => {
      manageTips(tips);
    });
  }, []);

  const manageTips = params => {
    const computedTip = Computer.computeRandomTip(params);
    setTip(computedTip);
    setLoading(false);
  };

  if (isLoading) {
    return <div />;
  }

  return <Recreation tip={tip} />;
}

export default App;
