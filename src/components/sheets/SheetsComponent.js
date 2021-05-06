import React, { useContext } from "react";
import TableComponent from "../table/TableComponent";
import SectionHeader from "../layout/SectionHeader";
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
          isCentered: true,
        }),
      },
    };

    return [rowData];
  };

  return (
    <div>
      <SectionHeader title={title} subtitle={subtitle} />

      <TableComponent
        rows={rows()}
        columns={columns}
        color={colorScheme}
        aligntext="center"
        fullheighttable
        fullheighttd
      />
    </div>
  );
};

export default SheetsComponent;
