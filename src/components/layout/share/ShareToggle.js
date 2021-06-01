import React, { useState, useEffect } from "react";
import { Radio } from "semantic-ui-react";

const ShareToggle = ({ share }) => {
  const [value, setValue] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(share);
  }, []);

  return (
    <Radio
      label="Share"
      name="share"
      value={value}
      checked={value}
      onChange={handleChange}
      slider
    />
  );
};

export default ShareToggle;
