import { QuantityButtonServer } from './QuantityButtonServer';

import { DeleteCartItem } from './DeleteItemFromCart';

export function UpdateCart(props) {
  return (
    <>
      <QuantityButtonServer // QuantityButtonServer component is rendered with productId and quantity props taken from props.cart.id and props.cart.quantity
        productId={props.cart.id}
        quantity={props.cart.quantity}
      />
      <DeleteCartItem id={props.cart.id} />
    </>
    // DeleteCartItem component is rendered with an id prop taken from props.cart.id
  );
}
