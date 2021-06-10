import React, { useContext } from "react";
import { NotificationContext } from "../../context/notification/NotificationContext";
import { StyledMessage } from "./StyledNotification";

const Notification = () => {
  const { notification } = useContext(NotificationContext);
  const title = notification && notification.message.split(".")[0];
  const body = notification && notification.message.split(".")[1];

  const setColor = () => {
    switch (notification.type) {
      case "error":
        return "red";
      case "info":
        return "info";
      case "warning":
        return "yellow";
      default:
        return "grey";
    }
  };

  if (notification !== null) window.scrollTo(0, 0);

  return (
    notification !== null && (
      <StyledMessage color={setColor()}>
        <StyledMessage.Header>{title}</StyledMessage.Header>
        <p>{body}</p>
      </StyledMessage>
    )
  );
};

export default Notification;
