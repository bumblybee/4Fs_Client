import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const StyledSystemHeaderWrapper = styled.div`
  margin-bottom: 0.25rem;

  > div {
    width: 70%;
    margin: 0 auto 1rem;

    @media (max-width: 620px) {
      width: 90%;
      font-size: 1.05rem;
    }
  }
`;

export const StyledStartDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;

  > div {
    border: 2px solid #ffffffcc;
    border-radius: 6px;
    padding: 0.52rem;
    color: #ffffffcc;
    cursor: default;
    background: #b76ab7cc;

    @media (max-width: 620px) {
      font-size: 0.925rem;
    }
  }
`;

export const StyledDatePicker = styled.input`
  height: 37.5px;
  border-radius: 6px;
  border: 2px solid #ffffffcc;
  background: #b76ab7cc;
  font-size: 0.95rem;
  color: #ffffffdd;
  text-align: center;
  margin-left: 0.5rem;

  ::-webkit-calendar-picker-indicator {
    margin-left: 0px;
    filter: invert(1);
    height: 1.25rem;
    width: 1.25rem;
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

export const StyledButton = styled(Button)`
  background: #b76ab7ee !important;
  border: 2px solid #ffffff88 !important;

  color: #ffecff !important;
  margin-left: 0.5rem !important;

  :hover {
    background: #bf81bfbb !important;
    border: 2px solid #ffffff55 !important;
    color: #ffecffcc !important;
  }
`;
