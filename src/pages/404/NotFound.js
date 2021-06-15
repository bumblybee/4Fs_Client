import React from "react";
import { Link } from "react-router-dom";
import { StyledNotFoundWrapper } from "./StyledNotFound";
import { Icon, Button } from "semantic-ui-react";

const NotFound = () => {
  return (
    <StyledNotFoundWrapper>
      <div>
        <Icon name="desktop" color="blue" />
        <img src="/4flogowhiteoutline.png" alt="4Fs logo" />
        <h3>Page Not Found</h3>
      </div>
      <Button as={Link} to="/home" color="black" basic>
        Back to home
      </Button>
    </StyledNotFoundWrapper>
  );
};

export default NotFound;
