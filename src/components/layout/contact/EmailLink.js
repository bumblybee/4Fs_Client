import React from "react";
import { StyledEmailLink } from "./StyledEmailLink";

const EmailLink = ({ link, title, text }) => {
  return (
    <StyledEmailLink href={link} target="_blank" rel="noreferrer" title={title}>
      {text}
    </StyledEmailLink>
  );
};

export default EmailLink;
