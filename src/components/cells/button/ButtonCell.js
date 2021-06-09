import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const ButtonCell = (props) => {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    window.addEventListener("resize", setWindowSize(getWindowDimensions));

    return () => {
      window.removeEventListener("resize", setWindowSize(getWindowDimensions));
    };
  }, []);

  return (
    <Button
      as="a"
      href={props.to}
      target={props.newWindow && "_blank"}
      rel="noopener"
      accessor={props.accessor}
      color={props.color}
      size={windowSize && windowSize.width > 385 ? props.size : "large"}
      isCentered={props.isCentered}
      newWindow={props.newWindow}
    >
      {props.icon && props.icon}
      {props.val}
    </Button>
  );
};

export default ButtonCell;
