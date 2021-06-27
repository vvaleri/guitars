import { ProductCard } from '../ProductCard/ProductCard';
import { Main, ProductsList, MainTitle } from './style/products';

export function Products() {
  return (
    <Main>
      <MainTitle>Demo guitars shop</MainTitle>
      <ProductsList>
        <ProductCard />
      </ProductsList>
    </Main>
  );
}
