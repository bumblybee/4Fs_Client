import styled from "styled-components";

export const StyledSwaggerTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  div:not(:last-child) {
    margin-right: 0.25rem;
  }

  @media (max-width: 1027px) {
    flex-direction: column;
  }
`;
