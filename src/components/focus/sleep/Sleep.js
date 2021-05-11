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
    },
    {
      label: "Went to Bed",
      key: "toBed",
    },
    {
      label: "Woke up",
      key: "woke",
    },
    {
      label: "Hours Slept",
      key: "hoursSlept",
    },
    {
      label: "Comments",
      key: "comments",
      width: 4,
    },
    {
      label: "Delete",
      key: "delete",
    },
  ];

  const rows = (additionalRow) => {
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
              margin: "0 15%",
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
            alignment: "left",
            //   placeholder: "New comment..."
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

    return [...rowData, additionalRow];
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
          subtitle="Purpose: To bring awareness to how much sleep you are getting and help you focus on getting your desired rest. "
        />
        <TableComponent
          columns={columns}
          rows={rows(addEmptyRow())}
          color="teal"
          aligntext="left"
          striped
          descriptionheader={<SleepTableHeader />}
        />
      </div>
    )
  );
};

export default Sleep;
