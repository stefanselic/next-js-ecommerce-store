'use client';

import { useState } from 'react';
import QuantityButton from './_components/QuantityButton';
import { AddToCartButton } from './_components/AddToCartButton';

export default function CartItemControls(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton product={props.product} quantity={quantity} />
    </>
  );
}
