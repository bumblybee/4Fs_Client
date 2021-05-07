import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";

import * as sc from "./StyledCheckbox";

const CheckboxCell = (props) => {
  // console.log(props);
  const [isChecked, setIsChecked] = useState(props.val);
  const [daysPerformed, setDaysPerformed] = useState(props.performed);

  // TODO: ref for prev state, if remove check then decrement performed

  const makeData = (e) => {
    setIsChecked(e.target.checked);
    isChecked && setDaysPerformed(daysPerformed + 1);
    console.log(daysPerformed);
    e.target.checked
      ? props.onSave(
          {
            [props.accessor]: e.target.checked,
            performed: daysPerformed + 1,
          },
          props.id
        )
      : props.onSave(
          {
            [props.accessor]: e.target.checked,
          },
          props.id
        );
  };

  useEffect(() => {
    setIsChecked(props.val);
    setDaysPerformed(props.performed);
  }, [props.val, props.performed]);

  return (
    <sc.StyledCheckboxWrapper>
      <label>
        {isChecked ? <Icon name="check" /> : ""}
        <input
          style={{ padding: "0 0 0 0.5rem" }}
          checked={isChecked}
          value={isChecked}
          defaultValue={props.val}
          onChange={makeData}
          type="checkbox"
        />
      </label>
    </sc.StyledCheckboxWrapper>
  );
};

export default CheckboxCell;
