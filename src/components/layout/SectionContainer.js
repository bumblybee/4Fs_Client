import React from "react";

import { Container } from "semantic-ui-react";

const SectionContainer = ({ children }) => {
  return (
    <div style={{ paddingBottom: "1rem" }}>
      <Container style={{ height: "inherit" }}>{children}</Container>
    </div>
  );
};

export default SectionContainer;
