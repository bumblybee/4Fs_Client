import React from "react";
import useCRUD from "../../../hooks/useCRUD";
import { getShared, mutateShared } from "../../../api/share/shareApi";
import ShareToggle from "../../layout/share/ShareToggle";
import Practices from "./current/Practices";
import Progress from "./past/Progress";
import SectionHeader from "../../layout/SectionHeader";
import { StyledSystemWrapper } from "./StyledSystem";

const System = () => {
  const [shared, handleSaveShared] = useCRUD(getShared, mutateShared);

  return (
    <div>
      <SectionHeader
        title="Master Your System"
        subtext="Purpose: To begin doing new practices that will help you with your
          health and wellbeing."
      />
      <ShareToggle
        shared={shared[0]}
        handleSave={handleSaveShared}
        field="system"
      />
      <StyledSystemWrapper>
        <Practices />
      </StyledSystemWrapper>
      <Progress />
    </div>
  );
};

export default System;
