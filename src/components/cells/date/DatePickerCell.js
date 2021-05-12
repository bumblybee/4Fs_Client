import React, { useState, useEffect } from "react";
import {
  StyledDatePickerCellWrapper,
  StyledDatePickerCell,
} from "./StyledDatePickerCell";

const DatePickerCell = (props) => {
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    // makeData(e);
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
    <StyledDatePickerCellWrapper>
      <StyledDatePickerCell
        value={date || ""}
        onChange={handleChange}
        onBlur={makeData}
        type="date"
        date={date}
        width={props.width}
        alignment={props.alignment}
      />
    </StyledDatePickerCellWrapper>
  );
};

export default DatePickerCell;
