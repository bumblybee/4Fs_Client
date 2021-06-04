import styled from "styled-components";
import { Form } from "semantic-ui-react";
import TableComponent from "../../table/TableComponent";

export const StyledFastingWrapper = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledFastingCalcWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto 1.35rem;
  border: 1px solid #22242626;
  border-radius: 0.27rem;
  padding: 2rem 1.5rem 1.5rem 1rem;
  background: #fff;

  @media (max-width: 1027px) {
    width: 100%;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin: 0 auto;
  padding: 0.25rem 1rem 0.25rem;

  input {
    text-align: center !important;
    padding: 0.5rem 0.25rem 0.5rem 0 !important;
    ::-webkit-inner-spin-button {
      padding: 0 !important;
      opacity: 1;
    }
  }

  .ui.small.input {
    width: 25% !important;
  }

  button {
    width: 35% !important;
    margin: 0 auto !important;
    padding: 0.75rem 0.5rem !important;
  }

  input::placeholder {
    text-align: center !important;
  }

  @media (max-width: 1027px) {
    width: 25%;
  }

  .ui.small.input,
  button {
    width: 100% !important;
  }
`;

export const StyledFastingProgressWrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1027px) {
    width: 100%;
  }
`;

export const StyledTable = styled(TableComponent)`
  thead th {
    padding: 0 !important;
  }
`;
