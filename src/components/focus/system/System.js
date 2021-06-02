import React from "react";
import useCRUD from "../../../hooks/useCRUD";
import { getShared, mutateShared } from "../../../api/share/shareApi";
import ShareToggle from "../../layout/share/ShareToggle";
import Practices from "./current/Practices";
import Progress from "./past/Progress";
import SectionHeader from "../../layout/SectionHeader";

const System = () => {
  const [shared, handleSaveShared] = useCRUD(getShared, mutateShared);

  return (
    <div>
      <SectionHeader
        title="Master your System"
        subtext="Purpose: To begin doing new practices that will help you with your
          health and wellbeing."
      />
      <ShareToggle
        shared={shared[0]}
        handleSave={handleSaveShared}
        field="system"
      />
      <div style={{ marginBottom: "1rem" }}>
        <Practices />
      </div>
      <Progress />
    </div>
  );
};

export default System;
