import styled from 'styled-components';

export const contentContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 auto;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 840px) {
    flex-direction: column;
    padding: 1rem;
    height: calc(100vh - 6rem);
  }
`;

export const hero = styled.section`
  max-width: 600px;

  > span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 900;
    line-height: 4.5rem;
    margin-top: 2.5rem;

    span {
      color: ${({ theme }) => theme.colors['cyan-500']};
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;

    span {
      color: ${({ theme }) => theme.colors['cyan-500']};
      font-weight: 700;
    }
  }

  button {
    margin-top: 2.5rem;
  }

  @media (max-width: 840px) {
    h1 {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
  }
`;
