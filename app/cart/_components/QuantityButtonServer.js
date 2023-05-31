'use client';
import { createUpdateCart } from '../../products/[productId]/actions';

export function QuantityButtonServer(props) {
  return (
    <div>
      <button
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
        data-test-id="product-quantity"
        style={{
          width: '35px',
          textAlign: 'center',
        }}
        // Input is disabled - user cannot interact with. It displays the value of props.quantity.
        disabled
        value={props.quantity}
      />
      <button
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
