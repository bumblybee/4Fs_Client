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
    <sc.StyledCheckboxWrapper>
      <label>
        {isChecked ? <Icon name="check" /> : ""}
        <input
          ref={checkboxRef}
          style={{ padding: "0 0 0 0.5rem" }}
          checked={isChecked}
          onClick={(e) => handleChange(e)}
          type="checkbox"
        />
      </label>
    </sc.StyledCheckboxWrapper>
  );
};

export default CheckboxCell;
