import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";

import HabitsTableHeader from "./HabitsTableHeader";
import TableComponent from "../../table/TableComponent";

const Rewards = ({ habits, handleSave, handleDelete }) => {
  const columns = [
    {
      label: "Reward",
      key: "reward",
    },
  ];

  const rows = (emptyRow) => {
    const rowData = habits.map((item) => ({
      reward: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.reward,
          accessor: "reward",
          alignment: "center",
        }),
      },
    }));

    return [...rowData, emptyRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      reward: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          onDelete: handleDelete,
          placeholder: "New reward...",
          accessor: "reward",
          alignment: "center",
          aligntext: "center",
        }),
      },
    };
    return emptyRow;
  };

  return (
    rows && (
      <div>
        <TableComponent
          rows={rows(addEmptyRow())}
          columns={columns}
          color="brown"
          aligntext="center"
          celled
        />
      </div>
    )
  );
};

export default Rewards;
