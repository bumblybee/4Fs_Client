import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ErrorContext } from "../../context/error/ErrorContext";
import { UserContext } from "../../context/user/UserContext";
import UserInfo from "./UserInfo";
import UserDetails from "./UserDetails";
import { Image } from "semantic-ui-react";
import {
  StyledFormWrapper,
  StyledSegment,
  StyledFormHeader,
  StyledForm,
} from "./StyledSignupForm";

const SignupForm = () => {
  const history = useHistory();

  const { setErrorMessage, clearErrorMessage } = useContext(ErrorContext);

  const { signUserUp, checkIfEmailExists } = useContext(UserContext);

  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
  });

  // Handles setting error on individual inputs and highlighting if invalid

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    height: false,
    weight: false,
    age: false,
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e, data) => {
    if (input === "gender") {
      setUserDetails({ ...userDetails, gender: data.value });
    } else {
      setUserDetails({ ...userDetails, [input]: e.target.value });
    }
    setFormErrors({ ...formErrors, [input]: false });
    clearErrorMessage();
  };

  // Check all inputs are filled in

  const validateFieldsAreComplete = (fields) => {
    for (const item of fields) {
      if (userDetails[item] === "") {
        setFormErrors({ ...formErrors, [item]: true });

        setErrorMessage("Please fill in the highlighted fields");

        return false;
      } else {
        setFormErrors({ ...formErrors, [item]: false });
      }
    }

    return true;
  };

  const validateEmailFormat = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(userDetails.email.toLowerCase())) {
      return true;
    } else {
      setErrorMessage("Please check the email address formatting");
    }
  };

  const handleUserInfoValidation = async () => {
    // Validate fields aren't empty
    const validatedFields = validateFieldsAreComplete([
      "firstName",
      "lastName",
      "email",
      "password",
    ]);

    // Error handled above in validateFields
    if (!validatedFields) return;

    if (!validateEmailFormat()) return;

    // API returns a code for available/unavailable email

    // Check email doesn't exist in db
    const serverEmailStatus = await checkIfEmailExists({
      email: userDetails.email,
    });

    // API returns code for available/unavailable email

    const emailAvailable =
      serverEmailStatus.data &&
      serverEmailStatus.data.code === "email.available";

    if (emailAvailable) {
      // Go to next step of form
      nextStep();
    } else {
      // Set email input error and error message
      setFormErrors({ ...formErrors, email: true });
      setErrorMessage(serverEmailStatus.error);
    }
  };

  const handleSubmit = async (e, origin) => {
    e.preventDefault();

    if (origin === "userInfo") {
      // We're on the first step of form. Need to check email isn't in db and that form fields are filled out before moving to next step.

      await handleUserInfoValidation();
    } else {
      // Validate second step fields
      const validatedFields = validateFieldsAreComplete([
        "height",
        "weight",
        "age",
        "gender",
      ]);

      if (!validatedFields) return;

      const signup = await signUserUp(userDetails);
      // Todo: Refactor how this is handled
      if (signup[0] && signup[0].error) {
        setErrorMessage(signup[0].error);
      }

      signup.data && history.push("/");
    }
  };

  const renderFormComponent = () => {
    switch (step) {
      case 1:
        return (
          <UserInfo
            userDetails={userDetails}
            nextStep={nextStep}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFormErrors={setFormErrors}
            formErrors={formErrors}
            setErrorMessage={setErrorMessage}
            clearErrorMessage={clearErrorMessage}
          />
        );
      case 2:
        return (
          <UserDetails
            userDetails={userDetails}
            prevStep={prevStep}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formErrors={formErrors}
          />
        );
    }
  };

  return (
    <StyledFormWrapper verticalAlign="middle" centered>
      <StyledSegment className="column" raised>
        <StyledFormHeader as="h2" image>
          <Image className="logo" src="/4flogo.png" alt="4fs logo" />
          Sign Up
        </StyledFormHeader>
        <StyledForm onSubmit={handleSubmit} error={formErrors}>
          {renderFormComponent()}
        </StyledForm>
      </StyledSegment>
    </StyledFormWrapper>
  );
};

export default SignupForm;
