import React from "react";
import CurrentPractices from "./current/CurrentPractices";
import SectionHeader from "../../layout/SectionHeader";

const System = () => {
  return (
    <div>
      <SectionHeader
        title="Master your System"
        subtitle="Purpose: To begin doing new practices that will help you with your
          health and wellbeing."
      />

      <CurrentPractices />
    </div>
  );
};

export default System;
