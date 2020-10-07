import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 3rem;
  }
  > svg {
    font-size: 2.4rem;

    > path {
      color: var(--color-main-blue);
    }
  }

  > p {
    color: var(--color-main-blue);
    padding: 0 4rem;

    > span {
      color: var(--color-main-orange);
      font-weight: 700;
    }
  }
`;
