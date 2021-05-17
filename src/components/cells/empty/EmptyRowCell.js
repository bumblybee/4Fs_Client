import React, { useState, useEffect, useRef } from "react";
import { StyledEmptyCell, StyledWrapper } from "./StyledEmptyRowCell";

const EmptyRowCell = ({ children, ...props }) => {
  const [editing, setEditing] = useState(false);

  const [blankCellVal, setBlankCellVal] = useState("");

  const inputRef = useRef(null);

  const makeData = () => {
    if (blankCellVal !== "") {
      let updateVal = blankCellVal;
      if (blankCellVal === "") {
        updateVal = null;
      }

      props.onSave(
        {
          [props.accessor]: blankCellVal,
          systemWeekId: props.systemWeekId,
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
      {...props}
      onFocus={() => setEditing(true)}
      onClick={() => setEditing(true)}
      onBlur={() => setEditing(false)}
      tabIndex="0"
    >
      {renderCell()}
    </StyledEmptyCell>
  );
};

export default EmptyRowCell;
