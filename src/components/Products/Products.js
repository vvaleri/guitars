import { ProductCard } from '../ProductCard/ProductCard';
import { Title, ProductsList } from './style/products';
import productArr from '../../data/products.json';

export function Products() {
  return (
    <main>
      <Title>Acoustic Guitars</Title>
      <ProductsList>
        {
          productArr.map(product => <ProductCard key={product.id} product={product} />)
        }
      </ProductsList>
    </main>
  );
}
