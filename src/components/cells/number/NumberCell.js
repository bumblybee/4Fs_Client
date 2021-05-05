import React, { useState, useEffect, useRef } from "react";

import { Input } from "semantic-ui-react";

const NumberCell = (props) => {
  const [val, setVal] = useState(0);

  const handleChange = (e) => {
    setVal(e.target.val);
    //props.onSave()
  };

  return (
    <Input
      value={val || props.val}
      onChange={(e) => handleChange(e)}
      style={{ width: "65px" }}
      type="number"
    />
  );
};

export default NumberCell;
