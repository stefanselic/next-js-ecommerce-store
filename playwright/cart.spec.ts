import { expect, test } from '@playwright/test';

test('add to cart, change quantity, remove from cart', async ({ page }) => {
  // Open webpage
  await page.goto('http://localhost:3000/');

  // Click on products
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Click on a product
  await page.getByTestId('product-1').click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // Click on add to cart button
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('1')).toBeVisible();

  // Click on quantity field
  await page.getByTestId('product-quantity').click();

  // Change quantity in input field and click on cart
  await page.getByTestId('product-quantity').fill('2');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('3')).toBeVisible();

  // Go to the cart page
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Remove item
  await page.getByTestId('cart-product-remove-1').click();
  await expect(page.getByTestId('cart-count').getByText('0')).toBeVisible();
});
