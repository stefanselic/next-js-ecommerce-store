import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { getProducts } from '../../database/products';

export const metadata = {
  title: 'Products',
  description: 'My products',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main className={styles.container}>
      {products.map((product) => {
        return (
          <div key={`data-test-div-${product.id}`}>
            <div>
              <Link
                href={`/products/${product.id}`}
                data-test-id={`product-${product.id}`}
                className={styles.link}
              >
                {product.name}
              </Link>
            </div>
            <div>
              <Image
                alt={product.name}
                src={`/images/${product.name}.png`}
                width={200}
                height={200}
              />
            </div>
          </div>
        );
      })}
    </main>
  );
}
