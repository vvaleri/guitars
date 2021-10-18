import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Item, Img, Content, Title, Price, Buttons, Btn } from './style/productCard';
import { ProductModal } from '../ProductModal/ProductModal';
import useScrollBlock from '../../hook/useScrollBlock';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const openModal = () => {
    setModal(true);
    blockScroll();
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
          <Btn onClick={openModal}>Quick view</Btn>
          <Btn onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>Add to cart</Btn>
        </Buttons>
      </Content>
      <ProductModal product={product} setModal={setModal} modal={modal} allowScroll={allowScroll} />
    </Item>
  );
};
