import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-main-blue);
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 5px 5px 5px var(--color-opacity-blue);

  > h3 {
    color: var(--color-light-white);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  > p {
    color: var(--color-light-white);
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;
