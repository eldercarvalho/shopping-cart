import React from 'react';

import { Container } from './style';

interface ChipProps {
  variant: 'success' | 'error' | 'info' | 'warning';
  large?: boolean
}

const Chip: React.FC<ChipProps> = ({ children, variant = 'success', large = false }) => {
  return <Container variant={variant} large={large}>{children}</Container>;
};

export default Chip;
