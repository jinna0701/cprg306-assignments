"use client";
import itemsData from './items.json';  
import Item from './item';
import { useState } from 'react';

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
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}>
            <br />
            Buy in {item.quantity} in {item.category}
          </Item>
        ))}
      </ul>
    </div>
  );
}

  //map function to go through each item in the array.
  //Each Item component gets a unique key (using item.id), and it also receives name, quantity, and category as props.
  //localeCompare:

//This is a method in JavaScript that compares two strings and returns a number indicating their relative order.
