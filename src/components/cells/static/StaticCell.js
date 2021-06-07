import React from "react";
import DOMPurify from "dompurify";
import { StyledStaticCell } from "./StyledStaticCell";

const StaticCell = (props) => {
  const sanitize = DOMPurify.sanitize;

  return (
    <StyledStaticCell condition={props.condition} {...props}>
      <div className={props.className}>{sanitize(props.val)}</div>
    </StyledStaticCell>
  );
};

export default StaticCell;
