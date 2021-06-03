import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Image, Button, Icon } from "semantic-ui-react";
import { StyledNav, StyledUserButton, StyledLogoButton } from "./StyledNavBar";

const NavBar = () => {
  // Using history push when click user profile so forces full page reload to ensure user date loaded - maybe send state with link instead?
  const history = useHistory();
  return (
    <StyledNav>
      <div>
        <StyledLogoButton
          as="a"
          size="huge"
          title="home"
          onClick={() => history.push("/home")}
        >
          <Image src="/4flogo.png" circular />
        </StyledLogoButton>
      </div>

      <div>
        <StyledUserButton
          as="a"
          title="profile"
          onClick={() => history.push("/profile")}
        >
          <Icon name="user" size="large" />
        </StyledUserButton>
      </div>
    </StyledNav>
  );
};

export default NavBar;
