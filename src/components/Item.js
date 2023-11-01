import React,{useState} from "react";


function Item({ name, category }) {
  const[inCart, setInCart]=useState(false);

  function handleClick() {
    setInCart(inCart => !inCart)
  }

  const itemData = inCart ? "in-cart" : " ";



  return (
    <li className={itemData}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}

      {/* className="add">Add to Cart */}
      
      </button>
    </li>
  );
}

export default Item;