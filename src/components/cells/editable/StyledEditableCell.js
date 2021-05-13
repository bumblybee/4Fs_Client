import styled from "styled-components";

export const StyledEditableCell = styled.div`
  width: 95%;
  /* padding-left: 0.5rem; */
  cursor: pointer;
  /* border-radius: 4px; */
  min-height: 40px;
  overflow: auto;
  display: flex;
  justify-content: ${(props) => props.alignment};
  align-items: center;
  font-weight: ${(props) => props.textweight};
  color: ${(props) => (props.editCellVal ? "" : "#bbb")};

  input {
    border: none;
    border-color: transparent;
    outline: none;
    width: inherit;
    /* height: inherit; */
    text-align: ${(props) => props.aligntext};
    /* margin: 0 auto; */
    text-align-last: ${(props) => props.alignment};
    font-family: "Lato";
    white-space: normal;
    background: #eee;
    padding: 0.75rem;
    border-radius: 6px;
  }

  :hover {
    /* background: #eee;
    border-radius: 6px; */
    /* border-bottom: 2px solid #eee; */
  }
`;
