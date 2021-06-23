import styled from "styled-components";

export const StyledHabitsHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const StyledHabitsHeader = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-size: 1.05rem;
  padding: 0.5rem 0;

  @media (max-width: 620px) {
    width: 88%;
    font-size: 1rem;
    padding: 0.25rem 0;
  }

  > div {
    width: 40%;
    margin: 0 auto 0.5rem;
    padding: 0;
    font-size: 1.25rem;
    font-family: "Montserrat", sans-serif;
    font-style: normal;

    @media (max-width: 620px) {
      width: 80%;
      font-size: 1.15rem;
    }
  }
`;
