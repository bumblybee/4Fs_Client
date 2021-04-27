import React, { useState } from "react";
import UserInfo from "./UserInfo";
import AddedDetails from "./AddedDetails";
import { Form, Message } from "semantic-ui-react";
import { SettingsPowerSharp } from "@material-ui/icons";
// Semantic has built in form validation object
const SignupForm = () => {
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

  const validation = () => {
    for (const item in userDetails) {
      if (userDetails[item] === "") {
        console.log(`${item} error`);
        setErrors({ ...errors, [item]: true, form: true });
        console.log(errors);

        return;
      } else {
        setErrors({ ...errors, [item]: false });
      }
    }

    setErrors({ form: false });
  };

  const handleSubmit = (e, origin) => {
    e.preventDefault();

    if (origin === "next") {
      nextStep();
      return;
    }
    console.log(userDetails);
    validation();
    if (errors.form) console.log("err");
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
          />
        );
      case 2:
        return (
          <AddedDetails
            userDetails={userDetails}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
            errors={errors}
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
            content="Please correct the highlighted fields"
            size="tiny"
            style={{ marginBottom: "0" }}
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
