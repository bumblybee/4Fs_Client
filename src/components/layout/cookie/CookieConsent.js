import React, { useState, useEffect } from "react";
import {
  StyledCookieContainer,
  StyledCookieButtonContainer,
  StyledCookieButton,
} from "./StyledCookieConsent";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("_4fsCookieConsent")) {
      setShowConsent(false);
    }
  }, []);

  const handleClick = (e) => {
    localStorage.setItem("_4fsCookieConsent", true);
    setShowConsent(false);
  };

  return (
    showConsent && (
      <StyledCookieContainer inverted color="grey" basic>
        We use cookies to ensure you the best user experience
        <StyledCookieButtonContainer>
          <StyledCookieButton onClick={handleClick}>Okay</StyledCookieButton>
        </StyledCookieButtonContainer>
      </StyledCookieContainer>
    )
  );
};

export default CookieConsent;
