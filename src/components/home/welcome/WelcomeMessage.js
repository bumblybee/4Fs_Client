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
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores similique laboriosam porro nobis expedita blanditiis error aliquam beatae minus perferendis, sapiente aperiam hic in iusto ex magni? Veritatis architecto, alias asperiores quis incidunt pariatur reprehenderit explicabo quas at tempore quae nesciunt obcaecati, numquam nemo neque. Velit tenetur nisi expedita dignissimos?error aliquam beatae minus perferendis, sapiente aperiam hic "
      ></StyledWelcomeMessage>
    )
  );
};

export default WelcomeMessage;
