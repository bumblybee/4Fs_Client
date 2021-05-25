import React from "react";
import { Popup, Icon } from "semantic-ui-react";

const HabitsTableHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          textAlign: "center",
          fontSize: "0.95rem",
          padding: "0.5rem 0",
        }}
      >
        Action: Think of a reward you can give yourself for doing the new habit.
        Define what you have to do in order to earn the reward.
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Popup
          position="top center"
          content="Use the rewards list if you need more ideas."
          trigger={<Icon name="question circle outline" />}
        />
      </div>
    </div>
  );
};

export default HabitsTableHeader;
