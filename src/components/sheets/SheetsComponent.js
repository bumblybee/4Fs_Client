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
    "https://docs.google.com/spreadsheets/d/1zksCXROONYMDs4D7lKezJBBBEhYSRqAAqw8h-PwDYvY/edit?usp=sharing";

  const columns = [
    {
      label: val,
      key: "sheetsURL",
    },
  ];

  // Handle where user navigated to. Send to instructions google sheet if no sheet url. If button is bonus resources, send to dropbox link
  const renderTo = () => {
    if (buttonText === "Bonus Resources") {
      return "https://www.dropbox.com/sh/m79fx6qqxdos71b/AAAebujGLoaGnP3-cyjbPtg_a?dl=0";
    } else if (userSheetsUrl) {
      return userSheetsUrl;
    } else {
      return baseSheetsUrl;
    }
  };

  const rows = () => {
    const rowData = {
      sheetsURL: {
        cellComponent: generateCellComponent("button", {
          to: "#",
          val: buttonText,
          accessor: "sheetsURL",
          color: colorScheme,
          size: "huge",
          icon: <Icon name="google drive" />,
          isCentered: true,
          // newWindow: true,
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
