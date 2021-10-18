import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;

  @media (max-width: 1024px) {
    flex-shrink: 0;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 10px;
    align-self: center;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  max-width: 500px;
  margin-right: 20px;

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 15px;
    max-width: 100%;
    text-align: center;
  }
`;

const Price = styled.span`
  font-size: 22px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-family: 'Gibson';
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 767px) {
    margin-bottom: 5px;
    font-size: 16px;
  }
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
