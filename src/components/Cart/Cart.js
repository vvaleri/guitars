import { useSelector } from 'react-redux';
import { CartItem } from '../CartItem/CartItem';
import { Container, Heading, Items, Summary, Title, Count, Number } from './style/cart';

export function Cart() {
  const products = useSelector(state => state.cartReducer);

  return (
    <main>
      <Heading>Your Basket</Heading>
      <Container>
        <Items>
          {products.products.map(product => <CartItem key={product.id} product={product} />)}
        </Items>
        <Summary>
          <Title>Cart Summary</Title>
          <Count>
            Total:
            <Number> 40</Number>
          </Count>
        </Summary>
      </Container>
    </main>
  );
}
