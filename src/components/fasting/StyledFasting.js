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
  grid-template-columns: 1fr 3fr 1fr;
  width: 80%;
  margin: 0 auto 1.5rem;
  border: 1px solid #22242626;
  border-radius: 4px;
  padding: 2.25rem 1.5rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;

  input {
    text-align: center !important;
  }

  input::placeholder {
    text-align: center !important;
  }
`;

export const StyledFastingProgressWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const StyledTable = styled(TableComponent)`
  thead th {
    padding: 0 !important;
  }
`;
