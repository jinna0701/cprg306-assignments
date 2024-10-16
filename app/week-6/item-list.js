"use client";
import itemsData from './items.json';  
import Item from './item';
 
import {useState} from 'react'; 

const ItemList = () => {
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
        <button className="m-2 bg-orange-500"
          onClick={() => setSortBy("name")}
        //   style={{ backgroundColor: sortBy === "name" ? 'lightblue' : 'white' }}
        >
          Sort by name
        </button>
        </span>

         
        <span>
        <button className="m-2 bg-orange-500"
          onClick={() => setSortBy("category")}
        //   style={{ backgroundColor: sortBy === "category" ? 'lightblue' : 'white' }}
        >
          Sort by Category
        </button>
        </span>
  
        <ul>
          {sortedItems.map(item => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} ><br></br>
              Buy in {item.quantity } in {item.category}
              </Item>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ItemList;