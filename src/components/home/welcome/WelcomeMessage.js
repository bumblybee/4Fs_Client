import React, { useContext } from "react";
import { UserContext } from "../../../context/user/UserContext";
import { StyledWelcomeMessage } from "./StyledWelcome";

const WelcomeMessage = () => {
  const { user } = useContext(UserContext);
  // const [visible, setVisible] = useState(true);

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
