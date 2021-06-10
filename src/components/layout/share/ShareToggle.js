import React, { useState, useEffect } from "react";

import { Radio } from "semantic-ui-react";
import { StyledToggle } from "./StyledShareToggle";

const ShareToggle = ({ shared, handleSave, field, width }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (shared) {
      setValue(shared[field]);
    }
  }, [shared, field]);

  const handleChange = (e) => {
    setValue(!value);

    handleSave({ [field]: !value });
  };
  console.log(field);
  return (
    <StyledToggle width={width} title={`Share ${field} progress`} field={field}>
      <Radio
        label="Share"
        name="share"
        checked={value}
        onChange={(e) => handleChange(e)}
        toggle
      />
    </StyledToggle>
  );
};

export default ShareToggle;
