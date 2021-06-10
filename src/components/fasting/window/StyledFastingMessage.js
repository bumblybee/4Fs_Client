import styled from "styled-components";

export const StyledMessage = styled.div`
  position: relative;
  z-index: 1000 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
  height: "min-content";
  width: 27%;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    width: 85%;
    margin: 0 auto;
  }

  @media (max-width: 1027px) {
    height: 40px;
    width: 100%;
    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 0.95rem;
      width: 100%;
    }
  }
`;
