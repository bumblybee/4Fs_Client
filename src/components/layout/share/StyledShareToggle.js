import styled from "styled-components";

export const StyledToggle = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => (props.width ? "0 auto 0.25rem" : "0 0 0.5rem 0.25rem")};
`;
