import React, { useState, useEffect, useRef } from "react";
import { StyledDatePickerCell } from "./StyledDatePickerCell";

const DatePickerCell = (props) => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    // setDate(e.target.value);
    // props.onSave(
    //   {
    //     [props.accessor]: date,
    //   },
    //   props.id
    // );
    // console.log(date);
  };

  return (
    <StyledDatePickerCell
      value={date}
      onChange={(e) => setDate(e.target.value)}
      type="date"
      width={props.width}
      // onFocus={(e) => (e.target.type = "date")}
      // onBlur={(e) => (e.target.type = "text")}
    />
  );
};

export default DatePickerCell;
