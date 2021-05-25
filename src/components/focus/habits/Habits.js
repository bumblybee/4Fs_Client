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
      <SectionHeader title="Habit Creator" subtitle="" />

      <StyledHabitsTableContainer>
        <Goals />
        <Rewards />
      </StyledHabitsTableContainer>
    </div>
  );
};

export default Habits;
