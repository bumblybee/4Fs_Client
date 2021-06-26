import styled from "styled-components";

export const StyledDatePickerCellWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-family: "Lato", sans-serif;
  }

  .sleep-date-picker {
    width: 110px;
  }

  @media (max-width: 620px) {
    justify-content: flex-end;

    .sleep-date-picker {
      width: 104px;
      font-weight: 400;
    }
  }
`;

export const StyledDatePickerCell = styled.input`
  width: ${(props) => props.width};
  padding: 1rem 0;
  height: 35px;
  border-radius: 6px;
  border: 2px solid #ffffff66;
  background: #ffffff11;
  font-weight: ${(props) => (props.date ? "600" : "400")};
  color: ${(props) => (props.date ? "" : "#aaaaaa")};
  text-align: ${(props) => props.alignment};
  margin-left: 1.5rem;
  position: relative;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    color: transparent;
    background: none;
    z-index: 1;
    margin: 0;
  }

  ::-webkit-datetime-edit-text {
    padding: 0;
    margin: 0;
  }

  :before {
    color: transparent;
    background: none;
    display: block;
    font-family: "FontAwesome";
    content: "";

    width: 15px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: 4px;
    color: teal;
    font-weight: 400;
  }

  :focus {
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }

    :before {
      content: "\f073";
    }
  }

  :hover {
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }

    :before {
      content: "\f073";
    }
  }

  @media (max-width: 620px) {
    margin: 0;
    text-align: right;
    :before {
      content: "";
    }

    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-year-field {
      padding: 0.025em;
      margin: 0;
    }

    ::-webkit-calendar-picker-indicator {
      margin-left: -0.75rem;
    }

    :focus {
      :before {
        content: "";
      }
    }

    :hover {
      :before {
        content: "";
      }
    }
  }
`;
