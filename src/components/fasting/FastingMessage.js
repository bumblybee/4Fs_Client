import React from "react";
import { Icon } from "semantic-ui-react";

const FastingMessage = ({ percentage }) => {
  const renderMessage = () => {
    if (percentage) {
      if (percentage < 30) {
        return "You'll get it next time!";
      } else if (percentage >= 30 && percentage < 50) {
        return "You're on the right track!";
      }
      if (percentage >= 50 && percentage < 75) {
        return "You're doing great, keep at it!";
      } else if (percentage >= 75 && percentage < 100) {
        return "Awesome! Almost there!";
      } else {
        return "Woo-hoo! You're a rock star!";
      }
    }
  };

  return (
    <div style={{ marginTop: "25%", color: "#fff" }}>
      {percentage >= 100 &&
        Array(3)
          .fill("")
          .map((el) => <Icon name="star " size="large" color="green" />)}
      <h2 style={{ marginBottom: "0" }}>
        {`${percentage}`}% <small>of goal</small>
      </h2>
      <h3
        style={{
          fontStyle: "italic",
          marginTop: "0",
          fontSize: "1.15rem",
          width: "85%",
          margin: "0 auto",
        }}
      >
        {renderMessage()}
      </h3>
    </div>
  );
};

export default FastingMessage;
