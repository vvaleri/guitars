import { Container, Img, Title, Price, Buttons, Delete } from './style/cartItem';
import icon from '../../img/icon-delete.svg';

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
        <Delete><img src={icon} alt="delete" /></Delete>
      </Buttons>
    </Container>
  );
}
