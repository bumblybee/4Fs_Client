import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { UserContext } from "../../context/user/UserContext";
import { NotificationContext } from "../../context/notification/NotificationContext";
import {
  StyledProfileHeader,
  StyledPhoneWrapper,
  StyledLinkWrapper,
  StyledFormContainer,
  StyledSegment,
} from "./StyledUserProfile";
import * as sc from "../../styles/GlobalStyledComponents";

// TODO: format sheets url before sending to server - url.split("#")[0] - removes id so can add dynamically later
const UserProfile = () => {
  const history = useHistory();
  const { setNotificationMessage } = useContext(NotificationContext);
  const { user, updateUserDetails, logUserOut } = useContext(UserContext);

  const [userDetails, setUserDetails] = useState({
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
    sheetsURL: "",
  });

  const formatSheetsUrl = (url) => {
    return url.split("#")[0];
  };

  const formatPhone = () => {
    let formattedPhone = "";
    if (user && user.phone && user.phone.includes("null")) {
      formattedPhone = null;
    } else if (user && user.phone && !user.phone.includes("null")) {
      formattedPhone = user.phone.split("-");
    }

    return {
      countryCode: formattedPhone[0],
      phone1: formattedPhone[1],
      phone2: formattedPhone[2],
      phone3: formattedPhone[3],
    };
  };

  const handleChange = (field) => (e) => {
    setUserDetails({ ...userDetails, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in userDetails) {
      if (userDetails[key] === "") userDetails[key] = null;
    }

    const phoneNumber =
      userDetails.phone1 !== null
        ? `${userDetails.countryCode || 1}-${userDetails.phone1}-${
            userDetails.phone2
          }-${userDetails.phone3}`
        : null;

    const data = (({ countryCode, phone1, phone2, phone3, ...rest }) => rest)({
      ...userDetails,
      phone: phoneNumber,
      sheetsURL: formatSheetsUrl(userDetails.sheetsURL),
    });

    const res = await updateUserDetails(data);
    console.log(res);
    res &&
      setNotificationMessage("Your information has been updated", "info", true);
  };

  const handleLogout = () => {
    logUserOut();

    history.replace("/login");
  };

  const { countryCode, phone1, phone2, phone3 } = formatPhone();
  useEffect(() => {
    user &&
      setUserDetails({
        ...userDetails,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        countryCode,
        phone1,
        phone2,
        phone3,
        age: user.age,
        height: user.height,
        weight: user.weight,
        gender: user.gender,
        sheetsURL: user.sheetsURL,
      });
  }, [user]);

  return (
    <sc.StyledFormWrapper verticalAlign="middle" centered origin="profile">
      <StyledSegment className="column" raised>
        <StyledFormContainer basic padded>
          <StyledProfileHeader>
            {user && user.firstName
              ? `${user.firstName}'s Profile`
              : `Member Profile`}
          </StyledProfileHeader>
          <sc.StyledForm
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
                value={userDetails.firstName || ""}
                onChange={handleChange("firstName")}
              />

              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last name"
                label="Last Name"
                value={userDetails.lastName || ""}
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
              value={userDetails.email || ""}
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
                  value={userDetails.countryCode || ""}
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
                value={userDetails.phone1 || ""}
                onChange={handleChange("phone1")}
              />
              <input
                className="phone"
                placeholder="555"
                label=""
                type="text"
                pattern="[0-9]{3}"
                title="Enter first three digits of phone number"
                value={userDetails.phone2 || ""}
                onChange={handleChange("phone2")}
              />
              <input
                className="phone"
                placeholder="5555"
                label=" "
                type="text"
                title="Enter last four digits of phone number"
                pattern="[0-9]{4}"
                value={userDetails.phone3 || ""}
                onChange={handleChange("phone3")}
              />
            </StyledPhoneWrapper>
            <Form.Input
              fluid
              icon="google drive"
              iconPosition="left"
              placeholder="https://docs.google.com/spreadsheets/d/CveaIsVeKQ"
              label="Google Sheets Link"
              value={userDetails.sheetsURL || ""}
              onChange={handleChange("sheetsURL")}
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
                value={userDetails.height || ""}
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
                value={userDetails.weight || ""}
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
                value={userDetails.age || ""}
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
                value={userDetails.gender || ""}
                onChange={handleChange("gender")}
              />
            </Form.Group>
            <Button color="blue" fluid>
              Update
            </Button>
          </sc.StyledForm>
          <StyledLinkWrapper>
            <Link to="/reset-password">Reset your password</Link>
            <p onClick={handleLogout}>Log out</p>
          </StyledLinkWrapper>
        </StyledFormContainer>
      </StyledSegment>
    </sc.StyledFormWrapper>
  );
};

export default UserProfile;
