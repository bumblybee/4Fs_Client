import React, { useState, useEffect, useRef } from "react";
import { StyledEditableCell } from "./StyledEditableCell";

import { Input } from "semantic-ui-react";

const EditableTableCell = ({ children, ...props }) => {
  const [editing, setEditing] = useState(false);
  const [editCellVal, setEditCellVal] = useState(props.val);

  const inputRef = useRef(null);

  const makeData = () => {
    if (props.onDelete && editCellVal === "") {
      props.onDelete(props.id);
    } else {
      if (inputRef.current != editCellVal) {
        // If user deleted text and we don't want to delete the record, send null instead of empty string
        let updateVal = editCellVal;
        if (editCellVal === "") {
          updateVal = null;
        }

        props.onSave(
          {
            [props.accessor]: updateVal,
          },
          props.id
        );
        inputRef.current = editCellVal;
      }
    }
    setEditing(false);
  };

  // TODO: Break input into own component
  const renderCell = () => {
    if (editing) {
      return (
        <input
          ref={inputRef}
          value={editCellVal}
          placeholder={props.placeholder}
          onChange={(e) => setEditCellVal(e.target.value)}
          onBlur={makeData}
        />
      );
    } else {
      return editCellVal ? editCellVal : props.placeholder;
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
      {...props}
      onFocus={() => setEditing(true)}
      onClick={() => setEditing(true)}
      onBlur={() => setEditing(false)}
      style={{}}
      tabIndex="0"
      editCellVal={editCellVal}
    >
      {renderCell()}
    </StyledEditableCell>
  );
};

export default EditableTableCell;
