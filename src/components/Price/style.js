import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    font-size: 2.4rem;
    margin-bottom: 0.6rem;

    > path {
      color: var(--color-seed);
    }
  }

  > p {
    color: var(--color-main-blue);
    font-size: 0.8rem;
    padding: 0 4rem;
    margin-top: 2rem;
    text-align: center;
    line-height: 1.6;
  }
`;
