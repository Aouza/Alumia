import styled, { css } from "styled-components";

const toastTypes = {
  success: css`
    background: var(--toast-background-success);
    box-shadow: 10px 10px 10px var(--toast-shadow-success);
    border: 2px solid var(--toast-border-success);
  `,

  error: css`
    background: var(--toast-background-error);
    box-shadow: 10px 10px 10px var(--toast-shadow-error);
    border: 2px solid var(--toast-border-error);
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 0.4rem;
  overflow: hidden;
  padding: 1rem 1rem;
  ${({ type }) => toastTypes[type]}

  & + div {
    margin-top: 0.5rem;
  }

  > svg:first-child {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    padding: 0.3rem;
    box-sizing: initial;

    ${({ type }) =>
      type === "success"
        ? css`
            background: var(--toast-background-icon-success);
          `
        : css`
            background: var(--toast-background-icon-error);
          `}
  }

  > div {
    flex: 1;
    padding: 0 1.2rem;

    > h3 {
      font-size: 0.9rem;
    }

    > p {
      font-size: 0.8rem;
      line-height: 1.8;
    }
  }

  > button {
    padding: 0.3rem;
  }
`;
