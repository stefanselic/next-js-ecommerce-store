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
    <main>
      {cartObject.map((cartItem) => (
        // For each cartItem, it renders a <div> element.
        <div
          className={styles.productsContainer}
          key={`cartitem-div-${cartItem.id}`}
        >
          <div>
            <Image
              data-test-id="product-image"
              alt="product"
              src={`/images/${cartItem.name}.png`}
              width={150}
              height={150}
            />
          </div>
          <div className={styles.productsInfoContainer}>
            <div>
              <b>{cartItem.name}</b>
            </div>
            <div>{cartItem.price}</div>
            {/* <div>{cartItem.quantity}</div> */}
            <div>
              <UpdateCart cart={cartItem} />
            </div>
            <div>
              Product-Balance: <b>{calculateTotalProductsPrice(cartItem)}</b>
            </div>
          </div>
          {/* <div>Total Balance: {calculateTotalPrice(cartItem)}</div> */}
        </div>
        // It renders an <UpdateCart> component, passing the cartItem as the cart prop.
      ))}
      <div className={styles.totalBalance}>
        Total Balance: <b>{totalPrice}</b>
      </div>
      <div className={styles.images}>
        <Link href="/cart/checkout">Checkout</Link>
      </div>
    </main>
  );
}
