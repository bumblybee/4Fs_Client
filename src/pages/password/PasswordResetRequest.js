import React, { useState } from "react";
import { history } from "../../utils/customHistory";

import { triggerPasswordReset } from "../../api/user/userApi";
import PasswordRequestConfirmation from "./PasswordRequestConfirmation";
import { Form, Button, Segment, Image } from "semantic-ui-react";
import {
  StyledFormWrapper,
  StyledSegment,
  StyledFormHeader,
  StyledForm,
  StyledFormButton,
} from "../../styles/GlobalStyledComponents";
import {
  StyledPasswordResetHeader,
  StyledPasswordResetButtonContainer,
} from "./StyledPasswordReset";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await triggerPasswordReset(email);
    if (!res.error) {
      setSubmitted(true);
    }
  };

  return submitted ? (
    <PasswordRequestConfirmation />
  ) : (
    <StyledFormWrapper verticalAlign="middle" centered>
      <StyledSegment className="column" raised>
        <StyledPasswordResetHeader>
          <StyledFormHeader as="h2" origin="password" image>
            <Image className="logo" src="/4flogo.png" alt="4fs logo" />
            Reset Password
          </StyledFormHeader>
          <p>
            A link to reset your password will be sent to the email address
            provided
          </p>
        </StyledPasswordResetHeader>
        <StyledForm onSubmit={handleSubmit}>
          <Segment basic>
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
            <StyledPasswordResetButtonContainer>
              <StyledFormButton fluid size="large" type="submit">
                Submit
              </StyledFormButton>

              <Button basic fluid onClick={() => history.goBack()}>
                Cancel
              </Button>
            </StyledPasswordResetButtonContainer>
          </Segment>
        </StyledForm>
      </StyledSegment>
    </StyledFormWrapper>
  );
};

export default PasswordResetRequest;
