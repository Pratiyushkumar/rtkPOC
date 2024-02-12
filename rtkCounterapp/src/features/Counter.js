import React from "react";
import { incrementCounter, decrementCounter } from "./CounterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.ele.number);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(incrementCounter())}>+inc</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrementCounter())}>-dec</button>
    </>
  );
};

export default Counter;
