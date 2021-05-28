import styled from "styled-components";
import { Progress } from "semantic-ui-react";

export const StyledProgress = styled(Progress)`
  margin: 0 !important;

  position: relative !important;
  .bar {
    background: ${(props) => props.color} !important;
  }
`;

export const StyledHours = styled.div`
  position: absolute;
  top: 6.5%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
`;
