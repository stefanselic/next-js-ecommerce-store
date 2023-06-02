import styles from './page.module.scss';
import Link from 'next/link';
import { getCurrentProducts } from './actions';
import { UpdateCart } from './_components/UpdateCart';
import Image from 'next/image';

export const metadata = {
  title: 'Cart',
  description: 'My Cart page',
};

export default async function CartPage() {
  const cartObject = await getCurrentProducts();
  const calculateTotalProductsPrice = (cartItem) => {
    return cartItem.price * cartItem.quantity;
  };

  const totalPrice = cartObject.reduce((accumulator, cartItem) => {
    const totalItemPrice = calculateTotalProductsPrice(cartItem);
    return accumulator + totalItemPrice;
  }, 0);

  return (
    <main className={styles.cartPage}>
      {cartObject.map((cartItem) => (
        // For each cartItem, it renders a <div> element.
        <div
          className={styles.productsContainer}
          key={`cartitem-div-${cartItem.id}`}
        >
          <div className={styles.imageContainer}>
            <Image
              data-test-id="product-image"
              alt="product"
              src={`/images/${cartItem.name}.png`}
              width={150}
              height={150}
            />
          </div>
          <div className={styles.productsInfoContainer}>
            <div className={styles.productsInfoRow}>
              <div>
                <b>{cartItem.name}</b>
              </div>
              <div>
                Product-Balance: <b>{calculateTotalProductsPrice(cartItem)}</b>
              </div>
            </div>
            <div>{cartItem.price}</div>
            <div>
              <UpdateCart cart={cartItem} />
            </div>
          </div>
        </div>
        // It renders an <UpdateCart> component, passing the cartItem as the cart prop.
      ))}
      <div data-test-id="cart-total" className={styles.totalBalance}>
        <b>Total Balance:</b>
        <b>{totalPrice}</b>
      </div>
      <div className={styles.images}>
        <button
          href="/cart/checkout"
          className={styles.checkOutButton}
          data-test-id="cart-checkout"
        >
          <Link className={styles.link} href="/cart/checkout">
            Checkout
          </Link>
        </button>
      </div>
    </main>
  );
}
