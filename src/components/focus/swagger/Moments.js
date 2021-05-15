import React from "react";
import TableComponent from "../../table/TableComponent";
import useCRUD from "../../../hooks/useCRUD";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getMoments,
  mutateMoment,
  deleteMoment,
} from "../../../api/focus/swaggerApi";
//todo: handle delete
const Moments = () => {
  const [moments, handleSave, handleDelete] = useCRUD(
    getMoments,
    mutateMoment,
    deleteMoment
  );

  const columns = [
    {
      label: "Moments",
      key: "moment",
    },
  ];

  const rows = (exampleRow, additionalRow) => {
    const rowData = moments.map((item) => ({
      moment: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          onDelete: handleDelete,
          val: item.moment,
          accessor: "moment",
          alignment: "center",
        }),
      },
    }));

    return [exampleRow, ...rowData, additionalRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      moment: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          accessor: "moment",
          alignment: "center",
          aligntext: "center",
          placeholder: "New moment...",
        }),
      },
    };

    return emptyRow;
  };

  const addExampleRow = () => {
    const exampleRow = {
      moment: {
        cellComponent: generateCellComponent("example", {
          val: "Make a list of moments you're proud of that relate to weight loss",
          tooltipContent:
            "ex. got a complement on the beach, won a beauty pageant, ran a mile, etc.",
          alignment: "flex-start",
          width: "90%",
          textweight: 600,
        }),
      },
    };

    return exampleRow;
  };

  return (
    rows && (
      <TableComponent
        rows={rows(addExampleRow(), addEmptyRow())}
        columns={columns}
        color="olive"
        aligntext="center"
        example
        compact
      />
    )
  );
};

export default Moments;
