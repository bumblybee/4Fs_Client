import React, { useState, useEffect, useRef } from "react";
import { Icon } from "semantic-ui-react";

import * as sc from "./StyledCheckbox";

const CheckboxCell = (props) => {
  const checkboxRef = useRef();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(!isChecked);
    makeData(e);
  };

  // const handleKeyPress = (e) => {
  //   if (e.keyCode === 13) {
  //     console.log(e.target.checked);
  //     handleChange(e);
  //   }
  // };

  const makeData = (e) => {
    // Updating performed based on checked or unchecked
    props.onSave(
      {
        [props.accessor]: e.target.checked,
        performed: e.target.checked ? props.performed + 1 : props.performed - 1,
      },
      props.id
    );
  };

  useEffect(() => {
    setIsChecked(props.val);
  }, [props.val]);

  return (
    <sc.StyledCheckboxWrapper {...props}>
      <label>
        <input
          tabIndex="0"
          ref={checkboxRef}
          checked={isChecked || false}
          onChange={(e) => handleChange(e)}
          type="checkbox"
          disabled={props.disabled}
        />
        {isChecked ? <Icon name="check" disabled={props.disabled} /> : ""}
      </label>
    </sc.StyledCheckboxWrapper>
  );
};

export default CheckboxCell;
