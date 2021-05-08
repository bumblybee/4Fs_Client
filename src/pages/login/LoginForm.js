import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { UserContext } from "../../context/user/UserContext";
import { ErrorContext } from "../../context/error/ErrorContext";

const LoginForm = () => {
  const history = useHistory();
  const { logUserIn } = useContext(UserContext);
  const { setErrorMessage } = useContext(ErrorContext);
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await logUserIn(userDetails);
    if (login.error) {
      setErrorMessage(login.error, true);
      return;
    } else {
      login.data && history.push("/home");
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="ui middle aligned center aligned grid"
    >
      <div className="column ui segment raised" style={{ maxWidth: "450px" }}>
        <h2
          className="ui image header blue"
          style={{ textShadow: "0 0 0px #eeeeee99" }}
        >
          <img
            className="image"
            src="/4flogo.png"
            alt="4fs logo"
            style={{
              display: "block",
              margin: "0 auto",
              height: "60px",
              width: "70px",
            }}
          />{" "}
          Log In
        </h2>

        <Form onSubmit={handleSubmit}>
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
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
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
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              required
            />

            {/* TODO: attach message */}
            <Button fluid size="large" color="blue" type="submit">
              Log in
            </Button>
            <div
              style={{ textAlign: "center" }}
              className="ui message align center"
            >
              New to the program? <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
