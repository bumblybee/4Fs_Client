import React from "react";
import { StyledGaugeWrapper, StyledGauge } from "./StyledGauge";

const Gauge = ({ today, goal, percentage, fasting }) => {
  const renderColors = () => {
    const stop = Math.round(today / 2 - 1);
    const colors = Array(12).fill("");

    if (today && percentage) {
      if (percentage < 50) {
        return colors.map((el, i) => (i <= stop ? "#ff0000" : "#ccc"));
      } else if (percentage >= 50 && percentage < 55) {
        return colors.map((el, i) =>
          i <= stop - 1 ? "#ff0000" : i <= stop ? "#ff8b00" : "#ccc"
        );
      } else if (percentage >= 55 && percentage < 65) {
        return colors.map((el, i) =>
          i <= stop - 2 ? "#ff0000" : i <= stop ? "#ff8b00" : "#ccc"
        );
      } else if (percentage >= 65 && percentage < 75) {
        return colors.map((el, i) =>
          i <= stop - 3 ? "#ff0000" : i <= stop ? "#ff8b00" : "#ccc"
        );
      } else if (percentage >= 75 && percentage < 85) {
        return colors.map((el, i) =>
          i <= stop - 4
            ? "#ff0000"
            : i <= stop - 1
            ? "#ff8b00"
            : i <= stop
            ? "#fff200"
            : "#ccc"
        );
      } else if (percentage >= 85 && percentage < 85) {
        return colors.map((el, i) =>
          i <= stop - 4
            ? "#ff0000"
            : i <= stop - 2
            ? "#ff8b00"
            : i <= stop
            ? "#fff200"
            : "#ccc"
        );
      } else if (percentage >= 85 && percentage < 95) {
        return colors.map((el, i) =>
          i <= stop - 5
            ? "#ff0000"
            : i <= stop - 2
            ? "#ff8b00"
            : i <= stop
            ? "#fff200"
            : "#ccc"
        );
      } else if (percentage >= 95 && percentage < 99) {
        return colors.map((el, i) =>
          i <= stop - 6
            ? "#ff0000"
            : i <= stop - 3
            ? "#ff8b00"
            : i <= stop
            ? "#fff200"
            : "#ccc"
        );
      } else {
        return colors.map((el, i) => (i <= stop ? "#00ff00" : "#ccc"));
      }
    } else {
      return colors.map((el, i) =>
        i <= 3 ? "#ff0000" : i <= 6 ? "#ff8b00" : i <= 9 ? "#fff200" : "#00ff00"
      );
    }
  };

  return (
    <StyledGaugeWrapper>
      <StyledGauge
        id="gauge-chart3"
        nrOfLevels={12}
        colors={renderColors()}
        arcWidth={0.31}
        arcPadding={0.03}
        percent={today / 24}
        needleColor="grey"
        needleBaseColor="black"
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
