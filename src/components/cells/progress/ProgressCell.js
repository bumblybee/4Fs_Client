import React from "react";
import { Progress } from "semantic-ui-react";
import { StyledProgress, StyledHours } from "./StyledProgress";

const ProgressCell = (props) => {
  const percentage = props.val.toFixed(0);

  const renderColor = (percentage) => {
    if (percentage < 30) {
      return "#dd2828";
    } else if (percentage >= 30 && percentage < 50) {
      return "#ff6f36";
    } else if (percentage >= 50 && percentage < 70) {
      return "#ffaf36";
    } else if (percentage >= 70 && percentage < 90) {
      return "#f5e23b";
    } else if (percentage >= 90 && percentage < 100) {
      return "#e3e322";
    } else {
      return "#78db3b";
    }
  };

  return (
    <>
      <StyledProgress
        percent={percentage}
        size="small"
        color={renderColor(props.val)}
        progress
        max="120"
      />
      <StyledHours>
        <small>
          {props.day} / {props.goal} hrs
        </small>
      </StyledHours>
    </>
  );
};

export default ProgressCell;
