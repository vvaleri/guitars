import styled from 'styled-components/macro';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Img = styled.div`
  max-width: 100%;

  img {
    width: 300px;
    height: 300px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
`;

const Price = styled.p`
  margin-bottom: 15px;
  font-size: 32px;
  font-weight: 700;
`;

const Buttons = styled.div`
  display: flex;
`;

const Btn = styled.button`
  padding: 10px 30px;
  margin-right: 10px;
  font-size: 16px;
  border: none;
  color: #fff;
  background-color: #09d;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  :last-child {
    margin-right: 0;
  }

  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      background-color: #1974d2;
    }
  }
`;

export { Item, Img, Content, Title, Price, Buttons, Btn };
