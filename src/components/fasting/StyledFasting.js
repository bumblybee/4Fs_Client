import styled from "styled-components";
import { Form, Segment } from "semantic-ui-react";

export const StyledFastingWrapper = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledFastingCalcWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 90%;
  margin: 1rem auto 4rem;
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
  width: 100%;
`;

export const StyledProgressToggle = styled(Segment)`
  color: green;
  font-weight: 600;
  box-shadow: none;
  cursor: pointer;
  padding: 0.5rem 0 0 0.2rem !important;
  font-family: "Lato";
  width: 25%;

  i {
    color: green;
  }
`;
