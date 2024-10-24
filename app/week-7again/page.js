


"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState, useRef } from "react";

//useRef is used to reference an input element to get its value and clear it after adding a new item.


export default function Page() {
    const [items, setItems] = useState([]);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value;
        const newItem = {
            id: items.length + 1,
            text: inputText,
        };

        setItems((prev) => [...prev, newItem]);
        inputRef.current.value = "";
    };
//Clear Input Value: inputRef.current.value = ""; clears the input element after adding the new item.




    return (
        <div>
            <NewItem></NewItem>
            {items.map((item, index) => {
                return <ItemList key={item.id} text={item.text} index={index} />;
            })}
 
            <ItemList/>
        </div>
    );
}
