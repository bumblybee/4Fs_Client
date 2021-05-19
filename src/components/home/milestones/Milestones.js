import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import {
  getMilestones,
  mutateMilestone,
} from "../../../api/home/milestonesApi";
import useCRUD from "../../../hooks/useCRUD";
import SectionHeader from "../../layout/SectionHeader";
import TableComponent from "../../table/TableComponent";

// TODO: Align cols
const Milestones = () => {
  const [milestones, handleSave] = useCRUD(getMilestones, mutateMilestone);

  const columns = [
    { label: "F", key: "f", width: 2 },
    {
      label: "Milestones",
      key: "milestone",
      width: 4,
    },
    {
      label: "Personalize it",
      key: "personalize",
      width: 4,
    },
    {
      label: "Comments",
      key: "comments",
      width: 4,
    },
    {
      label: "Status",
      key: "status",
    },
  ];

  const rows = () => {
    const rowData = milestones.map((item) => ({
      f: {
        cellComponent: generateCellComponent("static", {
          val: item.f,
          alignment: "left",
          textweight: "600",
        }),
      },
      milestone: {
        cellComponent: generateCellComponent("", {
          val: item.milestone,
          alignment: "center",
        }),
      },
      personalize: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.personalize,
          accessor: "personalize",
          alignment: "center",
        }),
      },
      comments: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.comments,
          accessor: "comments",
          alignment: "center",
        }),
      },
      status: {
        cellComponent: generateCellComponent("dropdown", {
          id: item.id,
          label: item.label,
          options: ["In Progress", "Complete"],
          defaultState: item.status,
          onSave: handleSave,
          accessor: "status",
        }),
      },
    }));

    return rowData;
  };

  return (
    rows && (
      <div>
        <SectionHeader
          title="Milestones"
          subtitle="Feel free to add your personal touch to each milestone so that it
          works for you!"
        />

        <TableComponent
          rows={rows()}
          columns={columns}
          color="orange"
          aligntext="left"
          striped
        />
      </div>
    )
  );
};

export default Milestones;
