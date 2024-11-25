"use client";
import { useState } from "react";

export default function NewItemPage({onAddItem}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [count, setCount] = useState(1);

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleCountChange = (newCount) => setCount(newCount);

  const generateId = () => Math.random().toString(36).slice(2, 9);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: generateId(),
      name: name,
      quantity: count,
      category: category,
    };

    onAddItem(newItem);
    setName("");
    setCategory("category");
    setCount(1);
  };

  const decrementCounter = () => {
    if (count > 1) {
      setCount(count-1);
    }
  };

  const incrementCounter = () => {
    if (count < 20) {
      setCount(count+1);
    }
  };
  let btnStyles =
    "bg-white text-white text-xl rounded mr-2 my-4 w-8 hover:bg-blue-400 active:bg-yellow-600 disabled:bg-gray-400";

return (
    <main>
        <form
            onSubmit={handleSubmit}
            className="m-5 p-5 border border-gray-300 rounded w-72 text-blue-800"
        >
            <div className="mt-4">
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    required
                    placeholder="Item Name"
                    className="ml-2 p-1 w-full text-blue-800-500"
                />
            </div>

            <div className="bg-slate-500 mt-2 rounded-lg flex justify-between h-12">
                <div className="flex items-center w-[30%] mr-1 border-gray-300 focus:border-blue-500 bg-white rounded-lg">
                    <p className="text-xl ml-2 mr-7 w-12">{count}</p>
                    <button
                        type="button"
                        className={btnStyles}
                        onClick={incrementCounter}
                        disabled={count >= 20}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className={btnStyles}
                        onClick={decrementCounter}
                        disabled={count <= 1}
                    >
                        -
                    </button>
                </div>

                <select
                    onChange={handleCategoryChange}
                    value={category}
                    className="ml-2 p-1 w-4 bg-white text-blue-500"
                >
                    <option disabled value="category">
                        Category
                    </option>
                    <option value="produce">Produce</option>
                    <option value="diary">Diary</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen food">Frozen Food</option>
                    <option value="canned goods">Canned goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full text-3xl mt-4 px-3 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-400 active:bg-green-400"
            >
                Add
            </button>
        </form>
    </main>
);
};