import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  > form {
    background: #fafafa;
    box-shadow: 10px 10px 15px var(--box-shadow-light);
    display: flex;
    align-items: center;
    border-radius: 10rem;
    overflow: hidden;
    padding: 0.6rem 2rem;
    margin: 3rem 2rem 2rem 0;
    width: 100%;

    ${({ children }) =>
      children.props.focus
        ? css`
            border: 2px solid var(--color-main-blue);
          `
        : css`
            border: 2px solid transparent;
          `}

    @media (max-width: 32rem) {
      display: grid;
      background: none;
      box-shadow: none;
      border-radius: initial;
      width: 100%;
      padding: 0;
      padding-top: 2rem;
      margin: 0;
      height: fit-content;
      box-shadow: none;
      overflow: initial;

      ${({ children }) =>
        children.props.focus
          ? css`
              border: 0;
            `
          : css`
              border: 0;
            `}

      > input {
        ${({ children }) =>
          children.props.focus
            ? css`
                border-bottom: 3px solid var(--color-main-blue);
              `
            : css`
                border-bottom: 3px solid transparent;
              `}
      }
    }
  }
`;
