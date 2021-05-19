import React from "react";
import { Icon, Label, Container } from "semantic-ui-react";
import { StyledStaticCell } from "./StyledStaticCell";

const StaticCell = (props) => {
  return (
    <StyledStaticCell condition={props.condition} {...props}>
      {props.condition ? (
        <div className={props.className}>
          <Label circular color="olive">
            {props.val}
          </Label>
        </div>
      ) : (
        <div className={props.className}>{props.val}</div>
      )}
    </StyledStaticCell>
  );
};

export default StaticCell;
