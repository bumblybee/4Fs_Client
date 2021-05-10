import React from "react";
import { Icon, Popup } from "semantic-ui-react";

const SleepTableHeader = ({ component }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ marginLeft: "auto" }}>
        Pro Tip: Set a timer on your phone for your ideal bedtime and wake up
        time.
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Popup
          position="top center"
          content="Hours slept will calculate automatically based on the time you went to bed and the time you woke up."
          trigger={<Icon name="question circle outline" />}
        />
      </div>
    </div>
  );
};

export default SleepTableHeader;
