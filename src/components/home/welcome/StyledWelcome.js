import styled from "styled-components";
import { Message } from "semantic-ui-react";

export const StyledWelcomeMessage = styled(Message)`
  width: 38% !important;
  margin: -1.25% auto 1% !important;
  text-align: center;
  padding: 1.5rem !important;

  .header {
    text-align: center;
    font-size: 1.1rem !important;
  }

  @media (max-width: 1024px) {
    width: 74% !important;
    margin: -1% auto 2% !important;
  }

  @media (max-width: 768px) {
    width: 80% !important;
    margin: -1% auto 2% !important;
  }

  @media (max-width: 620px) {
    width: 93% !important;
    margin: -5% auto 5% !important;
  }
`;
