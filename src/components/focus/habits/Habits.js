import React from "react";
import Goals from "./Goals";
import Rewards from "./Rewards";
import SectionHeader from "../../layout/SectionHeader";
import HabitsTableHeader from "./HabitsTableHeader";

import { StyledHabitsTableContainer } from "./StyledHabits";
import { Segment } from "semantic-ui-react";

const Habits = () => {
  return (
    <div>
      <SectionHeader
        title="Habit Creator"
        subtitle="Action: Think of a reward you can give yourself for doing the new habit. Define what you have to do in order to earn the reward (ex. If I walk 5 times this week I will take a bubble bath)."
      />

      <StyledHabitsTableContainer>
        <Goals />
        <Rewards />
      </StyledHabitsTableContainer>
    </div>
  );
};

export default Habits;
