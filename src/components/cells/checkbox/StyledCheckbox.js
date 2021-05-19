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
    border: ${(props) =>
      props.disabled ? "2px solid #33333333" : "2px solid #800080"};
    margin-left: 0.25rem;
    height: 23px;
    width: 24px;
    border-radius: 2px;
    outline: none;
    transition-duration: 0.1s;
    background: ${(props) => (props.disabled ? "transparent" : "#ffffff88")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    padding: 0 0 0 0.5rem;
    position: relative;
  }

  input:checked {
    background: ${(props) => (props.disabled ? "transparent" : "#800080aa")};
    border: ${(props) => (props.disabled ? "" : "2px solid #800080")};
  }

  label {
  }

  .icon {
    position: absolute;
    font-size: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-160%, -85%);
    color: ${(props) => (props.disabled ? "#33333377" : " #fff")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;
