import React from "react";
import HabitsTable from "./HabitsTable";
import Rewards from "./Rewards";
import SectionHeader from "../../layout/SectionHeader";
import { StyledHabitsTableContainer } from "./StyledHabits";
import { Segment } from "semantic-ui-react";
const Habits = () => {
  return (
    <div>
      <SectionHeader title="Habit Creator" subtitle="" />
      {/* <Segment color="violet" inverted></Segment> */}

      <StyledHabitsTableContainer>
        <div></div>
        <HabitsTable />
        <Rewards />
      </StyledHabitsTableContainer>
    </div>
  );
};

export default Habits;
