import React from "react";
import { Link } from "react-router-dom";
import { Form, Icon } from "semantic-ui-react";
import {
  StyledFooterMessage,
  StyledFormButton,
} from "../../styles/GlobalStyledComponents";

const UserInfo = ({
  userDetails,
  handleChange,
  formErrors,
  handleSubmit,
  setFormErrors,
  setNotificationMessage,
  clearNotificationMessage,
}) => {
  // Make sure password contains at minimum seven character, both nums and lowercase letters
  const validPassword = () => {
    if (/^(?=.*\d)(?=.*[a-z]).{7,20}$/.test(userDetails.password)) {
      return true;
    }

    return false;
  };

  const advanceForm = async (e) => {
    e.preventDefault();

    if (validPassword()) {
      setFormErrors({ ...formErrors, password: false });
      clearNotificationMessage();
      await handleSubmit(e, "userInfo");
    } else {
      setFormErrors({ ...formErrors, password: true });
      setNotificationMessage(
        "Password must contain at least 7 characters consisting of numbers and letters. Special characters optional.",
        "error"
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
          error={formErrors.firstName}
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
          error={formErrors.lastName}
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
        error={formErrors.email}
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
        error={formErrors.password}
        onChange={handleChange("password")}
        required
      />
      {/* TODO: attach message */}
      <StyledFormButton fluid size="large" type="submit" onClick={advanceForm}>
        Next
        <Icon name="right arrow" />
      </StyledFormButton>
      <StyledFooterMessage>
        Have an account? <Link to="/login">Log in</Link>
      </StyledFooterMessage>
    </div>
  );
};

export default UserInfo;
