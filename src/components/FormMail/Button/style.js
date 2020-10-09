import styled, { css } from "styled-components";

export const Container = styled.button`
  background-color: var(--color-main-orange);
  padding: 1rem;
  color: var(--color-light-white);
  border-radius: 0.2rem;
  transition: 0.5s background-color;

  &:hover {
    background-color: var(--color-hover-orange);
  }

  ${({ loading }) =>
    loading &&
    css`
      cursor: initial;
      background-color: var(--color-border) !important;
      color: var(--color-hover-blue);
    `}
`;
