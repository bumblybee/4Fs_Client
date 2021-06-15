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
  val,
  title,
  subtitle,
  subtext,
  colorScheme,
  field,
  sheetId,
  buttonText,
}) => {
  const [shared, handleSaveShared] = useCRUD(getShared, mutateShared);
  const { user } = useContext(UserContext);
  const [userSheetsUrl, setUserSheetsUrl] = useState("");
  const baseSheetsUrl =
    "https://docs.google.com/spreadsheets/d/1lHHdK__W5iB6fHLU_xEVdCveaIsVeKQvGrEuY9YWYtE";

  const columns = [
    {
      label: val,
      key: "sheetsURL",
    },
  ];

  // TODO: When Vlad gets instructions, if have user has sheets url set url id to sheetId, else send to instructions page base url

  const rows = () => {
    const rowData = {
      sheetsURL: {
        cellComponent: generateCellComponent("button", {
          to: userSheetsUrl ? userSheetsUrl : baseSheetsUrl,
          val: "Program Sheet",
          accessor: "sheetsURL",
          color: colorScheme,
          size: "huge",
          icon: <Icon name="google drive" />,
          isCentered: true,
          // newWindow: userSheetsUrl ? true : false,
          newWindow: true,
        }),
      },
    };

    return [rowData];
  };

  useEffect(() => {
    user && user.sheetsURL && setUserSheetsUrl(user.sheetsURL + sheetId);
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
        className="sheets"
        rows={rows()}
        columns={columns}
        color={colorScheme}
        aligntext="center"
        fullheighttd
        mobileHeight="100%"
      />
    </div>
  );
};

export default SheetsComponent;
