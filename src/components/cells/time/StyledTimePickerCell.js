import styled from "styled-components";

export const StyledTimePickerCellWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 0 0.25rem;

  @media (max-width: 620px) {
    justify-content: flex-end;
    padding: 0;
    width: 88px;
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
    text-align: right !important;
    width: inherit;
    ::-webkit-calendar-picker-indicator {
      margin-left: -0.5rem;
    }

    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-minute-field,
    ::-webkit-datetime-edit-ampm-field {
      padding: 0;
      margin: 0;
    }

    :before {
      content: "";
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
