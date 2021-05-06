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
  const { signUserUp, checkIfEmailExists } = useContext(UserContext);
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
  };

  const validateFieldsAreComplete = (fields) => {
    for (const item of fields) {
      if (userDetails[item] === "") {
        setFormErrors({ ...formErrors, [item]: true });

        setError("Please fill in the highlighted fields");

        return false;
      } else {
        setFormErrors({ ...formErrors, [item]: false });
      }
    }

    return true;
  };

  const handleUserInfoValidation = async () => {
    // Validate fields aren't empty
    const validatedFields = validateFieldsAreComplete([
      "firstName",
      "lastName",
      "email",
      "password",
    ]);

    if (!validatedFields) return;

    // Check email doesn't exist in db
    const serverEmailStatus = await checkIfEmailExists({
      email: userDetails.email,
    });

    // API returns code for available/unavailable email
    const emailAvailable =
      serverEmailStatus.data &&
      serverEmailStatus.data.code === "email.available";

    if (emailAvailable) {
      // Go to next form step
      nextStep();
    } else {
      // Set email error and error message
      setFormErrors({ ...formErrors, email: true });
      setError(serverEmailStatus.error);
    }
  };

  const handleSubmit = async (e, origin) => {
    e.preventDefault();

    if (origin === "userInfo") {
      // We're on the first step of form, need to check email isn't in db and that form fields are filled out before moving to next step

      await handleUserInfoValidation();
    } else {
      // Validate second step fields
      const validatedFields = validateFieldsAreComplete([
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
            nextStep={nextStep}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFormErrors={setFormErrors}
            formErrors={formErrors}
            setErrorMessage={setError}
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
        <Form onSubmit={handleSubmit} error={formErrors}>
          {renderFormComponent()}
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
