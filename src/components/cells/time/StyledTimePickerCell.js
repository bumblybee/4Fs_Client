import styled from "styled-components";

export const StyledTimePickerCell = styled.input`
  width: ${(props) => props.width};
  padding: 1rem 0;
  height: 35px;
  border-radius: 6px;
  border: 2px solid #ffffff66;
  background: #ffffff11;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${(props) => (props.time ? "" : "#aaaaaaff")};
  cursor: text;

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
