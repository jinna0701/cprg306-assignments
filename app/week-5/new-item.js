"use client";
import { useState } from 'react';



function Counter() {

    const[ quantity, setQuantity] = useState(1);
    
    const increment = () => {   
      if (quantity < 20)
        setQuantity(quantity + 1);
    }
    const decrement = () => {
        setQuantity(quantity - 1);
    }
    
      return (
        <div style={{ margin: '5px', padding: '5px', width: "200px", height: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ margin: '5px', padding: '5px', fontSize: 15, backgroundColor: "darkgrey", width: "150px", textAlign: "center" }}>{quantity}
          
          <button onClick={increment} style={{ marginLeft: "10px", backgroundColor: "blue", padding: "5px 10px" }}>+</button>
          <button onClick={decrement} style={{ marginLeft: "20px", backgroundColor: "blue", padding: "5px 10px" }}>-</button>
           </p>
        </div>
      )
    }

const NewItem = () => {
    const [name, setName] = useState(""); 
    const [quantity, setQuantity] = useState(1); 
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            category,
            quantity
        };
 
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }}>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ marginLeft: '10px', padding: '5px', width: '100%',color:`green` }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    style={{ marginLeft: '10px', padding: '5px', width: '100%' , color:`green`}}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ marginLeft: '10px', padding: '5px', width: '100%',color:`green` }}
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

            {/* Submit Button */}
            <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', width: '100%', border: 'none', borderRadius: '5px' }}>
                Submit
            </button>
        </form>
    );
};



export default NewItem;







