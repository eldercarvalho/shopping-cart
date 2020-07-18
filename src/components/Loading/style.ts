import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  height: 30px;
  max-width: 400px;
  margin: 0 auto 3rem auto;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
