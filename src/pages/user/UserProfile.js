import React, { useContext, useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { UserContext } from "../../context/user/UserContext";
import {
  StyledProfileForm,
  StyledProfileHeader,
  StyledPhoneWrapper,
} from "./StyledUserProfile";

const UserProfile = () => {
  const { user, updateUserDetails } = useContext(UserContext);

  const splitPhoneNumber = user && user.phone && user.phone.split("-");
  const [userDetails, setUserDetails] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "1",
    phone1: "",
    phone2: "",
    phone3: "",
    age: "",
    height: null,
    weight: null,
    gender: "",
    sheetsUrl: "",
  });

  const handleChange = (field) => (e) => {
    setUserDetails({ ...userDetails, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneNumber = `${userDetails.countryCode}-${userDetails.phone1}-${userDetails.phone2}-${userDetails.phone1}`;

    const data = (({ countryCode, phone1, phone2, phone3, ...rest }) => rest)({
      ...userDetails,
      phone: phoneNumber,
    });

    const res = await updateUserDetails(data);
    console.log(data);
  };
  const {
    id,
    firstName,
    lastName,
    email,
    age,
    height,
    weight,
    gender,
    sheetsUrl,
  } = user;

  useEffect(() => {
    user &&
      setUserDetails({
        ...userDetails,
        id,
        firstName,
        lastName,
        email,
        countryCode: splitPhoneNumber ? splitPhoneNumber[0] : 1,
        phone1: splitPhoneNumber && splitPhoneNumber[1],
        phone2: splitPhoneNumber && splitPhoneNumber[2],
        phone3: splitPhoneNumber && splitPhoneNumber[3],
        age,
        height,
        weight,
        gender,
        sheetsUrl,
      });
  }, [user]);

  return (
    <Segment style={{ maxWidth: "70%", margin: "5% auto" }} raised>
      <Segment basic padded style={{ maxWidth: "60%", margin: "0 auto" }}>
        <StyledProfileHeader>Member Profile</StyledProfileHeader>
        <StyledProfileForm
          countryCode={userDetails.countryCode}
          onSubmit={handleSubmit}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="First name"
              label="First Name"
              value={userDetails.firstName}
              onChange={handleChange("firstName")}
            />

            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Last name"
              label="Last Name"
              value={userDetails.lastName}
              onChange={handleChange("lastName")}
            />
          </Form.Group>
          <Form.Input
            fluid
            icon="envelope"
            iconPosition="left"
            placeholder="example@example.com"
            label="Email"
            type="email"
            value={userDetails.email}
            onChange={handleChange("email")}
          />
          <StyledPhoneWrapper>
            <div>
              <label style={{ display: "block" }} htmlFor="">
                Phone
              </label>
              <Form.Input
                fluid
                className="country-code phone"
                placeholder="1"
                icon="phone"
                iconPosition="left"
                type="text"
                pattern="[0-9]{1}"
                title="Enter the country code"
                value={userDetails.countryCode || 1}
                onChange={handleChange("countryCode")}
              />
            </div>
            <input
              className="phone"
              placeholder="555"
              label=""
              type="text"
              pattern="[0-9]{3}"
              title="Enter the area code"
              value={userDetails.phone1}
              onChange={handleChange("phone1")}
            />
            <input
              className="phone"
              placeholder="555"
              label=""
              type="text"
              pattern="[0-9]{3}"
              title="Enter first three digits of phone number"
              value={userDetails.phone2}
              onChange={handleChange("phone2")}
            />
            <input
              className="phone"
              placeholder="5555"
              label=" "
              type="text"
              title="Enter last four digits of phone number"
              pattern="[0-9]{4}"
              value={userDetails.phone3}
              onChange={handleChange("phone3")}
            />
          </StyledPhoneWrapper>
          <Form.Input
            fluid
            icon="google drive"
            iconPosition="left"
            placeholder="https://docs.google.com/spreadsheets/d/CveaIsVeKQ"
            label="Google Sheets Link"
            value={userDetails.sheetsUrl}
            onChange={handleChange("sheetsUrl")}
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="arrows alternate vertical"
              iconPosition="left"
              type="number"
              label="Height"
              placeholder="in"
              min="40"
              max="90"
              value={userDetails.height}
              onChange={handleChange("height")}
            />

            <Form.Input
              fluid
              icon="weight"
              iconPosition="left"
              type="number"
              label="Weight"
              placeholder="lb"
              min="70"
              value={userDetails.weight}
              onChange={handleChange("weight")}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="clock"
              iconPosition="left"
              label="Age"
              placeholder="yr"
              min="15"
              type="number"
              value={userDetails.age}
              onChange={handleChange("age")}
            />
            <Form.Select
              fluid
              label="Gender"
              placeholder="Gender"
              options={[
                { key: "m", text: "Male", value: "male" },
                { key: "f", text: "Female", value: "female" },
                { key: "o", text: "Other", value: "other" },
              ]}
              value={userDetails.gender}
              onChange={handleChange("gender")}
            />
          </Form.Group>
          <Button color="blue" fluid>
            Update
          </Button>
        </StyledProfileForm>
      </Segment>
    </Segment>
  );
};

export default UserProfile;
