import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../ChangingProgressProvider/ChangingProgressProvider";
import '../../App.css';

const CurrentConsuption = () => {

  const percentage1 = 40;
  const percentage2 = 50;
  const percentage3 = 60;
  
  const data = useState('');

  return (
  <div className="row offset-1" style={{ padding: "40px 40px 40px 40px" }}>
    <Example>
      <ChangingProgressProvider values={[0, percentage1]}>
        {value => (
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              trailColor: "#eee"
            })}
          />
        )}
      </ChangingProgressProvider>
    </Example>
    <Example>
      <ChangingProgressProvider values={[0, percentage2]}>
        {value => (
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              trailColor: "#eee"
            })}
          />
        )}
      </ChangingProgressProvider>
    </Example>
    {/* <div>
      <img src="https://cdn.pixabay.com/photo/2013/07/13/13/59/savings-box-161876_960_720.png" alt=""></img>
    </div> */}
  </div>
  )
};

function Example(props) {
  return (
    <div style={{ marginBottom: 30 }}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: 100 }}>{props.children}</div>
        <div style={{ marginLeft: 30 }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentConsuption;