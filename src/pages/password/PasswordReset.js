import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { resetPassword } from "../../api/user/userApi";
import { ErrorContext } from "../../context/error/ErrorContext";
import { Image, Button, Form, Segment } from "semantic-ui-react";
import {
  StyledFormWrapper,
  StyledSegment,
  StyledFormHeader,
  StyledForm,
} from "../../styles/GlobalStyledComponents";

const PasswordReset = () => {
  const { setErrorMessage } = useContext(ErrorContext);
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

      if (reset.error || !reset) {
        setErrorMessage(reset.error, true);
      } else if (reset.data.id) {
        history.push("/login");
      }
    } else {
      setErrorMessage(
        "Password must contain at least 7 characters consisting of numbers and letters"
      );
      return;
    }
  };

  return (
    <StyledFormWrapper verticalAlign="middle" centered>
      <StyledSegment className="column" raised>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <StyledFormHeader as="h2" origin="password" image>
            <Image className="logo" src="/4flogo.png" alt="4fs logo" />
            Create Password
          </StyledFormHeader>
          <p style={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
            Enter your new password
          </p>
        </div>
        <StyledForm onSubmit={handleSubmit}>
          <Segment basic style={{ textAlign: "left" }}>
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
            <div style={{ display: "grid", gridGap: "0.5rem" }}>
              <Button fluid size="large" color="blue" type="submit">
                Submit
              </Button>
            </div>
          </Segment>
        </StyledForm>
      </StyledSegment>
    </StyledFormWrapper>
  );
};

export default PasswordReset;
