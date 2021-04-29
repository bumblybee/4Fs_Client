import React, { useState, useEffect, useRef } from "react";

import { Checkbox } from "semantic-ui-react";

const CheckboxCell = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(isChecked);
    // props.onSave()
  };

  return <Checkbox checked={isChecked} onClick={handleCheck} />;
};

export default CheckboxCell;
