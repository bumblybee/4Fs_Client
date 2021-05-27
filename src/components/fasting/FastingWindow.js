import React, { useState } from "react";
import FastingProgress from "./FastingProgress";
import FastingMessage from "./FastingMessage";
import { Form, Button } from "semantic-ui-react";
import {
  StyledFastingWrapper,
  StyledFastingRevverWrapper,
  StyledForm,
} from "./StyledFasting";

const FastingWindow = () => {
  const [run, setRun] = useState(false);

  const handleClick = () => {
    setRun(true);
    setTimeout(() => {
      setRun(false);
    }, 600);
  };

  return (
    <StyledFastingRevverWrapper>
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

        <Button color="grey" toggle active={run} compact onClick={handleClick}>
          Run
        </Button>
      </StyledForm>
      <div></div>
      <FastingMessage />
    </StyledFastingRevverWrapper>
  );
};

export default FastingWindow;
