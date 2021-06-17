import styled from "styled-components";

export const StyledNotFoundWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    position: absolute;
    top: 40%;
    font-size: 1.7rem;
  }

  i.desktop {
    font-size: 23rem;
    display: block !important;
    width: auto;
    height: auto;
    position: relative !important;
    color: #3353ab !important;
  }

  img {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    width: 60px;
    height: 50px;
  }

  div:first-child {
    position: relative !important;
    height: 30rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 620px) {
    i.desktop {
      font-size: 16rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    img {
      width: 55px;
      height: 45px;
    }

    div:first-child {
      height: 20rem;
      margin-bottom: 0;
    }
  }
`;
