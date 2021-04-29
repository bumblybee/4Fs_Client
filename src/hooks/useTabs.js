import { Menu } from "semantic-ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const useTabs = (path) => {
  const [activeItem, setActiveItem] = useState("milestones");

  switch (path) {
    case "home":
      const tabs = ["milestones", "beliefs", "calculator"];
      return tabs.map((tab) => (
        <Menu.Item
          as={Link}
          to={`/${path}/${tab}`}
          name={tab}
          active={activeItem === tab}
          onClick={() => {
            setActiveItem(tab);
          }}
        />
      ));
    default:
      return "";
  }
};

export default useTabs;
