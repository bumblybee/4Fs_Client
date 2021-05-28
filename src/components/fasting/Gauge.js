import React from "react";
import GaugeChart from "react-advanced-gauge-chart";
import { StyledGaugeWrapper } from "./StyledGauge";

const Gauge = ({ percentage, hours, fasting }) => {
  //   let prevVal =
  //     percentage !== null && fasting && fasting[1] && fasting[1].performed;

  return (
    <StyledGaugeWrapper>
      <span className="zero">0</span>
      <span className="fifty">12</span>

      <span className="hundred">24</span>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={20}
        colors={["#dd2828", "#fff930", "#78db3b"]}
        arcWidth={0.31}
        arcPadding={0.045}
        percent={hours / 24}
        // previousValue={prevVal}
        needleColor="grey"
        needleBaseColor="grey"
        animDelay={50}
        textColor="white"
        formatTextValue={(val) =>
          !hours ? "0 / 24 hours" : `${hours} / 24 hours`
        }
      />
    </StyledGaugeWrapper>
  );
};

export default Gauge;
