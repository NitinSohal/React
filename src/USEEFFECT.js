import React, { useState, useEffect } from "react";
const USEEFFECT = () => {
  let [window_size, updatewindowsize] = useState(window.screen.width);

  const currentScreenWidth = () => {
    updatewindowsize(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    // return () => {
    //   window.removeEventListener("resize", currentScreenWidth);
    // };
  });
  useEffect(()=>{
    document.title=window_size;
  },[window_size])

  return (
    <>
      <div>The size of the windows is {window_size}</div>
    </>
  );
};
export default USEEFFECT;
