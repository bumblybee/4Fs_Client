import styled from "styled-components";
import { Container, Menu } from "semantic-ui-react";

export const StyledTabContainer = styled(Container)`
  margin: 2rem auto 3rem;

  @media (max-width: 620px) {
    margin: 1.5rem auto 3.5rem;
  }
`;

export const StyledTabMenu = styled(Menu)`
  width: max-content !important;
  margin: 0 auto 3rem !important;

  @media (max-width: 620px) {
    margin: 0 auto !important;
  }
`;
