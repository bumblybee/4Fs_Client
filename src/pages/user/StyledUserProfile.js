import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const StyledFormContainer = styled.div`
  width: 50%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1200px) {
    width: 85%;
    padding: 0 1rem;
  }

  @media (max-width: 420px) {
    width: 90%;
    padding: 0;
  }

  @media (max-width: 360px) {
    width: 100%;
    padding: 0;
  }
`;

export const StyledSegment = styled(Segment)`
  width: 70% !important;
  border: 2px solid #3353ab !important;
  margin: 4% auto 0 !important;

  @media (max-width: 1024px) {
    margin-top: 7% !important;
  }

  @media (max-width: 810px) {
    width: 82% !important;
  }

  @media (max-width: 620px) {
    width: 100% !important;
    /* margin-top: 2% !important; */
    border-radius: 0 !important;
    border: none !important;
    box-shadow: none !important;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    margin-top: -2% !important;
  }

  @media (max-width: 855px) and (orientation: landscape) {
    margin-top: 4% !important;
  }
`;

export const StyledProfileHeader = styled.h1`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.75rem;
    margin-top: 1rem !important;
  }
`;

export const StyledPhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    color: #000000de;
    font-size: 0.92857143em;
  }
`;

export const StyledPhoneInputsWrapper = styled.div`
  display: flex !important;
  align-items: flex-end !important;
  justify-content: space-between !important;
  width: 100%;
  margin-bottom: 1rem;

  input,
  .ui.left.icon.input {
    width: calc(90% / 3) !important;
  }
`;

export const StyledLinkWrapper = styled.div`
  text-align: center;
  margin: 1rem auto 0;
  display: grid;
  font-size: 1.035rem;
  color: #2185d0;

  p {
    margin-top: 0.25rem;
  }

  p:hover {
    cursor: pointer;
  }
`;

export const StyledSheetsWrapper = styled.div`
  position: relative;

  i {
    position: absolute;
    top: 0;
    left: 32%;
    color: #333;

    @media (max-width: 1200px) {
      left: 24%;
    }

    @media (max-width: 810px) {
      left: 26%;
    }

    @media (max-width: 620px) {
      left: 38%;
    }

    @media (max-width: 375px) {
      left: 39%;
    }

    @media (max-width: 360px) {
      left: 37%;
    }

    @media (max-width: 320px) {
      left: 43%;
    }
  }
`;
