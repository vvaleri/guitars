import { Main, MainTitle, Container, Summary, Title, Count, Number } from './style/cart';

export function Cart() {
  return (
    <Main>
      <MainTitle>Shopping cart</MainTitle>
      <Container>
        <Summary>
          <Title>Cart Summary</Title>
          <Count>
            Total:
            <Number> 40</Number>
          </Count>
        </Summary>
      </Container>
    </Main>
  );
}
