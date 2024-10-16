

export default function Item({name, quantity, category}){

    return (
        <section className="m-2"> 
            <span className="font-bold text-2xl  bg-slate-800 m-2">{name}</span><br></br>
            <span className="text-green-600"> Buy {quantity}</span>
            <span className="text-green-600"> in {category}</span>
        </section>
    );
};
