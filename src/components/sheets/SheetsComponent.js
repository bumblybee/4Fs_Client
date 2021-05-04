import React, { useContext } from "react";
import TableComponent from "../table/TableComponent";
import generateCellComponent from "../../utils/generateCellComponent";
import { UserContext } from "../../context/user/UserContext";

const SheetsComponent = ({ title, subtitle, buttonText, buttonColor }) => {
  const { user } = useContext(UserContext);
  const url = user && user.sheetsURL ? user.sheetsURL : "";

  const columns = [
    {
      label: title,
      key: "sheetsURL",
    },
  ];

  const rows = () => {
    const rowData = {
      sheetsURL: {
        cellComponent: generateCellComponent("button", {
          to: url,
          val: buttonText,
          accessor: "sheetsURL",
          color: buttonColor,
        }),
      },
    };

    return [rowData];
  };
  console.log(rows());
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 0 }}>{title}</h1>
      <p
        style={{
          textAlign: "center",
          margin: "0 auto 2.5rem",
          fontSize: "1.1rem",
        }}
      >
        {subtitle}
      </p>
      <TableComponent
        rows={rows()}
        columns={columns}
        color="teal"
        aligntext="center"
        fullHeightTable
        fullHeightTD
      />
    </div>
  );
};

export default SheetsComponent;
