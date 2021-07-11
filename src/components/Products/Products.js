import { ProductCard } from '../ProductCard/ProductCard';
import { Main, ProductsList, MainTitle } from './style/products';
import productArr from '../../data/products.json';

export function Products() {
  return (
    <Main>
      <MainTitle>Demo guitars shop</MainTitle>
      <ProductsList>
        {
          productArr.map(product => <ProductCard key={product.id} product={product} />)
        }
      </ProductsList>
    </Main>
  );
}
