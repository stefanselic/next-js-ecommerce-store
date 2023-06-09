import { expect, test } from '@playwright/test';

test('test checkout', async ({ page }) => {
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

  // Go to cart page
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Check first name
  await page.getByTestId('cart-checkout').click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout');

  // Check first name
  await expect(page.getByTestId('checkout-first-name')).toBeVisible();
  await page.getByTestId('checkout-first-name').fill('John');

  // Check last name
  await expect(page.getByTestId('checkout-last-name')).toBeVisible();
  await page.getByTestId('checkout-last-name').fill('Wick');

  // Check email
  await expect(page.getByTestId('checkout-email')).toBeVisible();
  await page.getByTestId('checkout-email').fill('john.wick@danger.zone');

  // Check address
  await expect(page.getByTestId('checkout-address')).toBeVisible();
  await page.getByTestId('checkout-address').fill('Beaver Street');

  // Check city
  await expect(page.getByTestId('checkout-city')).toBeVisible();
  await page.getByTestId('checkout-city').fill('New York');

  // Check postal code
  await expect(page.getByTestId('checkout-postal-code')).toBeVisible();
  await page.getByTestId('checkout-postal-code').fill('10001');

  // Check country
  await expect(page.getByTestId('checkout-country')).toBeVisible();
  await page.getByTestId('checkout-country').fill('USA');

  // Check credit card
  await expect(page.getByTestId('checkout-credit-card')).toBeVisible();
  await page.getByTestId('checkout-credit-card').fill('1234 5678 1234 5678');

  // Check expiration date
  await expect(page.getByTestId('checkout-expiration-date')).toBeVisible();
  await page.getByTestId('checkout-expiration-date').fill('07/30');

  // Check security code
  await expect(page.getByTestId('checkout-security-code')).toBeVisible();
  await page.getByTestId('checkout-security-code').fill('401');

  // Check checkout Button
  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
  await page.getByTestId('checkout-confirm-order').click();

  // Check thank you page
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout/thankyou');
});
