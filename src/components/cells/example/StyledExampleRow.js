import styled from "styled-components";

export const StyledExampleRow = styled.div`
  font-weight: ${(props) => (props.textWeight ? props.textWeight : "500")};
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.alignment || "center"};
  color: #aaaaaaff;
  font-style: italic;
  position: relative;
  padding-left: 0.25rem;

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
  right: -3%;
`;
