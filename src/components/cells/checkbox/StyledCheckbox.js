import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  width: auto;
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 2px solid #728fa5;
    margin-left: 0.3rem;
    height: 23px;
    width: 24px;
    border-radius: 2px;
    outline: none;
    transition-duration: 0.1s;
    background-color: #ffffff88;
    cursor: pointer;
  }

  input:checked {
    background: #218fdcdd;
    border: 2px solid #218fdcdd;
  }

  label {
    position: relative;
  }

  .icon {
    position: absolute;
    font-size: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-38%, -111%);
    color: #fff;
    cursor: pointer;
  }
`;
