import React from "react";
import { Container, Segment } from "semantic-ui-react";

const WelcomeMessage = () => {
  return (
    <Container text style={{ width: "40%", margin: "-2% 0 1.5rem" }}>
      <Segment
        raised
        size="small"
        style={{
          textAlign: "center",
          background: "rgba(40,124,202,0.99)",
          color: "#fff",
        }}
      >
        <h5 style={{ fontSize: "1.2rem" }}>Welcome xxx</h5>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        reiciendis commodi quasi aliquid facilis natus aut ex! Consectetur,
        reprehenderit quidem. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eius, vero?
      </Segment>
    </Container>
  );
};

export default WelcomeMessage;
