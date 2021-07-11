import { useDispatch } from 'react-redux';
import { Item, Img, Content, Title, Price, Buttons, Btn } from './style/productCard';
import { addProductCard } from '../../redux/Cart/cart.actions';

export function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addItem = item => {
    dispatch(addProductCard(item));
  };

  return (
    <Item>
      <Img><img src={product.img} alt="Blood Moon" /></Img>
      <Content>
        <Title>{product.name}</Title>
        <Price>
          &#163;
          {product.price}
        </Price>
        <Buttons>
          <Btn>Open</Btn>
          <Btn onClick={() => addItem(product)}>Add to cart</Btn>
        </Buttons>
      </Content>
    </Item>
  );
}
