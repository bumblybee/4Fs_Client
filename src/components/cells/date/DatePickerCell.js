import React, { useState, useEffect, useRef } from "react";

import { Input } from "semantic-ui-react";

const DatePickerCell = (props) => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
    props.onSave(
      {
        [props.accessor]: date,
      },
      props.id
    );
    console.log(date);
  };

  return (
    <input
      value={date}
      onChange={(e) => handleChange(e)}
      style={{ width: "125px", height: "35px" }}
      type="date"
    />
  );
};

export default DatePickerCell;
