import React, { useState } from "react";
import { createFasting, getFasting } from "../../../api/fasting/fastingApi";
import useCRUD from "../../../hooks/useCRUD";
import moment from "moment";
import FastingProgress from "./FastingProgress";
import FastingMessage from "./FastingMessage";
import Gauge from "../gauge/Gauge";
import { Form, Button } from "semantic-ui-react";
import {
  StyledFastingWrapper,
  StyledFastingCalcWrapper,
  StyledForm,
  StyledFastingProgressWrapper,
} from "./StyledFasting";

const FastingWindow = () => {
  const [fasting, handleSave] = useCRUD(getFasting, createFasting);
  const [percentage, setPercentage] = useState(null);
  const [todayHours, setTodayHours] = useState(0);
  const [goalHours, setGoalHours] = useState(0);

  const [fastingWindow, setFastingWindow] = useState({
    goalWindow: "",
    todayWindow: "",
    performed: null,
  });

  const handleClick = () => {
    const performed = calcPercentagePerformed(
      fastingWindow.todayWindow,
      fastingWindow.goalWindow
    );

    setFastingWindow({ ...fastingWindow, performed });
    setTodayHours(fastingWindow.todayWindow);
    setGoalHours(fastingWindow.goalWindow);
    setPercentage(performed * 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = moment().format("YYYY-MM-DD");

    const data = { date, ...fastingWindow };

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
              name="goal"
              id="goal"
              size="small"
              placeholder="0"
              required
              onChange={(e) =>
                setFastingWindow({
                  ...fastingWindow,
                  goalWindow: Number(e.target.value),
                })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Today's Window</label>
            <Form.Input
              type="number"
              min="1"
              max="24"
              name="today"
              id="today"
              size="small"
              placeholder="0"
              required
              onChange={(e) =>
                setFastingWindow({
                  ...fastingWindow,
                  todayWindow: Number(e.target.value),
                })
              }
            />
          </Form.Field>

          <Button color="green" toggle compact size="" onClick={handleClick}>
            Run
          </Button>
        </StyledForm>
        <Gauge
          percentage={percentage}
          today={todayHours}
          goal={goalHours}
          fasting={fasting}
        />
        <FastingMessage percentage={percentage} />
      </StyledFastingCalcWrapper>

      <StyledFastingProgressWrapper>
        <FastingProgress fastingProgress={fasting} percentage={percentage} />
      </StyledFastingProgressWrapper>
    </StyledFastingWrapper>
  );
};

export default FastingWindow;
