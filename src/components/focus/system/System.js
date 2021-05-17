import React, { useEffect, useState } from "react";
import CurrentSystemWeek from "./CurrentSystemWeek";

import TableComponent from "../../table/TableComponent";
import SectionHeader from "../../layout/SectionHeader";
import SystemTableHeader from "../../focus/system/SystemTableHeader";

// TODO: Break out two table components, one for progress and one for curr week - logic for separating current week from prev - don't display empty row until current start date set

// TODO: Handle updating rowData when week deleted

const System = () => {
  return (
    <div>
      <SectionHeader
        title="Master your System"
        subtitle="Purpose: To begin doing new practices that will help you with your
          health and wellbeing."
      />
      <CurrentSystemWeek />
    </div>
  );
};

export default System;
