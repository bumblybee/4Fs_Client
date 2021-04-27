import React, { useState } from "react";
import { Form, Button, Icon, Message } from "semantic-ui-react";

const UserInfo = ({ userDetails, handleChange, nextStep, errors }) => {
  const [fieldsComplete, setFieldsComplete] = useState(false);
  const advanceForm = (e) => {
    e.preventDefault();
    if (
      userDetails["firstName"] === "" ||
      userDetails["lastName"] === "" ||
      userDetails["email"] === "" ||
      userDetails["password"] === ""
    ) {
      setFieldsComplete(false);
      return;
    }
    setFieldsComplete(true);
    nextStep();
  };

  return (
    <div
      className="ui segment basic"
      style={{ boxShadow: "none", textAlign: "left" }}
    >
      <Form.Group widths="equal">
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="First"
          label="First name"
          value={userDetails.firstName || ""}
          error={errors.firstName}
          onChange={handleChange("firstName")}
          required
        />
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Last"
          label="Last name"
          value={userDetails.lastName || ""}
          error={errors.lastName}
          onChange={handleChange("lastName")}
          required
        />
      </Form.Group>
      <Form.Input
        fluid
        icon="envelope"
        iconPosition="left"
        placeholder="example@example.com"
        label="Email"
        type="email"
        value={userDetails.email}
        error={errors.email}
        onChange={handleChange("email")}
        required
      />

      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="*********"
        type="password"
        label="Password"
        value={userDetails.password}
        error={errors.password}
        onChange={handleChange("password")}
        required
      />
      {/* TODO: attach message */}
      <Button
        fluid
        size="large"
        color="blue"
        type="submit"
        onClick={advanceForm}
        disabled={fieldsComplete}
      >
        Next
        <Icon name="right arrow" />
      </Button>
      <div style={{ textAlign: "center" }} className="ui message align center">
        Have an account? <a href="#">Log in</a>
      </div>
    </div>
  );
};

export default UserInfo;
