import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { history } from "../../utils/customHistory";
import { pushToLogin } from "../../utils/customHistory";
import { Form, Input, Icon, Popup } from "semantic-ui-react";
import { UserContext } from "../../context/user/UserContext";
import { NotificationContext } from "../../context/notification/NotificationContext";
import {
  StyledProfileHeader,
  StyledPhoneWrapper,
  StyledPhoneInputsWrapper,
  StyledLinkWrapper,
  StyledFormContainer,
  StyledSegment,
  StyledSheetsWrapper,
} from "./StyledUserProfile";
import * as sc from "../../styles/GlobalStyledComponents";

// TODO: format sheets url before sending to server - url.split("#")[0] - removes id so can add dynamically later
const UserProfile = () => {
  const { setNotificationMessage } = useContext(NotificationContext);
  const { loading, user, updateUserDetails, logUserOut } =
    useContext(UserContext);

  const [formChanges, setFormChanges] = useState(0);
  const [userDetails, setUserDetails] = useState({
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
    sheetsURL: "",
  });

  // Remove id from sheet url here, add to components that link to sheets to access specific sheet by id when clicking button
  const formatSheetsUrl = (url) => {
    return url ? url.split("#")[0] : null;
  };

  const formatPhone = () => {
    if (!user || !user.phone)
      return {
        phone1: null,
        phone2: null,
        phone3: null,
      };

    if (user && user.phone) {
      const formattedPhone = user.phone.split("-");

      return {
        phone1: formattedPhone[0],
        phone2: formattedPhone[1],
        phone3: formattedPhone[2],
      };
    }
  };

  const updateOrDeletePhone = (phone) => {
    let nullCount = 0;

    for (const key in phone) {
      if (phone[key] == null) {
        nullCount++;
      }
    }

    // If all three inputs cleared, delete phone
    if (nullCount === 3) {
      return null;
    }

    // If cleared one or two inputs, don't update phone, use what's in context
    if (nullCount === 1 || nullCount === 2) {
      return user.phone;
    } else {
      // If all inputs filled, return formatted phone
      return `${phone.phone1}-${phone.phone2}-${phone.phone3}`;
    }
  };

  // const checkIfInfoUpdated = () => {
  //   let updatedCount = 0;
  //   for (const key in userDetails) {
  //     if (userDetails[key] !== user[key]) {
  //       updatedCount++;
  //     }
  //   }
  // };

  const handleChange = (field) => (e, data) => {
    if (field === "gender") {
      setUserDetails({ ...userDetails, gender: data.value });
    } else {
      setUserDetails({ ...userDetails, [field]: e.target.value });
    }

    setFormChanges(formChanges + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Only call api if a change has been made
    if (formChanges > 0) {
      // If cleared input, send null to API
      for (let key in userDetails) {
        if (userDetails[key] === "") userDetails[key] = null;
      }

      const userData = (({ phone1, phone2, phone3, ...rest }) => rest)({
        ...userDetails,
        phone: updateOrDeletePhone({
          phone1: userDetails.phone1,
          phone2: userDetails.phone2,
          phone3: userDetails.phone3,
        }),
        sheetsURL: formatSheetsUrl(userDetails.sheetsURL),
      });

      const res = await updateUserDetails(userData);

      if (!res.error) {
        setNotificationMessage(
          "Your information has been updated",
          "info",
          true
        );
      } else {
        setNotificationMessage(res.error, "error", true);

        if (res.error === "Your session has expired.") {
          pushToLogin();
        }
      }

      setFormChanges(0);
    }
  };

  const handleLogout = () => {
    logUserOut();

    history.replace("/login");
  };

  const { phone1, phone2, phone3 } = formatPhone();
  useEffect(() => {
    user &&
      setUserDetails({
        ...userDetails,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
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
    <StyledSegment>
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
            <label htmlFor="">Phone</label>
            <StyledPhoneInputsWrapper>
              <Input
                placeholder="555"
                icon="phone"
                iconPosition="left"
                type="text"
                pattern="[0-9]{3}"
                title="Enter the area code"
                value={userDetails.phone1 || ""}
                onChange={handleChange("phone1")}
              />

              <input
                className="phone "
                placeholder="555"
                label=""
                type="text"
                pattern="[0-9]{3}"
                title="Enter first three digits of phone number"
                value={userDetails.phone2 || ""}
                onChange={handleChange("phone2")}
              />
              <input
                className="phone "
                placeholder="5555"
                label=" "
                type="text"
                title="Enter last four digits of phone number"
                pattern="[0-9]{4}"
                value={userDetails.phone3 || ""}
                onChange={handleChange("phone3")}
              />
            </StyledPhoneInputsWrapper>
          </StyledPhoneWrapper>
          <StyledSheetsWrapper>
            <Form.Input
              fluid
              id="sheets"
              icon="google drive"
              iconPosition="left"
              placeholder="ex: https://docs.google.com/spreadsheets/d/CveaIsVeKQ"
              label="Google Sheets Link"
              value={userDetails.sheetsURL || ""}
              onChange={handleChange("sheetsURL")}
              type="url"
              pattern="https://docs\.google\.com/?.+"
              title="Please enter a valid 4Fs Google Sheets link"
            />
            <Popup
              content="Enter the link to your copy of the program worksheet."
              offset={[0, -2]}
              position="top center"
              trigger={<Icon name="question mark circle outline" />}
            />
          </StyledSheetsWrapper>
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
          <sc.StyledFormButton fluid>
            {loading ? <Icon loading name="spinner" /> : "Update"}
          </sc.StyledFormButton>
        </sc.StyledForm>
        <StyledLinkWrapper>
          <Link to="/reset-password">Reset your password</Link>
          <p onClick={handleLogout}>Log out</p>
        </StyledLinkWrapper>
      </StyledFormContainer>
    </StyledSegment>
  );
};

export default UserProfile;
