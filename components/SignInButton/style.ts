import styled from 'styled-components';

export const SignInButtonStyle = styled.button`
  height: 3rem;
  border-radius: 3rem;
  background: ${({ theme }) => theme.colors['gray-850']};
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    color: ${({ theme }) => theme.colors['yellow-500']};
    margin-right: 1rem;
  }

  svg:last-child {
    color: ${({ theme }) => theme.colors['gray-300']};
    margin-left: 1rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
