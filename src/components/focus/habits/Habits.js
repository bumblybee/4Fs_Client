import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../context/user/UserContext";
import HabitsTable from "./HabitsTable";
import Rewards from "./Rewards";
import SectionHeader from "../../layout/SectionHeader";

import { Segment, Button, Icon } from "semantic-ui-react";
import {
  StyledHabitsTableContainer,
  StyledButton,
  StyledLink,
} from "./StyledHabits";

const Habits = () => {
  const [url, setUrl] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    user && user.sheetsURL && setUrl(user.sheetsURL);
  });

  return (
    <>
      <SectionHeader
        title="Habit Creator"
        subtitle="Step 5: Reward Yourself"
        subtext="Purpose: To create satisfaction doing your new habit."
        component={
          <StyledLink to="/profile">
            <StyledButton>
              <Icon name="google drive" />
              {url ? "Program Sheet" : "Add Google Sheets Link in Profile"}
            </StyledButton>
          </StyledLink>
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