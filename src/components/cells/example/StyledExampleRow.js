import styled from "styled-components";

export const StyledExampleRow = styled.div`
  font-weight: 600;
  width: 95%;
  height: 3rem;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 900px) {
    height: 1.5rem;
  }

  @media (max-width: 800px) {
  }
`;

export const StyledTooltipContainer = styled.div`
  position: absolute;
  top: 2%;
  right: -7%;
`;
