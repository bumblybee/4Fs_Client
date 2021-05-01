import React, { useContext } from "react";
import { ErrorContext } from "../../context/error/ErrorContext";
import { Message } from "semantic-ui-react";
// import { StyledNotificationPopup } from "../../styles/GlobalStyledComponents";

const Error = () => {
  const { errorMessage } = useContext(ErrorContext);
  const title = errorMessage.split(".")[0];
  const body = errorMessage.split(".")[1];

  return (
    errorMessage !== null && (
      <Message color="red">
        <Message.Header>{title}</Message.Header>
        <p>{body}</p>
      </Message>
    )
  );
};

export default Error;
