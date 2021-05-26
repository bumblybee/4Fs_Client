import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const StyledButton = styled(Button)`
  display: ${(props) => (props.isCentered ? "inline-block" : "block")};
  position: ${(props) => (props.isCentered ? "absolute" : "relative")};
  top: ${(props) => (props.isCentered ? "50%" : "")};
  left: ${(props) => (props.isCentered ? "50%" : "")};
  transform: ${(props) => (props.isCentered ? "translate(-40%, -90%)" : "")};
`;
