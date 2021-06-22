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

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setIsChecked(!isChecked);
      e.target.checked = !e.target.checked;
      makeData(e);
    }
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
    setIsChecked(props.val);
  }, [props.val]);

  return (
    <sc.StyledCheckboxWrapper>
      <sc.StyledCheckbox {...props}>
        <label>
          <input
            tabIndex="0"
            ref={checkboxRef}
            checked={isChecked || false}
            onChange={(e) => handleChange(e)}
            type="checkbox"
            disabled={props.disabled}
            onKeyDown={handleKeyDown}
          />
          {isChecked ? <Icon name="check" disabled={props.disabled} /> : ""}
        </label>
      </sc.StyledCheckbox>
    </sc.StyledCheckboxWrapper>
  );
};

export default CheckboxCell;
