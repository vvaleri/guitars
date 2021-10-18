import { useSelector } from 'react-redux';
import { CartItem } from '../CartItem/CartItem';
import { Container, Content, Heading, Items, Summary, Title, Count, Number } from './style/cart';

export const Cart = () => {
  const { products, totalPrice } = useSelector(state => state.cartReducer);

  return (
    <main>
      <Heading>Your Basket</Heading>
      <Container>
        {
          products.length > 0
            ? (
              <Items>
                {
                 products.map(product => <CartItem key={product.id} product={product} />)
                }
              </Items>
            )
            : <Content>is empty</Content>
        }
        {
          products.length > 0
          && (
            <Summary>
              <Title>Cart Summary</Title>
              <Count>
                Total:
                <Number>
                  &nbsp;&#163;
                  {totalPrice}
                </Number>
              </Count>
            </Summary>
          )
        }
      </Container>
    </main>
  );
};
