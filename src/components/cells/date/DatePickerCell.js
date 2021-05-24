import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  StyledDatePickerCellWrapper,
  StyledDatePickerCell,
} from "./StyledDatePickerCell";

const DatePickerCell = (props) => {
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    makeData(e);
  };
  // Todo: ref so when date set, focus follows input or goes away - better yet just figure out sorting

  const makeData = (e) => {
    if (e.target.value !== "") {
      props.onSave(
        {
          [props.accessor]: e.target.value,
        },
        props.id
      );
    }
  };

  useEffect(() => {
    setDate(props.val);
  }, [props.val]);

  return (
    <StyledDatePickerCellWrapper>
      {props.label && <label>{props.label}</label>}
      <StyledDatePickerCell
        className={props.className}
        onChange={handleChange}
        value={date || ""}
        max={moment().format("YYYY-MM-DD")}
        type="date"
        date={date}
        width={props.width}
        alignment={props.alignment}
      />
    </StyledDatePickerCellWrapper>
  );
};

export default DatePickerCell;
