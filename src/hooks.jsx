import { useState, useEffect,  useMemo, useContext, useReducer, useRef } from "react";
import useBeforeUnloadAlert from "./custom";
import "./main.css"

export function A() {
  // UseState Hook for handling count
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="dark-bg">UseStateHook</h1>
      <p className="dark-bg" > Count: {count}</p>
      <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export function B() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const fakeApiResponse = [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" },
        ];

        setData(fakeApiResponse);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="dark-bg">useEffect Hook Example</h1>
      {isLoading ? (
        <p className="dark-bg">Loading...</p>
      ) : (
        <ul className="dark-bg">
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}




export function C() {
  // State to manage an input value
  const [inputValue, setInputValue] = useState("");
  
  // Function to calculate the square root of a number
  const calculateSquareRoot = (number) => {
    console.log(`Calculating square root of ${number}`);
    return Math.sqrt(number);
  };    

  // Memoized calculation of square root
  const memoizedSquareRoot = useMemo(() => calculateSquareRoot(inputValue), [inputValue]);

  return (
    <div>
      <h1 className="dark-bg">UseMemo Hook</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <p className="dark-bg">Square Root: {memoizedSquareRoot}</p>
    </div>
  );
}




export function D() {
  // Ref to reference the input element
  const inputRef = useRef(null);

  const focusInput = () => {
    // Use the ref to focus on the input element
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1 className="dark-bg">useRefHook</h1>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}



export function E() {

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h1 className="dark-bg">Counter using useReducer</h1>
      <p className="dark-bg" > Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export function G() {  
  useBeforeUnloadAlert("You have unsaved changes. Are you sure you want to leave?");

  return (
    <div>
      <h1 className="dark-bg">useBeforeUnloadAlert Hook</h1>
    </div>
  );
}




export async function AsyncFunction() {

  //simulate API Call

  




  return (
    <div>

    </div>
  )
}


export async function CallbackFunction() {

  
}
