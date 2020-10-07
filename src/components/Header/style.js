import styled, { css } from "styled-components";

export const Container = styled.header`
  background-color: var(--color-light-white);
  box-shadow: 0px 1px 5px var(--box-shadow-light);
  height: 100px;
  position: sticky;
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
  }
`;

export const MenuButton = styled.button`
  background-color: var(--color-main-orange);
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  color: #fff;
  box-shadow: 2px 2px 2px var(--box-shadow-light);
  cursor: pointer;
  transition: all 0.4s;

  > svg {
    font-size: 1.8rem;

    > path {
      color: var(--color-light-white);
    }
  }

  ${({ mobileButton }) =>
    mobileButton &&
    css`
      width: 4rem;
      height: 4rem;
      padding: 0;
      transition: all 0.4s;
    `}
`;

export const Logo = styled.img`
  width: 9rem;
`;

export const Menu = styled.ul`
  display: flex;

  > li {
    font-size: 1rem;
    color: #333;

    > a {
      color: var(--color-main-orange);
      position: relative;
      font-weight: 700;
      font-size: 0.9rem;

      &::after {
        content: "";
        width: 6px;
        height: 6px;
        background-color: var(--color-main-blue);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        right: -8px;
        bottom: -8px;
        opacity: 0;
        transition: 0.4s opacity;
      }

      &:hover::after {
        opacity: 1;
      }

      &::before {
        content: "";
        width: 0px;
        height: 2px;
        background-color: var(--color-main-blue);
        display: block;
        border-radius: 10px;
        opacity: 0;
        position: relative;
        top: -5px;
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

      position: absolute;
    `}

  ${({ mobileButton, mobileWindow }) =>
    mobileButton &&
    mobileWindow &&
    css`
      width: 15rem;
      display: block;
      height: 15.4rem;
      overflow: hidden;
      position: absolute;
      background-color: var(--color-light-white);
      opacity: 1;
      transition: all 1s;
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

          &:hover::before,
          &:hover::after {
            opacity: 0;
          }
        }

        & + li {
          margin-left: initial;
        }
      }
    `}
`;
