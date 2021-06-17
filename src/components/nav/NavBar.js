import React from "react";
import { history } from "../../utils/customHistory";
import { Image, Icon } from "semantic-ui-react";
import { StyledNav, StyledUserButton, StyledLogoButton } from "./StyledNavBar";

const NavBar = () => {
  return (
    <StyledNav>
      <div>
        <StyledLogoButton
          as="a"
          size="huge"
          title="home"
          onClick={() => history.push("/home")}
        >
          <Image src="/4flogowhiteoutline.png" alt="4Fs logo" circular />
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
