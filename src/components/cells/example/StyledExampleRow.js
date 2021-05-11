import styled from "styled-components";

export const StyledExampleRow = styled.div`
  font-weight: ${(props) => (props.textWeight ? props.textWeight : "500")};
  width: max-content;
  max-width: 300px;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaaaaaff;
  font-style: italic;
  position: relative;
  padding-left: 0.25rem;

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
