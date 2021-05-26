import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "semantic-ui-react";
export const StyledHabitsTableContainer = styled.div`
  display: grid;
  grid-template-columns: 0.02fr 1.25fr 0.75fr;
  grid-gap: 0.5rem;
  height: inherit;

  @media (max-width: 1027px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButton = styled(Button)`
  font-weight: bold !important;
  background: transparent none !important;
  box-shadow: 0px 0px 0px 1px #6435c9 inset !important;

  color: #6435c9 !important;

  :hover {
    background: #6435c9 !important;

    color: #fff !important;
  }

  :active {
    box-shadow: 0px 0px 0px 1px #502aa1 inset !important;
    background: #502aa1 !important;

    color: #ffffffee !important;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto 1.5rem !important;
`;
