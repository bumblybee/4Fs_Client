import React, { useState, useEffect, useRef } from "react";

import { Input } from "semantic-ui-react";

const DatePickerCell = (props) => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    // setDate(e.target.value);
    // props.onSave(
    //   {
    //     [props.accessor]: date,
    //   },
    //   props.id
    // );
    // console.log(date);
  };

  return (
    <input
      value={date}
      onChange={(e) => handleChange(e)}
      style={{
        width: "144px",
        padding: "1rem 0.25rem",
        height: "35px",
        borderRadius: "6px",
        border: "2px solid #ffffff66",
        background: "#ffffff77",
        // color: "#fff",
        fontWeight: "600",
      }}
      type="date"
    />
  );
};

export default DatePickerCell;
