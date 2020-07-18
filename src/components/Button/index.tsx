import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outlinedPrimary';
  iconOnly?: boolean;
  iconPosition?: 'left' | 'right';
  to?: string;
  outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant,
  iconPosition,
  iconOnly = false,
  outlined = false,
  ...rest
}) => {
  const history = useHistory();

  const handleClick = useCallback(
    (event) => {
      if (to) {
        history.push(to);
        return;
      }
      if (onClick) {
        onClick(event);
      }
    },
    [history, onClick, to],
  );

  return (
    <Container
      type="button"
      variant={variant}
      iconOnly={iconOnly}
      iconPosition={iconPosition}
      outlined={outlined}
      onClick={(event) => handleClick(event)}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
