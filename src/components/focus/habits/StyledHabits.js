import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "semantic-ui-react";
export const StyledHabitsTableContainer = styled.div`
  display: grid;
  grid-template-columns: 0.02fr 1.4fr 0.75fr;
  grid-gap: 1rem;
  height: inherit;

  @media (max-width: 1027px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButton = styled(Button)`
  margin: 0 auto 1.5rem !important;
  font-weight: bold !important;
  background: transparent none !important;
  box-shadow: 0px 0px 0px 1px #6435c9 inset !important;
  border-radius: 0.28571429rem;
  padding: 0.77em 1.25em 0.77em;
  color: #6435c9 !important;

  :hover {
    background: #6435c9 !important;
    cursor: pointer;
    color: #fff !important;
  }

  :active {
    box-shadow: 0px 0px 0px 1px #502aa1 inset !important;
    background: #502aa1 !important;

    color: #ffffffee !important;
  }
`;
