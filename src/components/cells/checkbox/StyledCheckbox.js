import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const StyledCheckbox = styled.div`
  width: 23px;

  label {
    position: relative !important;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: ${(props) =>
      props.disabled ? "2px solid #33333333" : "2px solid #800080"};
    height: 23px;
    width: 24px;
    border-radius: 2px;
    outline: none;
    transition-duration: 0.1s;
    background: ${(props) => (props.disabled ? "transparent" : "#ffffff88")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    padding: 0 0 0 0.5rem;

    @media (max-width: 620px) {
      margin-left: 0;
    }
  }

  input:checked {
    background: ${(props) => (props.disabled ? "transparent" : "#b463b4")};
    border: ${(props) => (props.disabled ? "" : "2px solid #800080aa")};
  }

  input:focus {
    outline: 1px dashed #333;
  }

  .icon {
    position: absolute;
    font-size: 1rem;
    top: 0;
    left: 0;
    transform: translate(25%, -49%);
    color: ${(props) => (props.disabled ? "#33333377" : " #fff")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  }
`;
