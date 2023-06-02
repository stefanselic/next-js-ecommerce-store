'use client';

import styles from './AddToCartButton.module.scss';
import { useRouter } from 'next/navigation';
import { createUpdateCart } from './actions';

export function AddToCartButton(props) {
  const router = useRouter();
  return (
    <form>
      <button
        className={styles.button}
        // Within the function, the router object's refresh method is called, which refreshes the page. Then, the createUpdateCart function is called with the props.product.id and props.quantity as arguments.
        formAction={async () => {
          router.refresh();
          await createUpdateCart(props.product.id, props.quantity);
        }}
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button>
    </form>
  );
}
