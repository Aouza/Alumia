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
  }

  > span {
    margin: 1rem 0 0.3rem 0;
    font-size: 0.7rem;
    text-align: left;
    background-color: var(--color-main-blue);
    padding: 0.2rem 1rem;
    color: var(--color-light-white);
    border-radius: 10rem;
    width: fit-content;
  }
`;
