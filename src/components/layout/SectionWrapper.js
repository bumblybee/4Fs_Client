import React from "react";
import NavBar from "../nav/NavBar";
import FTabBar from "./fTabBar/FTabBar";
import SectionTabMenu from "./sectionTabMenu/SectionTabMenu";
import SectionContainer from "./SectionContainer";

const SectionWrapper = ({ component }) => {
  return (
    <div>
      <NavBar />
      <FTabBar />
      <SectionTabMenu />
      <SectionContainer>{component}</SectionContainer>
    </div>
  );
};

export default SectionWrapper;
