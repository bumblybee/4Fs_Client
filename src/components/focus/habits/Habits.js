import React from "react";
import Goals from "./Goals";
import Rewards from "./Rewards";
import SectionHeader from "../../layout/SectionHeader";
import {
  getHabits,
  mutateHabit,
  deleteHabit,
} from "../../../api/focus/habitsApi";
import useCRUD from "../../../hooks/useCRUD";
import { StyledHabitsTableContainer } from "./StyledHabits";

const Habits = () => {
  const [habits, handleSave, handleDelete] = useCRUD(
    getHabits,
    mutateHabit,
    deleteHabit
  );
  return (
    <div>
      <SectionHeader
        title="Habit Creator"
        subtitle="Purpose: To create satisfaction doing your new habit."
      />
      <StyledHabitsTableContainer>
        <Goals
          habits={habits}
          mutateHabit={mutateHabit}
          deleteHabit={deleteHabit}
        />
        <Rewards
          habits={habits}
          mutateHabit={mutateHabit}
          deleteHabit={deleteHabit}
        />
      </StyledHabitsTableContainer>
    </div>
  );
};

export default Habits;
