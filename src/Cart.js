import React, { useState, useEffect } from "react";
import CartItems from "./CartItems";

export default function Cart({ cartArray }) {
  const [carts, setCarts] = useState(cartArray);

  const grandTotal = carts.reduce((acc, cart) => {
    return acc + cart.price * cart.qty;
  }, 0);

  const handleProps = (idx, newQty) => {
    const newCarts = carts.map(cart => {
      if (cart.id === idx) {
        return { ...cart, qty: newQty };
      } else {
        return { ...cart };
      }
    });
    setCarts(newCarts);
  };

  useEffect(() => {
    console.log("Effect");
  }, [carts]);

  return (
    <div className="Cart">
      {carts.map(cart => (
        <CartItems key={cart.id} handleProps={handleProps} {...cart} />
      ))}
      <h3>Grand-Total: {grandTotal}</h3>
    </div>
  );
}
