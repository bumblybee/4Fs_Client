import React from "react";
import { Image } from "semantic-ui-react";
import {
  StyledFormWrapper,
  StyledSegment,
  StyledFormHeader,
} from "../../styles/GlobalStyledComponents";

const PasswordRequestConfirmation = () => {
  return (
    <StyledFormWrapper verticalAlign="middle" centered>
      <StyledSegment className="column" raised>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <StyledFormHeader as="h2" image>
            <Image className="logo" src="/4flogo.png" alt="4fs logo" />
            Email Sent
          </StyledFormHeader>
          <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
            Click the link in the email to reset your password
          </p>
        </div>
      </StyledSegment>
    </StyledFormWrapper>
  );
};

export default PasswordRequestConfirmation;
