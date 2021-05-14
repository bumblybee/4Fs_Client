import styled from "styled-components";
import { Form } from "semantic-ui-react";

export const StyledProfileHeader = styled.h1`
  text-align: center;
`;

export const StyledProfileForm = styled(Form)`
  padding: 1rem;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  input,
  select {
    background: #fcfdff !important;
    border: 1px solid #dce9fe !important;
  }

  input:not(:last-child) {
    margin-bottom: 1rem;
  }

  label {
    font-weight: 600;
  }
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
