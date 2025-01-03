"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    console.log(newItem);
    // setItems((prevItems) => [...prevItems, newItem]);
    setItems([...items, newItem]);
  };

  return (
    <div>
      {/* <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
  */}

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      
    </div>
  );
}
