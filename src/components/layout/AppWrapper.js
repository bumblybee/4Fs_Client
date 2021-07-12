import React from "react";
import NavBar from "../nav/NavBar";
import FTabBar from "./fTabBar/FTabBar";
import TabMenu from "./tabs/TabMenu";
import SectionContainer from "./SectionContainer";
import Contact from "./contact/Contact";
import WelcomeMessage from "../home/welcome/WelcomeMessage";
import CookieConsent from "./cookie/CookieConsent";
import { StyledAppWrapper } from "./StyledAppWrapper";

const AppWrapper = ({ component, tabs, landing }) => {
  return (
    <StyledAppWrapper>
      <NavBar />
      <FTabBar />

      {tabs && <TabMenu />}

      {landing && <WelcomeMessage />}

      <SectionContainer>{component}</SectionContainer>

      {landing && <Contact />}

      {/* Cookie consent here so not rendered at login/signup */}
      <CookieConsent />
    </StyledAppWrapper>
  );
};

export default AppWrapper;
