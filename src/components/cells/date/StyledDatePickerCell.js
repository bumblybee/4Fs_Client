import styled from "styled-components";

export const StyledDatePickerCell = styled.input`
  width: ${(props) => props.width};
  padding: 1rem 0;
  height: 35px;
  border-radius: 6px;
  border: 2px solid #ffffff66;
  background: #ffffff77;
  font-size: 0.95rem;
  font-weight: ${(props) => (props.date ? "600" : "500")};
  color: ${(props) => (props.date ? "" : "#aaaaaaff")};

  ::-webkit-calendar-picker-indicator {
    margin-left: 0px;
    appearance: none;
    display: none;
  }

  :focus {
    ::-webkit-calendar-picker-indicator {
      display: block;
      appearance: auto;
      cursor: pointer;
    }
  }
`;
