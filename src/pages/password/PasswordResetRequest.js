import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { triggerPasswordReset } from "../../api/user/userApi";
import { Form, Button, Segment, Image, Header } from "semantic-ui-react";
import {
  StyledFormWrapper,
  StyledSegment,
  StyledFormHeader,
  StyledForm,
  StyledFooterMessage,
} from "../../styles/GlobalStyledComponents";

const PasswordResetRequest = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await triggerPasswordReset(email);
    console.log(res);
    if (!res.error) {
      setSubmitted(true);
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
          <StyledFormHeader as="h2" image>
            <Image className="logo" src="/4flogo.png" alt="4fs logo" />
            Reset Password
          </StyledFormHeader>
          <p style={{ textAlign: "center" }}>
            A link to reset your password will be sent to the email address
            provided.
          </p>
        </div>
        <StyledForm onSubmit={handleSubmit}>
          <Segment basic style={{ textAlign: "left" }}>
            <Form.Input
              fluid
              icon="envelope"
              iconPosition="left"
              placeholder="example@example.com"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div style={{ display: "grid", gridGap: "0.5rem" }}>
              <Button fluid size="large" color="blue" type="submit">
                Submit
              </Button>

              <Button basic fluid onClick={() => history.goBack()}>
                Cancel
              </Button>
            </div>
          </Segment>
        </StyledForm>
      </StyledSegment>
    </StyledFormWrapper>
  );
};

export default PasswordResetRequest;
