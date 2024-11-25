
 
"use client"
import { useState } from "react";
import Item from "./item";

export default function ItemList({items, onItemSelect}) {
  
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = [...items].sort((a, b) => {

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const nameSort = () => {
    setSortBy("name");
  }

  const categorySort = () => {
    setSortBy("category");
  }

  return (
    <main>
      <div className="flex justify-start items-center gap-4">
        <h2 className="text-lg">Sort By:</h2>
        <button
          onClick={nameSort}
          className="m-2 px-5 bg-orange-500"
        >
          Name
        </button>
        <button
          onClick={categorySort}
          className="m-2 px-5 bg-orange-500"
        >
          Category
        </button>
      </div>
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </main>
  );
}