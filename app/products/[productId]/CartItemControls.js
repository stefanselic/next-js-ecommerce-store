'use client';

import { useState } from 'react';
import QuantityButton from './QuantityButton';
import { AddToCartButton } from './AddToCartButton';

export default function CartItemControls(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton product={props.product} quantity={quantity} />
    </>
  );
}
