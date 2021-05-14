import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const StyledFormContainer = styled.div`
  width: 60%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 620px) {
    width: 85%;
    /* padding: 0.5rem; */
  }
`;

export const StyledSegment = styled(Segment)`
  width: 70% !important;

  @media (max-width: 620px) {
    width: 95% !important;
    height: 94%;
  }
`;

export const StyledProfileHeader = styled.h1`
  text-align: center;
`;

export const StyledPhoneWrapper = styled.div`
  display: flex !important;
  align-items: flex-end !important;
  justify-content: space-between !important;
  width: 100%;
  margin-bottom: 1rem;

  input:not(.country-code) {
    width: calc(100% / 4) !important;
  }

  .country-code {
    width: 65px;
  }
`;

export const StyledLinkWrapper = styled.div`
  text-align: center;
  margin: 1rem auto 0;
`;
