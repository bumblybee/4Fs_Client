import React, { useState, useRef } from "react";
import { StyledDropdown } from "./StyledDropdownCell";

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
    <StyledDropdown
      tabIndex="0"
      ref={dropdownRef}
      selection
      text={state}
      disabled={configureOptions().length === 0}
      options={configureOptions()}
      onChange={(e, data) => handleSelect(e, data)}
    />
  );
};

export default DropdownCell;
