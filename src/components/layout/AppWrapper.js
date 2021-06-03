import React from "react";
import NavBar from "../nav/NavBar";
import FTabBar from "./fTabBar/FTabBar";
import TabMenu from "./tabs/TabMenu";
import SectionContainer from "./SectionContainer";
import Contact from "./contact/Contact";
import WelcomeMessage from "../home/welcome/WelcomeMessage";

const AppWrapper = ({ component, tabs, landing }) => {
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      <FTabBar />

      {tabs && <TabMenu />}
      {landing && <WelcomeMessage />}

      <SectionContainer>
        {component} {landing && <Contact />}
      </SectionContainer>
    </div>
  );
};

export default AppWrapper;
