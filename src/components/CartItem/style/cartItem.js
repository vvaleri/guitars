import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  background-color: #fff;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;

`;
const Price = styled.span`
  font-size: 18px;
`;

const Title = styled.h2`
  font-family: 'Gibson';
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Delete = styled.button`
  padding: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #000;
`;

export { Container, Img, Title, Price, Buttons, Delete };
