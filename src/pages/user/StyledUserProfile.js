import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const StyledFormContainer = styled.div`
  width: 50%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const StyledSegment = styled(Segment)`
  width: 70% !important;
  border: 2px solid #2185d0 !important;
  @media (max-width: 700px) {
    width: 99% !important;
  }
`;

export const StyledProfileHeader = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
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
  display: grid;
  font-size: 1.035rem;
  color: #2185d0;

  p {
    margin-top: 0.15rem;
  }

  p:hover {
    cursor: pointer;
  }
`;
