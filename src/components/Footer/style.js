import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--color-main-orange);
  padding: 5rem 0;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
  }

  & > div > form {
    display: grid;
    background: none;
    box-shadow: none;
    border-radius: initial;
    width: 100%;
    padding: 0 3rem;
    margin: 0;
    height: fit-content;

    > input {
      background: var(--color-light-white);
      margin-bottom: 0.3rem;
      border-radius: 0;
    }

    > button {
      width: 100%;
      background-color: var(--color-main-blue);
      border-radius: 0;
      margin: 0;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const LogoFooter = styled.img`
  width: 8rem;
`;

export const MenuFooter = styled.ul`
  > h3 {
    font-size: 1.4rem;
    color: var(--color-light-white);
    margin-bottom: 0.6rem;
  }

  > li {
    a {
      padding: 0.4rem 0;
      display: block;
      font-size: 0.9rem;
      color: #fff;
      opacity: 0.9;
    }
  }
`;

export const InfosFooter = styled.ul`
  > h3 {
    font-size: 1.4rem;
    color: var(--color-light-white);
    margin-bottom: 0.6rem;
  }

  > p {
    padding: 0.4rem 0;
    display: block;
    font-size: 0.9rem;
    color: #fff;
    opacity: 0.9;
    margin-bottom: 1rem;

    > small {
      color: var(--color-light-white);
    }
  }
`;
