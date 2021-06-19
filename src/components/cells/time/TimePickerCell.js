import React, { useState, useEffect } from "react";
import {
  StyledTimePickerCellWrapper,
  StyledTimePickerCell,
} from "./StyledTimePickerCell";

const TimePickerCell = (props) => {
  const [time, setTime] = useState(null);

  const handleChange = (e) => {
    setTime(e.target.value);

    // If new row data, we update parent state and call api in parent when we have data for entire row
    if (props.updateRow) {
      props.updateRow(props.accessor, e.target.value);

      return;
    }
  };

  const makeData = (e) => {
    if (props.onSave && e.target.value !== "") {
      props.onSave(
        {
          [props.accessor]: e.target.value,
        },
        props.id
      );
    }
  };

  useEffect(() => {
    setTime(props.val);
  }, [props.val]);

  return (
    <StyledTimePickerCellWrapper hour={time && time.split(":")[0]}>
      <StyledTimePickerCell
        value={time || ""}
        onChange={handleChange}
        onBlur={makeData}
        type="time"
        time={time}
      />
    </StyledTimePickerCellWrapper>
  );
};

export default TimePickerCell;
