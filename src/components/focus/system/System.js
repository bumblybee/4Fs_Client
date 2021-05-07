import React from "react";
import useCRUD from "../../../hooks/useCRUD";
import generateCellComponent from "../../../utils/generateCellComponent";
import { getSystem, mutateSystem } from "../../../api/focus/systemApi";
import TableComponent from "../../table/TableComponent";
import SectionHeader from "../../layout/SectionHeader";

// TODO: Checkbox and number cells update db
const System = () => {
  const [system, handleSave] = useCRUD(getSystem, mutateSystem);

  const columns = [
    {
      label: "Practice",
      key: "practice",
      // width: "4",
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
          val: item.daySeven,
          accessor: "daySeven",
          alignment: "center",
        }),
      },
      performed: {
        cellComponent: generateCellComponent("", {
          id: item.id,
          onSave: handleSave,
          val: item.performed,
          accessor: "performed",
          alignment: "right",
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
          alignment: "center",
          placeholder: "New practice...",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          onSave: handleSave,
          accessor: "goal",
          alignment: "center",
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayOne",
          alignment: "center",
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayTwo",
          alignment: "center",
        }),
      },
      dayThree: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayThree",
          alignment: "center",
        }),
      },
      dayFour: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayFour",
          alignment: "center",
        }),
      },
      dayFive: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayFive",
          alignment: "center",
        }),
      },
      daySix: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "daySix",
          alignment: "center",
        }),
      },
      daySeven: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "daySeven",
          alignment: "center",
        }),
      },
      performed: {
        cellComponent: generateCellComponent("", {
          onSave: handleSave,
          accessor: "performed",
          alignment: "right",
        }),
      },
    };
    return emptyRow;
  };

  return (
    rows && (
      <div>
        <SectionHeader
          title="Master your System"
          subtitle="Purpose: To begin doing new practices that will help you with your
          health and wellbeing."
        />
        <TableComponent
          columns={columns}
          rows={rows(addEmptyRow())}
          color="purple"
          aligntext="left"
          striped
          descriptionheader={
            <div>
              <label>Start Date:</label> {""}
              {generateCellComponent("date", {
                onSave: handleSave,
                accessor: "startDate",
                alignment: "center",
                placeholder: "Start date",
              })}
            </div>
          }
        />
      </div>
    )
  );
};

export default System;
