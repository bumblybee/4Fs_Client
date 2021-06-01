import React, { useState, useEffect, useRef } from "react";
import { StyledEmptyCell } from "./StyledEmptyCell";

const EmptyCell = ({ children, ...props }) => {
  const [editing, setEditing] = useState(false);

  const [emptyCellVal, setEmptyCellVal] = useState("");

  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      makeData();
    }
  };

  const makeData = () => {
    if (emptyCellVal !== "") {
      props.onSave(
        {
          [props.accessor]: emptyCellVal,
          [props.foreignAccessor]: props.foreignId,
        },
        props.id
      );
    }

    setEditing(false);
    inputRef.current = emptyCellVal;
    setEmptyCellVal("");
  };

  // TODO: Break input into own component
  const renderCell = () => {
    if (editing) {
      return (
        <input
          ref={inputRef}
          value={emptyCellVal || ""}
          onChange={(e) => setEmptyCellVal(e.target.value)}
          onBlur={makeData}
          onKeyDown={handleKeyPress}
          disabled={props.disabled}
        />
      );
    }
    return (
      <p onClick={() => setEditing(true)}>
        {emptyCellVal || props.placeholder}
      </p>
    );
  };

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  useEffect(() => {
    setEmptyCellVal(emptyCellVal);
  }, [setEmptyCellVal, emptyCellVal]);

  return (
    <StyledEmptyCell
      onFocus={() => setEditing(true)}
      onClick={() => setEditing(true)}
      onBlur={() => setEditing(false)}
      tabIndex="0"
      disabled={props.disabled}
      aligntext={props.aligntext}
    >
      {renderCell()}
    </StyledEmptyCell>
  );
};

export default EmptyCell;
