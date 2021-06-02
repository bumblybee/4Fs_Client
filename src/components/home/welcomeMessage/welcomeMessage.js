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
      <StyledWelcomeMessage list={list} size="small" floating>
        <Message.Header>{`Welcome ${user.firstName}!`}</Message.Header>

        <Message.List>
          {list.map((item, idx) => (
            <Message.Item key={idx}>{item}</Message.Item>
          ))}
        </Message.List>
      </StyledWelcomeMessage>
    )
  );
};

export default WelcomeMessage;
