import styled from "styled-components";
import { Segment, Message } from "semantic-ui-react";

export const StyledWelcomeMessage = styled(Message)`
  width: 25% !important;
  margin: -1.5% auto 0.75% !important;
  /* background: ${(props) => !props.visible && "#fff !important"};
  box-shadow: ${(props) => !props.visible && "none !important"}; */
  text-align: justify;
  position: relative;
  cursor: pointer;

  .header {
    text-align: center;
  }

  i {
    position: absolute;
    top: ${(props) => (props.visible ? "5%" : "25%")};
    right: 2%;
  }
`;
