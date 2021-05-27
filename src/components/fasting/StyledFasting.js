import styled from "styled-components";
import { Form, Segment } from "semantic-ui-react";
import TableComponent from "../table/TableComponent";

export const StyledFastingWrapper = styled.div`
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const StyledFastingCalcWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 90%;
  margin: 1rem auto 6rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;

  input {
    text-align: center;
  }
`;

export const StyledFastingProgressWrapper = styled.div`
  width: 83%;
  margin: 0 auto;
`;

export const StyledTable = styled(TableComponent)`
  thead th {
    padding-bottom: 0 !important;
  }
`;
