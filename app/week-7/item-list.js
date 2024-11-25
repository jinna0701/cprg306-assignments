 



"use client";
import { useState } from "react";
import itemsData from "./items.json";
import Item from "./item";

export default function ItemList({ items }) {
  let finalData = [...itemsData];
  const [sortBy, setSortBy] = useState("name");
  // const [sortedData, setSortedData] = useState(itemsData);


  
  if (sortBy === "category") {
   finalData = finalData.sort((a,b) => (a.category.localeCompare(b.category)));
 }
    else if (sortBy === "name") {
       finalData = finalData.sort((a,b) => (a.name.localeCompare(b.name)));
    }
  





  // If sortBy is "name", it uses a.name.localeCompare(b.name) to compare the name properties of the items. This method returns:
  //-1 if a.name comes before b.name
  //1 if a.name comes after b.name
  //0 if they are equal

  return (
    <div>
      <div>
        {/* <button className="m-2 bg-orange-500" onClick={() => (setSortBy("name") & sortTheItems & console.log(sortedData))}>
          Sort by name
        </button> */}
        <button className="m-2 bg-orange-500" onClick={() => (setSortBy("name"))}>
          Sort by name
        </button>

        <button
          className="m-2 bg-orange-500"
          onClick={() =>( setSortBy("category"))}
        >
          Sort by Category
        </button>
      </div>
      <div>
        <ul>
          {finalData.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            >
              Buy {item.quantity} {item.name} in {item.category}
            </Item>
            //import item function from item.js
          ))}
        </ul>
      </div>
    </div>
  );
}

