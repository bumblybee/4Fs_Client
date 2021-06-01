import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getHabits,
  mutateHabit,
  deleteHabit,
} from "../../../api/focus/habitsApi";
import useCRUD from "../../../hooks/useCRUD";
import { rewards } from "../../../utils/rewards";
import TableComponent from "../../table/TableComponent";

const Rewards = () => {
  const columns = [
    {
      label: "Rewards to Consider",
      key: "reward",
    },
  ];

  const rows = () => {
    const rowData = rewards.map((item) => ({
      reward: {
        cellComponent: generateCellComponent("", {
          val: item,
        }),
      },
    }));

    return rowData;
  };

  return (
    rows && (
      <TableComponent
        rows={rows()}
        columns={columns}
        color="#FBBD08"
        aligntext="center"
        height="30rem"
      />
    )
  );
};

export default Rewards;
