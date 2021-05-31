import styled from "styled-components";
import { Form, Segment } from "semantic-ui-react";
import TableComponent from "../table/TableComponent";

export const StyledFastingWrapper = styled.div`
  height: 100%;
  padding: 0.75rem 1rem;
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
  /* background: #000000dd; */
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 55%;
  margin: 0 auto;

  label {
    /* color: #fff !important; */
  }

  input {
    text-align: center !important;
    /* padding: 0 !important; */
  }

  .ui.small.input {
    width: 75% !important;
  }

  button {
    width: 75% !important;
    margin: 0 auto !important;
    display: block;
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
