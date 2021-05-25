import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";

import HabitsTableHeader from "./HabitsTableHeader";
import TableComponent from "../../table/TableComponent";

const Goals = ({ habits, handleSave, handleDelete }) => {
  const columns = [{ label: "Goal", key: "habitGoal" }];

  const rows = (emptyRow) => {
    const rowData = habits.map((item) => ({
      habitGoal: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          onDelete: handleDelete,
          val: item.habitGoal,
          accessor: "habitGoal",
          alignment: "center",
        }),
      },
    }));

    return [...rowData, emptyRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      habitGoal: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          placeholder: "New goal...",
          alignment: "center",
          aligntext: "center",
          accessor: "habitGoal",
        }),
      },
    };
    return emptyRow;
  };

  return (
    rows && (
      <div>
        <TableComponent
          descriptionheader={<HabitsTableHeader />}
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

export default Goals;
