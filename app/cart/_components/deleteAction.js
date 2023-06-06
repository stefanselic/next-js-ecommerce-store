'use server';

import { getCookie } from '../../utils/cookies';
import { cookies } from 'next/headers';
import { parseJson } from '../../utils/json';

export async function deleteCartItem(productId) {
  // Uses the getCookie function to retrieve the value of the 'cart' cookie
  const cartCookies = getCookie('cart');

  // If cartCookies is falsy, assign empty array to carts otherwise use parseJson to parse the cookie value into carts
  const carts = !cartCookies ? [] : parseJson(cartCookies);

  // We filter over carts to create a new array updatedCart that includes all elements except the one with an id matching the provided productId
  const updatedCart = carts.filter((cart) => cart.id !== productId);

  // cookies() function returns an object with a set method to to update the 'cart' cookie by serializing the updatedCart array as a JSON string.
  await cookies().set('cart', JSON.stringify(updatedCart));
}
