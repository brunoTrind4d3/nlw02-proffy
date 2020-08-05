import styled from 'styled-components';

export const PageTeacherList = styled.div`
  width: 100vw !important;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100% !important;

    #search-teachers {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }
  }

  #search-teachers {
    margin-top: 3.2rem;

    label {
      color: var(--color-text-in-primary);
    }
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }

`;