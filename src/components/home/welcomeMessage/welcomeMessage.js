import React, { useContext } from "react";
import { UserContext } from "../../../context/user/UserContext";
import { Message } from "semantic-ui-react";
import { StyledWelcomeMessage } from "./StyledWelcome";

const WelcomeMessage = () => {
  const { user } = useContext(UserContext);
  // const [visible, setVisible] = useState(true);
  const list = [
    "To come back to the home page, click the 4Fs logo in the top left corner",
    "To access your profile, click the user icon in the top right corner",
    "Use the F's menu at top center to move through the four F's",
    "Use the smaller menu directly above this message to access sections within each F",
  ];

  return (
    user && (
      <StyledWelcomeMessage
        header={`Welcome ${user.firstName}!`}
        list={list}
        //     content="To come back to the home page, click the 4Fs logo in the top left corner.
        // To access your profile, click the user icon in the top right corner.
        // Use the F's menu at top center to move through the four F's.
        // Use the smaller menu directly above this message to access sections within each F."
        size="small"
        floating
      ></StyledWelcomeMessage>
    )
  );
};

export default WelcomeMessage;
