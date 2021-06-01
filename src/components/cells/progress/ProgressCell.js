import React from "react";
import {
  StyledProgressWrapper,
  StyledPercent,
  StyledHours,
} from "./StyledProgress";

const ProgressCell = (props) => {
  const percentage = props.val.toFixed(0);

  const renderColor = (percent) => {
    if (percent < 30) {
      return "#dd2828";
    } else if (percent >= 30 && percent < 50) {
      return "#ff6f36";
    } else if (percent >= 50 && percent < 80) {
      return "#fcd928";
    } else if (percent >= 80 && percent < 100) {
      return "#e4ed28";
    } else {
      return "#78db3b";
    }
  };
  console.log(props.percentage);
  return (
    <StyledProgressWrapper width="90%" color={renderColor(percentage)}>
      <progress min="0" max="100" value={props.val}></progress>
      <StyledPercent percentage={percentage} val={props.val}>
        {percentage}%
      </StyledPercent>
      <StyledHours>
        <small>
          {props.day} / {props.goal} hrs
        </small>
      </StyledHours>
    </StyledProgressWrapper>
  );
};

export default ProgressCell;
