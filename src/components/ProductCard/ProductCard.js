import { useDispatch } from 'react-redux';
import { Item, Img, Content, Title, Price, Buttons, Btn } from './style/productCard';

export function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Item>
      <Img><img src={product.img} alt={product.alt} /></Img>
      <Content>
        <Title>{product.name}</Title>
        <Price>
          &#163;
          {product.price}
        </Price>
        <Buttons>
          <Btn>Open</Btn>
          <Btn onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>Add to cart</Btn>
        </Buttons>
      </Content>
    </Item>
  );
}
