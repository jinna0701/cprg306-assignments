 
  
export default function Item({name, quantity, category, onSelect}){

    return (
        <section className="m-2"
        onClick={onSelect}> 
       
            <span className="font-bold text-2xl  bg-black m-2">{name}</span><br></br>
            <span className="text-green-700 bg-black"> Buy {quantity}</span>
            <span className="text-green-700 bg-black"> in {category}</span>
        </section>
    );
};
