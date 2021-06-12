import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { resetPassword } from "../../api/user/userApi";
import { NotificationContext } from "../../context/notification/NotificationContext";
import { Image, Button, Form, Segment } from "semantic-ui-react";
import {
  StyledFormWrapper,
  StyledSegment,
  StyledFormHeader,
  StyledForm,
  StyledFormButton,
} from "../../styles/GlobalStyledComponents";
import { StyledPasswordResetHeader } from "./StyledPasswordReset";

const PasswordReset = () => {
  const { setNotificationMessage, clearNotificationMessage } =
    useContext(NotificationContext);
  const [newPassword, setNewPassword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const validPassword = () => {
    if (/^(?=.*\d)(?=.*[a-z]).{7,20}$/.test(newPassword)) {
      return true;
    }

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = location.pathname.split("/")[2];

    if (validPassword) {
      const reset = await resetPassword(token, newPassword);
      clearNotificationMessage();

      if (reset.error || !reset) {
        setNotificationMessage(reset.error, "error", true);
      } else if (reset.data.id) {
        history.push("/login");
      }
    } else {
      setNotificationMessage(
        "Password must contain at least 7 characters consisting of numbers and letters",
        "error"
      );
      return;
    }
  };

  return (
    <StyledFormWrapper verticalAlign="middle" centered>
      <StyledSegment className="column" raised>
        <StyledPasswordResetHeader>
          <StyledFormHeader as="h2" origin="password" image>
            <Image className="logo" src="/4flogo.png" alt="4fs logo" />
            Create Password
          </StyledFormHeader>
          <p>Enter your new password</p>
        </StyledPasswordResetHeader>
        <StyledForm onSubmit={handleSubmit}>
          <Segment basic>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="*********"
              type="password"
              label="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <StyledFormButton fluid size="large" type="submit">
              Submit
            </StyledFormButton>
          </Segment>
        </StyledForm>
      </StyledSegment>
    </StyledFormWrapper>
  );
};

export default PasswordReset;
