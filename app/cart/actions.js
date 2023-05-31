'use server';

import { getCookie } from '../utils/cookies';
import { cookies } from 'next/headers';
import { parseJson } from '../utils/json';
import { getProductById } from '../../database/products';

export async function getCurrentProducts() {
  // Uses the getCookie function to retrieve the value of the 'cart' cookie
  const productQuantityCookie = await getCookie('cart');
  console.log(productQuantityCookie);

  // If productQuantityCookie is falsy, an empty array is assigned to
  const productQuantity = !productQuantityCookie
    ? []
    : // Otherwise, the parseJson function is used to parse the cookie value into a JavaScript object, and the result is assigned to productQuantity.
      parseJson(productQuantityCookie);

  // We use the map method on productQuantity to iterate over each element. For each element, it calls getProductById with the id property of the element, spreads the returned product object, and adds a new property quantity with the value of element.quantity. The result is an array of mapped products.
  const mappedProducts = productQuantity.map((element) => {
    return { ...getProductById(element.id), ...{ quantity: element.quantity } };
  });

  return mappedProducts;
}

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
