import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getHabits,
  mutateHabit,
  deleteHabit,
} from "../../../api/focus/habitsApi";
import useCRUD from "../../../hooks/useCRUD";

import TableComponent from "../../table/TableComponent";

const Goals = () => {
  const [habits, handleSave, handleDelete] = useCRUD(
    getHabits,
    mutateHabit,
    deleteHabit
  );
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
      <TableComponent
        // descriptionheader={<HabitsTableHeader />}
        rows={rows(addEmptyRow())}
        columns={columns}
        color="green"
        aligntext="center"
        celled
      />
    )
  );
};

export default Goals;
