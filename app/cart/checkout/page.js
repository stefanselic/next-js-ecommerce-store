import Link from 'next/link';
import { products } from '../../../database/products';

export const metadata = {
  title: 'Checkout',
  description: 'My Checkout page',
};

export default function CheckOutPage() {
  products.map((product) => {
    return (
      <div key={`data-test-div${product.id}`}>
        <Link href="/cart/checkout">{product.name}</Link>
        <br />
        <br />
        <Image
          alt="change later"
          src={`/images/${product.name}.png`}
          width={200}
          height={200}
        />
      </div>
    );
  });
}
