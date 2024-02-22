<h1>Welcome to the next-js-ecommerce-store wiki!</h1>

<img width="1439" alt="Bildschirmfoto 2023-06-12 um 11 19 57" src="https://github.com/stefanselic/next-js-ecommerce-store/assets/129748801/06351861-6a69-4ee8-92d7-44b75f979dea">

<img width="1438" alt="Bildschirmfoto 2023-06-12 um 11 20 09" src="https://github.com/stefanselic/next-js-ecommerce-store/assets/129748801/0e21a101-7270-4a56-9a0d-c6d66389f032">

<img width="1437" alt="Bildschirmfoto 2023-06-12 um 11 20 24" src="https://github.com/stefanselic/next-js-ecommerce-store/assets/129748801/bd0de8a4-8fb0-46de-80e9-29abbec20c87">

<img width="1437" alt="Bildschirmfoto 2023-06-12 um 11 20 41" src="https://github.com/stefanselic/next-js-ecommerce-store/assets/129748801/8fb0919a-5b44-4d67-9e30-99b9862c7841">

<img width="1438" alt="Bildschirmfoto 2023-06-12 um 11 20 52" src="https://github.com/stefanselic/next-js-ecommerce-store/assets/129748801/16b6e8e0-ece8-4c78-ab99-434bf7010811">

<img width="1426" alt="Bildschirmfoto 2023-06-12 um 11 21 28" src="https://github.com/stefanselic/next-js-ecommerce-store/assets/129748801/1352db77-a083-4038-ae17-9082ebe4fb06">

## TODO'S

Design and develop an ecommerce store using Next.js. It should have the following:

- A Products page (where all the products are listed)
  - Minimum of 4 different products
  - The page should have a relevant `h1` element
  - Each product needs to be contained in an anchor element (a link) with an attribute of `data-test-id="product-<product id>"`
    - This link will lead to its single product page
  - The header (described below) needs to have a link to the products page with the HTML attribute `data-test-id="products-link"`
- A page for each single product (when you click on the product it goes to this page) with ability to add a quantity to the cart
  - The single product URL needs to contain the `id` (eg. `/products/<product id>`)
  - The product name needs to be directly inside an `h1` element (it should be the only `h1`)
  - The product image needs to be in an `img` element with the HTML attribute `data-test-id="product-image"`
  - The product price (without any currency symbol or thousands separator) needs to be directly inside an element with the HTML attribute `data-test-id="product-price"`
  - The quantity input needs to have the HTML attribute `data-test-id="product-quantity"`
    - The starting quantity should be `1`
  - The add to cart button needs to have the HTML attribute `data-test-id="product-add-to-cart"`
    - Clicking this button will add the amount from the product quantity input to any quantity of this product already in the cart
      - For example, if the amount in the product quantity input is `2` and the existing quantity of this product in the cart is `3`, then after clicking the button, the quantity of this product in the cart will become `5`
  - Negative quantity values should not be possible
- A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
  - Each product needs to be contained in an element with the HTML attribute `data-test-id="cart-product-<product id>"`
    - Inside the product element, the product name and price need to be be visible
    - Inside the product element, the quantity needs to be visible, as the only content in an element with the HTML attribute `data-test-id="cart-product-quantity-<product id>"`
    - Inside the product element, the remove button needs to have the HTML attribute `data-test-id="cart-product-remove-<product id>"`
  - The total price (the number without any currency symbol) needs to be directly inside an element with the HTML attribute `data-test-id="cart-total"`
  - The checkout button needs to have the HTML attribute `data-test-id="cart-checkout"`
  - Negative quantity values should not be possible
- A Checkout page which shows the total and asks for shipping and payment information (when you click on the "Checkout" button on the Cart page it navigates to the checkout page)
  - The first name input needs to have the HTML attribute `data-test-id="checkout-first-name"`
  - The last name input needs to have the HTML attribute `data-test-id="checkout-last-name"`
  - The email input needs to have the HTML attribute `data-test-id="checkout-email"`
  - The address input needs to have the HTML attribute `data-test-id="checkout-address"`
  - The city input needs to have the HTML attribute `data-test-id="checkout-city"`
  - The postal code input needs to have the HTML attribute `data-test-id="checkout-postal-code"`
  - The country input needs to have the HTML attribute `data-test-id="checkout-country"`
  - The credit card input needs to have the HTML attribute `data-test-id="checkout-credit-card"`
  - The expiration date input needs to have the HTML attribute `data-test-id="checkout-expiration-date"`
  - The security code input needs to have the HTML attribute `data-test-id="checkout-security-code"`
  - The form should prevent submission with any of the above fields being empty
  - The Confirm Order button needs to have the HTML attribute `data-test-id="checkout-confirm-order"`
  - Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)
- A Thank You page after a checkout has been completed
  - The page title should include `Thank you for your order`
- A header with a link to the Cart, showing the number of items in the cart
  - This header needs to appear on all pages
  - The header needs to use the HTML `<header>` element
  - The number of items is the sum of the quantity of all products (eg. if you have 2 apples and 3 bananas in your cart, the number of items is 5)
  - The number of items needs to update when you add or remove items from the cart
  - The link needs to have an HTML attribute `data-test-id="cart-link"`
  - The count needs to be contained in an element with the HTML attribute `data-test-id="cart-count"`

This project is to build an Ecommerce store on your own - don't use an all-in-one solution like [Next.js Commerce](https://nextjs.org/commerce).



Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
