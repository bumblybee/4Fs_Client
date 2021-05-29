import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { StyledGaugeWrapper } from "./StyledGauge";

const GaugeTest = ({ percentage, today, goal, fasting }) => {
  const [stops, setStops] = useState([]);
  const [colors, setColors] = useState([]);
  const [labels, setLabels] = useState([]);

  console.log(today, goal);
  useEffect(() => {
    setStops([0, Number(today), Number(goal), 24]);
    renderLabels();
    renderColors(today, goal);
  }, [today, goal]);

  const renderColors = (today, goal) => {
    today = Number(today);
    goal = Number(goal);

    if (today) {
      if (today === goal) {
        setColors(["#78db3bdd", "#78db3b", "#cccccc44"]);
      } else if (today > goal) {
        setStops([0, Number(goal), Number(today), 24]);
        setColors(["#78db3bdd", "#78db3b", "#ddd"]);
      } else if (goal - today <= 3) {
        setColors(["#f2de29 ", "#eb9328cc", "#cccccc44"]);
      } else if (goal - today > 3 && goal - today <= 5) {
        setColors(["#ffaf36", "#dd6428cc", "#cccccc44"]);
      } else if (goal - today > 5 && goal - today <= 8) {
        setColors(["#ff6f36", "#dd4c28cc", "#cccccc44"]);
      } else setColors(["#e8271aff", "#dd2828cc", "#ccc"]);
    }
  };

  const renderLabels = () => {
    setLabels([
      {
        text: "0",
        position: "OUTSIDE",
        color: "#d8dee9",
      },
      {
        text: `Achieved: ${today}`,
        position: "OUTSIDE",
        color: "#d8dee9",
      },
      {
        text: `Goal: ${goal}`,
        position: "OUTSIDE",
        color: "#d8dee9",
      },
    ]);
  };
  console.log(today > goal);
  return (
    <StyledGaugeWrapper>
      <ReactSpeedometer
        forceRender={true}
        needleHeightRatio={0.7}
        maxSegmentLabels={8}
        segments={stops.length}
        customSegmentStops={stops}
        // customSegmentLabels={[
        //   { text: "0" },
        //   { text: today },
        //   { text: goal },
        //   { text: "0" },
        // ]}
        segmentColors={colors}
        needleColor={"#000000ee"}
        currentValueText={today && `Achieved ${today} of ${goal} hours`}
        minValue={0}
        maxValue={24}
        value={today}
        height={180}
        textColor={"#000000ee"}
        valueTextFontSize={13}
      />
    </StyledGaugeWrapper>
  );
};

export default GaugeTest;
