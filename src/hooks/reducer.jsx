import { useReducer } from "react";
import "../index.css";

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
  
  export default function E() {
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
        <h1 className="dark-bg"> useReducer Hook</h1>
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
  