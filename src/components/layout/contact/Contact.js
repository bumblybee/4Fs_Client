import React from "react";
import EmailLink from "./EmailLink";
import { StyledContact } from "./StyledContact";

const Contact = () => {
  return (
    <StyledContact>
      <EmailLink
        link="mailto:hello@4fsofweightloss.com"
        title="Send us a message"
        text="Contact us"
      />
    </StyledContact>
  );
};

export default Contact;
