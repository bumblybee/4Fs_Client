import React from "react";
import TableComponent from "../table/TableComponent";
import SectionHeader from "../layout/SectionHeader";
import FastingWindow from "./FastingWindow";
import generateCellComponent from "../../utils/generateCellComponent";

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
        subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio?"
      />

      <TableComponent
        rows={rows()}
        columns={columns}
        color="grey"
        aligntext="center"
        // fullheighttable
        fullheighttd
      />
    </div>
  );
};

export default Fasting;
