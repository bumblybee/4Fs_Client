import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Image } from "semantic-ui-react";
import { UserContext } from "../../context/user/UserContext";
import { NotificationContext } from "../../context/notification/NotificationContext";
import {
  StyledFormWrapper,
  StyledSegment,
  StyledFormHeader,
  StyledForm,
} from "../../styles/GlobalStyledComponents";

const LoginForm = () => {
  const history = useHistory();
  const { logUserIn } = useContext(UserContext);
  const { setNotificationMessage, clearNotificationMessage } =
    useContext(NotificationContext);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = await logUserIn(userDetails);

    if (login.error) {
      setNotificationMessage(login.error, "error");
      return;
    } else {
      clearNotificationMessage();
      login.data && history.push("/home");
    }
  };

  return (
    <StyledFormWrapper verticalAlign="middle" centered>
      <StyledSegment className="column" raised>
        <StyledFormHeader as="h2" image>
          <Image
            className="logo"
            src="/4flogowhiteoutline.png"
            alt="4fs logo"
          />
          Log in
        </StyledFormHeader>

        <StyledForm onSubmit={handleSubmit}>
          <div
            className="ui segment basic"
            style={{ boxShadow: "none", textAlign: "left" }}
          >
            <Form.Input
              fluid
              icon="envelope"
              iconPosition="left"
              placeholder="example@example.com"
              label="Email"
              value={userDetails.email}
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  email: e.target.value.trim(),
                });
                clearNotificationMessage();
              }}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="********"
              type="password"
              label="Password"
              value={userDetails.password}
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
                clearNotificationMessage();
              }}
              required
            />

            {/* TODO: attach message */}
            <Button fluid size="large" color="blue" type="submit">
              Log in
            </Button>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="ui message align center"
            >
              <div style={{ marginRight: "0.5rem" }}>
                <Link to="/signup">Create account</Link>
              </div>
              |
              <div style={{ marginLeft: "0.5rem" }}>
                <Link to="/reset-password"> Reset password</Link>
              </div>
            </div>
          </div>
        </StyledForm>
      </StyledSegment>
    </StyledFormWrapper>
  );
};

export default LoginForm;
