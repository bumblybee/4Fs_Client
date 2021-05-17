import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const StyledStartDateContainer = styled.div`
  width: 26%;
  margin: 0 auto;
  display: flex;
`;

export const StyledButton = styled(Button)`
  background: #ffffffee !important;
  color: purple !important;

  :hover {
    background: #ffffff !important;
  }
`;

export const StyledDatePickerWrapper = styled.input`
  margin-left: 0.5rem;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

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
  color: ${(props) => (props.date ? "" : "#aaaaaa")};
  text-align: center;
  margin-left: 1.5rem;

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
