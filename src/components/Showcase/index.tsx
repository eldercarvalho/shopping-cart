import React, { useState, useCallback } from 'react';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { FiSmartphone } from 'react-icons/fi';
import { GiPearlNecklace } from 'react-icons/gi';
import { useTransition } from 'react-spring';

import { useProducts } from '../../hooks/product';
import { useGlobal } from '../../hooks/global';

import { IProduct } from '../../entities/Product';

import Product from '../Product';
import Button from '../Button';
import Loading from '../Loading';

import { Container, MasonryLayout, AnimatedDiv } from './style';

interface ShowcaseProps {
  products: IProduct[];
}

const categories = [
  { id: 1, name: 'All', icon: '' },
  { id: 2, name: 'men clothing', icon: <AiOutlineMan size={25} /> },
  { id: 3, name: 'women clothing', icon: <AiOutlineWoman size={25} /> },
  { id: 4, name: 'electronics', icon: <FiSmartphone size={25} /> },
  { id: 5, name: 'jewelery', icon: <GiPearlNecklace size={25} /> },
];

const Showcase: React.FC<ShowcaseProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState(1);
  const { fetchProductsByCategory } = useProducts();
  const { globalLoading } = useGlobal();

  const productsWithTransition = useTransition(
    products,
    (product) => String(product.id),
    {
      from: { transform: 'scale(0.5)' },
      enter: { transform: 'scale(1)' },
      leave: { transform: 'scale(1)' },
    },
  );

  const handleCategoryClick = useCallback(
    (categoryId: number, categoryName: string) => {
      setActiveCategory(categoryId);
      fetchProductsByCategory(categoryName);
    },
    [fetchProductsByCategory],
  );

  return (
    <Container>
      <div className="categories-filter">
        {categories.map(({ id, name, icon }) => (
          <Button
            variant={activeCategory === id ? 'primary' : undefined}
            iconPosition="left"
            key={id}
            onClick={() => handleCategoryClick(id, name)}
          >
            {icon}
            {name}
          </Button>
        ))}
      </div>
      {globalLoading && <Loading />}
      <MasonryLayout
        breakpointCols={4}
        className="showcase-grid"
        columnClassName="showcase-grid_column"
      >
        {productsWithTransition.map(({ item, key, props }) => (
          <AnimatedDiv key={key} style={props}>
            <Product data={item} />
          </AnimatedDiv>
        ))}
      </MasonryLayout>
    </Container>
  );
};

export default Showcase;
