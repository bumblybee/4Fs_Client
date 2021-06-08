import React from "react";
import {
  StyledHabitsHeaderWrapper,
  StyledHabitsHeader,
} from "./StyledHabitsHeader";
import { Popup, Icon } from "semantic-ui-react";

const HabitsTableHeader = () => {
  const tooltipContent = () => {
    return (
      <a href="#rewards">Use the rewards list provided if you need ideas.</a>
    );
  };

  return (
    <StyledHabitsHeaderWrapper>
      <StyledHabitsHeader>
        <div>Step 5: Reward Yourself</div>
        Action: Think of a reward you can give yourself for doing the new habit.
        Define what you have to do in order to earn the reward.
      </StyledHabitsHeader>
      <div>
        <Popup
          size="small"
          offset={[10, -2]}
          position="top right"
          content={tooltipContent}
          trigger={<Icon name="question circle outline" />}
        />
      </div>
    </StyledHabitsHeaderWrapper>
  );
};

export default HabitsTableHeader;
