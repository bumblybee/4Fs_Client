import React, { useContext } from "react";
import TableComponent from "../table/TableComponent";
import generateCellComponent from "../../utils/generateCellComponent";
import { UserContext } from "../../context/user/UserContext";
import { Icon } from "semantic-ui-react";

const SheetsComponent = ({ title, subtitle, buttonText, colorScheme }) => {
  // TODO: Specify which sheet to direct user to

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
          to: url === "" ? "/profile" : url,
          val: url === "" ? "Add Google Sheets Link in Profile" : buttonText,
          accessor: "sheetsURL",
          color: colorScheme,
          size: "huge",
          icon: <Icon name="google drive" />,
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
        color={colorScheme}
        aligntext="center"
        fullHeightTable
        fullHeightTD
      />
    </div>
  );
};

export default SheetsComponent;
