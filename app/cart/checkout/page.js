import Link from 'next/link';
// import { products } from '../../../database/products';
import FormCheckout from './FormCheckOut';

export const metadata = {
  title: 'Checkout',
  description: 'My Checkout page',
};

export default function CheckOutPage() {
  return (
    <main>
      <FormCheckout />
    </main>
  );
}
