import React from "react";
import GaugeChart from "react-advanced-gauge-chart";
import { StyledGaugeWrapper } from "./StyledGauge";

const Gauge = ({ today, goal, fasting }) => {
  const renderColors = () => {
    const todayHours = Number(today);
    const goalHours = Number(goal);
    const hoursUnderGoal = goalHours - todayHours;
    // 12 levels in gauge, so divide today hours by 2 to find placement in 24 hour gauge
    const stop = Math.round(todayHours / 2 - 1);

    if (todayHours) {
      if (todayHours === goalHours || todayHours > goalHours) {
        return Array(12)
          .fill("")
          .map((el, i) => (i <= stop ? "#00ff00" : "#ccc"));
      } else if (hoursUnderGoal > 4) {
        return Array(12)
          .fill("")
          .map((el, i) => (i <= stop ? "#ff0000" : "#ccc"));
      } else if (hoursUnderGoal <= 4 && hoursUnderGoal > 2) {
        return Array(12)
          .fill("")
          .map((el, i) =>
            i <= stop - 2 ? "#ff0000" : i <= stop ? "#ff8b00" : "#ccc"
          );
      } else {
        return Array(12)
          .fill("")
          .map((el, i) =>
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
      {/* <span className="zero">0</span>
      <span className="twelve">12</span>
      <span className="twenty-four">24</span> */}
      <GaugeChart
        style={{ width: "350px" }}
        id="gauge-chart3"
        nrOfLevels={12}
        colors={renderColors()}
        arcWidth={0.31}
        arcPadding={0.03}
        percent={today / 24}
        // previousValue={fasting[1].performed}
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
