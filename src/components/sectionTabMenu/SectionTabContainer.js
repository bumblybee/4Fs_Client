import React, { useState } from "react";
import TabMenu from "./SectionTabMenu";
import Milestones from "../milestones/Milestones";
import WelcomeMessage from "../welcomeMessage/welcomeMessage";
import Beliefs from "../beliefs/Beliefs";

import { Container } from "semantic-ui-react";

const SectionTabContainer = () => {
  const [child, setChild] = useState("milestones");

  const renderChild = () => {
    return child === "milestones" ? (
      <div>
        {/* <WelcomeMessage /> */}
        <Milestones />
      </div>
    ) : child === "beliefs" ? (
      <Beliefs />
    ) : (
      <div style={{ textAlign: "center" }}>
        <h1>Body Composition Calculator</h1>
      </div>
    );
  };
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <TabMenu setChild={setChild} />

      <Container>{renderChild()}</Container>
    </div>
  );
};

export default SectionTabContainer;
