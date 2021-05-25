import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getHabits,
  mutateHabits,
  deleteHabits,
} from "../../../api/home/milestonesApi";
import useCRUD from "../../../hooks/useCRUD";
import SectionHeader from "../../layout/SectionHeader";
import HabitsTableHeader from "./HabitsTableHeader";
import TableComponent from "../../table/TableComponent";

const Habits = () => {
  const [habits, handleSave, handleDelete] = useCRUD(
    getHabits,
    mutateHabits,
    deleteHabits
  );

  const columns = [
    { label: "Goal", key: "goal" },
    {
      label: "Reward",
      key: "reward",
    },
  ];

  const rows = (emptyRow) => {
    const rowData = habits.map((item) => ({
      goal: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          onDelete: handleDelete,
          val: item.skill,
          val: item.goal,
          alignment: "center",
        }),
      },
      reward: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.skill,
          alignment: "center",
        }),
      },
    }));

    return [...rowData, emptyRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      goal: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          placeholder: "New goal...",

          accessor: "goal",
        }),
      },
      reward: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          placeholder: "New reward...",
          accessor: "reward",
          alignment: "center",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("", {}),
      },
    };
    return emptyRow;
  };

  return (
    rows && (
      <div>
        <SectionHeader
          title="Habit Creator"
          subtitle="Purpose: To create satisfaction doing your new habit."
        />

        <TableComponent
          descriptionheader={<HabitsTableHeader />}
          rows={rows()}
          columns={columns}
          color="orange"
          aligntext="left"
          striped
        />
      </div>
    )
  );
};

export default Habits;
