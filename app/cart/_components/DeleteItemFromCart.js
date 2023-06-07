'use client';
import Image from 'next/image';
import trash from '../../../public/images/trash.png';
import { deleteCartItem } from './deleteAction';

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
