import { NavLink } from 'react-router-dom';
import { Header, Menu, List, Item, Cart } from './style/navbar';

export function Navbar() {
  return (
    <Header>
      <Menu>
        <List>
          <Item>
            <NavLink exact to="/">Guitars</NavLink>
          </Item>
          <Cart>
            <NavLink exact to="/cart">0</NavLink>
          </Cart>
        </List>
      </Menu>
    </Header>
  );
}
