import styled from "styled-components";

export const Container = styled.section`
  padding-top: 3rem;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
  }
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Calling = styled.div`
  padding: 5rem 2rem 5rem 0;

  > h1 {
    color: var(--color-main-blue);
    font-size: 4rem;
  }

  > h3 {
    font-size: 1.4rem;
    line-height: 1.6;
  }

  > p {
    line-height: 1.6;
  }
`;

export const ImageCalling = styled.img`
  padding: 2rem;
`;

export const CourseResume = styled.div`
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "title title title"
      "resume resume form"
      "teachers teachers form";

    > h2 {
      grid-area: title;
      font-size: 4rem;
      margin-bottom: 5rem;
      color: var(--color-main-blue);

      &::after {
        content: "";
        width: 5rem;
        height: 4px;
        background-color: var(--color-main-orange);
        display: block;
        box-shadow: 0 10px 0 var(--color-main-orange);
        margin-top: 2rem;
      }
    }

    > p {
      grid-area: resume;
      margin-right: 5rem;

      > span {
        color: var(--color-main-orange);
        font-weight: 700;
      }
    }

    > form {
      grid-area: form;
    }

    > div {
      grid-area: teachers;
      display: flex;
      margin: 2rem 0;
    }
  }
`;

export const Details = styled.div`
  background-color: var(--color-light-white);
  margin-top: 5rem;
  padding: 5rem 0;

  & > div > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Discipline = styled.div`
  margin: 5rem 0;
  > div > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem 1.2rem;
  }

  > div > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    > h3 {
      color: var(--color-main-orange);
    }

    > span {
      font-size: 0.8rem;
    }
  }
`;
