import React from "react";
import TableComponent from "../../table/TableComponent";
import useCRUD from "../../../hooks/useCRUD";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getAccomplishments,
  mutateAccomplishment,
  deleteAccomplishment,
} from "../../../api/focus/swaggerApi";

const Accomplishments = () => {
  const [accomplishments, handleSave] = useCRUD(
    getAccomplishments,
    mutateAccomplishment,
    deleteAccomplishment
  );

  const columns = [
    {
      label: "Accomplishments",
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
          aligntext: "center",
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
        color="olive"
        aligntext="center"
      />
    )
  );
};

export default Accomplishments;
