import React from 'react';

import { ItemContainer } from './style';

const Item: React.FC = ({ children }) => {
  return <ItemContainer>{children}</ItemContainer>;
};

export default Item;
