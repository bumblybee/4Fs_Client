import React from "react";
import { StyledStaticCell } from "./StyledStaticCell";

const StaticCell = (props) => {
  return (
    <StyledStaticCell condition={props.condition}>
      <div className={props.className}>{props.val}</div>
    </StyledStaticCell>
  );
};

export default StaticCell;
