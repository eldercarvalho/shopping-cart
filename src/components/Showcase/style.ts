import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { animated } from 'react-spring';

export const Container = styled.div`
  .categories-filter {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
  button {
    margin: 0 0.5em;
  }
`;

export const MasonryLayout = styled(Masonry)`
  display: flex;
  margin-left: -30px;
  width: auto;

  .showcase-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }
  .showcase-grid_column > div {
    margin-bottom: 30px;
  }
`;

export const AnimatedDiv = styled(animated.div)`
  position: relative;
`;
