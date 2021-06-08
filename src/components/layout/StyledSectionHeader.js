import styled from "styled-components";

export const StyledSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    margin: 0 auto 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    width: 60%;
    color: #333333;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      width: 92%;
      font-size: 1.1rem;
    }
  }
`;
