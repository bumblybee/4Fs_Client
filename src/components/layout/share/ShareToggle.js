import React, { useState, useEffect } from "react";

import { Radio } from "semantic-ui-react";
import { StyledToggle } from "./StyledShareToggle";

const ShareToggle = ({ shared, handleSave, field }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (shared) {
      setValue(shared[field]);
    }
  }, [shared]);

  const handleChange = (e) => {
    setValue(!value);

    handleSave({ [field]: !value });
  };

  return (
    <StyledToggle>
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
