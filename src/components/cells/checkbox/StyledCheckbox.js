import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  width: 23px;
  display: flex;
  justify-content: center;
  position: relative;

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

    @media (max-width: 620px) {
      margin-left: -1rem;
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
    top: 50%;
    left: 50%;
    transform: translate(-40%, -85%);
    color: ${(props) => (props.disabled ? "#33333377" : " #fff")};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};

    @media (max-width: 620px) {
      left: 15%;
      top: 53%;
    }
  }

  @media (max-width: 620px) {
    margin-right: 0.35rem;
  }
`;
