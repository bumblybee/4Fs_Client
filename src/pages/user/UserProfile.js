import React from "react";
import { Container, Segment, Form, Button } from "semantic-ui-react";

const UserProfile = () => {
  return (
    <Segment style={{ maxWidth: "70%", margin: "0 auto" }}>
      <Segment
        basic
        style={{ maxWidth: "60%", margin: "0 auto", padding: "2rem" }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Member Profile
        </h1>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="First"
              label="First name"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Last"
              label="Last name"
            />
          </Form.Group>
          <Form.Input
            fluid
            icon="envelope"
            iconPosition="left"
            placeholder="example@example.com"
            label="Email"
            type="email"
          />{" "}
          <Form.Input
            fluid
            icon="phone"
            iconPosition="left"
            placeholder="555-555-5555"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            label="Phone Number"
            type="tel"
          />
          <Form.Input
            fluid
            icon="google drive"
            iconPosition="left"
            placeholder="https://docs.google.com/spreadsheets/d/CveaIsVeKQ"
            label="Google Sheets Link"
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="arrows alternate vertical"
              iconPosition="left"
              type="number"
              label="Height"
              placeholder="in"
              min="40"
              max="90"
            />

            <Form.Input
              fluid
              icon="weight"
              iconPosition="left"
              type="number"
              label="Weight"
              placeholder="lb"
              min="70"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="clock"
              iconPosition="left"
              label="Age"
              placeholder="yr"
              min="15"
              type="number"
            />
            <Form.Select
              fluid
              label="Gender"
              placeholder="Gender"
              options={[
                { key: "m", text: "Male", value: "male" },
                { key: "f", text: "Female", value: "female" },
                { key: "o", text: "Other", value: "other" },
              ]}
            />
          </Form.Group>
          <Button color="blue" fluid>
            Update
          </Button>
        </Form>
      </Segment>
    </Segment>
  );
};

export default UserProfile;
