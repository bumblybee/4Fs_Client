import React from "react";
import TableComponent from "../table/TableComponent";
import SectionHeader from "../layout/SectionHeader";
import FastingWindow from "./FastingWindow";

const Fasting = () => {
  const columns = [
    {
      label: "Fasting Window",
      key: "window",
    },
  ];

  const rows = () => {
    const rowData = {
      window: {
        cellComponent: <FastingWindow />,
      },
    };

    return [rowData];
  };

  return (
    <div>
      <SectionHeader
        title="Fasting Window"
        subtext="Enter your goal fasting window and the number of hours you fasted today. Click run to see results."
      />

      <TableComponent
        rows={rows()}
        columns={columns}
        color="#1B1C1D"
        aligntext="center"
        height="34rem"
        // inverted
      />
    </div>
  );
};

export default Fasting;
