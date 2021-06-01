import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { StyledGaugeWrapper } from "./StyledGauge";

const GaugeTest = ({ percentage, today, goal, fasting }) => {
  const [stops, setStops] = useState([]);
  const [colors, setColors] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    setStops([0, Number(today), Number(goal), 24]);
    renderColors(today, goal);
    renderLabels();
  }, [today, goal]);

  const renderColors = (today, goal) => {
    today = Number(today);
    goal = Number(goal);

    if (today) {
      if (today === goal || today > goal) {
        setColors(["#78db3bdd", "#63ff00", "#cccccc55"]);
      } else {
        setColors(["#78db3bdd", "#dd2828bb", "#cccccc55"]);
      }
    }
  };

  const renderLabels = () => {
    today &&
      setLabels([
        {
          text: today >= goal ? "Goal Achieved!" : "Achieved",
          position: "INSIDE",
          color: "#fff",
        },
        {
          // text: today < goal ? "Goal" : "",
          position: "INSIDE",
          color: "#fff",
        },
        {
          text: ``,
          position: "OUTSIDE",
          color: "",
        },
      ]);
  };

  return (
    <StyledGaugeWrapper today={today}>
      <span className="zero">0</span>
      <span className="six">6</span>
      <span className="twelve">12</span>
      <span className="eighteen">18</span>
      <span className="twenty-four">24</span>

      <ReactSpeedometer
        forceRender={true}
        needleHeightRatio={0.7}
        maxSegmentLabels={0}
        segments={12}
        customSegmentStops={stops}
        needleTransition="easeBackOut"
        // needleTransitionDuration={500}
        segmentColors={colors}
        needleColor={"#000000ee"}
        customSegmentLabels={labels}
        currentValueText={
          today ? `Achieved ${today} of ${goal} hours` : "hours"
        }
        ringWidth={130}
        minValue={0}
        maxValue={24}
        value={today}
        height={180}
        textColor={"#333"}
        valueTextFontSize={13}
      />
    </StyledGaugeWrapper>
  );
};

export default GaugeTest;
