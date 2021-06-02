import React, { useState, useEffect } from "react";
import {
  StyledTimePickerCellWrapper,
  StyledTimePickerCell,
} from "./StyledTimePickerCell";

const TimePickerCell = (props) => {
  const [time, setTime] = useState(null);

  const handleChange = (e) => {
    setTime(e.target.value);

    props.setState &&
      props.setState({
        ...props.state,
        [props.accessor]: e.target.value,
      });
  };

  const makeData = (e) => {
    if (props.onSave) {
      // If props.state, want to call api with parent state, else call api with local state
      if (props.state) {
        props.onSave(props.state, props.id, true);
      } else {
        props.onSave(
          {
            [props.accessor]: e.target.value,
          },
          props.id
        );
      }
    }
  };

  useEffect(() => {
    setTime(props.val);
  }, [props.val]);

  return (
    <StyledTimePickerCellWrapper>
      <StyledTimePickerCell
        value={time || ""}
        onChange={handleChange}
        onBlur={makeData}
        type="time"
        time={time}
        width={props.width}
      />
    </StyledTimePickerCellWrapper>
  );
};

export default TimePickerCell;
