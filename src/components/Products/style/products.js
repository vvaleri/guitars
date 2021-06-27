import styled from 'styled-components/macro';

const Main = styled.main`
  max-width: 1360px;
  padding: 40px 60px 20px;
  margin: 0 auto;
`;

const MainTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
`;

const ProductsList = styled.ul`
  display: flex;
`;

export { Main, ProductsList, MainTitle };
