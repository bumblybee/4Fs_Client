import React from "react";
import HabitsTable from "./HabitsTable";
import Rewards from "./Rewards";
import SectionHeader from "../../layout/SectionHeader";
import { StyledHabitsTableContainer } from "./StyledHabits";

const Habits = () => {
  return (
    <div>
      <SectionHeader title="Habit Creator" subtitle="" />

      <StyledHabitsTableContainer>
        <HabitsTable />
        <Rewards />
      </StyledHabitsTableContainer>
    </div>
  );
};

export default Habits;
