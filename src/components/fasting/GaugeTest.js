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
    // renderLabels();
    renderColors(today, goal);
  }, [today, goal]);

  const renderColors = (today, goal) => {
    today = Number(today);
    goal = Number(goal);

    if (today) {
      if (today === goal || today > goal) {
        setColors(["#78db3bdd", "#78db3b", "#cccccc55"]);
      } else {
        setColors(["#78db3bdd", "#dd2828cc", "#cccccc55"]);
      }
    }
  };

  const renderLabels = () => {
    today &&
      setLabels([
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
        {
          text: `24`,
          position: "OUTSIDE",
          color: "#d8dee9",
        },
      ]);
  };

  return (
    <StyledGaugeWrapper>
      <ReactSpeedometer
        forceRender={true}
        needleHeightRatio={0.7}
        maxSegmentLabels={8}
        segments={12}
        customSegmentStops={stops}
        needleTransition="easeBackOut"
        // needleTransitionDuration={500}
        segmentColors={colors}
        needleColor={"#000000ee"}
        currentValueText={today && `Achieved ${today} of ${goal} hours`}
        ringWidth={130}
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
