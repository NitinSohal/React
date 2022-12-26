import React from "react";
import { useDispatch } from "react-redux";
import { Multiplyby10, Multiplyby100, Multiplyby1000, Multiplyby10000 } from "../action/Index1";
const Dropdown = () => {
  // const myState=useSelector((State)=>State.Change);
  const dispatch=useDispatch()
  return (
    <>
      <nav>
        <button onClick={() => dispatch(Multiplyby10())}>10</button>
        <button onClick={() => dispatch(Multiplyby100())}>100</button>
        <button onClick={() => dispatch(Multiplyby1000())}>1000</button>
        <button onClick={() => dispatch(Multiplyby10000())}>10000</button>
      </nav>
    </>
  );
};

export default Dropdown;
