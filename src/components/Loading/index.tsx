import React from 'react';

import loadingGif from '../../assets/loading.gif';

import { Container } from './style';

const Loading: React.FC = () => {
  return (
    <Container>
      <img src={loadingGif} alt="loading" />
    </Container>
  );
};

export default Loading;
