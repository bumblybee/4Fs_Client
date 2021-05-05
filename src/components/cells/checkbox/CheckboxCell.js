import React, { useState, useEffect, useRef } from "react";
import { Icon } from "semantic-ui-react";

import * as sc from "./StyledCheckbox";

const CheckboxCell = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    props.onSave(
      {
        [props.accessor]: isChecked,
      },
      props.id
    );
  };

  return (
    <sc.StyledCheckboxWrapper>
      <label>
        {isChecked ? <Icon name="check" /> : ""}
        <input
          style={{ padding: "0 0 0 0.5rem" }}
          checked={isChecked}
          onChange={handleCheck}
          type="checkbox"
        />
      </label>
    </sc.StyledCheckboxWrapper>
  );
};

export default CheckboxCell;
