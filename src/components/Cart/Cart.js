import { useSelector } from 'react-redux';
import { CartItem } from '../CartItem/CartItem';
import { Container, Content, Heading, Items, Summary, Title, Count, Number } from './style/cart';

export function Cart() {
  const products = useSelector(state => state.cartReducer);

  return (
    <main>
      <Heading>Your Basket</Heading>
      <Container>
        {
          products.products.length > 0
            ? (
              <Items>
                {
                 products.products.map(product => <CartItem key={product.id} product={product} />)
                }
              </Items>
            )
            : <Content>is empty</Content>
        }
        {
          products.products.length > 0
          && (
            <Summary>
              <Title>Cart Summary</Title>
              <Count>
                Total:
                <Number> 40</Number>
              </Count>
            </Summary>
          )
        }
      </Container>
    </main>
  );
}
