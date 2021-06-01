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

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  h3 {
    margin-top: 0;
    font-size: 1.1rem;
    font-weight: 500;
    width: 85%;
    margin: 0 auto;
  }
`;
