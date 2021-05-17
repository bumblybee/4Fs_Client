import React from "react";
import TableComponent from "../../table/TableComponent";
import SystemTableHeader from "./SystemTableHeader";

import useCRUD from "../../../hooks/useCRUD";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getCurrentSystem,
  mutateSystem,
  deleteSystem,
  getCurrentWeek,
  startWeek,
  deleteCurrentWeek,
} from "../../../api/focus/systemApi";

const CurrentSystemWeek = () => {
  const [currSystem, handleSave, handleDelete] = useCRUD(
    getCurrentSystem,
    mutateSystem,
    deleteSystem
  );

  const [currWeek, handleStartCurrWeek, handleDeleteCurrWeek] = useCRUD(
    getCurrentWeek,
    startWeek,
    deleteCurrentWeek
  );

  // Returning curr week object as array so fits current logic in useCRUD
  const currWeekObject = currWeek.length && currWeek[0];

  const columns = [
    {
      label: "Practice",
      key: "practice",
      width: 3,
    },
    {
      label: "Goal",
      key: "goal",
      width: 1,
    },
    {
      label: "Sun",
      key: "dayOne",
      width: 1,
    },
    {
      label: "Mon",
      key: "dayTwo",
      width: 1,
    },
    {
      label: "Tues",
      key: "dayThree",
      width: 1,
    },
    {
      label: "Wed",
      key: "dayFour",
      width: 1,
    },
    {
      label: "Thur",
      key: "dayFive",
      width: 1,
    },
    {
      label: "Fri",
      key: "daySix",
      width: 1,
    },
    {
      label: "Sat",
      key: "daySeven",
      width: 1,
    },
    {
      label: "Performed",
      key: "performed",
      width: 1,
    },
    {
      label: "",
      key: "delete",
      width: 1,
    },
  ];

  const rows = (additionalRow) => {
    const rowData = currSystem.map((item) => ({
      practice: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.practice,
          accessor: "practice",
          systemWeekId: currWeekObject.id,
          alignment: "left",
          textWeight: "600",
          placeholder: "New practice...",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          id: item.id,
          onSave: handleSave,
          val: item.goal,
          accessor: "goal",
          alignment: "center",
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          val: item.dayOne,
          performed: item.performed,
          accessor: "dayOne",
          alignment: "center",
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          performed: item.performed,
          val: item.dayTwo,
          accessor: "dayTwo",
          alignment: "center",
        }),
      },
      dayThree: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          performed: item.performed,
          val: item.dayThree,
          accessor: "dayThree",
          alignment: "center",
        }),
      },
      dayFour: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          performed: item.performed,
          val: item.dayFour,
          accessor: "dayFour",
          alignment: "center",
        }),
      },
      dayFive: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          performed: item.performed,
          val: item.dayFive,
          accessor: "dayFive",
          alignment: "center",
        }),
      },
      daySix: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          performed: item.performed,
          val: item.daySix,
          accessor: "daySix",
          alignment: "center",
        }),
      },
      daySeven: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          performed: item.performed,
          val: item.daySeven,
          accessor: "daySeven",
          alignment: "center",
        }),
      },
      performed: {
        cellComponent: generateCellComponent("static", {
          id: item.id,
          onSave: handleSave,
          val: item.performed,
          condition: item.performed >= item.goal,
          className: "system-performed",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("delete", {
          id: item.id,
          onDelete: handleDelete,
          alignment: "center",
        }),
      },
    }));

    return [...rowData, additionalRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      practice: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          accessor: "practice",
          systemWeekId: currWeekObject.id,
          alignment: "left",
          placeholder: currWeekObject.startDate
            ? "New practice..."
            : "Choose a start date to begin week...",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          onSave: handleSave,
          accessor: "goal",
          alignment: "center",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayOne",
          alignment: "center",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayTwo",
          alignment: "center",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      dayThree: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayThree",
          alignment: "center",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      dayFour: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayFour",
          alignment: "center",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      dayFive: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayFive",
          alignment: "center",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      daySix: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "daySix",
          alignment: "center",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      daySeven: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "daySeven",
          alignment: "center",
          disabled: currWeekObject.startDate ? false : true,
        }),
      },
      performed: {
        cellComponent: generateCellComponent("", {
          onSave: handleSave,
          accessor: "performed",
          alignment: "right",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("", {
          alignment: "right",
        }),
      },
    };
    return emptyRow;
  };

  return (
    rows && (
      <TableComponent
        columns={columns}
        rows={rows(addEmptyRow())}
        color="purple"
        aligntext="left"
        striped
        compact
        descriptionheader={
          <SystemTableHeader
            currWeek={currWeekObject}
            handleStartCurrWeek={handleStartCurrWeek}
            handleDeleteCurrWeek={handleDeleteCurrWeek}
          />
        }
      />
    )
  );
};

export default CurrentSystemWeek;
