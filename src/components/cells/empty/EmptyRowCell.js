import React, { useState, useEffect, useRef } from "react";
import { StyledEmptyCell } from "./StyledEmptyRowCell";

const EmptyRowCell = ({ children, ...props }) => {
  const [editing, setEditing] = useState(false);

  const [blankCellVal, setBlankCellVal] = useState("");

  const inputRef = useRef(null);

  const makeData = () => {
    if (blankCellVal !== "") {
      props.onSave(
        {
          [props.accessor]: blankCellVal,
          [props.foreignAccessor]: props.foreignId,
        },
        props.id
      );
    }

    setEditing(false);
    inputRef.current = blankCellVal;
    setBlankCellVal("");
  };

  // TODO: Break input into own component
  const renderCell = () => {
    if (editing) {
      return (
        <input
          ref={inputRef}
          value={blankCellVal || ""}
          onChange={(e) => setBlankCellVal(e.target.value)}
          onBlur={makeData}
          disabled={props.disabled}
        />
      );
    }
    return (
      <p onClick={() => setEditing(true)}>
        {blankCellVal || props.placeholder}
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
    setBlankCellVal(blankCellVal);
  }, [setBlankCellVal, blankCellVal]);

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

export default EmptyRowCell;
