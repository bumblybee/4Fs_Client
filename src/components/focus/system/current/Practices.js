import React, { useEffect, useState, useContext } from "react";
import moment from "moment";
import { NotificationContext } from "../../../../context/notification/NotificationContext";
import TableComponent from "../../../table/TableComponent";
import SystemTableHeader from "../header/SystemTableHeader";
import { StyledHeader } from "./StyledPractices";
import generateCellComponent from "../../../../utils/generateCellComponent";
import {
  getCurrentPractices,
  getPracticeStore,
  mutateCurrPractice,
  mutateStoredPractice,
  deleteCurrPractice,
  deleteStoredPractice,
  getCurrentWeek,
} from "../../../../api/focus/practicesApi";

// TODO: Limit height of table
const Practices = () => {
  const { setNotificationMessage, clearNotificationMessage } =
    useContext(NotificationContext);
  const [storedPractices, setStoredPractices] = useState([]);
  const [currPractices, setCurrPractices] = useState([]);
  const [currWeek, setCurrWeek] = useState({
    id: null,
    startDate: null,
    endDate: null,
  });

  const getCurrWeek = async () => {
    const week = await getCurrentWeek();
    week && week.data && setCurrWeek(week.data);
  };

  const handleSaveCurrPractice = async (data, id) => {
    if (data) {
      const res = await mutateCurrPractice(data, id);

      if (res.error) {
        setNotificationMessage(res.error, "error", true);
        return;
      }

      clearNotificationMessage();

      setCurrPractices([...res.data]);
    }
  };

  const handleDeleteCurrPractice = async (id) => {
    const res = await deleteCurrPractice(id);

    setCurrPractices([...res.data]);
  };

  const getCurrPractices = async () => {
    const practices = await getCurrentPractices();

    practices && practices.data && setCurrPractices([...practices.data]);
  };

  const handleSaveStoredPractice = async (data, id) => {
    if (data) {
      const res = await mutateStoredPractice(data, id);
      console.log(data);
      if (res.error) {
        setNotificationMessage(res.error, "error", true);
        return;
      }

      clearNotificationMessage();

      setStoredPractices([...res.data]);
    }
  };

  const handleDeleteStoredPractice = async (id) => {
    const res = await deleteStoredPractice(id);

    setStoredPractices([...res.data]);
  };

  const getStoredPractices = async () => {
    const storedPractices = await getPracticeStore();

    storedPractices &&
      storedPractices.data &&
      setStoredPractices([...storedPractices.data]);
  };

  useEffect(() => {
    getStoredPractices();
    getCurrPractices();
    getCurrWeek();
  }, []);

  const renderDayOfWeek = (daysFromStart) => {
    const startDay = currWeek && currWeek.startDate;

    if (startDay) {
      return moment(startDay).add(daysFromStart, "days").format("ddd");
    } else {
      // If no startDay, return undefined which renders default Sun-Sat labels
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
    const storedRowData = storedPractices.map((item) => ({
      practice: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          val: item.practice,
          accessor: "practice",
          onSave: handleSaveStoredPractice,
          // onDelete: handleDeleteStoredPractice,
          aligntext: "left",
          alignment: "flex-start",
          textWeight: "600",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          disabled: true,
          alignment: "center",
          val: "",
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("", {
          val: false,
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      dayThree: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      dayFour: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      dayFive: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      daySix: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      daySeven: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      performed: {
        cellComponent: generateCellComponent("static", {
          className: "system-performed",
          val: "",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("delete", {
          id: item.id,
          onDelete: handleDeleteStoredPractice,
          alignment: "center",
        }),
      },
    }));

    const currentRowData = currPractices.map((item) => ({
      practice: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          val: item.practice,
          accessor: "practice",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "left",
          textWeight: "600",
          placeholder: "New practice...",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          val: item.goal,
          accessor: "goal",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "center",
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          val: item.dayOne,
          performed: item.performed,
          accessor: "dayOne",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "center",
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          performed: item.performed,
          val: item.dayTwo,
          accessor: "dayTwo",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "center",
        }),
      },
      dayThree: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          performed: item.performed,
          val: item.dayThree,
          accessor: "dayThree",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "center",
        }),
      },
      dayFour: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          performed: item.performed,
          val: item.dayFour,
          accessor: "dayFour",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "center",
        }),
      },
      dayFive: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          performed: item.performed,
          val: item.dayFive,
          accessor: "dayFive",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "center",
        }),
      },
      daySix: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          performed: item.performed,
          val: item.daySix,
          accessor: "daySix",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "center",
        }),
      },
      daySeven: {
        cellComponent: generateCellComponent("check", {
          id: item.id,
          onSave: handleSaveCurrPractice,
          performed: item.performed,
          val: item.daySeven,
          accessor: "daySeven",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "center",
        }),
      },
      performed: {
        cellComponent: generateCellComponent("static", {
          val: item.performed,
          condition: item.performed >= item.goal && item.performed !== 0,
          color: item.performed >= item.goal ? "green" : "",
          className: "system-performed",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("delete", {
          id: item.id,
          onDelete: handleDeleteCurrPractice,
          alignment: "center",
        }),
      },
    }));

    // If we have a start date, render current practices and empty row, else render stored practices
    if (currWeek && currWeek.startDate)
      return [exampleRow, ...currentRowData, emptyRow];
    else return [exampleRow, ...storedRowData, emptyRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      practice: {
        cellComponent: generateCellComponent("empty", {
          onSave: currWeek.startDate
            ? handleSaveCurrPractice
            : handleSaveStoredPractice,
          accessor: "practice",
          foreignAccessor: "practiceWeekId",
          foreignId: currWeek.id,
          alignment: "left",
          placeholder: "New practice...",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("number", {
          disabled: true,
          alignment: "center",
          val: "",
        }),
      },
      dayOne: {
        cellComponent: generateCellComponent("", {
          val: false,
        }),
      },
      dayTwo: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      dayThree: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      dayFour: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      dayFive: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      daySix: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      daySeven: {
        cellComponent: generateCellComponent("", { val: false }),
      },
      performed: {
        cellComponent: generateCellComponent("static", {
          className: "system-performed",
          val: "",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("", {
          alignment: "center",
        }),
      },
    };
    return emptyRow;
  };

  // TODO: Pass className instead of flex props
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
            currWeek={currWeek}
            setCurrWeek={setCurrWeek}
            setCurrPractices={setCurrPractices}
            getStoredPractices={getStoredPractices}
          />
        }
        descriptionHeaderHeight="125px"
      />
    )
  );
};

export default Practices;
