import React, { useState, useEffect } from "react";
import { StyledDatePickerCell } from "./StyledDatePickerCell";

const DatePickerCell = (props) => {
  const [date, setDate] = useState(null);

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
    setDate(null);
  };

  useEffect(() => {
    setDate(props.val);
  }, [props.val]);

  return (
    <div>
      <StyledDatePickerCell
        value={date || ""}
        onChange={handleChange}
        type="date"
        width={props.width}
      />
    </div>
  );
};

export default DatePickerCell;
