import React from 'react';

import { IProduct } from '../../entities/Product';
import { getCategoryColor } from '../../utils/getCategoryColor';

import Chip from '../Chip';

import { Container } from './style';

interface ProductProps {
  data: IProduct;
}

const Product: React.FC<ProductProps> = ({ data }) => {
  return (
    <Container to={`/product/${data.id}`}>
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <div>
        <Chip variant={getCategoryColor(data.category)}>{data.category}</Chip>
        <p className="price">{data.formattedPrice}</p>
      </div>
    </Container>
  );
};

export default Product;
