import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-light-white);
  padding: 1.8rem 1.2rem;
  box-shadow: 0px 2px 0 var(--color-main-orange),
    2px 2px 10px var(--box-shadow-light);
  position: relative;
  overflow: hidden;

  > h2 {
    color: var(--color-main-blue);
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 0.8rem;
  }

  &::after {
    content: "";
    width: 20rem;
    height: 20rem;
    background-color: var(--color-opacity-blue);
    border-radius: 100%;
    display: block;
    position: absolute;
    right: -12rem;
    bottom: -10rem;
    opacity: 0.4;
  }
`;
