'use client';
import Image from 'next/image';
import trash from '../../../public/images/trash.png';
import { deleteCartItem } from '../actions';
import { useRouter } from 'next/navigation';

export function DeleteCartItem(props) {
  const router = useRouter();
  return (
    <form>
      <button
        data-test-id="cart-product-remove"
        formAction={async () => {
          router.refresh();
          await deleteCartItem(props.id);
        }}
      >
        <Image alt="trash icon" src={trash} width={20} height={20} />
      </button>
    </form>
  );
}
