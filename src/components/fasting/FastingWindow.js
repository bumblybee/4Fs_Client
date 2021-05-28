import React, { useState, useEffect } from "react";
import { createFasting, getFasting } from "../../api/fasting/fastingApi";
import useCRUD from "../../hooks/useCRUD";
import moment from "moment";
import FastingProgress from "./FastingProgress";
import FastingMessage from "./FastingMessage";
import Gauge from "./Gauge";
import { Form, Button, Segment } from "semantic-ui-react";
import {
  StyledFastingWrapper,
  StyledFastingCalcWrapper,
  StyledForm,
  StyledFastingProgressWrapper,
} from "./StyledFasting";

const FastingWindow = () => {
  const [fasting, handleSave] = useCRUD(getFasting, createFasting);
  const [percentage, setPercentage] = useState(null);
  const [hours, setHours] = useState("");
  const [run, setRun] = useState(false);
  const [window, setWindow] = useState({
    goalWindow: "",
    todayWindow: "",
    performed: null,
  });

  const handleClick = () => {
    const performed = calcPercentagePerformed(
      window.todayWindow,
      window.goalWindow
    );

    setWindow({ ...window, performed });
    setHours(window.todayWindow);
    setPercentage(performed * 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = moment().format("YYYY-MM-DD");

    const data = { date, ...window };

    handleSave(data);
  };

  const calcPercentagePerformed = (today, goal) => {
    const quotient = today / goal;
    const fixedQuotient = quotient.toFixed(2);
    return Number(fixedQuotient);
  };

  return (
    <StyledFastingWrapper>
      <StyledFastingCalcWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <Form.Field>
            <label>Goal Window</label>
            <Form.Input
              type="number"
              min="1"
              max="24"
              name=""
              id=""
              size="small"
              placeholder="0"
              required
              onChange={(e) =>
                setWindow({ ...window, goalWindow: e.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Today's Window</label>
            <Form.Input
              type="number"
              min="1"
              max="24"
              name=""
              id=""
              size="small"
              placeholder="0"
              required
              onChange={(e) =>
                setWindow({ ...window, todayWindow: e.target.value })
              }
            />
          </Form.Field>

          <Button
            color="grey"
            toggle
            compact
            size="large"
            onClick={handleClick}
          >
            Run
          </Button>
        </StyledForm>
        <Gauge percentage={percentage} hours={hours} fasting={fasting} />
        <FastingMessage percentage={percentage} />
      </StyledFastingCalcWrapper>
      <StyledFastingProgressWrapper>
        <FastingProgress fastingProgress={fasting} percentage={percentage} />
      </StyledFastingProgressWrapper>
    </StyledFastingWrapper>
  );
};

export default FastingWindow;
