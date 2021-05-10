import React from "react";
import NavBar from "../nav/NavBar";
import FTabBar from "./fTabBar/FTabBar";
import TabMenu from "./tabs/TabMenu";
import SectionContainer from "./SectionContainer";

const AppWrapper = ({ component }) => {
  return (
    <div>
      <NavBar />
      <FTabBar />
      <TabMenu />
      <SectionContainer>{component}</SectionContainer>
    </div>
  );
};

export default AppWrapper;