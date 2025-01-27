// import React,{useState} from 'react';

const useState = () => {

    const[price, setPrice] = useState(0);
    const incrisHandle = () =>{

        const newPrice = price + 1;
        setPrice(newPrice);
    }

    const decriseHandle = ()=>{

        const newPrice = price -1;
        setPrice(newPrice);

    }
    return (
        <div>
            <h1>UseState</h1>
            <h2>Count INcrease :{price} </h2>
            <button onClick={incrisHandle}>Increase</button>
            <button onClick={decriseHandle}>Dencrease</button>
        </div>
    );
};

export default useState;