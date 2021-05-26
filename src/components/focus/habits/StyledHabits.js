import styled from "styled-components";
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
  margin: 0 auto 2rem !important;
  font-weight: bolder !important;
`;
