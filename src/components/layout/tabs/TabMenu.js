import React from "react";
import { useLocation } from "react-router-dom";
import Tabs from "./Tabs";
import { StyledTabContainer, StyledTabMenu } from "./StyledTabs";

// TODO: bring in window resize fn from ftab and use to set size of menu
const TabMenu = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const subPath = pathname.split("/")[2];

  return (
    <StyledTabContainer>
      <StyledTabMenu pointing secondary color="blue" size="huge">
        <Tabs path={path} subPath={subPath} />
      </StyledTabMenu>
    </StyledTabContainer>
  );
};

export default TabMenu;
