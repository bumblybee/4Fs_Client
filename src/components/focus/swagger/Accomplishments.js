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

  const rows = (exampleRow, additionalRow) => {
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
      />
    )
  );
};

export default Accomplishments;
