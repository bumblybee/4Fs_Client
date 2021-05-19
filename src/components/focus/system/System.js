import React from "react";
import CurrentPractices from "./current/CurrentPractices";
import PriorPractices from "./prior/PriorPractices";

import SectionHeader from "../../layout/SectionHeader";

// TODO: Break out two table components, one for progress and one for curr week

// TODO: Handle updating rowData when week deleted

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
      {/* <PriorPractices /> */}
    </div>
  );
};

export default System;
