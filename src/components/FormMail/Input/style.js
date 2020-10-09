import styled from "styled-components";

export const Container = styled.input`
  background-color: var(--color-light-white);
  padding: 1rem;
  border-radius: 0.2rem;
  border-bottom: 3px solid transparent;

  &:focus::placeholder {
    opacity: 0;
    transition: 0.3s opacity;
  }

  &:focus {
    border-bottom: 3px solid var(--color-main-orange);
  }
`;
