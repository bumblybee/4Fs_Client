import React from "react";
import GaugeChart from "react-advanced-gauge-chart";
import { StyledGaugeWrapper } from "./StyledGauge";

const Gauge = ({ today, goal, fasting }) => {
  console.log(today, goal);
  const renderColors = () => {
    const hoursUnderGoal = goal - today;
    // 12 levels in gauge, so divide today hours by 2 to find placement in 24 hour gauge
    const stop = Math.round(today / 2 - 1);
    const colors = Array(12).fill("");

    if (today) {
      if (today === goal || today > goal) {
        return colors.map((el, i) => (i <= stop ? "#00ff00" : "#ccc"));
      } else if (hoursUnderGoal > 4) {
        return colors.map((el, i) => (i <= stop ? "#ff0000" : "#ccc"));
      } else if (hoursUnderGoal <= 4 && hoursUnderGoal > 2) {
        return colors.map((el, i) =>
          i <= stop - 2 ? "#ff0000" : i <= stop ? "#ff8b00" : "#ccc"
        );
      } else {
        return colors.map((el, i) =>
          i <= stop - 4
            ? "#ff0000"
            : i <= stop - 2
            ? "#ff8b00"
            : i <= stop
            ? "#fff200"
            : "#ccc"
        );
      }
    }
  };

  return (
    <StyledGaugeWrapper>
      <GaugeChart
        style={{ width: "350px" }}
        id="gauge-chart3"
        nrOfLevels={12}
        colors={renderColors()}
        arcWidth={0.31}
        arcPadding={0.03}
        percent={today / 24}
        needleColor="grey"
        needleBaseColor="grey"
        animDelay={50}
        textColor="black"
        formatTextValue={(val) =>
          !today ? "0 / 24 hours" : `${today}/${goal} hours`
        }
      />
    </StyledGaugeWrapper>
  );
};

export default Gauge;
