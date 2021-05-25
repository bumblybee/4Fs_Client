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
          width: "70%",
          margin: "0 auto 1rem",
        }}
      >
        Action: Think of a reward you can give yourself for doing the new habit.
        Define what you have to do in order to earn the reward (ex. If I walk 5
        times this week I will take a bubble bath)
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Popup
          position="top center"
          content="Use the reward list if you need ideas"
          trigger={<Icon name="question circle outline" />}
        />
      </div>
    </div>
  );
};

export default HabitsTableHeader;
