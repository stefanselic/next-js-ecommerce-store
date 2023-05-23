'use client';

import { useState } from 'react';
import QuantityButton from './QuantityButton';
import AddToCartButton from './AddToCartButton';

export default function CartItemControls() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton quantity={quantity} setQuantity={setQuantity} />
    </>
  );
}
