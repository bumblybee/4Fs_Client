import styled from "styled-components";

export const StyledCookieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 200;
  background: #2d2d2d;
  padding: 1.85rem;
  color: #fff;
  box-shadow: 0 -2px 8px rgba(47, 54, 64, 0.3);
  opacity: 0.99;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    padding: 1.5em 4em;
    text-align: left;
  }
`;

export const StyledCookieButtonContainer = styled.div`
  margin-left: 0.75rem;

  @media screen and (max-width: 620px) {
    margin: 0.5rem 0 0;
    width: 100%;
  }
`;

export const StyledCookieButton = styled.button`
  background: #3353ab;
  color: #fff;
  font-weight: bolder;
  border: none;
  padding: 0.6em 1.1em;
  border-radius: 0.28571429rem;

  :hover {
    background: #263e80;
    cursor: pointer;
  }

  :active {
    background: #3353ab;
  }

  @media screen and (max-width: 620px) {
    display: block;
    width: 100%;
  }
`;
