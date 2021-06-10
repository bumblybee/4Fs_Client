import styled from "styled-components";

export const StyledToggle = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => (props.width ? "0 auto 0.5rem" : "0 0 0.5rem 0.5rem")};

  label {
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    margin: ${(props) =>
      props.field === "fasting"
        ? "0 0 0 2rem"
        : props.field === "habit" && "0 0.5rem -0.5rem"};
  }

  @media (max-width: 620px) {
    width: ${(props) => `calc(${props.width} + 33%)`};
    margin: ${(props) => props.field === "fasting" && "0 0 0 1.25rem"};
  }
`;
