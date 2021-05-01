import React, { useContext } from "react";
import { ErrorContext } from "../../context/error/ErrorContext";
// import { StyledNotificationPopup } from "../../styles/GlobalStyledComponents";

const Error = () => {
  const { errorMessage } = useContext(ErrorContext);

  return (
    // errorMessage !== null && (
    //   <StyledNotificationPopup origin={"error"} draggable>
    //     {errorMessage}
    //   </StyledNotificationPopup>
    // )
  );
};

export default Error;
