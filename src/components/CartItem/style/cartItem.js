import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const Content = styled.div`
  flex-grow: 1;
  max-width: 500px;
  margin-right: 20px;
`;

const Price = styled.span`
  font-size: 22px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-family: 'Gibson';
  font-size: 20px;
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Quantity = styled.div`
  display: flex;

  span {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const Btn = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 1px solid #000;
`;

const Delete = styled.button`
  align-self: flex-end;
  padding: 5px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #000;
`;

export { Container, Img, Content, Title, Price, Buttons, Quantity, Btn, Delete };
