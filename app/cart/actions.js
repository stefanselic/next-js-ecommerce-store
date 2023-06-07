'use server';

import { getCookie } from '../utils/cookies';
import { parseJson } from '../utils/json';
import { getProductById } from '../../database/products';

export async function getCurrentProducts() {
  // Uses the getCookie function to retrieve the value of the 'cart' cookie
  const productQuantityCookie = await getCookie('cart');
  // If productQuantityCookie is falsy, an empty array is assigned to
  const productQuantity = !productQuantityCookie
    ? []
    : // Otherwise, the parseJson function is used to parse the cookie value into a JavaScript object, and the result is assigned to productQuantity.
      parseJson(productQuantityCookie);
  // We use the map method on productQuantity to iterate over each element. For each element, it calls getProductById with the id property of the element, spreads the returned product object, and adds a new property quantity with the value of element.quantity. The result is an array of mapped products.

  const mappedProductsPromises = productQuantity.map(async (element) => {
    const tempProduct = await getProductById(element.id);
    return { ...tempProduct, ...{ quantity: element.quantity } };
  });

  const finalMappedProducts = await Promise.all(mappedProductsPromises);

  return finalMappedProducts;
}
