import { Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const useTabs = (path) => {
  const [activeItem, setActiveItem] = useState("milestones");

  const tabs = {
    home: ["milestones", "beliefs", "calculator"],
    focus: ["system", "swagger", "sleep", "habits"],
    fasting: ["fasting window", "fasting guide"],
    food: ["calories", "food list", "meal planner"],
    fitness: ["fitness activities", "fitness planner"],
  };

  const renderTabs = (tabArr) => {
    return tabArr.map((tab) => (
      <Menu.Item
        as={Link}
        to={`/${path}/${tab.replace(/\s+/g, "-")}`}
        name={tab}
        active={activeItem === tab}
        onClick={() => {
          setActiveItem(tab);
        }}
      />
    ));
  };

  useEffect(() => {
    setActiveItem(tabs[path][0]);
  }, [path]);

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

export default useTabs;
