import styled from "styled-components";

export const StyledHabitsTableContainer = styled.div`
  display: grid;
  grid-template-columns: 0.02fr 1.25fr 0.75fr;
  grid-gap: 0.5rem;

  @media (max-width: 1027px) {
    display: flex;
    flex-direction: column;
  }
`;
