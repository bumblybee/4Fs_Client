import { Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tabs = ({ path }) => {
  const [activeItem, setActiveItem] = useState("milestones");

  const tabs = {
    home: ["milestones", "beliefs", "body calculator"],
    focus: ["system", "swagger", "sleep", "habits"],
    fasting: ["fasting window", "fasting guide"],
    food: ["calories", "food list", "meal planner"],
    fitness: ["fitness activities", "fitness planner"],
    resources: ["resources"],
  };

  const renderTabs = (tabArr) => {
    return tabArr.map((tab) => (
      <Menu.Item
        as={Link}
        to={`/${path}/${tab.replace(/\s+/g, "-")}`}
        name={tab}
        key={tab}
        active={activeItem === tab}
        onClick={() => {
          setActiveItem(tab);
        }}
      />
    ));
  };

  const defaultActiveTab = tabs[path][0] && tabs[path][0];

  useEffect(() => {
    setActiveItem(defaultActiveTab);
  }, [defaultActiveTab]);

  switch (path) {
    case "home":
      return renderTabs(tabs.home);
    case "focus":
      return renderTabs(tabs.focus);
    case "fasting":
      return renderTabs(tabs.fasting);
    case "food":
      return renderTabs(tabs.food);
    case "fitness":
      return renderTabs(tabs.fitness);
    default:
      return "";
  }
};

export default Tabs;
