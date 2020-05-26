import React from "react";
import Cart from "./Cart";
import "./styles.css";
const cartArray = [
  { id: 1, item: "Rice flour", price: 150, qty: 1 },
  { id: 2, item: "Margarine", price: 200, qty: 2 },
  { id: 3, item: "Vanilla", price: 100, qty: 1 }
];

export default function App() {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <Cart cartArray={cartArray} />
    </div>
  );
}
