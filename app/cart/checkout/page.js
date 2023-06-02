import FormCheckout from './FormCheckOut';
import CartPage from '../../cart/page';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'My Checkout page',
};

export default function CheckOutPage() {
  return (
    <main className={styles.checkOutContainer}>
      <div>
        <FormCheckout />
      </div>
      <div className={styles.cart}>
        <CartPage />
      </div>
    </main>
  );
}
