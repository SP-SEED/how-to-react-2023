import { useState, useEffect, useMemo, useReducer, useRef } from "react";
import useBeforeUnloadAlert from "./custom";
import "./main.css";

//UseState Hook

export function A() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="dark-bg">UseStateHook</h1>
      <p className="dark-bg"> Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}



//UseEffect Hook

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

//UseMemo Hook

export function C() {
  const [inputValue, setInputValue] = useState("");

  const calculateAverage = (numbers) => {
    console.log('Calculating average...'); 
  
    const filteredNumbers = numbers
      .filter((num) => num !== "")
      .flatMap((num) => {
        if (num.includes(',')) {
          const parts = num.split(',');
          return parts.map((part) => parseFloat(part) / 2);
        } else {
          return parseFloat(num);
        }
      });
  
    const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
    return sum / filteredNumbers.length;
  };

  const numbersArray = inputValue.split(/[, ]+/);
  const average = useMemo(() => calculateAverage(numbersArray), [numbersArray]);

  return (
    <div>
      <h1 className="dark-bg">UseMemo Hook</h1>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="dark-bg">Result: {isNaN(average) ? 'Please enter valid numbers' : average}</p>
    </div>
  );
}
//UseRef Hook

export function D() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1 className="dark-bg">useRef Hook</h1>
      <p className="dark-bg">Time passed: {secondsPassed.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

//Reducer Hook

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
const initialState = { name: "Taylor", age: 42 };

export function E() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  return (
    <>
      <h1 className="dark-bg"> UseReducerHook</h1>
      <p className="dark-bg">
        Hello, {state.name}. You are {state.age}.
      </p>
      <input
        className="input"
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>+</button>
    </>
  );
}

export function F() {
  useBeforeUnloadAlert(
    "You have unsaved changes. Are you sure you want to leave?"
  );

  return (
    <div>
      <h1 className="dark-bg">useCustom Hook</h1>
    </div>
  );
}
