import styled from "styled-components";
import { Form } from "semantic-ui-react";

export const StyledFastingWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.15rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const StyledFastingCalcWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 0 auto 0.9rem;
  border: 2px solid #1b1c1d;
  border-radius: 0.27rem;
  padding: 2rem 2rem 1.5rem 0;
  background: #fff;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 525px) {
    padding: 1rem 0.25rem;
    flex-direction: column-reverse;
    height: 320px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 14%;
  margin: 0 auto;
  padding: 0.5rem 1rem;

  input {
    text-align: center !important;
    padding: 0.5rem 0.25rem 0.5rem 0 !important;
    border: 1px solid #000 !important;
    ::-webkit-inner-spin-button {
      padding: 0 !important;
      opacity: 1;
    }

    -moz-appearance: textfield !important;

    :hover {
      -moz-appearance: auto !important;
      cursor: pointer;
    }

    :focus {
      -moz-appearance: auto !important;
    }
  }

  button {
    width: 100% !important;
    margin: 0 auto !important;
    padding: 0.75rem 0.5rem !important;
  }

  input::placeholder {
    text-align: center !important;
  }

  @media (max-width: 1027px) {
    width: 80%;
    .ui.small.input,
    button {
      width: 30% !important;
    }
  }

  @media (max-width: 810px) {
    .ui.small.input,
    button {
      width: 45% !important;
    }
  }

  @media (max-width: 620px) {
    .ui.small.input,
    button {
      width: 100% !important;
    }
  }

  @media (max-width: 525px) {
    width: 70%;
    justify-content: space-between !important;
    align-items: flex-end !important;
    flex-direction: row;
    padding: 0;

    input,
    label {
      margin-right: 0.5rem !important;
    }

    .field {
      margin-bottom: 0 !important;
    }

    .ui.small.input {
      width: 72px !important;
    }

    button {
      padding: 0.6rem 0.3rem !important;
      display: block;
    }
  }
`;

export const StyledFastingProgressWrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1027px) {
    width: 100%;
  }
`;
