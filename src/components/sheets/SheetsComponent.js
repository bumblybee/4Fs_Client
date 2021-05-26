import React, { useContext, useEffect, useState } from "react";
import TableComponent from "../table/TableComponent";
import SectionHeader from "../layout/SectionHeader";
import generateCellComponent from "../../utils/generateCellComponent";
import { UserContext } from "../../context/user/UserContext";
import { Icon } from "semantic-ui-react";

const SheetsComponent = ({
  title,
  subtitle,
  subtext,
  buttonText,
  colorScheme,
}) => {
  // TODO: Specify which sheet to direct user to

  const { user } = useContext(UserContext);
  const [url, setUrl] = useState("user && user.sheetsURL");

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
          to: url ? url : "/profile",
          val: url ? buttonText : "Add Google Sheets Link in Profile",
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

  useEffect(() => {
    user && user.sheetsURL && setUrl(user.sheetsURL);
  }, [user]);

  return (
    <div>
      <SectionHeader title={title} subtitle={subtitle} subtext={subtext} />

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
