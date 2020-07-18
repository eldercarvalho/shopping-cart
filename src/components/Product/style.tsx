import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColor};
  padding: 1.6rem;
  border: 1px solid #ddd;
  -webkit-column-break-inside: avoid;
  transition: all 0.3s;
  border-radius: 20px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 5px 10px ${rgba('#000', 0.2)};
  }

  img {
    max-width: 100%;
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
  }

  .price {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
