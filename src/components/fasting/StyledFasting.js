import styled from "styled-components";
import { Form } from "semantic-ui-react";

export const StyledFastingRevverWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 90%;
  margin: 0 auto;
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