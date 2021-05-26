import React from "react";
import HabitsTable from "./HabitsTable";
import Rewards from "./Rewards";
import SectionHeader from "../../layout/SectionHeader";
import { StyledHabitsTableContainer } from "./StyledHabits";
import { Segment, Button, Icon } from "semantic-ui-react";
import { StyledButton } from "./StyledHabits";

const Habits = () => {
  return (
    <>
      <SectionHeader
        title="Habit Creator"
        subtitle="Purpose: To create satisfaction doing your new habit."
        component={
          <StyledButton className="ui button basic violet">
            <Icon name="google drive" />
            Google Sheets
          </StyledButton>
        }
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
