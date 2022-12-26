import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
// import { Globalimfo } from "./App";
import Dropdown from "./components/dropdown";
import { useSelector} from "react-redux";

document.title = "fetchdata";
const NewPage = (props) => {
  const [user, setUser] = useState([]);
  const { iddata } = useParams();


  
  console.log(props.id_data);
  let link_gent = "https://jsonplaceholder.typicode.com/posts/" + iddata;
  console.log(link_gent);
  const fetchData = () => {
    return fetch(link_gent)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
   fetchData();
   // eslint-disable-next-line
  }, []);


  const myState=useSelector((State)=>State.Change);

  return (
    <>
      {<Dropdown />}
      <ul>
        <li key={user.id}>
          <h4>{user.id}</h4>
          <h5>{user.userId * myState}</h5>
          <h4>Post</h4>
          {user.title}
          <h4>Description</h4>
          {user.body}
          <br />
          <br />
          <br />
        </li>
      </ul>

      <h1>on newpage</h1>
    </>
  );
};
export default NewPage;
