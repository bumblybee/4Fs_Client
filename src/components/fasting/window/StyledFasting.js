import styled from "styled-components";
import { Form, Segment } from "semantic-ui-react";
import TableComponent from "../../table/TableComponent";

export const StyledFastingWrapper = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledFastingCalcWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1.5fr;
  width: 70%;
  margin: 0 auto 1.35rem;
  border: 1px solid #22242626;
  border-radius: 0.27rem;
  padding: 2rem 1.5rem 1.5rem;
  background: #fff;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 0.25rem 1rem 0.25rem;
  border-radius: 0.27rem;

  input {
    text-align: center !important;
    padding: 0.5rem 0.25rem 0.5rem 0 !important;
    ::-webkit-inner-spin-button {
      padding: 0 !important;
      opacity: 1;
    }
  }

  .ui.small.input {
    width: 55% !important;
  }

  button {
    width: 55% !important;
    margin: 0 auto !important;
    padding: 0.75rem 0.5rem !important;
  }

  input::placeholder {
    text-align: center !important;
  }
`;

export const StyledFastingProgressWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const StyledTable = styled(TableComponent)`
  thead th {
    padding: 0 !important;
  }
`;
