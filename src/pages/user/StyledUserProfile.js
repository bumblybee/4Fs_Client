import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const StyledFormContainer = styled.div`
  width: 50%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1200px) {
    width: 94%;
    padding: 0 1rem;
  }
`;

export const StyledSegment = styled(Segment)`
  width: 70% !important;
  border: 2px solid #3353ab !important;
  margin-top: -12% !important;

  @media (max-width: 1200px) {
    margin-top: -60% !important;
  }

  @media (max-width: 768px) {
    width: 80% !important;
    margin-top: -33% !important;
  }

  @media (max-width: 620px) {
    width: 100% !important;
    margin-top: 3.5% !important;
    border-radius: 0 !important;
  }
`;

export const StyledProfileHeader = styled.h1`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    font-size: 1.75rem;
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

    @media (max-width: 768px) {
      left: 38%;
    }
  }
`;
