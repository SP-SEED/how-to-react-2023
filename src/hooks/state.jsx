import { useState } from "react";
import "../index.css";

export default function A() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <h1 className="dark-bg">useState Hook</h1>
        <p className="dark-bg"> Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </>
    );
  }
  
  
  