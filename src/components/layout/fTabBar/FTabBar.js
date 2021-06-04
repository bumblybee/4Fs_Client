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

  console.log(windowSize);

  return (
    <StyledFTabBar path={path}>
      <StyledFMenu
        size={windowSize && windowSize.width > 1027 ? "massive" : "tiny"}
      >
        <Link to="/focus">
          <Menu.Item
            name="focus"
            as="div"
            active={activeItem === "focus"}
            onClick={(e) => setActiveItem("focus")}
          >
            <Icon name="bullseye" size="large" />
            Focus
          </Menu.Item>
        </Link>
        <Link to="/fasting">
          <Menu.Item
            name="fasting"
            as="div"
            active={activeItem === "fasting"}
            onClick={(e) => setActiveItem("fasting")}
          >
            <Icon name="wait" size="large" />
            Fasting
          </Menu.Item>
        </Link>
        <Link to="/food">
          <Menu.Item
            onClick={(e) => setActiveItem("food")}
            name="food"
            as="div"
            active={activeItem === "food"}
          >
            <Icon name="food" size="large" />
            Food
          </Menu.Item>
        </Link>
        <Link to="/fitness">
          <Menu.Item
            onClick={(e) => setActiveItem("fitness")}
            name="fitness"
            active={activeItem === "fitness"}
            as="div"
          >
            <Icon name="heartbeat" size="large" />
            Fitness
          </Menu.Item>
        </Link>
      </StyledFMenu>
      <Link to="/resources">
        <p className="resources">Bonus Resources</p>
      </Link>
    </StyledFTabBar>
  );
};

export default FTabBar;
