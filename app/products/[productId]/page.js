import styles from './page.module.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import CartItemControls from './CartItemControls';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Product',
  description: 'My single product',
};

export default async function ProductPage({ params }) {
  // console.log('getProducts:', getProducts);
  const singleProduct = await getProductById(Number(params.productId)); // Convert the string into an number
  console.log('singleProduct:', singleProduct);
  if (!singleProduct) {
    notFound();
  }

  return (
    <main className={styles.product}>
      <Image
        data-test-id="product-image"
        alt="product"
        src={`/images/${singleProduct.name}.png`}
        width={300}
        height={300}
      />
      <div className={styles.productInfoContainer}>
        <h2>MY VITAMINS</h2>
        <h1>{singleProduct.name}</h1>
        <p data-test-id="product-price">{singleProduct.price}</p>
        <CartItemControls product={singleProduct} />
        <p className={styles.product_description}>
          {singleProduct.description}
        </p>
      </div>
    </main>
  );
}
