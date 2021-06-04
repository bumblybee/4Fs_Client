import React from "react";
import { StyledSectionContainer } from "./StyledSectionContainer";

import { Container } from "semantic-ui-react";

const SectionContainer = ({ children }) => {
  return (
    <StyledSectionContainer>
      <Container>{children}</Container>
    </StyledSectionContainer>
  );
};

export default SectionContainer;
