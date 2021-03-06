import React from "react";
import generateCellComponent from "../../../utils/generateCellComponent";
import useCRUD from "../../../hooks/useCRUD";
import {
  getBeliefs,
  mutateBelief,
  deleteBelief,
} from "../../../api/home/beliefsApi";
import { getShared, mutateShared } from "../../../api/share/shareApi";
import ShareToggle from "../../layout/share/ShareToggle";
import TableComponent from "../../table/TableComponent";
import SectionHeader from "../../layout/SectionHeader";
import { StyledSectionHeaderText } from "./StyledBeliefs";

const Beliefs = () => {
  const [beliefs, handleSave, handleDelete] = useCRUD(
    getBeliefs,
    mutateBelief,
    deleteBelief
  );
  const [shared, handleSaveShared] = useCRUD(getShared, mutateShared);

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
          onDelete: handleDelete,
          val: item.belief,
          accessor: "belief",
          alignment: "center",
          aligntext: "center",
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
          aligntext: "center",
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
          subtext="Fill out below your personalized empowering belief using your new goal, identity, and result."
          component={
            <StyledSectionHeaderText>
              <em>
                “I (system) every day because I (name) am (new identity). My new
                life allows me to (enables what)."
              </em>
            </StyledSectionHeaderText>
          }
        />
        <ShareToggle
          shared={shared[0]}
          handleSave={handleSaveShared}
          field="belief"
          width="64%"
        />
        <TableComponent
          className="beliefs"
          rows={rows(addEmptyRow())}
          columns={columns}
          color="purple"
          aligntext="center"
          width="65%"
          margin="0 auto"
          compact
        />
      </div>
    )
  );
};

export default Beliefs;
