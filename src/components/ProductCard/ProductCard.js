import { Item, Img, Content, Title, Price, Buttons, Btn } from './style/productCard';

export function ProductCard() {
  return (
    <Item>
      <Img><img src="./img/guitar-img-1.jpg" alt="Blood Moon" /></Img>
      <Content>
        <Title>Faith Guitars Blood Moon Series Neptune Electro Acoustic with Cutaway</Title>
        <Price>&#163;779</Price>
        <Buttons>
          <Btn>Open</Btn>
          <Btn>Add to cart</Btn>
        </Buttons>
      </Content>
    </Item>
  );
}
