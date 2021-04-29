import React, { useState, useEffect, useRef } from "react";

import { Input } from "semantic-ui-react";

const DatePickerCell = (props) => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
    // props.onSave()
    console.log(date);
  };

  return (
    <Input
      value={date || props.val}
      onChange={(e) => handleChange(e)}
      style={{ width: "65px" }}
      type="date"
    />
  );
};

export default DatePickerCell;
