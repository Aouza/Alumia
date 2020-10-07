import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--color-main-orange);
  width: 8rem;
  height: 2.4rem;
  border-radius: 10rem;
  color: var(--color-light-white);

  @media (max-width: 32rem) {
    width: 100%;
    background-color: var(--color-main-orange);
    border-radius: 0;
    margin: 0;
  }
`;
