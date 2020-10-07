import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-light-white);
  padding: 1.8rem 1.2rem;
  box-shadow: 0px 2px 0 var(--color-main-orange);
  overflow: hidden;

  > h2 {
    color: var(--color-main-blue);
    line-height: 1.6rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  > ul {
    > li {
      font-size: 0.8rem;
      color: var(--color-main-blue);
      padding: 0.2rem 0;
    }
  }
`;
