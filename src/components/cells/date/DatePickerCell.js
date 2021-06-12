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

    // If new row data, we update parent state and call api in parent when we have data for entire row
    if (props.updateRow) {
      props.updateRow(props.accessor, e.target.value);
      return;
    }

    makeData(e);
  };

  const makeData = (e) => {
    if (e.target.value !== "" && props.onSave) {
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
