import React from "react";
import useCRUD from "../../../hooks/useCRUD";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getSystem,
  mutateSystem,
  deleteSystem,
} from "../../../api/focus/systemApi";
import TableComponent from "../../table/TableComponent";
import SectionHeader from "../../layout/SectionHeader";

// TODO: Checkbox and number cells update db
const System = () => {
  const [system, handleSave, handleDelete] = useCRUD(
    getSystem,
    mutateSystem,
    deleteSystem
  );

  const columns = [
    {
      label: "Practice",
      key: "practice",
      // width: "3",
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
    {
      label: "Delete",
      key: "delete",
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
        cellComponent: generateCellComponent("", {
          id: item.id,
          onSave: handleSave,
          val: item.performed,
          accessor: "performed",
          alignment: "right",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("delete", {
          id: item.id,
          onDelete: handleDelete,
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
      delete: {
        cellComponent: generateCellComponent("delete", {
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
            <div style={{ marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "85%",
                  margin: "0 auto 1rem",
                }}
              >
                Input your new practice and define a goal for the amount of
                times you wish to complete it per week. Check off each day you
                perform the practice.
              </div>
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
