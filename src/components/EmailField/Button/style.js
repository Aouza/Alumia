import styled, { css } from "styled-components";

export const Container = styled.button`
  background-color: var(--color-main-orange);
  width: 8rem;
  height: 2.4rem;
  border-radius: 10rem;
  color: var(--color-light-white);
  transition: 0.5s background-color;

  ${({ loading }) =>
    loading &&
    css`
      cursor: initial;
      background-color: var(--color-border) !important;
      color: var(--color-hover-blue);
    `}

  &:hover {
    background-color: var(--color-hover-orange);
  }

  @media (max-width: 32rem) {
    width: 100%;
    background-color: var(--color-main-orange);
    border-radius: 0.2rem;
    margin: 0;
    height: auto;
    padding: 1rem;
  }
`;
