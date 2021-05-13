import React, { useContext, useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { UserContext } from "../../context/user/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
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
        <Form style={{ padding: "1rem" }}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="First name"
              label="First Name"
              value={userDetails.firstName}
            />

            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Last name"
              label="Last Name"
              value={userDetails.lastName}
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
            />{" "}
            <Form.Input
              fluid
              placeholder="555"
              label=""
              type="text"
              value={userDetails.phone2}
            />{" "}
            <Form.Input
              fluid
              placeholder="5555"
              label=" "
              type="text"
              value={userDetails.phone3}
            />
          </Form.Group>
          <Form.Input
            fluid
            icon="google drive"
            iconPosition="left"
            placeholder="https://docs.google.com/spreadsheets/d/CveaIsVeKQ"
            label="Google Sheets Link"
            value={userDetails.sheetsUrl}
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
