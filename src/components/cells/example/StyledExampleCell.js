import styled from "styled-components";

export const StyledExampleCell = styled.div`
  font-weight: ${(props) => props.textWeight || 400};
  font-style: italic;
  color: ${(props) => props.color || "#333"};
  width: 100%;
  height: 2.75rem;
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.alignment || "center"};
  position: relative;
  text-align: "center";

  div:first-child {
    width: ${(props) => props.width || ""};
  }

  @media (max-width: 900px) {
    height: 1.5rem;
  }

  @media (max-width: 800px) {
  }
`;

export const StyledTooltipContainer = styled.div`
  position: absolute;
  top: 0;
  right: -2.5%;

  @media (max-width: 1024px) {
    right: 0;
  }

  @media (max-width: 620px) {
    right: -2%;
  }
`;
