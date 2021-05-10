import React, { useState, useEffect, useRef } from "react";
import { StyledTimePickerCell } from "./StyledTimePickerCell";

const TimePickerCell = (props) => {
  const [time, setTime] = useState("");

  const handleChange = (e) => {
    setTime(e.target.value);
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
    <StyledTimePickerCell
      value={time}
      onChange={handleChange}
      type="time"
      width={props.width}
    />
  );
};

export default TimePickerCell;
