import React from "react";
import { Button } from "semantic-ui-react";
import { StyledButtonCell } from "./StyledButtonCell";

const ButtonCell = (props) => {
  return (
    <StyledButtonCell>
      <Button
        as="a"
        href={props.to}
        target={props.newWindow && "_blank"}
        rel="noopener"
        accessor={props.accessor}
        color={props.color}
        isCentered={props.isCentered}
        newWindow={props.newWindow}
        size={props.size}
      >
        {props.icon && props.icon}
        {props.val || "Add Google Sheets Link"}
      </Button>
    </StyledButtonCell>
  );
};

export default ButtonCell;
