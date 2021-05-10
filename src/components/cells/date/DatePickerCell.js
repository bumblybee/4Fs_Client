import React, { useState, useEffect, useRef } from "react";
import { StyledDatePickerCell } from "./StyledDatePickerCell";

const DatePickerCell = (props) => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
    makeData(e);
  };

  const makeData = (e) => {
    props.onSave(
      {
        [props.accessor]: e.target.value,
      },
      props.id
    );
  };

  return (
    <StyledDatePickerCell
      value={date}
      onChange={handleChange}
      type="date"
      width={props.width}
      // onFocus={(e) => (e.target.type = "date")}
      // onBlur={(e) => (e.target.type = "text")}
    />
  );
};

export default DatePickerCell;
