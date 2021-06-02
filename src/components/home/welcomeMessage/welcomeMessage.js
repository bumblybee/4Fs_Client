import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/user/UserContext";
import { StyledWelcomeMessage } from "./StyledWelcome";

const WelcomeMessage = () => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState();

  useEffect(() => {
    user && setName(user.firstName);
  }, [user]);

  return (
    <StyledWelcomeMessage
      header={`Welcome ${name}!`}
      content="To get back to this page, click the 4Fs logo in the top left corner. To access your profile, click the user icon in the top right corner. Use the large rectangular menu above to move through each of the four F's. Use the smaller menu directly above this message to access each section within the four F's."
      // size="small"
      floating
    ></StyledWelcomeMessage>
  );
};

export default WelcomeMessage;
