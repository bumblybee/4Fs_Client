import React, { useState, useEffect } from "react";
import { StyledTimePickerCell } from "./StyledTimePickerCell";

const TimePickerCell = (props) => {
  const [time, setTime] = useState(null);
  const [editing, setEditing] = useState(false);

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
    setTime(null);
  };

  const convertTime = () => {
    if (time) {
      let hour = time.split(":")[0];
      const min = time.split(":")[1];
      const amPm = hour < 12 ? "AM" : "PM";
      hour = hour % 12;

      return `${hour}:${min} ${amPm}`;
    } else {
      return;
    }
  };

  useEffect(() => {
    setTime(props.val);
  }, [props.val]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "max-content",
        padding: "0 0 0 0.25rem",
      }}
    >
      <StyledTimePickerCell
        value={time || ""}
        onChange={handleChange}
        type="time"
        width={props.width}
      />
    </div>
  );
};

export default TimePickerCell;
