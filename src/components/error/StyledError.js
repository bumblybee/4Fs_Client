import styled from "styled-components";
import { Message } from "semantic-ui-react";

export const StyledErrorMessage = styled(Message)`
  position: absolute !important;
  top: 2%;
  left: 50%;
  transform: translate(-50%);
  z-index: 1000;
  width: 24%;
  text-align: center;

  @media (max-width: 900px) {
    width: 70%;
  }
`;
