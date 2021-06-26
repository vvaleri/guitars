import { NavLink } from 'react-router-dom';
import { Header, Menu, List, Item, Cart, Number } from './style/navbar';

export function Navbar() {
  return (
    <Header>
      <Menu>
        <List>
          <Item>
            <NavLink exact to="/">Guitars</NavLink>
          </Item>
          <Cart>
            <NavLink exact to="/cart">
              <img src="./img/shopping-cart.svg" alt="shopping cart" />
              <Number>0</Number>
            </NavLink>
          </Cart>
        </List>
      </Menu>
    </Header>
  );
}
