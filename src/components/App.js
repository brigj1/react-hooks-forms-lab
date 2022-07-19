import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
//import { stringify } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addItemToItems = (item) => {
    //console.log("new item", item)

    /*
    fetch("some_url", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(item)
    })
    .then(resp => resp.json())
    .then(setItems([...items, item]))
    */

    //debugger
    // TODO consider checking first to be sure not in the list of Items
    setItems([...items, item])
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        //setItems={setItems}
        onItemFormSubmit={addItemToItems}
      />
    </div>
  );
        /* addItemToItems={addItemToItems} */
}

export default App;
