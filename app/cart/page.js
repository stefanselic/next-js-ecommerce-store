import styles from './page.module.scss';
import { getCurrentProducts } from './actions';
import { UpdateCart } from './_components/UpdateCart';
import Image from 'next/image';
import CheckOutButton from './CheckOutButton';

export const metadata = {
  title: 'Cart',
  description: 'My Cart page',
};

export default async function CartPage() {
  const cartObject = await getCurrentProducts();

  // Get total of each product
  const calculateTotalProductsPrice = (cartItem) => {
    return cartItem.price * cartItem.quantity;
  };
  // Get total of all products
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
          key={`cart-product-${cartItem.id}`}
          data-test-id={`cart-product-${cartItem.id}`}
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
              <div className={styles.productName}>{cartItem.name}</div>
              <div className={styles.productBalance}>
                <span>Balance: </span>
                {calculateTotalProductsPrice(cartItem)}
              </div>
            </div>
            <div>{cartItem.price}</div>
            <div className={styles.buttonContainer}>
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
        <CheckOutButton />
      </div>
    </main>
  );
}
