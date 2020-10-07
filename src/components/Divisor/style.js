import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 3rem 0;

  > svg {
    width: 24px;
    height: 24px;
    background-color: var(--color-main-orange);
    padding: 0.6rem;
    border-radius: 100%;
    box-sizing: initial;
    margin-bottom: 1rem;
    box-shadow: 5px 5px 10px var(--color-opacity-orange-medium);

    > path {
      color: var(--color-light-white);
    }
  }

  > h3 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-main-blue);

    &::after {
      content: "";
      width: 30%;
      height: 2px;
      background-color: var(--box-shadow-light);
      display: inline-block;
      margin: 0 2rem;
    }

    &::before {
      content: "";
      width: 30%;
      height: 2px;
      background-color: var(--box-shadow-light);
      display: inline-block;
      margin: 0 2rem;
    }
  }
`;
