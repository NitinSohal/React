import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
document.title = "fetchdata";
const DynamicRouting = () => {
  const [user, setUser] = useState([]);
  const { iddata } = useParams();
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  //   console.log(data);
  useEffect(() => {
    fetchData();
  }, [iddata]);
  const myState=useSelector((State)=>State.Change);
  // console.log(iddata);
  // user.map((userObj,i) => {
  //   console.log(userObj.id == iddata);
  //   if (userObj.id == iddata) {
  //     return (
  //       <>
  //         {console.log("printed"+i)}
  //         <h4>ID</h4>
  //         {userObj.id}
  //         <h4>Post </h4>
  //         {userObj.title}
  //         <h4>Description </h4>
  //         {userObj.body}
  //         <br />
  //         <br />
  //         <br />
  //       </>
  //     );
  //   } else {
  //     return (null);
  //   }
  // });
  // user.forEach((userobj)=>{
  //   if(userobj.id==iddata){
  //     return(

  //         <h1>{userobj.id}</h1>
  //     );
  //   }
  //   else{
  //     return(null);
  //   }
  // });
  return (user.filter(userf=>userf.id>30).map((userobj) => 
  {
      return (
        <>
          <li key={userobj.id}>
            <h4>{userobj.id}</h4>
            <h4>Post</h4>
            {userobj.title}
            <h4>Description</h4>
            {userobj.body}
            <br />
            <br />
            <br />
          </li>
        </>
      );
    
  }));
};
export default DynamicRouting;
