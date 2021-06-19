import styled from "styled-components";

export const StyledTimePickerCellWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0 0 0.25rem;

  @media (max-width: 620px) {
    justify-content: flex-end;
    padding: 0;
    /* margin-right: 0.5rem; */
  }
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
  position: relative;
  /* ::-webkit-calendar-picker-indicator { */
  /* margin-left: 0px; */
  /* filter: ${(props) => props.time && "invert(1)"}; */
  /* filter: invert(1); */

  /* } */
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    color: transparent;
    background: none;
    z-index: 1;
    margin: 0;
    margin-left: -0.25rem;
    /* filter: invert(1); */
  }

  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-ampm-field {
    padding: 0;
    margin: 0;
    /* color: teal; */
  }

  :before {
    color: transparent;
    background: none;
    display: block;
    font-family: "FontAwesome";
    content: "";
    /* This is the calendar icon in FontAwesome */
    width: 15px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: 2px;
    color: teal;
    cursor: pointer;
  }

  :focus {
    ::-webkit-calendar-picker-indicator {
      filter: invert(0);
      cursor: pointer;
    }

    :before {
      content: "\f017";
    }
  }

  :hover {
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }

    :before {
      content: "\f017";
    }
  }

  @media (max-width: 620px) {
    margin: 0;

    :before {
      content: "\f017";
    }
  }

  /* :before {
    content: "Select time";
    margin-right: 0.6em;
    color: #9d9d9d;
  } */
`;
