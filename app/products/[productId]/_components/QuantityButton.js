'use client';

import styles from './QuantityButton.module.scss';

export default function QuantityButton(props) {
  // The increaseQuantity function increments the quantity by 1 by calling props.setQuantity with props.quantity + 1 as the argument.
  function increaseQuantity() {
    props.setQuantity(props.quantity + 1);
  }
  // decreaseQuantity function decrements the quantity by 1 by calling props.setQuantity with props.quantity - 1 as the argument.
  function decreaseQuantity() {
    if (props.quantity > 1) {
      props.setQuantity(props.quantity - 1);
    }
  }
  console.log('Quantity:', props.quantity);
  console.log('Quantity:', typeof props.quantity);

  return (
    <div>
      <button
        className={styles.decreaseQuantityButton}
        onClick={() => {
          decreaseQuantity();
        }}
      >
        -
      </button>
      <input
        data-test-id="product-quantity"
        className={styles.input}
        value={props.quantity}
        onChange={(event) => {
          parseInt(event.currentTarget.value) >= 0
            ? props.setQuantity(parseInt(event.currentTarget.value))
            : props.setQuantity(1);
        }}
      />
      <button
        className={styles.increaseQuantityButton}
        onClick={() => {
          increaseQuantity();
        }}
      >
        +
      </button>
    </div>
  );
}
