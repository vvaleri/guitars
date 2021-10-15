import { Container, Img, Content, Title, Price, Buttons, Quantity, Btn, Delete } from './style/cartItem';
import icon from '../../img/icon-delete.svg';

export function CartItem({ product }) {
  return (
    <Container>
      <Img><img src={product.img} alt={product.alt} /></Img>
      <Content>
        <Title>{product.name}</Title>
        <Price>
          &#163;
          {product.price}
        </Price>
      </Content>
      <Buttons>
        <Quantity>
          <Btn>&#8722;</Btn>
          <span>{product.quantity}</span>
          <Btn>+</Btn>
        </Quantity>
        <Delete><img src={icon} alt="delete" /></Delete>
      </Buttons>
    </Container>
  );
}
