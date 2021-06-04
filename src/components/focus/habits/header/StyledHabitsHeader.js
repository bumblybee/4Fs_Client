import styled from "styled-components";

export const StyledHabitsHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const StyledHabitsHeader = styled.div`
  width: 85%;
  margin: 0 auto;
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-size: 1.025rem;
  padding: 0.5rem 0;

  > div {
    width: 40%;
    margin: 0 auto 0.5rem;
    padding: 0;
    font-size: 1.23rem;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
  }
`;
