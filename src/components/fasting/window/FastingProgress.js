import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import TableComponent from "../../table/TableComponent";
import moment from "moment";

const FastingProgress = ({ fastingProgress }) => {
  const columns = [
    { label: "Date", key: "date", width: 1 },

    { label: "Performed", key: "performed", width: 8 },
  ];

  const rows = () => {
    // Placeholder cells if no progress to show
    if (!fastingProgress.length) {
      return [
        {
          date: {
            cellComponent: generateCellComponent("static", {
              val: "",
            }),
          },
          performed: {
            cellComponent: generateCellComponent("static", {
              val: "Fasting window progress will be displayed here",
              alignment: "center",
            }),
          },
        },
      ];
    }

    const rowData = fastingProgress.map((item) => ({
      date: {
        cellComponent: generateCellComponent("static", {
          val: moment(item.date).format("MM/DD/YY"),
          alignment: "center",
          alignItems: "flex-start",
          className: "progress-date",
        }),
      },
      performed: {
        cellComponent: generateCellComponent("progress", {
          alignment: "center",
          aligntext: "center",
          val: item.performed * 100,
          goal: item.goalWindow,
          day: item.todayWindow,
          className: "progress-bar",
        }),
      },
    }));

    return rowData;
  };

  return (
    rows && (
      <TableComponent
        className="fasting-progress"
        aligntext="center"
        fontsize="0.9rem"
        color="#1B1C1D"
        columns={columns}
        rows={rows()}
        striped
        compact="very"
        celled
      />
    )
  );
};

export default FastingProgress;
