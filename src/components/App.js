import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 2: Create a state variable and a setter function for dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Step 3: Add an event handler to toggle dark mode when the button is clicked
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // Step 4: Update the 'className' of the 'div' based on the dark mode state
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 3: Add the event handler to the dark mode button */}
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
