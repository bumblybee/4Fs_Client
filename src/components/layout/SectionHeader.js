import React from "react";
import { StyledSectionHeader } from "./StyledSectionHeader";

const SectionHeader = ({ title, subtext, component }) => {
  return (
    <StyledSectionHeader>
      <h1>{title}</h1>

      <p>{subtext}</p>

      {component}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
