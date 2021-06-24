import React, { useContext } from "react";
import { UserContext } from "../../../context/user/UserContext";
import { Message } from "semantic-ui-react";
import { StyledWelcomeMessage } from "./StyledWelcome";

const WelcomeMessage = () => {
  const { user } = useContext(UserContext);
  // const [visible, setVisible] = useState(true);
  const list = [
    "Clicking the 4Fs logo at the top left will bring you back here",
    "Clicking the user button at the top right will take you to your profile",
    "Use the four F's menu at the top center to move through each of the F's",
    "Use the smaller menu directly above this message to access sections within each F",
  ];

  return (
    user && (
      <StyledWelcomeMessage
        header={`Welcome ${user.firstName}!`}
        // list={list}
        // size="small"
        content="This is your personalized 4Fs of Weight Loss dashboard. Use it to help you along your weight loss journey and to support your healthy lifestyle."
      ></StyledWelcomeMessage>
    )
  );
};

export default WelcomeMessage;
