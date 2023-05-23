'use client';

export default function QuantityButton(props) {
  function increaseQuantity() {
    props.setQuantity(props.quantity + 1);
  }

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
