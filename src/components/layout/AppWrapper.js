import React from "react";
import NavBar from "../nav/NavBar";
import FTabBar from "./fTabBar/FTabBar";
import TabMenu from "./tabs/TabMenu";
import SectionContainer from "./SectionContainer";
import Contact from "./contact/Contact";
import WelcomeMessage from "../home/welcome/WelcomeMessage";

const AppWrapper = ({ component, tabs, landing }) => {
  console.log(component);
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      <FTabBar />

      {tabs && <TabMenu />}
      {landing && <WelcomeMessage />}

      <SectionContainer>{component}</SectionContainer>
      {landing && <Contact />}
    </div>
  );
};

export default AppWrapper;
