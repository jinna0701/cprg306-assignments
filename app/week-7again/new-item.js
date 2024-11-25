"use client";
import { useState } from 'react';
import Item from './item';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [items, setItems] = useState([]);        
    const handleSubmit = (e) => {
        e.preventDefault();   //e.preventDefault(): This prevents the default form submission behavior, which would reload the page
        const id = Math.random().toString(36);  //The Math.random().toString(36) creates a random number, converts it to base-36 (a mix of letters and numbers), and returns the result as a string. 
        onAddItem({
            id,
            name,
            quantity,
            category
        });
        setName("");
        setQuantity(1);
        setCategory("produce");
       
    };

    //onAddItem({ id, name, quantity, category }): This calls the onAddItem function (passed in as a prop) and sends the newly created item object. The object contains:
//This prevents the default behavior of the form submission, which is to reload the page. By calling e.preventDefault(), the form will not reload the page when submitted.
//const newItem, is new object 
    return (
        <div>
            <form onSubmit={handleSubmit} className="m-5 p-5 border border-gray-300 rounded w-72 text-blue-800">
                <div className="mb-4">
                    <label className="text-white" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="ml-2 p-1 w-full text-blue-800-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-white" htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        required
                        className="ml-2 p-1 w-full text-blue-800"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-white" htmlFor="category">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="ml-2 p-1 w-full text-blue-800"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 w-full border-none rounded">
                    Submit
                </button>
            </form>
         
        </div>
    );
}
