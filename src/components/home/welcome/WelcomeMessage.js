import React, { useContext } from "react";
import { Message } from "semantic-ui-react";
import { UserContext } from "../../../context/user/UserContext";
import EmailLink from "../../layout/contact/EmailLink";
import { StyledWelcomeMessage } from "./StyledWelcome";

const WelcomeMessage = () => {
  const { user } = useContext(UserContext);

  return (
    user && (
      <StyledWelcomeMessage>
        <Message.Header>{`Welcome ${user.firstName}!`}</Message.Header>
        <Message.Content>
          This is your personalized 4Fs of Weight Loss dashboard. Use it to help
          you along your weight loss journey and to support your healthy
          lifestyle.
        </Message.Content>

        <Message.Content style={{ margin: "0.5rem 0 0" }}>
          <EmailLink
            link="mailto:4fshelp@gmail.com"
            title="Message Support"
            text="Get help with technical issues"
          />
        </Message.Content>
      </StyledWelcomeMessage>
    )
  );
};

export default WelcomeMessage;
