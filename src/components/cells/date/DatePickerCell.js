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
        date={date}
        width={props.width}
        alignment={props.alignment}
      />
    </div>
  );
};

export default DatePickerCell;
