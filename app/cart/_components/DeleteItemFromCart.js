'use client';
import Image from 'next/image';
import trash from '../../../public/images/trash.png';
import { deleteCartItem } from '../actions';

export function DeleteCartItem(props) {
  return (
    <button
      onClick={async () => {
        await deleteCartItem(props.id);
      }}
    >
      <Image alt="trash icon" src={trash} width={20} height={20} />
    </button>
  );
}
