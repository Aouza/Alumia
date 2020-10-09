import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div > form {
    overflow: initial;
    position: relative;

    > span {
      position: absolute;
      bottom: -35px;

      @media (max-width: 32rem) {
        position: initial;
      }
    }
  }

  @media (max-width: 72rem) {
    margin-bottom: 2rem;
  }

  @media (max-width: 42rem) {
    margin-bottom: 4rem;
  }

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

    @media (max-width: 72rem) {
      padding: 0;
    }
  }
`;
