import React from "react";
import { Label } from "semantic-ui-react";
import { StyledStaticCell } from "../static/StyledStaticCell";

const LabelCell = (props) => {
  return (
    <StyledStaticCell condition={props.condition} {...props}>
      <div className={props.className}>
        <Label size="small" color={props.color}>
          {props.val}
        </Label>
      </div>
    </StyledStaticCell>
  );
};

export default LabelCell;
