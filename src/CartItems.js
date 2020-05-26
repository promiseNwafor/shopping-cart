import React from "react";

export default function CartItems({ id, item, qty, price, handleProps }) {
  const increment = () => handleProps(id, qty + 1);
  const decrement = () => handleProps(id, qty - 1);
  return (
    <div className="CartItems">
      <div>
        <button onClick={decrement} disabled={qty <= 1}>
          -
        </button>
        {qty}
        <button onClick={increment}>+</button>
        <strong className="item">{item}</strong> -{" "}
        <em className="Price"> N{price} </em>
        <span className="Cost"> Cost: N{qty * price}</span>
      </div>
    </div>
  );
}
