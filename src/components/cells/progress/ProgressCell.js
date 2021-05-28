import React from "react";
import { Progress } from "semantic-ui-react";
import { StyledProgress, StyledHours } from "./StyledProgress";

const ProgressCell = (props) => {
  const percentage = props.val.toFixed(0);

  const renderColor = (percentage) => {
    if (percentage < 30) {
      return "#dd2828";
    } else if (percentage >= 25 && percentage < 50) {
      return "#f75e34 ";
    } else if (percentage >= 50 && percentage < 75) {
      return "#ffb742";
    } else if (percentage >= 75 && percentage < 100) {
      return "#ffd930";
    } else {
      return "#56e300";
    }
  };
  console.log(props.val);
  return (
    <>
      <StyledProgress
        percent={percentage}
        size="small"
        color={renderColor(props.val)}
        progress
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
