import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useProducts } from '../../hooks/product';
import { useGlobal } from '../../hooks/global';

import Loading from '../../components/Loading';

import { Container, ProductImage, ProductData } from './style';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { currentProduct, fetchProduct } = useProducts();
  const { globalLoading } = useGlobal();

  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

  return (
    <Container>
      {globalLoading && <Loading />}
      <ProductImage>
        <img src={currentProduct.image} alt={currentProduct.title} />
      </ProductImage>
      <ProductData>
        <h2>{currentProduct.title}</h2>
        <p className="description">{currentProduct.description}</p>
        <p className="price">{currentProduct.formattedPrice}</p>
      </ProductData>
    </Container>
  );
};

export default ProductDetails;
