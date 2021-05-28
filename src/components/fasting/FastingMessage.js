import React from "react";

const FastingMessage = ({ percentage }) => {
  const renderMessage = () => {
    if (percentage) {
      if (percentage < 50) {
        return "You'll get it next time!";
      }
      if (percentage >= 50 && percentage < 75) {
        return "You're doing great, keep at it!";
      } else if (percentage >= 75 && percentage < 100) {
        return "You're killing it! Keep it up!";
      } else {
        return "Awesome! You're rocking it!";
      }
    }
  };

  return (
    <div style={{ marginTop: "20%" }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "0.25rem" }}>
        {percentage && `${percentage}%`}
      </h1>
      <h3 style={{ fontStyle: "italic", marginTop: "0" }}>{renderMessage()}</h3>
    </div>
  );
};

export default FastingMessage;
