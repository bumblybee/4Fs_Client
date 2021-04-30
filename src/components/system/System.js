import React from "react";
import useCRUD from "../../hooks/useCRUD";
import generateCellComponent from "../../utils/generateCellComponent";
import { getSystem, mutateSystem } from "../../api/focus/system";
import TableComponent from "../table/TableComponent";

const System = () => {
  const [system, handleSave] = useCRUD(getSystem, mutateSystem);

  const columns = [
    {
      label: "Practice",
      key: "practice",
    },
    {
      label: "Goal",
      key: "goal",
    },
    {
      label: "Sun",
      key: "dayOne",
    },
    {
      label: "Mon",
      key: "dayTwo",
    },
    {
      label: "Tues",
      key: "dayThree",
    },
    {
      label: "Wed",
      key: "dayFour",
    },
    {
      label: "Thur",
      key: "dayFive",
    },
    {
      label: "Fri",
      key: "daySix",
    },
    {
      label: "Sat",
      key: "daySeven",
    },
    {
      label: "Performed",
      key: "performed",
    },
  ];

  const rows = (additionalRow) => {
    const rowData = system.map((item) => ({
      practice: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.practice,
          accessor: "practice",
          alignment: "center",
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
          accessor: "dayOne",
          alignment: "center",
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          val: item.dayTwo,
          accessor: "dayTwo",
          alignment: "center",
        }),
      },
      dayThree: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          val: item.dayThree,
          accessor: "dayThree",
          alignment: "center",
        }),
      },
      dayFour: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          val: item.dayFour,
          accessor: "dayFour",
          alignment: "center",
        }),
      },
      dayFive: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          val: item.dayFive,
          accessor: "dayFive",
          alignment: "center",
        }),
      },
      daySix: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          val: item.daySix,
          accessor: "daySix",
          alignment: "center",
        }),
      },
      daySeven: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSave,
          val: item.dayOne,
          accessor: "daySeven",
          alignment: "center",
        }),
      },
      performed: {
        cellComponent: generateCellComponent("number", {
          id: item.id,
          onSave: handleSave,
          val: item.performed,
          accessor: "performed",
          alignment: "center",
        }),
      },
    }));

    return [...rowData];
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Master your System</h1>
      <TableComponent
        columns={columns}
        rows={rows()}
        color="purple"
        aligntext="left"
        striped
      />
    </div>
  );
};

export default System;
