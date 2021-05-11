import React, { useState, useEffect, useRef } from "react";

import { Input, TextArea } from "semantic-ui-react";

const EditableTableCell = ({ children, ...props }) => {
  const [editing, setEditing] = useState(false);
  const [editCellVal, setEditCellVal] = useState(props.val);

  const inputRef = useRef(null);

  const makeData = () => {
    // If user deleted text, send null instead of empty string
    if (inputRef.current != editCellVal) {
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
    setEditing(false);
  };

  // TODO: Break input into own component
  const renderCell = () => {
    if (editing) {
      return (
        <Input
          ref={inputRef}
          style={{
            border: "none",
            borderColor: "transparent",
            outline: "none",
            width: "100%",
            height: "inherit",
            textAlign: props.aligntext,
            margin: "0 auto",
            // resize: "none",

            whiteSpace: "normal",

            textAlignLast: "center",
          }}
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
    <div
      {...props}
      onFocus={() => setEditing(true)}
      onClick={() => setEditing(true)}
      onBlur={() => setEditing(false)}
      style={{
        width: "95%",
        paddingLeft: "0.25rem",
        cursor: "pointer",
        borderRadius: "4px",
        minHeight: "40px",
        overflow: "auto",
        display: "flex",
        justifyContent: props.alignment,
        alignItems: "center",
        fontWeight: props.textweight,
        color: editCellVal ? "" : "#bbb",
      }}
      tabIndex="0"
    >
      {renderCell()}
    </div>
  );
};

export default EditableTableCell;
