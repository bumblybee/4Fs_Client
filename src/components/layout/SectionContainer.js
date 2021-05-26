import React from "react";

import { Container } from "semantic-ui-react";

const TableContainer = ({ children }) => {
  return (
    <div style={{ paddingBottom: "2rem", height: "100vh" }}>
      <Container style={{ height: "inherit" }}>{children}</Container>
    </div>
  );
};

export default TableContainer;
