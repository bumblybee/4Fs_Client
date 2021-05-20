import React from "react";
import moment from "moment";
import TableComponent from "../../../table/TableComponent";
import SystemTableHeader from "../SystemTableHeader";
import PriorPractices from "../prior/PriorPractices";
import useCRUD from "../../../../hooks/useCRUD";
import { StyledHeader } from "./StyledCurrentPractices";
import generateCellComponent from "../../../../utils/generateCellComponent";
import {
  getCurrentPractices,
  mutatePractice,
  deletePractice,
  getCurrentWeek,
  startWeek,
  deleteCurrentWeek,
} from "../../../../api/focus/practicesApi";

// TODO: Limit height of table
const CurrentPractices = () => {
  const [currPractices, handleSave, handleDelete] = useCRUD(
    getCurrentPractices,
    mutatePractice,
    deletePractice
  );

  const [currWeek, handleStartCurrWeek, handleDeleteCurrWeek] = useCRUD(
    getCurrentWeek,
    startWeek,
    deleteCurrentWeek
  );

  // Returning curr week object as array so fits generic data handling in useCRUD
  const currWeekData = currWeek.length && currWeek[0];

  const renderDayOfWeek = (daysFromStart) => {
    const startDay = currWeekData.startDate;

    if (startDay) {
      return moment(startDay).add(daysFromStart, "days").format("ddd");
    } else {
      // If no startDay, return undefined and render default Sun-Sat labels
      return undefined;
    }
  };

  const columns = [
    {
      label: (
        <StyledHeader>
          Practice <br />
          <p>
            <em>(meditation, diet, reading, fitness, etc.)</em>
          </p>
        </StyledHeader>
      ),
      key: "practice",
      width: 3,
    },
    {
      label: "Goal",
      key: "goal",
      width: 1,
    },
    {
      label: renderDayOfWeek(0) || "Sun",
      key: "dayOne",
      width: 1,
    },
    {
      label: renderDayOfWeek(1) || "Mon",
      key: "dayTwo",
      width: 1,
    },
    {
      label: renderDayOfWeek(2) || "Tues",
      key: "dayThree",
      width: 1,
    },
    {
      label: renderDayOfWeek(3) || "Wed",
      key: "dayFour",
      width: 1,
    },
    {
      label: renderDayOfWeek(4) || "Thur",
      key: "dayFive",
      width: 1,
    },
    {
      label: renderDayOfWeek(5) || "Fri",
      key: "daySix",
      width: 1,
    },
    {
      label: renderDayOfWeek(6) || "Sat",
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

  const rows = (exampleRow, emptyRow) => {
    const rowData = currPractices.map((item) => ({
      practice: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.practice,
          accessor: "practice",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeekData.id,
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
          val: item.performed,
          condition: item.performed >= item.goal,
          color: item.performed >= item.goal ? "green" : "",
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

    // Only render empty row if user has chosen a start date
    if (currWeekData.startDate) return [exampleRow, ...rowData, emptyRow];
    else return [exampleRow, ...rowData];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      practice: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          accessor: "practice",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeekData.id,
          alignment: "left",
          placeholder: currWeekData.startDate
            ? "New practice..."
            : "Choose a start date to begin week...",
          disabled: currWeekData.startDate ? false : true,
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          onSave: handleSave,
          accessor: "goal",
          alignment: "center",
          disabled: currWeekData.startDate ? false : true,
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayOne",
          alignment: "center",
          disabled: currWeekData.startDate ? false : true,
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayTwo",
          alignment: "center",
          disabled: currWeekData.startDate ? false : true,
        }),
      },
      dayThree: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayThree",
          alignment: "center",
          disabled: currWeekData.startDate ? false : true,
        }),
      },
      dayFour: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayFour",
          alignment: "center",
          disabled: currWeekData.startDate ? false : true,
        }),
      },
      dayFive: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayFive",
          alignment: "center",
          disabled: currWeekData.startDate ? false : true,
        }),
      },
      daySix: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "daySix",
          alignment: "center",
          disabled: currWeekData.startDate ? false : true,
        }),
      },
      daySeven: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "daySeven",
          alignment: "center",
          disabled: currWeekData.startDate ? false : true,
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

  const addExampleRow = () => {
    const exampleRow = {
      practice: {
        cellComponent: generateCellComponent("example", {
          val: "Example: Go for a walk",
          alignment: "center",
          justify: "flex-start",
          color: "#33333366",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          val: 3,
          alignment: "center",
          justify: "flex-start",
          disabled: true,
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("check", {
          val: false,
          alignment: "center",
          justify: "flex-start",
          disabled: true,
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("check", {
          val: false,
          alignment: "center",
          justify: "flex-start",
          disabled: true,
        }),
      },
      dayThree: {
        cellComponent: generateCellComponent("check", {
          val: true,
          alignment: "center",
          justify: "flex-start",
          disabled: true,
        }),
      },
      dayFour: {
        cellComponent: generateCellComponent("check", {
          val: false,
          alignment: "center",
          justify: "flex-start",
          disabled: true,
        }),
      },
      dayFive: {
        cellComponent: generateCellComponent("check", {
          val: true,
          alignment: "center",
          justify: "flex-start",
          disabled: true,
        }),
      },
      daySix: {
        cellComponent: generateCellComponent("check", {
          val: true,
          alignment: "center",
          justify: "flex-start",
          disabled: true,
        }),
      },
      daySeven: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          val: false,
          alignment: "center",
          justify: "flex-start",
          disabled: true,
        }),
      },
      performed: {
        cellComponent: generateCellComponent("static", {
          val: 3,
          className: "system-performed-example",
          textweight: 400,
        }),
      },
      delete: {
        cellComponent: generateCellComponent("example", {
          alignment: "right",
        }),
      },
    };

    return exampleRow;
  };

  return (
    rows && (
      <TableComponent
        columns={columns}
        rows={rows(addExampleRow(), addEmptyRow())}
        color="purple"
        aligntext="left"
        striped
        compact
        example
        descriptionheader={
          <SystemTableHeader
            currWeek={currWeekData}
            handleSave={handleSave}
            handleStartCurrWeek={handleStartCurrWeek}
            handleDeleteCurrWeek={handleDeleteCurrWeek}
          />
        }
        footer={<PriorPractices />}
      />
    )
  );
};

export default CurrentPractices;
