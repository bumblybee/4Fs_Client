import React from "react";
import TableComponent from "../table/TableComponent";
import SectionHeader from "../layout/SectionHeader";
import Fasting from "./Fasting";
import generateCellComponent from "../../utils/generateCellComponent";

const FastingWindow = () => {
  const columns = [
    {
      label: "Fasting Window",
      key: "window",
    },
  ];

  const rows = () => {
    const rowData = {
      window: {
        cellComponent: generateCellComponent("", {
          component: <Fasting />,
        }),
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
        color=""
        aligntext="center"
        fullheighttable
        fullheighttd
      />
    </div>
  );
};

export default FastingWindow;
