import styled, { css, DefaultTheme } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  variant?: 'primary' | 'outlinedPrimary';
  iconOnly?: boolean;
  iconPosition?: 'left' | 'right';
  outlined?: boolean;
}

const buttonVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: #fff;

    &:hover {
      background: ${shade(0.2, theme.colors.primary)};
      color: #fff;
    }
  `,
  outlinedPrimary: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.primary};
  `,
};

const iconPositions = {
  left: css`
    > svg {
      margin-right: 1rem;
    }
  `,
  right: css`
    > svg {
      margin-left: 1rem;
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  border: none;
  padding: 0 2rem;
  background: transparent;
  color: ${(props) => props.theme.colors.textColor};
  transition: all 0.3s;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 20px;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  ${(props) => props.variant && buttonVariants[props.variant](props.theme)}

  ${(props) =>
    props.iconOnly &&
    css`
      width: 40px;
      height: 40px;
      padding: 0;
    `}

  ${(props) => props.iconPosition && iconPositions[props.iconPosition]}
`;
