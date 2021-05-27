import React from "react";
import { Popup, Icon } from "semantic-ui-react";

const HabitsTableHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "85%",
          margin: "0 auto",
          fontFamily: "Lato",

          fontSize: "1.025rem",
          padding: "0.5rem 0",
        }}
      >
        <div
          style={{
            width: "40%",
            margin: "-1.5rem auto 1rem",
            padding: "1rem 0 0",
            fontSize: "1.2rem",
            fontFamily: "Montserrat",
          }}
        >
          Step 5: Reward Yourself
        </div>
        Action: Think of a reward you can give yourself for doing the new habit.
        Define what you have to do in order to earn the reward.
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Popup
          position="top center"
          content="Use the reward list provided if you need ideas."
          trigger={<Icon name="question circle outline" />}
        />
      </div>
    </div>
  );
};

export default HabitsTableHeader;
