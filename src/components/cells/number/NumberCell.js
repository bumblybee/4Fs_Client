import React, { useState, useEffect } from "react";
import { StyledNumberCell } from "./StyledNumberCell";
import { Input } from "semantic-ui-react";

const NumberCell = (props) => {
  const [inputVal, setInputVal] = useState(props.val);

  const handleChange = (e) => {
    setInputVal(e.target.value);
    makeData(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  const makeData = (value) => {
    value &&
      props.onSave(
        {
          [props.accessor]: value,
          [props.foreignAccessor]: props.foreignId,
        },
        props.id
      );
  };
  useEffect(() => {
    setInputVal(props.val);
  }, [props.val]);

  return (
    <StyledNumberCell
      disabled={props.disabled}
      alignment={props.alignment}
      className={`number ${props.className}`}
    >
      <Input
        transparent
        size="small"
        value={inputVal}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="number"
        min="0"
        max={props.accessor === "goal" && 7}
        disabled={props.disabled}
      />
    </StyledNumberCell>
  );
};

export default NumberCell;
