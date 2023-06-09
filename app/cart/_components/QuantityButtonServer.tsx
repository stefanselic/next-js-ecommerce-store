'use client';

import styles from './QuantityButtonServer.module.scss';
import { useEffect } from 'react';
import { createUpdateCart } from '../../products/[productId]/actions';
import { useRouter } from 'next/navigation';

type Props = {
  productId: number;
  quantity: number;
};

export function QuantityButtonServer(props: Props) {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <div>
      <button
        className={styles.decreaseQuantityButton}
        onClick={async () => {
          if (props.quantity > 1) {
            // It calls the createUpdateCart function with props.productId, 1, and true as arguments.
            await createUpdateCart(props.productId, 1, true);
          }
        }}
      >
        -
      </button>
      <input
        data-test-id={`cart-product-quantity-${props.productId}`}
        className={styles.input}
        // Input is disabled - user cannot interact with. It displays the value of props.quantity.
        disabled
        value={props.quantity}
      />
      <button
        className={styles.increaseQuantityButton}
        onClick={async () => {
          // It calls the createUpdateCart function with props.productId and 1 as arguments.
          await createUpdateCart(props.productId, 1);
        }}
      >
        +
      </button>
    </div>
  );
}
