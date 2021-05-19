import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const StyledStartDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    border: 2px solid #ffffffcc;
    border-radius: 6px;
    padding: 0.5rem;
    color: #ffffffcc;
    cursor: default;
  }

  label {
    font-family: "Lato";
  }
`;

export const StyledDatePicker = styled.input`
  padding: 1rem 0;
  height: 35px;
  border-radius: 6px;
  border: 2px solid #ffffff66;
  background: #ffffff55;
  font-size: 0.95rem;
  color: #ffffffdd;
  text-align: center;
  margin-left: 0.5rem;

  ::-webkit-calendar-picker-indicator {
    margin-left: 0px;
    filter: invert(1);
  }

  :focus {
    ::-webkit-calendar-picker-indicator {
      filter: invert(0);
      cursor: pointer;
    }
  }

  :hover {
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
      filter: invert(0);
    }
  }
`;

export const StyledButton = styled(Button)`
  background: #bf81bf !important;
  border: 1px solid transparent !important;

  color: #ffecff !important;
  margin-left: 0.5rem !important;

  :hover {
    background: #bf81bfbb !important;
    border: 1px solid #ffffff55 !important;
  }
`;
