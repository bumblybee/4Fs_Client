import React, { useState, useEffect } from "react";
import { StyledTimePickerCell } from "./StyledTimePickerCell";

const TimePickerCell = (props) => {
  const [time, setTime] = useState("");
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
  };

  const renderCell = () => {
    if (editing) {
      return (
        <StyledTimePickerCell
          value={time}
          onChange={handleChange}
          type="time"
          width={props.width}
        />
      );
    } else {
      return convertTime();
    }
  };

  const convertTime = () => {
    if (time) {
      let hour = time.split(":")[0];
      const min = time.split(":")[1];
      const amPm = hour < 12 ? "AM" : "PM";
      hour = hour % 12;

      return `${hour}:${min} ${amPm}`;
    } else {
      return "";
    }
  };

  useEffect(() => {
    setTime(props.val || null);
  }, []);

  console.log(convertTime());

  return (
    <div
      onClick={() => setEditing(!editing)}
      onBlur={() => setEditing(!editing)}
    >
      {renderCell()}
    </div>
  );
};

export default TimePickerCell;
