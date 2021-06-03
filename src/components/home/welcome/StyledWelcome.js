import styled from "styled-components";
import { Message } from "semantic-ui-react";

export const StyledWelcomeMessage = styled(Message)`
  width: 24% !important;
  margin: -1.25% auto 0.55% !important;
  /* background: ${(props) => !props.visible && "#fff !important"};
  box-shadow: ${(props) => !props.visible && "none !important"}; */
  text-align: center;
  font-size: 0.975rem !important;
  padding: 1rem !important;

  .header {
    text-align: center;
    font-size: 1.1rem !important;
  }
`;
