import styled from "styled-components";
import { Segment, Button } from "semantic-ui-react";

export const StyledCookieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  z-index: 200;
  width: 100%;
  background: #9c9c9c;
  padding: 0.75rem;
  color: #fff;
`;

export const StyledCookieButtonContainer = styled.div`
  margin-left: 0.75rem;
`;

export const StyledCookieButton = styled.button`
  background: #3353ab;
  color: #fff;
  font-weight: bolder;
  border: none;
  padding: 0.425em 1em;
  border-radius: 0.28571429rem;

  :hover {
    background: #263e80;
    cursor: pointer;
  }

  :active {
    background: #3353ab;
  }
`;
