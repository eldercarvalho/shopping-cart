import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  variant: 'success' | 'error' | 'info' | 'warning';
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  padding: 0.5rem 1rem;

  ${(props) => css`
    color: ${darken(0.6, props.theme.colors[props.variant])};
    background: ${props.theme.colors[props.variant]};
  `}
`;
