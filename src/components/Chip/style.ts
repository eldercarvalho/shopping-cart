import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  variant: 'success' | 'error' | 'info' | 'warning';
  large?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 12px;
  padding: 0.5rem 1rem;

  ${(props) => css`
    color: ${darken(0.6, props.theme.colors[props.variant])};
    background: ${props.theme.colors[props.variant]};
  `}

  ${(props) =>
    props.large &&
    css`
      font-size: 1.6rem;
      padding: 0 2rem;
      height: 40px;
      border-radius: 20px;
      text-transform: uppercase;
      font-weight: bold;
    `}
`;
