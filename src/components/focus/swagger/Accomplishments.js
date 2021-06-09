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
  const [accomplishments, handleSave, handleDelete] = useCRUD(
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

  const rows = (exampleRow, additionalRow) => {
    const rowData = accomplishments.map((item) => ({
      accomplishment: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          onDelete: handleDelete,
          val: item.accomplishment,
          accessor: "accomplishment",
          alignment: "center",
          aligntext: "center",
        }),
      },
    }));

    return [exampleRow, ...rowData, additionalRow];
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

  // Use for tables that have example row at top
  const addExampleRow = () => {
    const exampleRow = {
      accomplishment: {
        cellComponent: generateCellComponent("example", {
          val: "Make a list of accomplishments that relate to weight loss",
          tooltipContent:
            "ex. fit into your old jeans, lost 10 lbs, can eat a meal of only veggies",
          alignment: "center",
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
        className="swagger"
        rows={rows(addExampleRow(), addEmptyRow())}
        columns={columns}
        color="#B5CC18"
        aligntext="center"
        example
        compact
        mobileHeight="25rem"
        // maxHeight="100%"
      />
    )
  );
};

export default Accomplishments;
