import React, { useReducer, useState } from "react";
import { couterReducer, initialState } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(couterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleIncrementByAmout = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleDecrementByAmout = () => {
    dispatch({ type: "decrementByAmount", payload:+inputValue });
    setInputValue(0);
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}> + </button>
      <button onClick={handleDecrement}> - </button>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>

        <button onClick={handleIncrementByAmout}> + with Amot </button>
        <button onClick={handleDecrementByAmout}> - with Amot </button>
      </div>
    </div>
  );
};

export default Counter;
