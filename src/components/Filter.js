import React from "react";

//function Filter({selectedCategory, onCategoryChange, onSearchChange }) {
function Filter({search, onCategoryChange, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={onSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}
     // value={search}
     //<select name="filter" value={selectedCategory} onChange={onCategoryChange}>
     //<select name="filter" value={search} onChange={onCategoryChange}>

export default Filter;
