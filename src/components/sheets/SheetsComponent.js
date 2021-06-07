import React, { useContext, useEffect, useState } from "react";
import useCRUD from "../../hooks/useCRUD";
import { getShared, mutateShared } from "../../api/share/shareApi";
import ShareToggle from "../layout/share/ShareToggle";
import TableComponent from "../table/TableComponent";
import SectionHeader from "../layout/SectionHeader";
import generateCellComponent from "../../utils/generateCellComponent";
import { UserContext } from "../../context/user/UserContext";
import { Icon } from "semantic-ui-react";

const SheetsComponent = ({
  title,
  subtitle,
  subtext,
  colorScheme,
  field,
  sheetId,
}) => {
  const [shared, handleSaveShared] = useCRUD(getShared, mutateShared);
  const { user } = useContext(UserContext);
  const [url, setUrl] = useState("");

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
          val: url ? "Program Sheet" : "Add Google Sheets Link",
          accessor: "sheetsURL",
          color: colorScheme,
          size: "huge",
          icon: <Icon name="google drive" />,
          isCentered: true,
          newWindow: url ? true : false,
        }),
      },
    };

    return [rowData];
  };

  useEffect(() => {
    user && user.sheetsURL && setUrl(user.sheetsURL + sheetId);
  }, [user]);

  return (
    <div>
      <SectionHeader title={title} subtitle={subtitle} subtext={subtext} />
      {field && (
        <ShareToggle
          shared={shared[0]}
          handleSave={handleSaveShared}
          field={field}
        />
      )}

      <TableComponent
        rows={rows()}
        columns={columns}
        color={colorScheme}
        aligntext="center"
        fullheighttd
      />
    </div>
  );
};

export default SheetsComponent;
