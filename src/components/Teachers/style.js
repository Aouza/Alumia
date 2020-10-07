import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: var(--color-opacity-orange);
  box-shadow: 2px 2px 5px var(--box-shadow-light);
  margin: 0.5rem;
  border-radius: 0.3rem;

  > img {
    width: 6rem;
    margin: 0 auto;
    border-radius: 100%;

    @media (max-width: 72rem) {
      width: 4rem;
    }
  }

  > span {
    margin: 1rem 0 0.3rem 0;
    font-size: 0.7rem;
    text-align: left;
    background-color: var(--color-opacity-blue);
    color: var(--color-main-orange);
    font-weight: 600;
    padding: 0.2rem 1rem;
    border-radius: 10rem;
    width: fit-content;

    @media (max-width: 72rem) {
      font-size: 0.6rem;
    }

    @media (max-width: 42rem) {
      grid-template-columns: 1fr 1fr;
      margin: 0.6rem auto;
    }
  }

  > h3 {
    font-size: 1rem;
    @media (max-width: 72rem) {
      font-size: 0.8rem;
    }
  }
`;
