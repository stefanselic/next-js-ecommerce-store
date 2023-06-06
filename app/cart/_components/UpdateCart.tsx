import { QuantityButtonServer } from './QuantityButtonServer';

import { DeleteCartItem } from './DeleteItemFromCart';

type Cart = {
  id: number;
  quantity: number;
};

type Props = {
  cart: Cart;
};

export function UpdateCart(props: Props) {
  return (
    <>
      <QuantityButtonServer // QuantityButtonServer component is rendered with productId and quantity props taken from props.cart.id and props.cart.quantity
        productId={props.cart.id}
        quantity={props.cart.quantity}
      />
      <div>
        <DeleteCartItem id={props.cart.id} />
      </div>
    </>
    // DeleteCartItem component is rendered with an id prop taken from props.cart.id
  );
}
