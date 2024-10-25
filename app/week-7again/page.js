"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState, useRef } from "react";

//useRef is used to reference an input element to get its value and clear it after adding a new item.


export default function Page() {
    const [items, setItems] = useState(itemsData);
    // const inputRef = useRef();
    //This creates a reference object. Initially, inputRef.current is null.

    const handleAddItem = (newItem) => {
        // const inputText = inputRef.current.value;
        //inputRef.current now points to the input element.
        
        setItems((prev) => [...prev, newItem]);
        // inputRef.current.value = "";
    };
//Clear Input Value: inputRef.current.value = ""; clears the input element after adding the new item.




    return (

        // <div>
        //     <NewItem></NewItem>
                        
        //     {items.map((item, index) => {
        //         return <ItemList key={item.id} text={item.text} index={index} />;
        //     })}
        //      <ItemList/>
        // </div>


        <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items= {items} />
    </div>
);
}


//context API ??
