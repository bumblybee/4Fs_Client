import styled from "styled-components";
import { Grid, Segment, Header, Form, Message } from "semantic-ui-react";

export const StyledFormWrapper = styled(Grid)`
  height: 100% !important;

  margin-top: ${(props) => props.origin === "profile" && "3%"} !important;

  @media (max-width: 780px) {
    margin-top: ${(props) => props.origin === "profile" && "3%"} !important;
  }

  @media (max-width: 1027px) {
    margin-top: ${(props) => props.origin !== "profile" && "-20%"} !important;
  }

  @media (max-width: 620px) {
    margin-top: ${(props) =>
      props.origin === "profile" ? "6%" : "-15%"} !important;
    margin-bottom: 2% !important;
  }
`;

export const StyledSegment = styled(Segment)`
  max-width: 450px;
  position: relative;
  border: 2px solid #2185d0 !important;

  @media (max-width: 620px) {
    width: 88% !important;
    max-width: 98%;
    margin-top: 20% !important;
  }
`;

export const StyledFormHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  text-shadow: 0 0 0px #eeeeee99;
  color: #2185d0;
  margin-bottom: ${(props) => (props.origin === "password" ? 0 : "")};

  .logo {
    display: block;
    margin: 0 auto;
    height: 55px !important;
    width: 65px;
    /* background: #2185d0ff; */
    /* border: 2px solid #555 !important; */

    /* padding: 0.65rem 0.5rem;
    border-radius: 50%; */
  }
`;

export const StyledForm = styled(Form)`
  input,
  select,
  div.dropdown {
    background: #fcfdff !important;
    border: 1px solid #dce9fe !important;
  }

  div.item:hover {
    background: #dce9fe77 !important;
  }

  div.item.active {
    background: #dce9fe !important;
  }
`;

export const StyledFooterMessage = styled(Message)`
  text-align: center;
  font-size: 1.1rem;
`;
