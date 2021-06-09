import React from "react";
import { getShared, mutateShared } from "../../../api/share/shareApi";
import useCRUD from "../../../hooks/useCRUD";
import TableComponent from "../../table/TableComponent";
import ShareToggle from "../../layout/share/ShareToggle";
import SectionHeader from "../../layout/SectionHeader";
import FastingWindow from "./FastingWindow";

const Fasting = () => {
  const [shared, handleSave] = useCRUD(getShared, mutateShared);
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
      <ShareToggle shared={shared[0]} handleSave={handleSave} field="fasting" />
      <TableComponent
        className="fasting"
        rows={rows()}
        columns={columns}
        color="#1B1C1D"
        aligntext="center"
        height="34rem"
        maxHeight="99%"
        mobileHeight="34rem"
      />
    </div>
  );
};

export default Fasting;
