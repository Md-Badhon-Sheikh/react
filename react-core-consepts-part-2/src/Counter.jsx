import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handelAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handelReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid tomato" }}>
      <h2>Count: {count}</h2>
      <button onClick={handelAdd}>Add</button>

      <button onClick={handelReduce}>Reduce</button>
    </div>
  );
}
