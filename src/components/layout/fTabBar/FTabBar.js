import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import { StyledFTabBar, StyledFMenu } from "./StyledFTabBar";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const FTabBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];
  const [windowSize, setWindowSize] = useState();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(path);
  }, [path]);

  useEffect(() => {
    window.addEventListener("resize", setWindowSize(getWindowDimensions));

    return () => {
      window.removeEventListener("resize", setWindowSize(getWindowDimensions));
    };
  }, []);

  return (
    <StyledFTabBar path={path}>
      <StyledFMenu
        size={windowSize && windowSize.width > 600 ? "massive" : "small"}
        widths={4}
      >
        <Menu.Item
          name="focus"
          as={Link}
          to="/focus"
          active={activeItem === "focus"}
          onClick={(e) => setActiveItem("focus")}
        >
          <Icon
            name="bullseye"
            size={windowSize && windowSize.width > 360 ? "large" : ""}
          />
          Focus
        </Menu.Item>

        <Menu.Item
          name="fasting"
          as={Link}
          to="/fasting"
          active={activeItem === "fasting"}
          onClick={(e) => setActiveItem("fasting")}
        >
          <Icon
            name="wait"
            size={windowSize && windowSize.width > 360 ? "large" : ""}
          />
          Fasting
        </Menu.Item>

        <Menu.Item
          onClick={(e) => setActiveItem("food")}
          name="food"
          as={Link}
          to="/food"
          active={activeItem === "food"}
        >
          <Icon
            name="food"
            size={windowSize && windowSize.width > 360 ? "large" : ""}
          />
          Food
        </Menu.Item>

        <Menu.Item
          onClick={(e) => setActiveItem("fitness")}
          name="fitness"
          active={activeItem === "fitness"}
          as={Link}
          to="/fitness"
        >
          <Icon
            name="heartbeat"
            size={windowSize && windowSize.width > 360 ? "large" : ""}
          />
          Fitness
        </Menu.Item>
      </StyledFMenu>
      <Link to="/resources">
        <p className="resources">Bonus Resources</p>
      </Link>
    </StyledFTabBar>
  );
};

export default FTabBar;
