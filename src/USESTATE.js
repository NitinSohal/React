import React, { useState,useEffect } from "react";

const USESTATE = () => {
  let [click, changeclick] = useState(0);
  useEffect(()=>{
    document.title=click;
  },[click])
  function check(click){
    if(click===0){
      return 1;
    }
    else{
      return click;
    }
  }
  const IncNum1 = () => {
    changeclick(click + 1);
  };
  const IncNum2 = () => {
    changeclick(check(click) - 1);
  };
  return (
    <>
      <button onClick={IncNum1}>+</button>
      {click}
      <button onClick={IncNum2}>-</button>
    </>
  );
};
export default USESTATE;
