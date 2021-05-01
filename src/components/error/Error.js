import React, { useContext } from "react";
import { ErrorContext } from "../../context/error/ErrorContext";
import { StyledErrorMessage } from "./StyledError";
// import { StyledNotificationPopup } from "../../styles/GlobalStyledComponents";

const Error = () => {
  const { errorMessage } = useContext(ErrorContext);
  const title = errorMessage && errorMessage.split(".")[0];
  const body = errorMessage && errorMessage.split(".")[1];

  return (
    errorMessage !== null && (
      <StyledErrorMessage color="red">
        <StyledErrorMessage.Header>{title}</StyledErrorMessage.Header>
        <p>{body}</p>
      </StyledErrorMessage>
    )
  );
};

export default Error;
