'use client';

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
  return (
    <div>
      <button
        onClick={() => {
          decreaseQuantity();
        }}
      >
        -
      </button>
      <input
        data-test-id="product-quantity"
        style={{
          width: '35px',
          textAlign: 'center',
        }}
        value={props.quantity}
        onChange={(event) => {
          event.currentTarget.value >= 0
            ? props.setQuantity(event.currentTarget.value)
            : props.setQuantity(1);
        }}
      />
      <button
        onClick={() => {
          increaseQuantity();
        }}
      >
        +
      </button>
      {/* <GenerateButton /> */}
    </div>
  );
}
