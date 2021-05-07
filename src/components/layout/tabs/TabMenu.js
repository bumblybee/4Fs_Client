import React from "react";
import { useLocation } from "react-router-dom";
import Tabs from "./Tabs";
import { Container, Menu } from "semantic-ui-react";

const SectionTabMenu = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  return (
    <Container style={{ margin: "2rem auto 3rem" }}>
      <Menu
        pointing
        secondary
        color="blue"
        size="huge"
        style={{ width: "max-content", margin: "0 auto 3rem" }}
      >
        <Tabs path={path} />
      </Menu>
    </Container>
  );
};

export default SectionTabMenu;
