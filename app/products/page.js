import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export const metadata = {
  title: 'Products Page',
  description: 'My favorite products',
};

export default function AnimalsPage() {
  return (
    <main>
      This are my products
      {products.map((product) => {
        return (
          <div key={`data-test-div${product.id}`}>
            <Link href={`/products/${product.name}`}>{product.name}</Link>
            <br />
            <br />
            {/* {product.price}
            <br /> */}
            {/* <Link href="/product">{product.name}</Link> */}
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
