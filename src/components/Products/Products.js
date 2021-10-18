import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';
import { Title, ProductsList } from './style/products';

export const Products = () => {
  const { products } = useSelector(state => state.productReducer);

  return (
    <main>
      <Title><span>Acoustic Guitars</span></Title>
      <ProductsList>
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </ProductsList>
    </main>
  );
};
