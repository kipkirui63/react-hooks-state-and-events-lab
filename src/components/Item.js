import React, { useState } from "react";

function Item({ name, price }) {
  // Step 2: Create a state variable and a setter function for cart state
  const [inCart, setInCart] = useState(false);

  // Step 3: Add an event handler to toggle the cart state when the button is clicked
  const toggleCart = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span>{price}</span>
      {/* Step 4: Update the button text and add the event handler */}
      <button onClick={toggleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
