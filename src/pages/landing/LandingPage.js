import React from "react";
import NavBar from "../../components/nav/NavBar";
import FTabBar from "../../components/fTabBar/FTabBar";
import SectionTabContainer from "../../components/sectionTabMenu/SectionTabContainer";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <FTabBar />
      <SectionTabContainer />
    </div>
  );
};

export default LandingPage;
