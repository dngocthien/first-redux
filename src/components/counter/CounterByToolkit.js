import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/tollkit";

const CounterByToolkit = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function increment() {
    dispatch(actions.increment());
  }
  function add() {
    dispatch(actions.add(10));
  }
  function decrement() {
    dispatch(actions.decrement());
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

export default CounterByToolkit;
