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
import MilestonesTableHeader from "../../home/milestones/MilestonesTableHeader";

// TODO: Break out two table components, one for progress and one for curr week - logic for separating current week from prev - don't display empty row until current start date set
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
    const rowData = system.map((item) => ({
      practice: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.practice,
          accessor: "practice",
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
        cellComponent: generateCellComponent("", {
          id: item.id,
          onSave: handleSave,
          val: item.performed,
          accessor: "performed",
          alignment: "center",
          style: {
            color: item.performed >= item.goal ? "#21ba45" : "",
            fontWeight: "bold",
            fontSize: "1.15rem",
            width: "max-content",
            margin: "auto 0 auto 35%",
          },
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
          alignment: "left",
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
        cellComponent: generateCellComponent("", {
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
            <MilestonesTableHeader
              component={
                <div>
                  <label>Start Date:</label>
                  {generateCellComponent("date", {
                    onSave: handleSave,
                    accessor: "startDate",
                    alignment: "center",
                    placeholder: "Start date",
                    width: "144px",
                  })}
                </div>
              }
            />
          }
        />
      </div>
    )
  );
};

export default System;
