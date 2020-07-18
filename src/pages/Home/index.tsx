import React, { useEffect } from 'react';

import bannerImg from '../../assets/banner.jpg';

import { useProducts } from '../../hooks/product';

// import Carousel from '../../components/Carousel';
import Showcase from '../../components/Showcase';

// import { IProduct } from '../../entities/Product';

import { Container } from './style';

const Home: React.FC = () => {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container>
      {/* <Carousel /> */}
      <img src={bannerImg} alt="Banner" />
      <Showcase products={products} />
    </Container>
  );
};

export default Home;
