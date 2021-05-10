import React, { useState, useEffect, useRef } from "react";
// import { StyledTimePickerCell } from "./StyledDatePickerCell";

const TimePickerCell = (props) => {
  const [time, setTime] = useState("");

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
    <input
      value={time}
      onChange={(e) => setTime(e.target.value)}
      type="time"
      width={props.width}
      // onFocus={(e) => (e.target.type = "date")}
      // onBlur={(e) => (e.target.type = "text")}
    />
  );
};

export default TimePickerCell;
