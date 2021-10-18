import styled from 'styled-components/macro';
import navbarBg from '../../../img/navbar-bg.png';

const Header = styled.header`
  background-image: url(${navbarBg});
  background-position: center;
`;

const Menu = styled.nav`
  max-width: 1360px;
  padding: 30px 60px;
  margin: 0 auto;
  
  @media(max-width: 1179px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.li`
  font-size: 36px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 26px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Cart = styled.li`
  width: 70px;
  height: 45px;
  display: flex;

  @media (max-width: 767px) {
    width: 50px;
    height: 35px;

  }

  img {
    width: 30px;
    height: 26px;

    @media (max-width: 767px) {
      width: 20px;
    }
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dc3545;
    text-decoration: none;
    border-radius: 5px;
  }
`;

const Number = styled.span`
  margin-left: 5px;
  color: #fff;
  font-size: 18px;
  font-family: 'Gibson';

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export { Header, Menu, List, Item, Cart, Number };
