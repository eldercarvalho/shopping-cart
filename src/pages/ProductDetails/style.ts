import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  > div {
    display: flex;
    justify-content: center;
  }
`;

export const ProductImage = styled.div`
  width: 40%;

  img {
    max-width: 100%;
    border-radius: 2rem;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    padding: 2rem;
  }
`;

export const ProductData = styled.div`
  width: 80%;
  padding-left: 6rem;

  h2 {
    font-size: 3.2rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.textColor};
  }

  .description {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.textColor};
    line-height: 1.8;
  }

  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .price {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.textColor};
  }

  .count-container {
    display: flex;
  }
`;
