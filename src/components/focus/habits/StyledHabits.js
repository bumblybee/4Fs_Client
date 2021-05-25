import styled from "styled-components";

export const StyledHabitsTableContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: flex-start; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 1027px) {
    flex-direction: column;
  }
`;
