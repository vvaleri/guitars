import { useDispatch } from 'react-redux';
import { Container, Img, Content, Title, Price, Buttons, Quantity, Btn, Delete } from './style/cartItem';
import icon from '../../img/icon-delete.svg';

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

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
          <Btn onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: product.id })}>&#8722;</Btn>
          <span>{product.quantity}</span>
          <Btn onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: product.id })}>+</Btn>
        </Quantity>
        <Delete onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product.id })}><img src={icon} alt="delete" /></Delete>
      </Buttons>
    </Container>
  );
};
