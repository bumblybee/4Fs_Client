import React from "react";
import TableComponent from "../../table/TableComponent";
import useCRUD from "../../../hooks/useCRUD";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getSkills,
  mutateSkill,
  deleteSkill,
} from "../../../api/focus/swaggerApi";

const Skills = () => {
  const [skills, handleSave] = useCRUD(getSkills, mutateSkill, deleteSkill);

  const columns = [
    {
      label: "Skills",
      key: "skill",
    },
  ];

  const rows = (additionalRow) => {
    const rowData = skills.map((item) => ({
      skill: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.skill,
          accessor: "skill",
          alignment: "center",
        }),
      },
    }));

    return [...rowData, additionalRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      skill: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          accessor: "skill",
          alignment: "center",
          placeholder: "New skill...",
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

export default Skills;
