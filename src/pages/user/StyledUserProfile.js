import styled from "styled-components";
import { Form } from "semantic-ui-react";

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
