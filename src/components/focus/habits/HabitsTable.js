import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getHabits,
  mutateHabit,
  deleteHabit,
} from "../../../api/focus/habitsApi";
import useCRUD from "../../../hooks/useCRUD";
import HabitsTableHeader from "./header/HabitsTableHeader";
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
          onDelete: item.reward === null && handleDelete,
          val: item.habitGoal,
          placeholder: "New goal...",
          accessor: "habitGoal",
          alignment: "center",
          aligntext: "center",
        }),
      },
      reward: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          onDelete: item.habitGoal === null && handleDelete,
          val: item.reward,
          placeholder: "New reward...",
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
          color: "#33333399",
        }),
      },
      reward: {
        cellComponent: generateCellComponent("example", {
          val: "Take a bubble bath",
          color: "#33333399",
        }),
      },
    };

    return exampleRow;
  };

  return (
    rows && (
      <TableComponent
        className="habits"
        descriptionheader={<HabitsTableHeader />}
        descriptionHeaderHeight="115px"
        rows={rows(addExampleRow(), addEmptyRow())}
        columns={columns}
        color="#6435C9"
        aligntext="center"
        // celled
        example
        compact
        maxHeight="35rem"
        mobileHeight="34rem"
      />
    )
  );
};

export default HabitsTable;
