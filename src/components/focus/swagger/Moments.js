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
  const [moments, handleSave] = useCRUD(getMoments, mutateMoment, deleteMoment);

  const columns = [
    {
      label: "Moments",
      key: "moment",
    },
  ];

  const rows = (additionalRow) => {
    const rowData = moments.map((item) => ({
      moment: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.moment,
          accessor: "moment",
          alignment: "center",
        }),
      },
    }));

    return [...rowData, additionalRow];
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

  return (
    rows && (
      <TableComponent
        rows={rows(addEmptyRow())}
        columns={columns}
        color="olive"
        aligntext="center"
      />
    )
  );
};

export default Moments;
