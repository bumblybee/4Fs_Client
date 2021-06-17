import styled from "styled-components";

export const StyledTimePickerCellWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0 0 0.25rem;
`;

export const StyledTimePickerCell = styled.input`
  /* width: ${(props) => (props.time ? "auto" : "65px")}; */
  height: 35px;
  border-radius: 6px;
  border: 2px solid #ffffff66;
  background: #ffffff11;

  color: ${(props) => (props.time ? "" : "#aaaaaaff")};
  cursor: pointer;
  margin: 0 0 0 1.5rem;

  ::-webkit-calendar-picker-indicator {
    margin-left: 0px;
    filter: ${(props) => props.time && "invert(1)"};
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

  /* :before {
    content: "Select time";
    margin-right: 0.6em;
    color: #9d9d9d;
  } */
`;
