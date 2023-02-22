import { useState } from "react";
import "./App.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounterHandler = () => {
    setCounter((value) => value + 1);
  };

  const decreaseCounterHandler = () => {
    setCounter((value) => value - 1);
  };

  const resetCounterHandler = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <h1 className="detail">{counter}</h1>
      <button onClick={increaseCounterHandler}>Increase</button>
      <button onClick={decreaseCounterHandler}>Decrease</button>
      <button onClick={resetCounterHandler}>Reset</button>
    </div>
  );
}

export default Counter;
