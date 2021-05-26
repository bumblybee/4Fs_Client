import React from "react";
import HabitsTable from "./HabitsTable";
import Rewards from "./Rewards";
import SectionHeader from "../../layout/SectionHeader";
import { StyledHabitsTableContainer } from "./StyledHabits";
import { Segment } from "semantic-ui-react";
const Habits = () => {
  return (
    <>
      <SectionHeader
        title="Habit Creator"
        subtitle="Purpose: To create satisfaction doing your new habit. "
      />
      {/* <Segment color="olive" inverted></Segment> */}

      <StyledHabitsTableContainer>
        <div></div>
        <HabitsTable />
        <Rewards />
      </StyledHabitsTableContainer>
    </>
  );
};

export default Habits;
