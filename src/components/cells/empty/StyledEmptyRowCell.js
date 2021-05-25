import styled from "styled-components";

export const StyledEmptyCell = styled.div`
  width: 99%;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border-radius: 0;
  min-height: 40px;
  color: ${(props) => (props.blankCellVal ? "" : "#aaaaaacc")};
  padding-left: 0.25rem;
  text-align: ${(props) => props.aligntext};

  display: flex;
  justify-content: ${(props) => props.aligntext};
  align-items: center;

  :hover {
    background: ${(props) => (props.disabled ? "" : " #eee")};
    border-radius: 6px;
  }

  input {
    border: none;
    border-color: transparent;
    outline: none;
    width: inherit;
    height: inherit;
    text-align: ${(props) => props.aligntext};

    text-align-last: ${(props) => props.aligntext};
    white-space: normal;
    background: #eee;
    padding: 0.75rem;
    border-radius: 6px;
  }
`;

export const StyledWrapper = styled.div``;
