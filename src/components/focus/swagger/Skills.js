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
  const [skills, handleSave, handleDelete] = useCRUD(
    getSkills,
    mutateSkill,
    deleteSkill
  );

  const columns = [
    {
      label: "Skills",
      key: "skill",
    },
  ];

  const rows = (exampleRow, additionalRow) => {
    const rowData = skills.map((item) => ({
      skill: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          onDelete: handleDelete,
          val: item.skill,
          accessor: "skill",
          alignment: "center",
          aligntext: "center",
        }),
      },
    }));

    return [exampleRow, ...rowData, additionalRow];
  };

  const addEmptyRow = () => {
    const emptyRow = {
      skill: {
        cellComponent: generateCellComponent("empty", {
          onSave: handleSave,
          accessor: "skill",
          alignment: "center",
          aligntext: "center",
          placeholder: "New skill...",
        }),
      },
    };

    return emptyRow;
  };

  const addExampleRow = () => {
    const exampleRow = {
      skill: {
        cellComponent: generateCellComponent("example", {
          val: "Make a list of skills that relate to weight loss",
          tooltipContent:
            "ex. can go without food for 16 hours, can bike for 1 hour, can do a handstand",
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
        className="swagger"
        rows={rows(addExampleRow(), addEmptyRow())}
        columns={columns}
        color="#B5CC18"
        aligntext="center"
        example
        compact
      />
    )
  );
};

export default Skills;
