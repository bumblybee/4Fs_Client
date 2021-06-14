import styled from "styled-components";

export const StyledNumberCell = styled.div`
  width: 55px;
  display: flex;
  justify-content: ${(props) => props.alignment};
  align-items: ${(props) => props.alignment};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  input {
    width: 35px;
    font-size: 1rem;
    -moz-appearance: textfield;

    :hover {
      -moz-appearance: auto;
      cursor: pointer;
    }

    :focus {
      -moz-appearance: auto;
    }

    @media (max-width: 620px) {
      text-align: center !important;
    }
  }
`;
