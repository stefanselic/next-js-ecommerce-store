'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../utils/cookies';
import { parseJson } from '../../utils/json';

export async function createUpdateCart(productId, quantity) {
  // 1. Get the current cookie
  // This gets the cookies from the request headers
  const addToCartCookie = getCookie('cart');

  // 2. We parse the cookie
  const cart = !addToCartCookie ? [] : parseJson(addToCartCookie);
  console.log(cart);
  // const cart = !addToCartCookie ? parseJson(addToCartCookie) : [];

  // 3.We edit the object
  const cartItemUpdate = cart.find((singleItem) => {
    return singleItem.id === productId;
  });

  if (cartItemUpdate) {
    cartItemUpdate.quantity = Number(cartItemUpdate.quantity) + quantity;
  } else {
    cart.push({
      id: productId,
      quantity: quantity,
    });
  }
  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('cart', JSON.stringify(cart));
}
