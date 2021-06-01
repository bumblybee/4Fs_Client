import React, { useState, useEffect } from "react";
import { Icon, Transition } from "semantic-ui-react";
import { StyledMessage } from "./StyledFastingMessage";

const FastingMessage = ({ percentage }) => {
  const [visible, setVisible] = useState(false);

  const renderMessage = () => {
    if (percentage) {
      if (percentage < 40) {
        return "Keep pushing. You'll get it next time!";
      } else if (percentage >= 40 && percentage < 60) {
        return "You're on the right track!";
      }
      if (percentage >= 60 && percentage < 80) {
        return "You're doing great, keep at it!";
      } else if (percentage >= 80 && percentage < 100) {
        return "Awesome! Almost there!";
      } else {
        return "Woo-hoo! You're a rock star!";
      }
    }
  };

  useEffect(() => {
    setVisible(!visible);
  }, [percentage]);

  return (
    <Transition animation="tada" duration={600} visible={visible}>
      <StyledMessage>
        <div>
          {percentage >= 100 &&
            Array(3)
              .fill("")
              .map((el) => <Icon name="star" color="green" />)}
        </div>
        <h2>{percentage && `${percentage.toFixed(0)}% of Goal`}</h2>
        <h3>{renderMessage()}</h3>
      </StyledMessage>
    </Transition>
  );
};

export default FastingMessage;
