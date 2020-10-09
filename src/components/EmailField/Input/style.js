import styled from "styled-components";

export const Container = styled.input`
  padding: 1rem;
  width: 100%;
  flex: 2;
  transition: 0.3s opacity;

  &:focus::placeholder {
    opacity: 0;
    transition: 0.3s opacity;
  }

  @media (max-width: 32rem) {
    background: var(--color-border);
    border-radius: 0.2rem;
  }
`;
