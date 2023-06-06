'use client';
import Image from 'next/image';
import trash from '../../../public/images/trash.png';
import { deleteCartItem } from './deleteAction';

// type Cart = {
//   id: number,
//   quantity: number,
// };

// type Props = {
//   id: number;
// };

export function DeleteCartItem(props) {
  return (
    <form
      action={async () => {
        await deleteCartItem(props.id);
      }}
    >
      <button data-test-id="cart-product-remove">
        <Image alt="trash icon" src={trash} width={20} height={20} />
      </button>
    </form>
  );
}

// type Cart = {
//   id: number,
//   quantity: number,
// };

// type Props = {
//   cart: Cart,
// };

// export function UpdateCart(props: Props) {
//   return (
//     <>
//       <QuantityButtonServer // QuantityButtonServer component is rendered with productId and quantity props taken from props.cart.id and props.cart.quantity
//         productId={props.cart.id}
//         quantity={props.cart.quantity}
//       />
//       <div>
//         <DeleteCartItem id={props.cart.id} />
//       </div>
//     </>
//     // DeleteCartItem component is rendered with an id prop taken from props.cart.id
//   );
// }
