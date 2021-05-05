import React, { useState, useRef } from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownCell = ({ label, options, defaultState, ...props }) => {
  const [state, setState] = useState(defaultState);
  const dropdownRef = useRef(null);

  const configureOptions = () => {
    const optionsArray = [];

    for (let option of options) {
      const group = {};

      group["key"] = option;
      group["text"] = option;
      group["value"] = option;
      optionsArray.push(group);
    }
    return optionsArray;
  };

  const handleSelect = (e, data) => {
    setState(data.value);
    if (dropdownRef.current !== state) {
      props.onSave(
        {
          [props.accessor]: data.value,
        },
        props.id
      );
      dropdownRef.current = state;
    }
  };

  return (
    <Dropdown
      tabIndex="0"
      ref={dropdownRef}
      style={{ minWidth: "120px", maxWidth: "120px" }}
      selection
      text={state}
      disable={configureOptions().length === 0}
      options={configureOptions()}
      onChange={(e, data) => handleSelect(e, data)}
    />
  );
};

export default DropdownCell;
