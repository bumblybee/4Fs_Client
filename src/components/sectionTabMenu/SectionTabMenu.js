import React, { useState } from "react";
import Milestones from "../milestones/Milestones";
import Beliefs from "../beliefs/Beliefs";

import { Container, Menu, Tab } from "semantic-ui-react";

// const panes = [
//   {
//     menuItem: "Milestones",
//     render: () => (
//       <Tab.Pane attached={false}>
//         <Milestones />
//       </Tab.Pane>
//     ),
//   },
//   {
//     menuItem: "Beliefs",
//     render: () => (
//       <Tab.Pane attached={false}>
//         <Beliefs />
//       </Tab.Pane>
//     ),
//   },
//   {
//     menuItem: "Tab 3",
//     render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
//   },
// ];

const SectionTabMenu = () => {
  const [activeItem, setActiveItem] = useState("milestones");

  return (
    <Container style={{ margin: "2rem auto 3.5rem" }}>
      <Menu
        pointing
        secondary
        color="blue"
        size="huge"
        style={{ width: "min-content", margin: "0 auto 3rem" }}
      >
        <Menu.Item
          name="milestones"
          active={activeItem === "milestones"}
          onClick={() => {
            setActiveItem("milestones");
          }}
        />
        <Menu.Item
          name="beliefs"
          active={activeItem === "beliefs"}
          onClick={() => {
            setActiveItem("beliefs");
          }}
        />
        <Menu.Item
          name="calculator"
          active={activeItem === "calculator"}
          onClick={() => {
            setActiveItem("calculator");
          }}
        />
      </Menu>
    </Container>
  );
};

export default SectionTabMenu;
