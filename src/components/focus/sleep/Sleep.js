import React from "react";
import moment from "moment";
import useCRUD from "../../../hooks/useCRUD";
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
  const [sleep, handleSave, handleDelete] = useCRUD(
    getSleep,
    mutateSleep,
    deleteSleep
  );

  const columns = [
    {
      label: "Date",
      key: "date",
      width: 2,
    },
    {
      label: "Went to Bed",
      key: "toBed",
      width: 2,
    },
    {
      label: "Woke up",
      key: "woke",
      width: 2,
    },
    {
      label: "Hours Slept",
      key: "hoursSlept",
      width: 2,
    },
    {
      label: "Comments",
      key: "comments",
      width: 3,
    },
    {
      label: "Delete",
      key: "delete",
      width: 1,
    },
  ];

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
            alignment: "left",
            textWeight: "600",
          }),
        },
        toBed: {
          cellComponent: generateCellComponent("time", {
            id: item.id,
            onSave: handleSave,
            val: item.toBed,
            accessor: "toBed",
            alignment: "center",
          }),
        },
        woke: {
          cellComponent: generateCellComponent("time", {
            id: item.id,
            onSave: handleSave,
            val: item.woke,
            accessor: "woke",
            alignment: "center",
          }),
        },
        hoursSlept: {
          cellComponent: generateCellComponent("", {
            id: item.id,
            val: calcHoursSlept(item),
            accessor: "hoursSlept",
            alignment: "center",
            style: {
              paddingLeft: "0.5rem",
              width: "max-content",
              fontWeight: "bold",
            },
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
          onSave: handleSave,
          accessor: "date",
          alignment: "left",
          width: "110px",
        }),
      },
      toBed: {
        cellComponent: generateCellComponent("time", {
          onSave: handleSave,
          accessor: "toBed",
          alignment: "center",
        }),
      },
      woke: {
        cellComponent: generateCellComponent("time", {
          onSave: handleSave,
          accessor: "woke",
          alignment: "center",
        }),
      },
      hoursSlept: {
        cellComponent: generateCellComponent("", {
          onSave: handleSave,
          accessor: "hoursSlept",
          alignment: "center",
        }),
      },
      comments: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          accessor: "comments",
          alignment: "left",
          aligntext: "left",
          placeholder: "New comment...",
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
      date: {
        cellComponent: generateCellComponent("example", {
          val: "05/25/2021",
          alignment: "left",
        }),
      },
      toBed: {
        cellComponent: generateCellComponent("example", {
          val: "10:00 PM",
          alignment: "left",
        }),
      },
      woke: {
        cellComponent: generateCellComponent("example", {
          val: "07:00 AM",
          alignment: "left",
        }),
      },
      hoursSlept: {
        cellComponent: generateCellComponent("example", {
          val: "09:00",
          alignment: "flex-start",
        }),
      },
      comments: {
        cellComponent: generateCellComponent("example", {
          val:
            "Woke up once to go to washroom. Sleep felt great. Woke up feeling very refreshed.",
          alignment: "flex-start",
          textweight: "400",
        }),
      },
      delete: {
        cellComponent: generateCellComponent("example", {
          val: "",
          alignment: "flex-start",
        }),
      },
    };

    return exampleRow;
  };

  const calcHoursSlept = (item) => {
    let timeSlept = null;

    if (item.toBed && item.woke) {
      const slept = moment(item.toBed, "HH:mm:ss");
      const woke = moment(item.woke, "HH:mm:ss");

      if (woke.isBefore(slept)) woke.add(1, "day");
      const duration = moment.duration(woke.diff(slept));

      timeSlept = moment.utc(+duration).format("HH:mm");
    }

    return timeSlept;
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
          aligntext="left"
          striped
          example
          descriptionheader={<SleepTableHeader data={sleep} />}
        />
      </div>
    )
  );
};

export default Sleep;
