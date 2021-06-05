import React from "react";
import { StyledButton } from "./StyledButtonCell";

const ButtonCell = (props) => {
  return (
    <StyledButton
      // size={props.size}
      as="a"
      href={props.to}
      target={props.newWindow && "_blank"}
      rel="noopener"
      accessor={props.accessor}
      color={props.color}
      isCentered={props.isCentered}
      className={`ui ${props.color} button`}
    >
      {props.icon && props.icon}
      {props.val}
    </StyledButton>
  );
};

export default ButtonCell;
