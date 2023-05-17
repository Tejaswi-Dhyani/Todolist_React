import React from "react";

 const Todolistitem = (props) => {
  
 

  return <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">{props.text} </div>
    <span className="badge bg-primary rounded-pill" style={{cursor:"pointer"}}
    onClick= { ()=>{props.ondelSelect(props.id)}}
    >⚔️</span>
</li>
  
  };
  export default Todolistitem;