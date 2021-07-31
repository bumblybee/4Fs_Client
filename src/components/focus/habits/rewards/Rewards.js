import React from "react";
import generateCellComponent from "../../../../utils/generateCellComponent";
import { rewards } from "../../../../utils/rewards";
import TableComponent from "../../../table/TableComponent";
import { StyledRewardsHeader } from "../StyledHabits";

const Rewards = () => {
  const columns = [
    {
      label: (
        <StyledRewardsHeader>
          <h3>Rewards to Consider</h3>
          <p>Scroll down to view full list</p>
        </StyledRewardsHeader>
      ),
      key: "reward",
    },
  ];

  const rows = () => {
    const rowData = rewards.map((item) => ({
      reward: {
        cellComponent: generateCellComponent("", {
          val: item,
        }),
      },
    }));

    return rowData;
  };

  return (
    rows && (
      <TableComponent
        id="rewards"
        className="rewards"
        rows={rows()}
        columns={columns}
        color="#FBBD08"
        aligntext="center"
        height="26rem"
      />
    )
  );
};

export default Rewards;
