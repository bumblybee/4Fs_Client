import React, { useState } from "react";
import {
  StyledCookieContainer,
  StyledCookieButtonContainer,
  StyledCookieButton,
} from "./StyledCookieConsent";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  return (
    showConsent && (
      <StyledCookieContainer inverted color="grey" basic>
        We use cookies to keep you logged in.
        <StyledCookieButtonContainer>
          <StyledCookieButton onClick={() => setShowConsent(false)}>
            Accept
          </StyledCookieButton>
        </StyledCookieButtonContainer>
      </StyledCookieContainer>
    )
  );
};

export default CookieConsent;
