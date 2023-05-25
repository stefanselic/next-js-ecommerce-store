import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { products } from '../../database/products';
import { quantity } from '../products/[productId]/QuantityButton';

export const metadata = {
  title: 'Products',
  description: 'My products',
};

export default function ProductsPage() {
  return (
    <main className={styles.container}>
      {products.map((product) => {
        return (
          <div key={`data-test-div${product.id}`}>
            <Link
              href={`/products/${product.id}`}
              data-test-id={`product-${product.id}`}
            >
              {product.name}
            </Link>
            <Image
              src={`/images/${product.name}.png`}
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </main>
  );
}