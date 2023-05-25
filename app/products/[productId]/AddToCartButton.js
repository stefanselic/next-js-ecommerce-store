'use client';

import { useRouter } from 'next/navigation';
import { createUpdateCart } from './actions';

export function AddToCartButton(props) {
  const router = useRouter();
  return (
    <form>
      <button
        formAction={async () => {
          console.log('it works');
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

/*
{ id: props.product.id, productName: props.product.name, quantity: props.quantity }
*/
