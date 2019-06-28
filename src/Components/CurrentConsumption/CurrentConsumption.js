import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../ChangingProgressProvider/ChangingProgressProvider";
import "../../App.css";
import './CurrentConsumption.css';


const CurrentConsuption = ({ percentage }) => {
  const percentage1 = 40;
  const percentage2 = 50;

  return (
    <div className="row ui-card current-consumption">
      <div className="col-6 justify-content-center align-items-center">
        <ChangingProgressProvider values={[0, percentage]}>
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
        <p>Consomation de votre production</p>
      </div>
      <div className="col-6 align-self-center" >
        <i className="icon-pig-thunder pig" />
      </div>
    </div>
  );
};

export default CurrentConsuption;
