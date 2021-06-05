import styled from "styled-components";
import { Message } from "semantic-ui-react";

export const StyledWelcomeMessage = styled(Message)`
  width: 28% !important;
  margin: -1.25% auto 0.65% !important;
  text-align: center;
  padding: 1.5rem !important;

  .header {
    text-align: center;
    font-size: 1.1rem !important;
  }

  @media (max-width: 620px) {
    width: 90% !important;
    margin: -5% auto 5% !important;
  }
`;
