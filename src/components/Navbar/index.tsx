import React from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';

import Button from '../Button';

import { Container, LogoLink } from './style';

const Navbar: React.FC = () => {
  return (
    <Container>
      <LogoLink to="/">Shopping Cart</LogoLink>

      <div>
        <Button iconOnly>
          <FiShoppingCart size={20} />
        </Button>
        <Button iconOnly>
          <FiUser size={20} />
        </Button>
      </div>
    </Container>
  );
};

export default Navbar;
