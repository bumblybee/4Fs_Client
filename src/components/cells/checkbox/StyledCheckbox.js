import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  width: 23px;
  display: flex;
  justify-content: center;
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 2px solid #800080;
    margin-left: 0.25rem;
    height: 23px;
    width: 24px;
    border-radius: 2px;
    outline: none;
    transition-duration: 0.1s;
    background-color: #ffffff88;
    cursor: pointer;
    padding: 0 0 0 0.5rem;
    position: relative;
  }

  input:checked {
    background: #800080aa;
    border: 2px solid #800080;
  }

  label {
  }

  .icon {
    position: absolute;
    font-size: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-160%, -85%);
    color: #fff;
    cursor: pointer;
  }
`;
