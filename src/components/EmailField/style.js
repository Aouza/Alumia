import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > form {
    background: #fafafa;
    box-shadow: 10px 10px 15px var(--box-shadow-light);
    display: flex;
    align-items: center;
    border-radius: 10rem;
    overflow: hidden;
    padding: 0.6rem 2rem;
    margin: 3rem 2rem 2rem 0;
    width: 100%;

    @media (max-width: 32rem) {
      display: grid;
      background: none;
      box-shadow: none;
      border-radius: initial;
      width: 100%;
      padding: 0;
      padding-top: 2rem;
      margin: 0;
      height: fit-content;
      box-shadow: none;
      overflow: initial;
    }
  }
`;
