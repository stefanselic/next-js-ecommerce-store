'use client';

export default function RootError(props) {
  return (
    <div>
      Ups! Something went wrong
      <p>{props.error.message}</p>
      <button onClick={() => props.reset()}>Reset error boundary</button>
    </div>
  );
}
