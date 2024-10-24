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
// If sortBy is "name", it uses a.name.localeCompare(b.name) to compare the name properties of the items. This method returns:
//-1 if a.name comes before b.name
//1 if a.name comes after b.name
//0 if they are equal



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
                        Buy {item.quantity} {item.name} in {item.category}
                    </Item>
                    //import item function from item.js
                ))}
            </ul>
        </div>
    );
}
