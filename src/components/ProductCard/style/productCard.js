import styled from 'styled-components/macro';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.3% - 35px);
  margin-right: 35px;
  margin-bottom: 35px;
  background-color: #fff;

  @media (max-width: 1179px) {
    width: calc(33.3% - 20px);
    margin-right: 20px;
  }

  @media (max-width: 1023px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Img = styled.div`
  max-width: 100%;

  img {
    width: 300px;
    height: 300px;

    @media (max-width: 767px) {
      width: 200px;
      height: 200px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  height: 100%;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-family: 'Gibson';
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 767px) {
    margin-bottom: 5px;
    font-size: 16px;
  }
`;

const Price = styled.p`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  flex: 1 0 auto;

  @media (max-width: 767px) {
    font-size: 22px;
  }
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

  @media (max-width: 1179px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }
`;

export { Item, Img, Content, Title, Price, Buttons, Btn };
