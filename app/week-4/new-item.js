"use client";
import {useState} from 'react'; 


 

export default function Counter() {

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

//<button onClick ={increment} className="w-20  bg-blue-600 rounded-md hover:bg-blue-300 active:bg-yellow-300"> Increment</button>
