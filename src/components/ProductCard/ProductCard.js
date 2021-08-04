import { useDispatch } from 'react-redux';
import { Item, Img, Content, Title, Price, Buttons, Btn } from './style/productCard';

export function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    const productItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      quantity: 1
    };
    dispatch({ type: 'ADD_TO_CART', payload: productItem });
  };

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
          <Btn onClick={() => addToCart()}>Add to cart</Btn>
        </Buttons>
      </Content>
    </Item>
  );
}
