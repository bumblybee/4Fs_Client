import React, { useState, useContext, useEffect } from "react";
import moment from "moment";
import useCRUD from "../../../hooks/useCRUD";
import { NotificationContext } from "../../../context/notification/NotificationContext";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getSleep,
  mutateSleep,
  deleteSleep,
} from "../../../api/focus/sleepApi";
import TableComponent from "../../table/TableComponent";
import SectionHeader from "../../layout/SectionHeader";
import SleepTableHeader from "../../focus/sleep/SleepTableHeader";

const Sleep = () => {
  const { setNotificationMessage, clearNotificationMessage } =
    useContext(NotificationContext);
  const [sleep, setSleep] = useState([]);
  const [newRow, setNewRow] = useState({});

  const getSleepData = async () => {
    const res = await getSleep();
    setSleep([...res.data]);
  };

  const handleSave = async (data, id, clearState) => {
    if (data) {
      const res = await mutateSleep(data, id);

      if (res.error) {
        setNotificationMessage(res.error, "error", true);
        return;
      }

      clearNotificationMessage();
      setSleep([...res.data]);
      clearState && setNewRow({});
    }
  };

  const handleDelete = async (id) => {
    const res = await deleteSleep(id);
    setSleep(res.data);
  };

  useEffect(() => {
    getSleepData();
  }, []);

  const columns = [
    {
      label: "Date",
      key: "date",
      width: 1,
      aligntext: "center",
    },
    {
      label: "Went to Bed",
      key: "toBed",
      width: 2,
      aligntext: "center",
    },
    {
      label: "Woke up",
      key: "woke",
      width: 2,
      aligntext: "center",
    },
    {
      label: "Hours Slept",
      key: "hoursSlept",
      width: 2,
      aligntext: "center",
    },
    {
      label: "Comments",
      key: "comments",
      width: 4,
      aligntext: "center",
    },
    {
      label: "",
      key: "delete",
      width: 1,
    },
  ];

  const csvColumns = [
    {
      id: "date",
      displayName: "Date",
    },
    {
      id: "toBed",
      displayName: "Went to Bed",
    },
    {
      id: "woke",
      displayName: "Woke up",
    },
    {
      id: "hoursSlept",
      displayName: "Hours Slept",
    },
    {
      id: "comments",
      displayName: "Comments",
    },
  ];

  const csvRows = sleep.map((item) => {
    // item.hoursSlept = findHoursSlept(item);
    return item;
  });

  const rows = (exampleRow, emptyRow) => {
    const rowData = sleep.map((item) => {
      return {
        date: {
          cellComponent: generateCellComponent("date", {
            id: item.id,
            onSave: handleSave,
            val: item.date,
            accessor: "date",
            placeholder: "mm/dd/yyyy",
            className: "sleep-date-picker",
            alignment: "flex-start",
          }),
        },
        toBed: {
          cellComponent: generateCellComponent("time", {
            id: item.id,
            onSave: handleSave,

            val: item.toBed,
            accessor: "toBed",
            className: "sleep-bed-timepicker",
            alignment: "center",
            item,
          }),
        },
        woke: {
          cellComponent: generateCellComponent("time", {
            id: item.id,
            onSave: handleSave,
            val: item.woke,
            accessor: "woke",
          }),
        },
        hoursSlept: {
          cellComponent: generateCellComponent("static", {
            id: item.id,
            val: moment(item.hoursSlept, "HH:mm:ss").format("HH:mm"),
            alignment: "center",
            className: "sleep-hours-slept",
          }),
        },
        comments: {
          cellComponent: generateCellComponent("editable", {
            id: item.id,
            onSave: handleSave,
            val: item.comments,
            accessor: "comments",
          }),
        },
        delete: {
          cellComponent: generateCellComponent("delete", {
            id: item.id,
            onDelete: handleDelete,
            alignment: "center",
            collapsing: true,
          }),
        },
      };
    });

    return [exampleRow, ...rowData, emptyRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      date: {
        cellComponent: generateCellComponent("date", {
          state: newRow,
          setState: setNewRow,
          accessor: "date",
          alignment: "left",
          className: "sleep-date-picker",
        }),
      },
      toBed: {
        cellComponent: generateCellComponent("time", {
          state: newRow,
          setState: setNewRow,
          accessor: "toBed",
          alignment: "center",
        }),
      },
      woke: {
        cellComponent: generateCellComponent("time", {
          onSave: handleSave,
          state: newRow,
          setState: setNewRow,
          accessor: "woke",
          alignment: "center",
        }),
      },
      hoursSlept: {
        cellComponent: generateCellComponent("", {
          accessor: "hoursSlept",
          alignment: "center",
        }),
      },
      comments: {
        cellComponent: generateCellComponent("", {
          alignment: "left",
          aligntext: "left",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("", {}),
      },
    };
    return emptyRow;
  };
  // TODO: Classname prop and remove styling related props
  const addExampleRow = () => {
    const exampleRow = {
      date: {
        cellComponent: generateCellComponent("example", {
          val: "04/25/2021",
          alignment: "center",
          justify: "center",
        }),
      },
      toBed: {
        cellComponent: generateCellComponent("example", {
          val: "10:00 PM",
          alignment: "center",
          color: "#33333399",
        }),
      },
      woke: {
        cellComponent: generateCellComponent("example", {
          val: "07:00 AM",
          alignment: "center",
          color: "#33333399",
        }),
      },
      hoursSlept: {
        cellComponent: generateCellComponent("example", {
          val: "09:00",
          alignment: "center",
          color: "#33333399",
        }),
      },
      comments: {
        cellComponent: generateCellComponent("example", {
          val: "Woke up once to go to washroom. Sleep felt great. Woke up feeling very refreshed.",
          alignment: "center",
          color: "#33333399",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("example", {
          val: "",
        }),
      },
    };

    return exampleRow;
  };

  return (
    rows && (
      <div>
        <SectionHeader
          title="Sleep Tracker"
          subtitle="Purpose: To bring awareness to how much sleep you are getting and help you focus on getting your desired rest."
        />
        <TableComponent
          columns={columns}
          rows={rows(addExampleRow(), addEmptyRow())}
          color="teal"
          striped
          celled
          example
          sticky
          compact
          descriptionheader={
            <SleepTableHeader columns={csvColumns} data={csvRows} />
          }
        />
      </div>
    )
  );
};

export default Sleep;
