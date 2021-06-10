import React from "react";
import {
  StyledProgressWrapper,
  StyledPercent,
  StyledHours,
} from "./StyledProgressCell";

const ProgressCell = (props) => {
  const percentage = props.val.toFixed(0);

  const renderColor = (percent) => {
    if (percent < 50) {
      return "#e62626";
    } else if (percent >= 50 && percent < 75) {
      return "#ff6f36";
    } else if (percent >= 50 && percent < 99) {
      return "#fcd928";
    } else {
      return "#7cea39";
    }
  };

  return (
    <StyledProgressWrapper color={renderColor(percentage)}>
      <progress min="0" max="100" value={props.val}></progress>
      <StyledPercent percentage={percentage} val={props.val}>
        {percentage}%
      </StyledPercent>
      <StyledHours val={props.val}>
        <small>
          {props.day} / {props.goal} hrs
        </small>
      </StyledHours>
    </StyledProgressWrapper>
  );
};

export default ProgressCell;
