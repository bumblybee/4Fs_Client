import React from "react";

import CurrentPractices from "./current/CurrentPractices";
import PriorPractices from "./prior/PriorPractices";
import SectionHeader from "../../layout/SectionHeader";

const System = () => {
  return (
    <div>
      <SectionHeader
        title="Master your System"
        subtitle="Purpose: To begin doing new practices that will help you with your
          health and wellbeing."
      />
      <div style={{ marginBottom: "1rem" }}>
        <CurrentPractices />
      </div>
      <PriorPractices />
    </div>
  );
};

export default System;
