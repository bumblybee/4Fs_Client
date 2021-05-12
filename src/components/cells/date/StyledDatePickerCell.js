import styled from "styled-components";

export const StyledDatePickerCellWrapper = styled.div`
  /* display: flex;
  justify-content: center; */
  width: 100%;
`;

export const StyledDatePickerCell = styled.input`
  width: ${(props) => props.width};
  padding: 1rem 0;
  height: 35px;
  border-radius: 6px;
  border: 2px solid #ffffff66;
  background: #ffffff55;
  font-size: 0.95rem;
  font-weight: ${(props) => (props.date ? "600" : "500")};
  color: ${(props) => (props.date ? "" : "#aaaaaa")};
  text-align: ${(props) => props.alignment};

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
`;
