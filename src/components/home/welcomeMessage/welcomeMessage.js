import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/user/UserContext";
import { Icon, Button, Message } from "semantic-ui-react";
import { StyledWelcomeMessage } from "./StyledWelcome";

const WelcomeMessage = () => {
  const { user } = useContext(UserContext);
  const [visible, setVisible] = useState(true);
  const list = [
    "To come back to the home page, click the 4Fs logo in the top left corner",
    "To access your profile, click the user icon in the top right corner",
    "Use the F's menu at top center to move through the four F's",
    "Use the smaller menu directly above this message to access sections within each F",
  ];

  return (
    user && (
      // <StyledWelcomeMessage
      //   // content="To get back to this page, click the 4Fs logo in the top left corner. To access your profile, click the user icon in the top right corner. Use the large rectangular menu above to move through each of the four F's. Use the smaller menu directly above this message to access each section within the four F's."

      //   // list={list}
      //   visible={visible}
      //   size="small"
      //   floating
      //   onClick={() => setVisible(!visible)}
      // >
      //   <Message.Header>
      //     {`Welcome ${user.firstName}!`} <Icon name={visible ? "close" : ""} />
      //   </Message.Header>
      //   {visible && (
      //     <Message.List>
      //       {list.map((item) => (
      //         <Message.Item>{item}</Message.Item>
      //       ))}
      //     </Message.List>
      //   )}
      // </StyledWelcomeMessage>

      <StyledWelcomeMessage list={list} size="small" floating>
        <Message.Header>{`Welcome ${user.firstName}!`}</Message.Header>

        <Message.List>
          {list.map((item) => (
            <Message.Item>{item}</Message.Item>
          ))}
        </Message.List>
      </StyledWelcomeMessage>
    )
  );
};

export default WelcomeMessage;
