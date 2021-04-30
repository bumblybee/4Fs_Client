import React from "react";
import generateCellComponent from "../../utils/generateCellComponent";
import { getMilestones, mutateMilestone } from "../../api/exampleApi";
import useCRUD from "../../hooks/useCRUD";

import TableComponent from "../table/TableComponent";

const Milestones = () => {
  const [milestones, handleSave] = useCRUD(getMilestones, mutateMilestone);

  const columns = [
    {
      label: "Milestone",
      key: "milestone",
    },
    {
      label: "Personalize",
      key: "personalize",
    },
    {
      label: "Comments",
      key: "comments",
    },
    {
      label: "Status",
      key: "status",
    },
  ];

  const rows = () => {
    const rowData = milestones.map((item) => ({
      milestone: {
        cellComponent: generateCellComponent("", { val: item.milestone }),
      },
      personalize: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.personalize,
          accessor: "personalize",
        }),
      },
      comments: {
        cellComponent: generateCellComponent("editable", {
          id: item.id,
          onSave: handleSave,
          val: item.comments,
          accessor: "comments",
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

  // Use for tables that have example row at top
  // const addExampleRow = () => {
  //   const exampleRow = {
  //     field: {
  //       cellComponent: generateCellComponent("example", {val: "example text"}),
  //     },
  //     field: {
  //       cellComponent: generateCellComponent("example", {val: "example text"}),
  //     },
  //   };

  //   return exampleRow
  // };

  return (
    rows && (
      <div>
        <h1 style={{ textAlign: "center", marginBottom: 0 }}>Milestones</h1>
        <p
          style={{
            textAlign: "center",
            margin: "0 auto 2.5rem",
            fontSize: "1.1rem",
          }}
        >
          Feel free to add your personal touch to each milestone so that it
          works for you!
        </p>
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
