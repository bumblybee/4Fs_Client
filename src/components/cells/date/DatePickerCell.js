import React, { useState, useEffect } from "react";
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
  // Todo: Remove startDate check once figured out
  const makeData = (e) => {
    if (e.target.value !== "" && props.accessor !== "startDate") {
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
        value={date || ""}
        onChange={handleChange}
        // onBlur={makeData}
        type="date"
        date={date}
        width={props.width}
        alignment={props.alignment}
      />
    </StyledDatePickerCellWrapper>
  );
};

export default DatePickerCell;
