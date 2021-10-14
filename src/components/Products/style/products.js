import styled from 'styled-components/macro';

const Title = styled.h1`
  margin-bottom: 25px;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;

  /* &::before {
    content: ">>>>>>";
  } */
`;

const ProductsList = styled.ul`
  display: flex;
  width: calc(100% + 35px);
  margin-bottom: -35px;
`;

export { ProductsList, Title };
