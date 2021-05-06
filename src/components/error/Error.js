import React, { useContext } from "react";
import { ErrorContext } from "../../context/error/ErrorContext";
import { StyledErrorMessage } from "./StyledError";

const Error = () => {
  const { error } = useContext(ErrorContext);
  const title = error && error.split(".")[0];
  const body = error && error.split(".")[1];

  return (
    error !== null && (
      <StyledErrorMessage color="red">
        <StyledErrorMessage.Header>{title}</StyledErrorMessage.Header>
        <p>{body}</p>
      </StyledErrorMessage>
    )
  );
};

export default Error;
