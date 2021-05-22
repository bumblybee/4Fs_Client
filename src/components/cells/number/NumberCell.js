import React, { useState, useEffect, useRef } from "react";

import { Input } from "semantic-ui-react";

const NumberCell = (props) => {
  const [inputVal, setInputVal] = useState(0);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInputVal(e.target.value);
    makeData(e.target.value);
  };

  const makeData = (value) => {
    props.onSave(
      {
        [props.accessor]: value,
        [props.foreignAccessor]: props.foreignId,
      },
      props.id
    );
    inputRef.current = value;
  };

  useEffect(() => {
    setInputVal(props.val);
  }, [props.val]);

  return (
    <div
      style={{
        width: "55px",
        display: "flex",
        justifyContent: props.alignment,
        alignItems: props.alignment,
        cursor: props.disabled ? "default" : "pointer",
      }}
    >
      <Input
        transparent
        style={{ width: "35px" }}
        size="small"
        value={inputVal || props.val}
        onChange={handleChange}
        type="number"
        disabled={props.disabled}
      />
    </div>
  );
};

export default NumberCell;
