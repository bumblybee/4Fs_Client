import React from "react";
import FastingMessage from "./FastingMessage";
import { Form, Button } from "semantic-ui-react";
import { StyledFastingWrapper, StyledForm } from "./StyledFasting";

const FastingWindow = () => {
  return (
    <StyledFastingWrapper>
      <StyledForm>
        <Form.Field>
          <label>Goal Hours</label>
          <Form.Input
            type="number"
            min="1"
            max="24"
            name=""
            id=""
            size="small"
          />
        </Form.Field>
        <Form.Field>
          <label>Today's Hours</label>
          <Form.Input
            type="number"
            min="1"
            max="24"
            name=""
            id=""
            size="small"
          />
        </Form.Field>

        <Button color="red">Run</Button>
      </StyledForm>
      <div></div>
      <FastingMessage />
    </StyledFastingWrapper>
  );
};

export default FastingWindow;
