import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import useCRUD from "../../../hooks/useCRUD";
import {
  getMilestones,
  mutateMilestone,
} from "../../../api/home/milestonesApi";
import { getShared, mutateShared } from "../../../api/share/shareApi";
import ShareToggle from "../../layout/share/ShareToggle";
import SectionHeader from "../../layout/SectionHeader";
import TableComponent from "../../table/TableComponent";

// TODO: Align cols
const Milestones = () => {
  const [milestones, handleSave] = useCRUD(getMilestones, mutateMilestone);
  const [shared, handleSaveShared] = useCRUD(getShared, mutateShared);

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
        cellComponent: generateCellComponent("static", {
          val: item.milestone,
        }),
      },
      personalize: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.personalize,
          accessor: "personalize",
          alignment: "left",
          placeholder: "Personalize...",
        }),
      },
      comments: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.comments,
          accessor: "comments",
          alignment: "left",
          placeholder: "Comments...",
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
          subtext="Feel free to add your personal touch to each milestone so that it
          works for you!"
        />
        <ShareToggle
          shared={shared[0]}
          handleSave={handleSaveShared}
          field="milestone"
        />
        <TableComponent
          className="milestones"
          rows={rows()}
          columns={columns}
          color="orange"
          aligntext="left"
          striped
          maxHeight="100%"
          mobileHeight="100%"
        />
      </div>
    )
  );
};

export default Milestones;
