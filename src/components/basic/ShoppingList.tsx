import { useState } from "react";

const ShoppingList = () => {
  const [cart, setCart] = useState([
    { name: "Lapto", quantity: "In Stock" },
    { name: "Apple Wathc", quantity: "No Stock" },
  ]);

  const addCart = () => {
    setCart([...cart, { name: "iPhone", quantity: "In Stock" }]);
  };
  return (
    <div>
      <p>
        {cart.map((c) => (
          <li key={Math.random() * 10}>
            {c.name}---{c.quantity}
          </li>
        ))}
      </p>
      <button onClick={addCart}>Add Cart</button>
    </div>
  );
};

export default ShoppingList;
