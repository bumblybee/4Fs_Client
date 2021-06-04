import React from "react";
import { Image } from "semantic-ui-react";
import {
  StyledFormWrapper,
  StyledSegment,
  StyledFormHeader,
} from "../../styles/GlobalStyledComponents";
import { StyledConfirmationHeader } from "./StyledPasswordReset";

const PasswordRequestConfirmation = () => {
  return (
    <StyledFormWrapper verticalAlign="middle" centered>
      <StyledSegment className="column" raised>
        <StyledConfirmationHeader>
          <StyledFormHeader as="h2" image>
            <Image className="logo" src="/4flogo.png" alt="4fs logo" />
            Email Sent
          </StyledFormHeader>
          <p>Click the link in the email to reset your password</p>
        </StyledConfirmationHeader>
      </StyledSegment>
    </StyledFormWrapper>
  );
};

export default PasswordRequestConfirmation;
