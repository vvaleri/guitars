import { Container, Img, Title, Price, Buttons, Delete } from './style/cartItem';

export function CartItem({ product }) {
  return (
    <Container>
      <Img><img src={product.img} alt={product.alt} /></Img>
      <div>
        <Title>{product.name}</Title>
        <Price>
          &#163;
          {product.price}
        </Price>
      </div>
      <Buttons>
        <div>{product.quantity}</div>
        <Delete><img src="./img/icon-delete.svg" alt="delete" /></Delete>
      </Buttons>
    </Container>
  );
}
