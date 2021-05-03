import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Icon } from "semantic-ui-react";

const UserInfo = ({
  userDetails,
  handleChange,
  nextStep,
  errors,
  handleSubmit,
  setErrors,
  setErrorMessage,
}) => {
  const validatePassword = () => {
    if (/^(?=.*\d)(?=.*[a-z]).{7,20}$/.test(userDetails.password)) {
      return true;
    }

    return false;
  };

  const advanceForm = async (e) => {
    e.preventDefault();
    if (validatePassword()) {
      setErrors({ ...errors, password: false, form: false });
      await handleSubmit(e, "userInfo");
    } else {
      setErrors({ ...errors, password: true, form: true });
      setErrorMessage(
        "Password must be at least 7 characters with at least one number and one lowercase letter"
      );
    }
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
      >
        Next
        <Icon name="right arrow" />
      </Button>
      <div style={{ textAlign: "center" }} className="ui message align center">
        Have an account? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default UserInfo;
