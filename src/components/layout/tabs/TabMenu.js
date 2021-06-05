import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Tabs from "./Tabs";
import { StyledTabContainer, StyledTabMenu } from "./StyledTabs";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const TabMenu = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const subPath = pathname.split("/")[2];

  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    window.addEventListener("resize", setWindowSize(getWindowDimensions));

    return () => {
      window.removeEventListener("resize", setWindowSize(getWindowDimensions));
    };
  }, []);

  return (
    <StyledTabContainer>
      <StyledTabMenu
        pointing
        secondary
        color="blue"
        size={windowSize && windowSize.width > 1027 ? "huge" : ""}
      >
        <Tabs path={path} subPath={subPath} />
      </StyledTabMenu>
    </StyledTabContainer>
  );
};

export default TabMenu;
