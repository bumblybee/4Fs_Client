import React from "react";

import Practices from "./current/Practices";
import Progress from "./past/Progress";
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
        <Practices />
      </div>
      <Progress />
    </div>
  );
};

export default System;
