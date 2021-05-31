import React from "react";
import { Icon } from "semantic-ui-react";

const FastingMessage = ({ percentage }) => {
  const renderMessage = () => {
    if (percentage) {
      if (percentage < 40) {
        return "Keep pushing. You'll get it next time!";
      } else if (percentage >= 40 && percentage < 50) {
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
    <div style={{ marginTop: "35%", color: "#333" }}>
      {percentage >= 100 &&
        Array(3)
          .fill("")
          .map((el) => <Icon name="star " size="large" color="green" />)}
      <h2
        style={{
          margin: "0 0 0.25rem",
          fontSize: "1.5rem",
          fontFamily: "Lato",
        }}
      >
        {percentage && `${percentage.toFixed(0)}% of Goal`}
      </h2>
      <h3
        style={{
          fontStyle: "italic",
          marginTop: "0",
          fontSize: "1.15rem",
          fontWeight: "500",
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
