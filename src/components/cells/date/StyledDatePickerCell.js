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
    width: fit-content;
    .sleep-date-picker {
      /* font-size: 0.9rem !important; */
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
  background: #ffffff55;
  font-weight: ${(props) => (props.date ? "600" : "400")};
  color: ${(props) => (props.date ? "" : "#aaaaaa")};
  text-align: ${(props) => props.alignment};
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

  @media (max-width: 620px) {
    text-align: left;
    margin-left: 0;
    width: fit-content;

    ::-webkit-calendar-picker-indicator {
      filter: invert(0);
    }
  }
`;
