import React from "react";
import TableComponent from "../table/TableComponent";
import generateCellComponent from "../../utils/generateCellComponent";
import useCRUD from "../../hooks/useCRUD";
import { getBeliefs, mutateBelief, deleteBelief } from "../../api/exampleApi";

const Beliefs = () => {
  const [beliefs, handleSave] = useCRUD(getBeliefs, mutateBelief, deleteBelief);

  const columns = [
    {
      label: "My Empowering Beliefs",
      key: "belief",
    },
  ];

  const rows = (additionalRow) => {
    const rowData = beliefs.map((item) => ({
      belief: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.belief,
          accessor: "belief",
          alignment: "center",
        }),
      },
    }));

    return [...rowData, additionalRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      belief: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          accessor: "belief",
          alignment: "center",
          placeholder: "New belief...",
        }),
      },
    };

    return emptyRow;
  };

  return (
    rows && (
      <div>
        <h1 style={{ textAlign: "center", marginBottom: 0 }}>
          Empowering Beliefs
        </h1>
        <p
          style={{
            textAlign: "center",
            margin: "0 auto 2.5rem",
            fontSize: "1.1rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
          laboriosam!
        </p>
        <TableComponent
          rows={rows(addEmptyRow())}
          columns={columns}
          color="purple"
          aligntext="center"
        />
      </div>
    )
  );
};

export default Beliefs;
