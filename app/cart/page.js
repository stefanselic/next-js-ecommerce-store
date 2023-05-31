import styles from './page.module.scss';
import Link from 'next/link';
import { getCurrentProducts } from './actions';
import { UpdateCart } from './_components/UpdateCart';

export const metadata = {
  title: 'Cart',
  description: 'My Cart page',
};

export default async function CartPage() {
  // getCurrentProducts() is called to retrieve cart items
  const cartObject = await getCurrentProducts();

  return (
    <main>
      {cartObject.map((cartItem) => (
        // For each cartItem, it renders a <div> element.
        <div key={`cartitem-div-${cartItem.id}`}>
          Product {cartItem.name} - Price:{cartItem.price} - Quantity:{' '}
          {cartItem.quantity}
          <UpdateCart cart={cartItem} />
        </div>
        // It renders an <UpdateCart> component, passing the cartItem as the cart prop.
      ))}
      <div className={styles.images}>
        <Link href="/cart/checkout">Checkout</Link>
      </div>
    </main>
  );
}
