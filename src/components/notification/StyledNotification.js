import styled from "styled-components";
import { Message } from "semantic-ui-react";

export const StyledMessage = styled(Message)`
  position: absolute !important;
  top: 0.5%;
  left: 50%;
  transform: translate(-50%);
  z-index: 1000;
  width: 24%;
  text-align: center;

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 620px) {
    width: 90%;
  }
`;
