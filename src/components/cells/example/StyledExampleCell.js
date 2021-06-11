import styled from "styled-components";

export const StyledExampleCell = styled.div`
  position: relative;
  text-align: center;
  font-weight: ${(props) => props.textWeight || 400};
  font-style: italic;
  color: ${(props) => props.color || "#333"};
  width: 100%;
  min-height: 38px;
  height: auto;

  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: "${(props) => props.alignment || "center"}";

  :not(.skills) > div {
    margin: auto 0;
  }

  div:first-child {
    width: ${(props) => props.width || ""};
  }
`;

export const StyledTooltipContainer = styled.div`
  position: absolute;
  top: 1%;
  right: -2.5%;

  @media (max-width: 1024px) {
    right: 0;
  }

  @media (max-width: 620px) {
    right: -2%;
  }
`;
