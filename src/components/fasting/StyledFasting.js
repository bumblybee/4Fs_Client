import styled from "styled-components";
import { Form, Segment } from "semantic-ui-react";
import TableComponent from "../table/TableComponent";

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
  width: 60%;
  margin: 0 auto;

  input {
    text-align: center !important;
    /* padding: 0.5rem 0 !important; */
    margin: 0 !important;
    ::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  .ui.small.input {
    width: 60% !important;
  }

  button {
    width: 60% !important;
    margin: 0 auto !important;
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
