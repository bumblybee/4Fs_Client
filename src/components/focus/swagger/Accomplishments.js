import React from "react";
import TableComponent from "../../table/TableComponent";
import useCRUD from "../../../hooks/useCRUD";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getAccomplishments,
  mutateAccomplishment,
  deleteAccomplishment,
} from "../../../api/focus/swaggerApi";
//todo: handle delete
const Accomplishments = () => {
  const [accomplishments, handleSave] = useCRUD(
    getAccomplishments,
    mutateAccomplishment,
    deleteAccomplishment
  );

  const columns = [
    {
      label: "Accomplishment",
      key: "accomplishment",
    },
  ];

  const rows = (additionalRow) => {
    const rowData = accomplishments.map((item) => ({
      accomplishment: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.accomplishment,
          accessor: "accomplishment",
          alignment: "center",
        }),
      },
    }));

    return [...rowData, additionalRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      accomplishment: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          accessor: "accomplishment",
          alignment: "center",
          placeholder: "New accomplishment...",
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
        color="blue"
        aligntext="center"
      />
    )
  );
};

export default Accomplishments;
