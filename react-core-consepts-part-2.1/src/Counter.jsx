import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount (newCount);
    }
    const handleReduce = () => {
        const newCount = count -1;
        setCount(newCount);
    }

    return (
        <div>
            <h3 className="text-2xl">Counter: {count} </h3>

            <button className="border-2 p-2 rounded-lg" onClick={handleAdd}>Add</button>

            <button className="border-2 p-2 rounded-lg" onClick={handleReduce}>Reduce</button>
        </div>
    );
};

export default Counter;
