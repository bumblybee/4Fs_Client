import React, { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import { StyledEditableCell } from "./StyledEditableCell";

// TODO: Pass classes in props and style in stylesheet rather than passing alignment, etc.

const EditableTableCell = ({ children, ...props }) => {
  const sanitize = DOMPurify.sanitize;

  const [editing, setEditing] = useState(false);
  const [editCellVal, setEditCellVal] = useState(props.val);

  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      makeData();
    }
  };

  const makeData = () => {
    if (props.onDelete && editCellVal === "") {
      props.onDelete(props.id);
    } else {
      if (inputRef.current !== editCellVal) {
        // If user deleted value and we don't want flag the record deleted, send null instead of empty string to match default DB case
        let updateVal = editCellVal;
        if (updateVal === "") {
          updateVal = null;
        }

        props.onSave(
          {
            [props.accessor]: updateVal,
            [props.foreignAccessor]: props.foreignId,
          },
          props.id
        );
        inputRef.current = editCellVal;

        // Reset editCellVal to returned data
        setEditCellVal(props.val);
      }
    }
    setEditing(false);
  };

  const renderCell = () => {
    if (editing) {
      return (
        <input
          ref={inputRef}
          value={editCellVal}
          // placeholder={props.placeholder}
          aligntext={props.aligntext}
          alignment={props.alignment}
          disabled={props.disabled}
          onChange={(e) => setEditCellVal(e.target.value)}
          onBlur={makeData}
          onKeyDown={handleKeyPress}
        />
      );
    } else {
      return editCellVal ? sanitize(editCellVal) : props.placeholder;
    }
  };

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  useEffect(() => {
    setEditCellVal(props.val);
  }, [props.val]);

  return (
    <StyledEditableCell
      onFocus={() => !props.disabled && setEditing(true)}
      onClick={() => !props.disabled && setEditing(true)}
      onBlur={() => setEditing(false)}
      tabIndex="0"
      editCellVal={editCellVal}
      alignment={props.alignment}
      aligntext={props.aligntext}
      textweight={props.textweight}
      disabled={props.disabled}
    >
      {renderCell()}
    </StyledEditableCell>
  );
};

export default EditableTableCell;
