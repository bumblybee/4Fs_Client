import React from "react";
import { useLocation } from "react-router-dom";
import useTabs from "../../hooks/useTabs";
import { Container, Menu } from "semantic-ui-react";

const SectionTabMenu = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const tabs = useTabs(path);

  return (
    <Container style={{ margin: "2rem auto 3.5rem" }}>
      <Menu
        pointing
        secondary
        color="blue"
        size="huge"
        style={{ width: "max-content", margin: "0 auto 3rem" }}
      >
        {tabs}
      </Menu>
    </Container>
  );
};

export default SectionTabMenu;
