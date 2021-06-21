import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const StyledNav = styled.div`
  padding: 1.25rem 2rem 1rem;
  background: linear-gradient(
    135deg,
    rgba(105, 165, 232, 1) -1%,
    rgba(51, 118, 202, 1) 0,
    rgba(51, 83, 171, 1) 18%,
    rgba(51, 83, 171, 1) 82%,
    rgba(51, 118, 202, 1) 100%,
    rgba(105, 165, 232, 1) 101%
  );

  display: flex;
  align-content: center;
  width: 100%;

  div:first-child {
    margin-right: auto;
  }

  div:nth-child(2) {
    margin-left: auto;
  }

  @media (max-width: 620px) {
    padding: 0.75rem;
  }
`;

export const StyledUserButton = styled(Button)`
  border-radius: 50% !important;
  padding: 13px 11px 14px 13px !important;
  box-shadow: 0 0 10px 2px rgba(17, 47, 167, 0.3);
  color: #3353ab;
  border: 2px solid #3353ab;
  margin-right: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 100%
  );
  display: flex !important;
  align-content: center;
  justify-content: center;
  cursor: pointer;

  i {
    font-size: 1.6rem !important;
    color: #3353ab !important;
  }

  :hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(246, 246, 246, 0.9) 47%,
      rgba(237, 237, 237, 0.9) 100%
    );
  }

  :active {
    transform: scale(0.99);
    i {
      font-size: 1.55rem !important;
    }
    box-shadow: 0 0 2px 1px rgba(17, 47, 167, 0.4);
  }

  @media (max-width: 620px) {
    padding: 12px 9px 12px 11px !important;

    i {
      font-size: 1.25rem !important;
    }

    :active {
      i {
        font-size: 1.2475rem !important;
      }
    }
  }
`;

export const StyledLogoButton = styled(Button)`
  border-radius: 50% !important;
  padding: 8px 7px;
  box-shadow: 0 0 10px 2px rgba(17, 47, 167, 0.3);
  border: 2px solid #3353ab;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 100%
  );
  display: block !important;
  cursor: pointer;

  img {
    height: 2.45rem;
  }

  :hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(246, 246, 246, 0.9) 47%,
      rgba(237, 237, 237, 0.9) 100%
    );
  }

  :active {
    transform: scale(0.99);
    box-shadow: 0 0 2px 1px rgba(17, 47, 167, 0.4);

    img {
      transform: scale(0.99);
    }
  }

  @media (max-width: 620px) {
    img {
      height: 1.85rem;
    }
  }
`;
