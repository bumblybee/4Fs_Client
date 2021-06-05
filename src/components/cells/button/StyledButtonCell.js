import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const StyledButton = styled(Button)`
  display: ${(props) => (props.isCentered ? "inline-block" : "block")};
  position: ${(props) => (props.isCentered ? "absolute" : "relative")};
  top: ${(props) => (props.isCentered ? "50%" : "")};
  left: ${(props) => (props.isCentered ? "50%" : "")};
  transform: ${(props) => (props.isCentered ? "translate(-40%, -90%)" : "")};
  width: 220px !important;
  height: 51px !important;
  font-size: 1.35rem !important;
  padding: 16.5px 7px !important;

  @media (max-width: 620px) {
    width: 140px !important;
    height: 50px !important;
    font-size: 1rem !important;
  }
`;
