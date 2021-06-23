import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../context/user/UserContext";
import useCRUD from "../../../hooks/useCRUD";
import { getShared, mutateShared } from "../../../api/share/shareApi";
import ShareToggle from "../../layout/share/ShareToggle";
import HabitsTable from "./HabitsTable";
import Rewards from "./rewards/Rewards";
import SectionHeader from "../../layout/SectionHeader";
import { Icon } from "semantic-ui-react";
import { StyledHabitsTableContainer, StyledButton } from "./StyledHabits";

const Habits = () => {
  const baseSheetsUrl =
    "https://docs.google.com/spreadsheets/d/1lHHdK__W5iB6fHLU_xEVdCveaIsVeKQvGrEuY9YWYtE";
  const [shared, handleSaveShared] = useCRUD(getShared, mutateShared);
  const [userSheetsUrl, setUserSheetsUrl] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    user &&
      user.sheetsURL &&
      setUserSheetsUrl(user.sheetsURL + "#gid=1514598991");
  }, [user]);

  return (
    <>
      <SectionHeader
        title="Habit Creator"
        subtext="Purpose: To create satisfaction doing your new habit."
        component={
          <StyledButton
            as="a"
            href={userSheetsUrl ? userSheetsUrl : baseSheetsUrl}
            target="_blank"
            rel="noopener"
          >
            <Icon name="google drive" />
            Habit Creator Program Sheet
          </StyledButton>
        }
      />
      <ShareToggle
        shared={shared[0]}
        handleSave={handleSaveShared}
        field="habit"
        width="95%"
      />

      <StyledHabitsTableContainer>
        <div></div>

        <HabitsTable />

        <Rewards />
      </StyledHabitsTableContainer>
    </>
  );
};

export default Habits;
