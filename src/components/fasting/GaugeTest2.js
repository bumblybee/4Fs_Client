import React, { useState, useEffect, useRef } from "react";

import { StyledGaugeWrapper } from "./StyledGauge";

const GaugeTest2 = ({ percentage, today, goal, fasting }) => {
  const chartRef = useRef();
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // const renderColors = (today, goal) => {
  //   today = Number(today);
  //   goal = Number(goal);

  //   if (today) {
  //     if (today === goal) {
  //       setColors(["#78db3bdd", "#78db3b", "#cccccc44"]);
  //     } else if (today > goal) {
  //       setStops([0, Number(goal), Number(today), 24]);
  //       setColors(["#78db3bdd", "#78db3b", "#ddd"]);
  //     } else if (goal - today <= 3) {
  //       setColors(["#f2de29 ", "#eb9328cc", "#cccccc44"]);
  //     } else if (goal - today > 3 && goal - today <= 5) {
  //       setColors(["#ffaf36", "#dd6428cc", "#cccccc44"]);
  //     } else if (goal - today > 5 && goal - today <= 8) {
  //       setColors(["#ff6f36", "#dd4c28cc", "#cccccc44"]);
  //     } else setColors(["#e8271aff", "#dd2828cc", "#ccc"]);
  //   }
  // };

  // console.log(today > goal);
  return (
    <StyledGaugeWrapper>
      <canvas ref={chartRef} id="gauge-chart" />
    </StyledGaugeWrapper>
  );
};

export default GaugeTest2;
