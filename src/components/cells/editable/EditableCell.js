import React, { useState, useEffect, useRef, useContext } from "react";
import { CellContext } from "../../../context/cell/CellContext";
import { StyledEditableCell } from "./StyledEditableCell";
import DOMPurify from "dompurify";

// TODO: Pass classes in props and style in stylesheet rather than passing alignment, etc.

const EditableTableCell = ({ children, ...props }) => {
  const sanitize = DOMPurify.sanitize;
  const { focusNextCell, setFocusNextCell } = useContext(CellContext);
  const [editing, setEditing] = useState(false);
  const [editCellVal, setEditCellVal] = useState(props.val);

  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      makeData();
    }
  };

  const makeData = () => {
    // If cell has onDelete method, call onDelete if cell empty to flag as deleted
    if (props.onDelete && editCellVal === "") {
      props.onDelete(props.id);
    } else {
      if (inputRef.current !== editCellVal) {
        // If user cleared value and we don't want to flag the record deleted, send null instead of empty string to match default DB case
        let updateVal = editCellVal;
        if (updateVal === "") {
          updateVal = null;
        }

        props.onSave(
          {
            // accessor/foreignAccessor = field names
            [props.accessor]: updateVal,
            [props.foreignAccessor]: props.foreignId,
          },
          props.id
        );
        inputRef.current = editCellVal;

        // Reset editCellVal to returned data
        // setEditCellVal(props.val);
      }
    }
    setEditing(false);
    setFocusNextCell(false);
  };

  const renderCell = () => {
    if (editing) {
      return (
        <input
          tabIndex="0"
          ref={inputRef}
          value={editCellVal}
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

    focusNextCell && setEditing(true);
  }, [props.val]);

  return (
    <StyledEditableCell
      className={props.className}
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
