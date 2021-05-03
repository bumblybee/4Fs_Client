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
        console.log(errors);
        setErrorMessage("Please fill in the highlighted fields");

        return false;
      } else {
        setErrors({ ...errors, [item]: false });
      }
    }
    setErrors({ form: false });
    return true;
  };

  const handleSubmit = async (e, origin) => {
    e.preventDefault();

    if (origin === "userInfo") {
      const validate = await validateEmail({ email: userDetails.email });

      if (validate.data && validate.data.code === "email.available") {
        const validValues = validateFields([
          "firstName",
          "lastName",
          "email",
          "password",
        ]);
        if (!validValues) {
          return;
        }

        nextStep();
      } else {
        setErrors({ ...errors, form: true, email: true });
        setErrorMessage("Email already in use. Please log in.");
      }
    } else {
      const validValues = validateFields(["height", "weight", "age", "gender"]);
      if (!validValues) {
        return;
      }

      const signup = await signUserUp(userDetails);
      console.log(signup);
      signup.data && history.push("/");
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
