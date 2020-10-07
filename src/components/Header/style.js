import styled, { css } from "styled-components";

export const Container = styled.header`
  background-color: var(--color-light-white);
  box-shadow: 0px 1px 5px var(--box-shadow-light);
  height: 100px;
  position: sticky;
  z-index: 1000;
  top: 0;

  > nav {
    max-width: 70rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media (max-width: 72rem) {
      max-width: 40rem;
    }
  }
`;

export const MenuButton = styled.button`
  background-color: var(--color-light-white);
  padding: 0.6rem 1.4rem;
  border-radius: 0.2rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;

  > svg {
    font-size: 1.8rem;

    > path {
      color: var(--color-main-blue);
    }
  }

  ${({ mobileButton }) =>
    mobileButton &&
    css`
      padding: 0.6rem 1.4rem;
      transition: all 0.4s;
    `}
`;

export const Logo = styled.img`
  width: 9rem;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;

  > li {
    font-size: 1rem;

    .active {
      color: var(--color-main-blue);
    }

    > a {
      color: var(--color-main-orange);
      position: relative;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;

      &::before {
        content: "";
        width: 0px;
        height: 2px;
        background-color: var(--color-main-blue);
        display: block;
        border-radius: 10px;
        opacity: 0;
        position: relative;

        transition: 0.6s width;
      }

      &:hover::before {
        width: 2rem;
        opacity: 1;
      }
    }
    & + li {
      margin-left: 1rem;
    }
  }

  ${({ mobileWindow }) =>
    mobileWindow &&
    css`
      opacity: 0;
      overflow: hidden;
      pointer-events: none;
      position: absolute;
      display: block;
    `}

  ${({ mobileButton, mobileWindow }) =>
    mobileButton &&
    mobileWindow &&
    css`
      width: 15rem;
      display: block;
      height: 12rem;
      overflow: hidden;
      position: absolute;
      background-color: var(--color-light-white);
      opacity: 1;
      pointer-events: initial;
      transition: all 0.4s;
      top: 102px;
      right: 0;
      padding: 1rem 2rem;
      box-shadow: 5px 5px 5px var(--box-shadow-light);

      > li {
        &:last-child a {
          border-bottom: none;
        }
        > a {
          border-bottom: 1px solid var(--color-opacity-orange);

          padding: 0.6rem;
          display: block;

          &:hover::before {
            opacity: 0;
          }
        }

        & + li {
          margin-left: initial;
        }
      }
    `}
`;
