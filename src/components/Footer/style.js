import styled, { css } from "styled-components";

export const Container = styled.footer`
  background-color: var(--color-main-orange);
  padding: 5rem 0;

  & > div {
    max-width: 70rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;

    @media (max-width: 72rem) {
      max-width: 40rem;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 4rem 0;
    }

    @media (max-width: 42rem) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  & > div > div {
    @media (max-width: 72rem) {
      grid-column: 1 / 4;
    }

    @media (max-width: 42rem) {
      grid-column: initial;
    }

    > form {
      display: grid;
      background: none;
      box-shadow: none;
      border-radius: initial;
      width: 100%;
      padding: 0 3rem;
      margin: 0;
      height: fit-content;
      border: 0;

      > span {
        color: var(--color-light-white);
      }

      @media (max-width: 72rem) {
        padding: 0;
      }

      > input {
        background: var(--color-light-white);
        border-radius: 0.2rem;
        border-bottom: 3px solid transparent;

        &:focus {
          border-bottom: 3px solid var(--color-main-blue);
        }
      }

      > button {
        width: 100%;
        background-color: var(--color-main-blue);
        border-radius: 0.2rem;
        margin: 0;
        transition: 0.5s background-color;

        ${({ loading }) =>
          loading &&
          css`
            cursor: initial;
            background-color: var(--color-seed) !important;
          `}

        &:hover {
          background-color: var(--color-hover-blue);
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const LogoFooter = styled.img`
  width: 8rem;
  cursor: pointer;
`;

export const MenuFooter = styled.ul`
  > h3 {
    font-size: 1.1rem;
    color: var(--color-light-white);
    margin-bottom: 0.6rem;
  }

  > li {
    a {
      padding: 0.4rem 0;
      display: block;
      font-size: 0.8rem;
      color: #fff;
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;

export const InfosFooter = styled.ul`
  > h3 {
    font-size: 1.1rem;
    color: var(--color-light-white);
    margin-bottom: 0.6rem;
  }

  > p {
    padding: 0.4rem 0;
    display: block;
    font-size: 0.8rem;
    color: #fff;
    opacity: 0.9;
    margin-bottom: 1rem;

    > small {
      color: var(--color-light-white);
    }
  }
`;

export const EndPage = styled.div`
  background-color: var(--color-main-blue);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    color: var(--color-light-white);
    font-size: 0.8rem;
    font-family: "Quicksand", sans-serif;
    letter-spacing: 0.1rem;
    line-height: 1.4;
  }
`;
