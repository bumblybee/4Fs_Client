import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ErrorContext } from "../../context/error/ErrorContext";
import { UserContext } from "../../context/user/UserContext";

import UserInfo from "./UserInfo";
import UserDetails from "./UserDetails";
import { Form, Message } from "semantic-ui-react";

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
    form: false,
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    height: false,
    weight: false,
    age: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

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
      setErrors({ ...errors, [input]: false, form: false });
    }
  };

  const validateFields = (fields) => {
    for (const item of fields) {
      if (userDetails[item] === "") {
        setErrors({ ...errors, [item]: true, form: true });

        setErrorMessage("Please fill in the highlighted fields");

        return false;
      } else {
        setErrors({ ...errors, [item]: false });
      }
    }
    setErrors({ form: false });
    return true;
  };

  const handleUserInfoValidation = async () => {
    // Check email doesn't exist in db
    const emailValidation = await validateEmail({ email: userDetails.email });

    // API returns code for available/unavailable email
    const emailAvailable =
      emailValidation.data && emailValidation.data.code === "email.available";

    // Validate fields aren't empty
    const validatedFields = validateFields([
      "firstName",
      "lastName",
      "email",
      "password",
    ]);

    if (emailAvailable && validatedFields) {
      // Go to next form step
      nextStep();
    } else {
      // Set email error and error message
      setErrors({ ...errors, form: true, email: true });
      setErrorMessage("Email already in use. Please log in.");
    }
  };

  const handleSubmit = async (e, origin) => {
    e.preventDefault();

    if (origin === "userInfo") {
      // We're on the first step of form, need to check email isn't in db and that form fields are filled out
      // TODO: May not be necessary - could just take user back to first step if email taken?
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
          prevStep();
        }
        console.log(signup);
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
            setErrorMessage={setErrorMessage}
            handleChange={handleChange}
            nextStep={nextStep}
            errors={errors}
            handleSubmit={handleSubmit}
            validateFields={validateFields}
            setErrors={setErrors}
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
      <div className="column ui segment raised" style={{ maxWidth: "450px" }}>
        {errors.form && (
          <Message
            error
            content={errorMessage}
            size="small"
            style={{
              width: "95%",
              margin: "-1rem auto 0",
            }}
          />
        )}
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
        <Form onSubmit={handleSubmit} error={errors.form}>
          {renderFormComponent()}
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
