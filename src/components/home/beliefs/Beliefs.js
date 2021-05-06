import React from "react";
import TableComponent from "../../table/TableComponent";
import SectionHeader from "../../layout/SectionHeader";
import generateCellComponent from "../../../utils/generateCellComponent";
import useCRUD from "../../../hooks/useCRUD";
import {
  getBeliefs,
  mutateBelief,
  deleteBelief,
} from "../../../api/home/beliefsApi";

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
        <SectionHeader
          title="Empowering Beliefs"
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
          laboriosam!"
        />

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
