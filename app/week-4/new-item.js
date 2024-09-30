"use client";
import {useState} from 'react'; 


 

export default function Counter() {

const[ quantity, setQuantity] = useState(1);

const increment = () => {   
    setQuantity(quantity + 1);
}
const decrement = () => {
    setQuantity(quantity - 1);
}

  return (
    <div>
      <p>counter: {quantity}</p>
      <p>  <button onClick={increment}>increment</button></p>
       <p> <button onClick={decrement}>decrement</button></p>
    </div>
  )
}
