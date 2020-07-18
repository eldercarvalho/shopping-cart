import React from 'react';

import { Container } from './style';

interface ChipProps {
  variant: 'success' | 'error' | 'info' | 'warning';
}

const Chip: React.FC<ChipProps> = ({ children, variant = 'success' }) => {
  return <Container variant={variant}>{children}</Container>;
};

export default Chip;
