import React from "react";
import NavBar from "../nav/NavBar";
import FTabBar from "./fTabBar/FTabBar";
import TabMenu from "./tabs/TabMenu";
import SectionContainer from "./SectionContainer";
import Contact from "./contact/Contact";
import WelcomeMessage from "../home/welcome/WelcomeMessage";

const AppWrapper = ({ component, tabs }) => {
  console.log(component);
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      <FTabBar />

      {tabs && <TabMenu />}
      {component.type.name === "Milestones" && <WelcomeMessage />}

      <SectionContainer>{component}</SectionContainer>
      {component.type.name === "Milestones" && <Contact />}
    </div>
  );
};

export default AppWrapper;
