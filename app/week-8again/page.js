"use client";
"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";



export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");

  const [items, setItems] = useState(itemsData);
  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0] // Take the name up to the first comma
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
        ""
      ) // Remove emojis
      .trim(); // Remove whitespace

    setSelectedItemName(cleanedName);
  };
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // Add new item to items state
  };
  return (
    <main className="bg-black">
      <h1 className="text-3xl font-bold m-3">Shopping List</h1>
      <div className="flex">
        <div className="mr-10">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {selectedItemName &&
        (<MealIdeas ingredient={selectedItemName}/>)}
      </div>
    </main>
  );
}