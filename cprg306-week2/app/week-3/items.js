


 

export default function Items({name, quantity, category}){

    return (
        <section className="m-2"> 
            <span className="font-semibold bg-slate-500 m-2">{name}</span>
            <span className="text-green-600">{quantity}</span>
            <span className="text-green-600">{category}</span>
        </section>
    );
};

 


//m-2 means margin 2

