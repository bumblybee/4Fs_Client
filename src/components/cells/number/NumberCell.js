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

  useEffect(() => {
    setInputVal(props.val);
  }, [props.val]);
  console.log(inputVal);
  return (
    <div
      style={{
        width: "55px",
        display: "flex",
        justifyContent: props.alignment,
        alignItems: props.alignment,
      }}
    >
      <Input
        transparent
        style={{ width: "40px" }}
        size="small"
        value={inputVal || 0}
        onChange={(e) => setInputVal(e.target.value)}
        onBlur={makeData}
        type="number"
      />
    </div>
  );
};

export default NumberCell;
