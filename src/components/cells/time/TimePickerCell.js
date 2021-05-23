import React, { useState, useEffect } from "react";
import {
  StyledTimePickerCellWrapper,
  StyledTimePickerCell,
} from "./StyledTimePickerCell";

const TimePickerCell = (props) => {
  const [time, setTime] = useState(null);

  const handleChange = (e) => {
    setTime(e.target.value);
    makeData(e);
  };

  //TODO: Sort by date asc if hours slept value
  const makeData = (e) => {
    props.onSave(
      {
        [props.accessor]: e.target.value,
        hoursSlept: props.sleepHours,
      },
      props.id
    );
    // setTime(null);
  };

  useEffect(() => {
    setTime(props.val);
  }, [props.val]);

  return (
    <StyledTimePickerCellWrapper>
      <StyledTimePickerCell
        value={time || ""}
        onChange={handleChange}
        type="time"
        time={time}
        width={props.width}
      />
    </StyledTimePickerCellWrapper>
  );
};

export default TimePickerCell;
