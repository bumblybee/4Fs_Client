import React, { useContext, useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { UserContext } from "../../context/user/UserContext";

const UserProfile = () => {
  const { user, updateUserDetails } = useContext(UserContext);

  const splitPhoneNumber = user && user.phone && user.phone.split("-");
  const [userDetails, setUserDetails] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
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
    const res = await updateUserDetails(userDetails);
    console.log(res);
  };

  useEffect(() => {
    user &&
      setUserDetails({
        ...userDetails,
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone1: splitPhoneNumber && splitPhoneNumber[0],
        phone2: splitPhoneNumber && splitPhoneNumber[1],
        phone3: splitPhoneNumber && splitPhoneNumber[2],
        age: user.age,
        height: user.height,
        weight: user.weight,
        gender: user.gender,
        sheetsUrl: user.sheetsUrl,
      });
  }, [user]);

  return (
    <Segment style={{ maxWidth: "70%", margin: "5% auto" }} raised>
      <Segment basic padded style={{ maxWidth: "65%", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Member Profile
        </h1>
        <Form style={{ padding: "1rem" }} onSubmit={handleSubmit}>
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
          <Form.Group inline widths="equal">
            <Form.Input
              fluid
              icon="phone"
              iconPosition="left"
              placeholder="555"
              label="Phone Number"
              type="text"
              value={userDetails.phone1}
              onChange={handleChange("phone1")}
            />{" "}
            <Form.Input
              fluid
              placeholder="555"
              label=""
              type="text"
              value={userDetails.phone2}
              onChange={handleChange("phone2")}
            />{" "}
            <Form.Input
              fluid
              placeholder="5555"
              label=" "
              type="text"
              value={userDetails.phone3}
              onChange={handleChange("phone3")}
            />
          </Form.Group>
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
        </Form>
      </Segment>
    </Segment>
  );
};

export default UserProfile;
