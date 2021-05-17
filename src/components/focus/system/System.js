import React, { useEffect, useState } from "react";
import moment from "moment";

import useCRUD from "../../../hooks/useCRUD";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getSystem,
  mutateSystem,
  deleteSystem,
  getCurrentWeek,
  startWeek,
} from "../../../api/focus/systemApi";

import TableComponent from "../../table/TableComponent";
import SectionHeader from "../../layout/SectionHeader";
import SystemTableHeader from "../../focus/system/SystemTableHeader";

// TODO: Break out two table components, one for progress and one for curr week - logic for separating current week from prev - don't display empty row until current start date set

// TODO: Format startDate and endDate so displays right in header

const System = () => {
  const [system, handleSave, handleDelete] = useCRUD(
    getSystem,
    mutateSystem,
    deleteSystem
  );

  const [currWeek, handleStartCurrWeek] = useCRUD(getCurrentWeek, startWeek);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (currWeek) {
      setStartDate(moment(currWeek.startDate).format("MM/DD/YYYY"));
      setEndDate(moment(currWeek.endDate).format("MM/DD/YYYY"));
    }
  }, [currWeek]);

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
          alignment: "left",
          placeholder: "New practice...",
          disabled: startDate ? false : true,
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          onSave: handleSave,
          accessor: "goal",
          alignment: "center",
          disabled: startDate ? false : true,
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayOne",
          alignment: "center",
          disabled: startDate ? false : true,
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayTwo",
          alignment: "center",
          disabled: startDate ? false : true,
        }),
      },
      dayThree: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayThree",
          alignment: "center",
          disabled: startDate ? false : true,
        }),
      },
      dayFour: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayFour",
          alignment: "center",
          disabled: startDate ? false : true,
        }),
      },
      dayFive: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "dayFive",
          alignment: "center",
          disabled: startDate ? false : true,
        }),
      },
      daySix: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "daySix",
          alignment: "center",
          disabled: startDate ? false : true,
        }),
      },
      daySeven: {
        cellComponent: generateCellComponent("check", {
          onSave: handleSave,
          accessor: "daySeven",
          alignment: "center",
          disabled: startDate ? false : true,
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
          compact
          descriptionheader={
            <SystemTableHeader
              startDate={startDate}
              endDate={endDate}
              handleStartCurrWeek={handleStartCurrWeek}
            />
          }
        />
      </div>
    )
  );
};

export default System;
