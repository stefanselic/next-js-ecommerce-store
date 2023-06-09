'use client';

import { useRouter } from 'next/navigation';
import styles from '../cart/CheckOutButton.module.scss';

export default function CheckOutButton() {
  const router = useRouter();

  return (
    <button
      data-test-id="cart-checkout"
      className={styles.checkOutButton}
      type="button"
      onClick={() => router.push('/cart/checkout')}
    >
      Check Out
    </button>
  );
}
