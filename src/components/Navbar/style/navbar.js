import styled from 'styled-components/macro';

const Header = styled.header`
  margin-bottom: 10px;
  background-image: url('./img/navbar-bg.png');
  background-position: center;
`;

const Menu = styled.nav`
  padding: 10px 50px;
  height: 100px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  font-size: 36px;
  color: #fff;
`;

const Cart = styled.li`
  width: 60px;
  height: 60px;
  background-color: #dc3545;
`;

export { Header, Menu, List, Item, Cart };
