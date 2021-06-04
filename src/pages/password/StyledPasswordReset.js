import styled from "styled-components";

export const StyledConfirmationHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  p {
    text-align: center;
    font-size: 1.1rem;
  }
`;

export const StyledPasswordResetHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  p {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-size: 1.05rem;
  }
`;

export const StyledPasswordResetButtonContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`;
