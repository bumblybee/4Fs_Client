import styled from "styled-components";

export const StyledEditableCell = styled.div`
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  width: 98%;
  height: auto;
  min-height: 35px;
  display: flex;
  justify-content: ${(props) => props.alignment};
  align-items: center;
  font-weight: ${(props) => props.textweight};
  color: ${(props) => (props.editCellVal ? "" : "#bbb")};
  text-align: ${(props) => props.aligntext};

  input {
    border: none;
    border-color: transparent;
    outline: none;
    width: inherit;
    text-align: ${(props) => props.aligntext};
    text-align-last: ${(props) => props.aligntext};
    font-family: "Lato";
    white-space: normal;
    background: #eee;
    padding: 0.75rem;
    border-radius: 6px;
  }

  textarea {
    border: none;
    border-color: transparent;
    background: #eee;
    outline: none;
    width: inherit;
    height: 100%;
    resize: none;
    line-height: 1.4285;
    font-size: 0.965rem;
    font-family: "Lato";
    border-radius: 6px;
    padding-left: 0.25rem;
  }
`;
