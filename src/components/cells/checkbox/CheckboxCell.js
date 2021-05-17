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
    setIsChecked(isChecked || props.val);
  }, [props.val]);

  return (
    <sc.StyledCheckboxWrapper {...props}>
      <label>
        <input
          ref={checkboxRef}
          checked={isChecked}
          onClick={(e) => handleChange(e)}
          type="checkbox"
          disabled={props.disabled}
        />
        {isChecked ? <Icon name="check" /> : ""}
      </label>
    </sc.StyledCheckboxWrapper>
  );
};

export default CheckboxCell;
