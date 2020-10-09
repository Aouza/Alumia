import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  @media (max-width: 42rem) {
    width: 60%;
  }

  @media (max-width: 32rem) {
    width: 100%;
  }

  & + div {
    margin-top: 3rem;

    @media (max-width: 72rem) {
      margin: 0;
    }

    @media (max-width: 42rem) {
      margin-top: 2rem;
    }
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
    font-weight: 700;
    font-size: 1.1rem;

    @media (max-width: 72rem) {
      padding: 0 2.4rem 0 0.8rem;
      font-size: 0.9rem;
    }

    @media (max-width: 42rem) {
      padding: 0 1.4rem;
    }

    > span {
      color: var(--color-main-orange);
      font-weight: 700;
    }
  }
`;
