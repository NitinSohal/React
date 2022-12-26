import React from "react";
// import NewPage from "../newpage";
const Button = (props) => {
   let link_gen = props.link + props.id_data;
    let idd=props.id_data;
        let link_gen2="./p/"+props.id_data;
        // console.log(idd);
        // <NewPage id_data={props.id_data}/>
    return (
      <a href={link_gen2} target="_blank">
        <button>{props.name}</button>
      </a>
    );
};

export default Button;