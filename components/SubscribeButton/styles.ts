import styled from 'styled-components';

export const SubscribeButtonStyled = styled.button`
  width: 260px;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors['yellow-500']};
  color: ${({ theme }) => theme.colors['gray-900']};
  font-size: 1.5rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
