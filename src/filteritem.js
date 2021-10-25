import React from "react";
import Pdata from "./pdata";

function FilterItem() {

    const item = (e) => {
        let onselect = e.target.value
        let array = Pdata.filter(x=>x.categary == onselect)
        console.log(array)

      };


  return (
    <select onChange={(e) => item(e)}>
      <option value="shirt">Shirt</option>
      <option value="kurta">Kurta</option>
    </select>
  );
}

export default FilterItem;
