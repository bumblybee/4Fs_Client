import React from "react";
import {
  StyledHabitsHeaderWrapper,
  StyledHabitsHeader,
} from "./StyledHabitsHeader";
import { Popup, Icon } from "semantic-ui-react";

const HabitsTableHeader = () => {
  return (
    <StyledHabitsHeaderWrapper>
      <StyledHabitsHeader>
        <div>Step 5: Reward Yourself</div>
        Action: Think of a reward you can give yourself for doing the new habit.
        Define what you have to do in order to earn the reward.
      </StyledHabitsHeader>
      <div>
        <Popup
          position="top center"
          content="Use the reward list provided if you need ideas."
          trigger={<Icon name="question circle outline" />}
        />
      </div>
    </StyledHabitsHeaderWrapper>
  );
};

export default HabitsTableHeader;
