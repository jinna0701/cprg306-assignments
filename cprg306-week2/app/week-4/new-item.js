"use client";

 

export default function Counter() {
     
    const [ quantity, setQuantity ] = useState(1);
   
    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {   
        setQuantity(quantity - 1);

    }



  return (
   <div>
<p> quantity : {quantity}</p><br></br>

<button onClick={increment} disabled ={quantity===20}>Increment</button><br></br>
<button onClick={decrement} disabled ={quantity===1}>Decrement</button>
   </div>
  )
}
