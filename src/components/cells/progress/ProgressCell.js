import React from "react";
import { Progress } from "semantic-ui-react";
import { StyledProgress, StyledHours } from "./StyledProgress";

const ProgressCell = (props) => {
  const renderColor = (percentage) => {
    if (percentage < 45) {
      return "#dd2828";
    } else if (percentage >= 45 && percentage < 75) {
      return "#f2711c";
    } else {
      return "#56e300";
    }
  };

  return (
    <>
      <StyledProgress
        percent={props.val}
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
