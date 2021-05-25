import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getHabits,
  mutateHabit,
  deleteHabit,
} from "../../../api/focus/habitsApi";
import useCRUD from "../../../hooks/useCRUD";

import TableComponent from "../../table/TableComponent";

const Rewards = () => {
  const [habits, handleSave, handleDelete] = useCRUD(
    getHabits,
    mutateHabit,
    deleteHabit
  );

  const columns = [
    {
      label: "Rewards to Consider",
      key: "reward",
    },
  ];

  const rows = () => {
    const rowData = habits.map((item) => ({
      reward: {
        cellComponent: generateCellComponent("", {
          // id: item.id,
          // onSave: handleSave,
          // onDelete: handleDelete,
          // val: item.reward,
          // accessor: "reward",
          // alignment: "center",
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
        color="orange"
        aligntext="center"
        celled
      />
    )
  );
};

export default Rewards;
