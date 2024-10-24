// "use client";
// import { useState } from 'react';

// function Counter() {
//     const [quantity, setQuantity] = useState(1);

//     const increment = () => {
//         if (quantity < 20) setQuantity(quantity + 1);
//     };
//     const decrement = () => {
//         setQuantity(quantity - 1);
//     };

//     return (
//         <div className="m-1 p-1 w-48 h-24 flex flex-col items-center">
//             <p className="m-1 p-1 text-base bg-darkgrey w-36 text-center">
//                 {quantity}
//                 <button onClick={increment} className="ml-2 bg-blue-500 p-1">
//                     +
//                 </button>
//                 <button onClick={decrement} className="ml-5 bg-blue-500 p-1">
//                     -
//                 </button>
//             </p>
//         </div>
//     );
// }

// const NewItem = () => {
//     const [name, setName] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [category, setCategory] = useState("produce");

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const item = {
//             name,
//             category,
//             quantity,
//         };
//     };

//     return (
//         <form onSubmit={handleSubmit} className="m-5 p-5 border border-gray-300 rounded w-72">
//             <div className="mb-4">
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     className="ml-2 p-1 w-full text-green-500"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="quantity">Quantity:</label>
//                 <input
//                     type="number"
//                     id="quantity"
//                     value={quantity}
//                     onChange={(e) => setQuantity(e.target.value)}
//                     required
//                     className="ml-2 p-1 w-full text-green-500"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label htmlFor="category">Category:</label>
//                 <select
//                     id="category"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="ml-2 p-1 w-full text-green-500"
//                 >
//                     <option value="produce">Produce</option>
//                     <option value="dairy">Dairy</option>
//                     <option value="bakery">Bakery</option>
//                     <option value="meat">Meat</option>
//                     <option value="frozen foods">Frozen Foods</option>
//                     <option value="canned goods">Canned Goods</option>
//                     <option value="dry goods">Dry Goods</option>
//                     <option value="beverages">Beverages</option>
//                     <option value="snacks">Snacks</option>
//                     <option value="household">Household</option>
//                     <option value="other">Other</option>
//                 </select>
//             </div>

//             <button type="submit" className="bg-blue-500 text-white p-2 w-full border-none rounded">
//                 Submit
//             </button>
//         </form>
//     );
// };

// export default NewItem;



//foramt2 this is now working 
"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
 

 
const handleSubmit =async(event)=>{
    event.preventDefault();
    const newItem ={ name, quantity, category};

    onAddItem(newItem);
    setName("");    
    setQuantity(0);
    setCategory("");
}

  //preventDefault is used to prevent the default behavior of the form submission, which is to reload the page.

return (
    <div>
        <form onSubmit={handleSubmit} className="m-5 p-5 border border-gray-300 rounded w-72">
            <div className="mb-4">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="ml-2 p-1 w-full text-green-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    required
                    className="ml-2 p-1 w-full text-green-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="ml-2 p-1 w-full text-green-500"
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

        {/* <div className="m-5 p-5 border border-gray-300 rounded w-72">
           
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <p><strong>Category:</strong> {category}</p>
        </div> */}
    </div>
);
}
