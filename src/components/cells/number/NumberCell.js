import React, { useState, useEffect, useRef } from "react";

import { Input } from "semantic-ui-react";

const NumberCell = (props) => {
  const [inputVal, setInputVal] = useState(0);
  const inputRef = useRef(null);

  const makeData = () => {
    if (inputRef.current != inputVal) {
      let updateVal = inputVal;

      if (inputVal === "") {
        updateVal = null;
      }

      props.onSave(
        {
          [props.accessor]: updateVal,
        },
        props.id
      );
      inputRef.current = inputVal;
    }
  };
  console.log(inputVal);
  return (
    <Input
      value={inputVal || props.val}
      onChange={(e) => setInputVal(e.target.value)}
      onBlur={makeData}
      style={{ width: "65px" }}
      value={inputVal || props.val}
      type="number"
    />
  );
};

export default NumberCell;
