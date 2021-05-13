import styled from "styled-components";

export const StyledTimePickerCellWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0 0 0.25rem;
`;

export const StyledTimePickerCell = styled.input`
  width: ${(props) => props.width};
  height: 35px;
  border-radius: 6px;
  border: 2px solid #ffffff66;
  background: #ffffff11;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => (props.time ? "" : "#aaaaaaff")};
  cursor: pointer;
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
