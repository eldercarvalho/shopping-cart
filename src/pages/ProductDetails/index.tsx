import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProducts } from '../../hooks/product';
import { useGlobal } from '../../hooks/global';

import Chip from '../../components/Chip';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

import { getCategoryColor } from '../../utils/getCategoryColor';

import { Container, ProductImage, ProductData } from './style';

const ProductDetails: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const { id } = useParams();
  const { currentProduct, fetchProduct } = useProducts();
  const { globalLoading } = useGlobal();

  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

  return (
    <Container>
      {!globalLoading ? (
        <div>
          <ProductImage>
            <img src={currentProduct.image} alt={currentProduct.title} />
          </ProductImage>
          <ProductData>
            <h2>{currentProduct.title}</h2>
            <p className="description">{currentProduct.description}</p>
            <div className="price-container">
              {currentProduct && currentProduct.category && (
                <Chip variant={getCategoryColor(currentProduct.category)} large>
                  {currentProduct.category}
                </Chip>
              )}
              <p className="price">{currentProduct.formattedPrice}</p>
            </div>
            <div className="count-container">
              <Input
                type="number"
                defaultValue={count}
                min="1"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCount(Number(e.target.value))
                }
              />
            </div>
          </ProductData>
        </div>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default ProductDetails;
