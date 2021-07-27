import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header, Menu, List, Item, Cart, Number } from './style/navbar';

export function Navbar() {
  const { totalQuantity } = useSelector(state => state.cartReducer);

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
              <Number>{totalQuantity}</Number>
            </NavLink>
          </Cart>
        </List>
      </Menu>
    </Header>
  );
}
