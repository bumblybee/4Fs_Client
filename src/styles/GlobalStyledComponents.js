import styled from "styled-components";
import {
  Grid,
  Segment,
  Header,
  Form,
  Message,
  Button,
} from "semantic-ui-react";

export const StyledFormWrapper = styled(Grid)`
  height: 100vh !important;
`;

export const StyledSegment = styled(Segment)`
  max-width: 450px;
  position: relative;
  border: 2px solid #3353ab !important;
  margin-top: 3% !important;

  @media (max-width: 620px) {
    width: 88% !important;
    max-width: 98%;
    margin-top: 0 !important;
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
  color: #3353ab;
  margin-bottom: ${(props) => (props.origin === "password" ? 0 : "")};

  .logo {
    display: block;
    margin: 0 auto;
    height: 55px;
    width: 65px;
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

  .ui .basic .segment {
    text-align: left;
  }

  input:focus,
  select:focus,
  div.dropdown:focus,
  input:hover,
  select:hover,
  div.dropdown:hover {
    background: #fcfdff !important;
    border: 1px solid #2b73ce !important;
  }
  input:focus,
  select:focus,
  div.dropdown:focus {
    background: #dce9fe44 !important;
  }
`;

export const StyledFormButton = styled(Button)`
  background: #3353ab !important;
  color: #fff !important;
  transition: background 0.1s ease, color 0.1s ease;

  :hover {
    background: #2e4a98 !important;
    color: #ffffffef !important;
  }

  :active {
    background: #284082 !important;
    color: #ffffffef !important;
  }
`;

export const StyledFooterMessage = styled(Message)`
  text-align: center;
  font-size: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 0.25rem;
  }
`;
