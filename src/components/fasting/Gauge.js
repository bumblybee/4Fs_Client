import React from "react";
import GaugeChart from "react-advanced-gauge-chart";
import { StyledGaugeWrapper } from "./StyledGauge";

const Gauge = ({ percentage, today, goal, fasting }) => {
  //   let prevVal =
  //     percentage !== null && fasting && fasting[1] && fasting[1].performed;

  const renderColors = () => {
    const val = (today / 24) * 100;
    if (today === goal) return ["#78db3b"];
    if (percentage < 100 && percentage >= 80) return ["#e3e322", "#e3e32211"];
    else if (percentage < 80 && percentage >= 55) {
      return ["#cccccc44", "#ffaf36"];
    } else if (percentage < 55 && percentage >= 35) {
      return ["#ff6f36", "#cccccc44"];
    } else return ["#dd2828", "#ccc"];
  };
  console.log(today, goal);
  return (
    <StyledGaugeWrapper>
      <span className="zero">0</span>
      <span className="fifty">12</span>

      <span className="hundred">24</span>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={20}
        colors={renderColors()}
        arcWidth={0.31}
        arcPadding={0.045}
        percent={today / 24}
        // previousValue={prevVal}
        needleColor="grey"
        needleBaseColor="grey"
        animDelay={50}
        textColor="white"
        formatTextValue={(val) =>
          !today ? "0 / 24 hours" : `${today} / ${goal} hours`
        }
      />
    </StyledGaugeWrapper>
  );
};

export default Gauge;
