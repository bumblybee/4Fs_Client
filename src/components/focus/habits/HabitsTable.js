import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getHabits,
  mutateHabit,
  deleteHabit,
} from "../../../api/focus/habitsApi";
import useCRUD from "../../../hooks/useCRUD";
import HabitsTableHeader from "./HabitsTableHeader";
import TableComponent from "../../table/TableComponent";

// TODO: Add example row

const HabitsTable = () => {
  const [habits, handleSave, handleDelete] = useCRUD(
    getHabits,
    mutateHabit,
    deleteHabit
  );
  const columns = [
    { label: "Habit Goal", key: "habitGoal", width: 6 },
    {
      label: "Reward",
      key: "reward",
      width: 6,
    },
  ];

  const rows = (exampleRow, emptyRow) => {
    const rowData = habits.map((item) => ({
      habitGoal: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          onDelete: handleDelete,
          val: item.habitGoal,
          accessor: "habitGoal",
          alignment: "center",
          aligntext: "center",
        }),
      },
      reward: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          onDelete: handleDelete,
          val: item.reward,
          accessor: "reward",
          alignment: "center",
          aligntext: "center",
        }),
      },
    }));

    return [exampleRow, ...rowData, emptyRow];
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
      reward: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          placeholder: "New reward...",
          accessor: "reward",
          alignment: "center",
          aligntext: "center",
        }),
      },
    };
    return emptyRow;
  };

  const addExampleRow = () => {
    const exampleRow = {
      habitGoal: {
        cellComponent: generateCellComponent("example", {
          val: "Walk five times this week",
          color: "#33333388",
        }),
      },
      reward: {
        cellComponent: generateCellComponent("example", {
          val: "Take a bubble bath",
          color: "#33333388",
        }),
      },
    };

    return exampleRow;
  };

  return (
    rows && (
      <TableComponent
        descriptionheader={<HabitsTableHeader />}
        descriptionHeaderHeight="90px"
        rows={rows(addExampleRow(), addEmptyRow())}
        columns={columns}
        color="#6435C9"
        aligntext="center"
        celled
        example
        compact
      />
    )
  );
};

export default HabitsTable;