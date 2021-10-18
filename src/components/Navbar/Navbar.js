import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header, Menu, List, Item, Cart, Number } from './style/navbar';
import imgCart from '../../img/shopping-cart.svg';

export const Navbar = () => {
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
              <img src={imgCart} alt="shopping cart" />
              <Number>{totalQuantity}</Number>
            </NavLink>
          </Cart>
        </List>
      </Menu>
    </Header>
  );
};
