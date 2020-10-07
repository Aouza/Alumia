import styled from "styled-components";

export const Container = styled.input`
  padding: 1rem;

  width: 100%;
  flex: 2;

  @media (max-width: 32rem) {
    background: var(--color-border);
    margin-bottom: 0.3rem;
    border-radius: 0;
  }
`;
