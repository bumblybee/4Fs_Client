import React from "react";

import CurrentPractices from "./current/CurrentPractices";
import Progress from "./progress/Progress";
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
      <Progress />
    </div>
  );
};

export default System;
