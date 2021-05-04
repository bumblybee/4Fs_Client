import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ErrorContext } from "../../context/error/ErrorContext";
import { UserContext } from "../../context/user/UserContext";

import UserInfo from "./UserInfo";
import UserDetails from "./UserDetails";
import { Form } from "semantic-ui-react";

// Semantic has built in form validation object
const SignupForm = () => {
  const history = useHistory();
  const { signUserUp, validateEmail } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
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

  const [errors, setErrors] = useState({
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
    setErrors({ ...errors, [input]: false });
  };

  const validateFields = (fields) => {
    for (const item of fields) {
      if (userDetails[item] === "") {
        setErrors({ ...errors, [item]: true });

        setError("Please fill in the highlighted fields");

        return false;
      } else {
        setErrors({ ...errors, [item]: false });
      }
    }

    return true;
  };

  const handleUserInfoValidation = async () => {
    // Validate fields aren't empty
    const validatedFields = validateFields([
      "firstName",
      "lastName",
      "email",
      "password",
    ]);

    if (!validatedFields) return;

    // Check email doesn't exist in db
    const emailValidation = await validateEmail({ email: userDetails.email });

    // API returns code for available/unavailable email
    const emailAvailable =
      emailValidation.data && emailValidation.data.code === "email.available";

    if (emailAvailable) {
      // Go to next form step
      nextStep();
    } else {
      // Set email error and error message
      setErrors({ ...errors, email: true });
      setError("Email already in use. Please log in.");
    }
  };

  const handleSubmit = async (e, origin) => {
    e.preventDefault();

    if (origin === "userInfo") {
      // We're on the first step of form, need to check email isn't in db and that form fields are filled out before moving to next step

      await handleUserInfoValidation();
    } else {
      // Validate second step fields
      const validatedFields = validateFields([
        "height",
        "weight",
        "age",
        "gender",
      ]);

      if (validatedFields) {
        const signup = await signUserUp(userDetails);
        // Fix how this is handled
        if (signup[0] && signup[0].error) {
          setError(signup[0].error);
          // Error will be invalid email format - handle in handleUserInfo or just handle all errors at submission?
          prevStep();
        }

        signup.data && history.push("/");
      }
    }
  };

  const renderFormComponent = () => {
    switch (step) {
      case 1:
        return (
          <UserInfo
            userDetails={userDetails}
            handleChange={handleChange}
            nextStep={nextStep}
            errors={errors}
            handleSubmit={handleSubmit}
            validateFields={validateFields}
            setErrors={setErrors}
            setErrorMessage={setError}
          />
        );
      case 2:
        return (
          <UserDetails
            userDetails={userDetails}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
            errors={errors}
            validateFields={validateFields}
          />
        );
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="ui middle aligned center aligned grid"
    >
      <div
        className="column ui segment raised"
        style={{ maxWidth: "450px", position: "relative" }}
      >
        <h2
          className="ui image header blue"
          style={{ textShadow: "0 0 0px #eeeeee99" }}
        >
          <img
            className="image"
            src="/4flogo.png"
            style={{
              display: "block",
              margin: "0 auto",
              height: "60px",
              width: "70px",
            }}
          />{" "}
          Sign Up
        </h2>
        <Form onSubmit={handleSubmit} error={errors}>
          {renderFormComponent()}
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
