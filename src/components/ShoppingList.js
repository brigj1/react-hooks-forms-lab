import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

//function ShoppingList({ items, setItems, addItemToItems }) {
function ShoppingList({ items, setItems, onItemFormSubmit}) {
//function ShoppingList({ items, onItemFormSubmit}) {
  //console.log("slinit", items)
  //const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSelectedCategory] = useState("All");
  const [searchString, setSearchString] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    console.log("hsc", event.target.value)
    setSearchString(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    // if Filter by name has a searchString then emit 'false'
    // for any item whose name does not have the searchString
    if (! item.name.toLowerCase().includes(searchString.toLowerCase())) return false;

    //if (selectedCategory === "All") return true;
    //return item.category === selectedCategory;
    if (search === "All") return true;
    return item.category === search;
  });

        // {/* addItemToItems ={addItemToItems} */}
        //selectedCategory={selectedCategory}
  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit ={onItemFormSubmit}
      />
      <Filter
        search={search}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item, index) => (
            /* key={item.name} */
            <Item key={index} name={item.name} category={item.category} />
          )
        )}
          {/* key={item.name} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
