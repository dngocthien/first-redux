import React from "react";

import { useSelector, useDispatch } from "react-redux";

const CounterByRedux = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function increment() {
    dispatch({ type: "INC" });
  }
  function add() {
    dispatch({ type: "ADD", num: 10 });
  }
  function decrement() {
    dispatch({ type: "DEC" });
  }
  return (
    <div>
      <div className="App">
        <p>{counter}</p>
        <button onClick={() => increment()}>Inc</button>
        <button onClick={() => add()}>Add</button>
        <button onClick={() => decrement()}>Inc</button>
      </div>
    </div>
  );
};

export default CounterByRedux;
