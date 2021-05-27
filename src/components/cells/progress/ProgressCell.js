import React from "react";
import { Progress } from "semantic-ui-react";
import { StyledProgress } from "./StyledProgress";

const ProgressCell = () => {
  return <StyledProgress percent={55} size="small" progress />;
};

export default ProgressCell;
