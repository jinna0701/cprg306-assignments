"use client";
import { useState } from 'react'; 
import itemsData from './items.json';  
import Item from './item';
 
 
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <span>
        <button className="m-2 bg-orange-500" onClick={() => setSortBy("name")}>
          Sort by name
        </button>
      </span>
      <span>
        <button className="m-2 bg-orange-500" onClick={() => setSortBy("category")}>
          Sort by Category
        </button>
      </span>

        {/* <div className="m-5 p-5 border border-gray-300 rounded w-72">
           
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <p><strong>Category:</strong> {category}</p>
        </div> */}



   
 

      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}>
            Buy {item.quantity} {item.name} in {item.category}
          </Item>
        ))}
      </ul>
    </div>
  );
}
