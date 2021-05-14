import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { StyledFooterMessage } from "./StyledSignupForm";

const UserDetails = ({
  userDetails,
  handleChange,
  prevStep,
  handleSubmit,
  formErrors,
}) => {
  const reverseForm = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div
      className="ui segment basic"
      style={{ boxShadow: "none", textAlign: "left" }}
    >
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
          value={userDetails.height}
          error={formErrors.height}
          onChange={handleChange("height")}
          required
        />

        <Form.Input
          fluid
          icon="weight"
          iconPosition="left"
          type="number"
          label="Weight"
          placeholder="lb"
          min="70"
          value={userDetails.weight}
          error={formErrors.weight}
          onChange={handleChange("weight")}
          required
        />
      </Form.Group>

      <Form.Input
        icon="clock"
        iconPosition="left"
        label="Age"
        placeholder="yr"
        min="15"
        type="number"
        value={userDetails.age}
        error={formErrors.age}
        onChange={handleChange("age")}
        required
      />
      <Form.Select
        fluid
        label="Gender"
        value={userDetails.gender}
        placeholder="Gender"
        options={[
          { key: "m", text: "Male", value: "male" },
          { key: "f", text: "Female", value: "female" },
          { key: "o", text: "Other", value: "other" },
        ]}
        error={formErrors.gender}
        onChange={handleChange("gender")}
        required
      />

      {/* TODO: attach message */}
      <div style={{ display: "flex", alignContent: "space-between" }}>
        <Button fluid size="large" onClick={reverseForm}>
          Back
        </Button>
        <Button
          fluid
          size="large"
          color="blue"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      <StyledFooterMessage>
        Have an account? <Link to="/login">Log in</Link>
      </StyledFooterMessage>
    </div>
  );
};

export default UserDetails;
