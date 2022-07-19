import React, {useState} from "react";
import { v4 as uuid } from "uuid";

//function ItemForm({addItemToItems}) {
function ItemForm({onItemFormSubmit}) {
  //console.log("aiti", addItemToItems)
  //console.log("aiti", onItemFormSubmit)

  const initFormData = {
    name: "",
    category: "Produce"
  }

  const [formData, setFormData] = useState({ ...initFormData, id: uuid() })

  function handleChange(e) {
      //console.log("etn/etv", (e.target.name + e.target.value));
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  function handleClick(e) {
    e.preventDefault();
    console.log("fd", formData);
    //addItemToItems(formData);
    onItemFormSubmit(formData);
    setFormData({ ...initFormData, id: uuid() })
  }

//function ItemForm({selectedCategory}) {
    //<form className="NewItem" onSubmit={handleSubmit}></form>
      //onClick={handleClick}>
  return (
    <form className="NewItem"
      onSubmit={handleClick}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        {/* <select name="category" value={selectedCategory}> */}
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
