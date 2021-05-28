import styled from "styled-components";
import { Progress } from "semantic-ui-react";

export const StyledProgress = styled(Progress)`
  margin: 0 !important;
  width: 96%;
  position: relative !important;

  .bar {
    background: ${(props) => props.color} !important;
  }

  .bar .progress {
    color: #fff !important;
  }
`;

export const StyledHours = styled.div`
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-weight: 600;
`;
