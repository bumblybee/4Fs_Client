import React, { useState, useEffect, useRef } from "react";

import { Input, TextArea } from "semantic-ui-react";

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
          value={blankCellVal || ""}
          onChange={(e) => setBlankCellVal(e.target.value)}
          onBlur={makeData}
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
    <div
      {...props}
      onFocus={() => setEditing(true)}
      onClick={() => setEditing(true)}
      onBlur={() => setEditing(false)}
      style={{
        width: "95%",
        margin: "0 auto",
        cursor: "pointer",
        borderRadius: "4px",
        height: "40px",
        color: blankCellVal ? "" : "#bbbbbbff",

        borderBottom: blankCellVal ? "none" : "1px solid #dddddd66",
        background: blankCellVal ? "" : "#eeeeee55",
        textAlign: props.aligntext,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      tabIndex="0"
    >
      {renderCell()}
    </div>
  );
};

export default EmptyRowCell;
