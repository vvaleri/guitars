import { ProductCard } from '../ProductCard/ProductCard';
import { ProductsList } from './style/products';
import productArr from '../../data/products.json';

export function Products() {
  return (
    <main>
      <h1>Demo guitars shop</h1>
      <ProductsList>
        {
          productArr.map(product => <ProductCard key={product.id} product={product} />)
        }
      </ProductsList>
    </main>
  );
}
