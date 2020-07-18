import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2rem;

  div {
    display: flex;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 2.6rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
`;
