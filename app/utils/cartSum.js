export function cartSum(cart) {
  return cart.reduce((accumulator, cartItem) => {
    const totalItemPrice = cartItem.price * cartItem.quantity;
    return accumulator + totalItemPrice;
  }, 0);
}
