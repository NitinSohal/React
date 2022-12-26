import React, { useState, useEffect } from "react";
import Button from "./components/button";
import Dropdown from "./components/dropdown";
// import { useContext } from "react";
// import { Globalimfo } from "./App"
import { useSelector } from "react-redux";
// import State from "./Reducers/change";
import {
  Multiplyby10,
  Multiplyby100,
  Multiplyby1000,
  Multiplyby10000,
} from "./action/Index1";

document.title = "fetchdata";
const Context = () => {
  // const [ Multiplier, setMultiplier] =useContext(Globalimfo);
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const myState = useSelector((State) => State.Change);
  // console.log((State) => State.Change);
  return (
    <>
      {<Dropdown />}
      <ul>
        {user.map((userObj, index) => (
          <li key={userObj.id}>
            {index + 1}
            {
              console.log(myState)
            }
            <h4>{userObj.userId * myState}</h4>
            <h4>Post</h4>
            {userObj.title}
            {
              <Button
                name={userObj.title}
                link="https://jsonplaceholder.typicode.com/posts/"
                id_data={userObj.id}
              />
            }
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Context;
