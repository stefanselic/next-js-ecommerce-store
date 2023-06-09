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
    <>
      <div className={styles.header}>
        <h1>MY VITAMINS</h1>
      </div>
      <main className={styles.container}>
        {products.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productContainer}
            >
              <div>
                <Link
                  data-test-id={`product-${product.id}`}
                  href={`/products/${product.id}`}
                  className={styles.link}
                >
                  {product.name}
                  <div>
                    <Image
                      alt={product.name}
                      src={`/images/${product.name}.png`}
                      width={200}
                      height={200}
                    />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
