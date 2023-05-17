import React, { useState } from "react";
import './App.css';
import Todolistitem from './Todolistitem';


function Todolist() {
    const [currntList, setList]=useState("");
    const [newcurrntList, newsetList]=useState([]);
    
    const InputEvent=(event)=>{
// console.log(event.target.value);
setList(event.target.value);
    }
    const OnSubmit=()=>{
        // newsetList(currntList)
        newsetList((oldItems)=>{
            return [...oldItems,currntList];
        });
        setList("");
}

const deleteItems=(id) =>{
console.log("deleted");
newsetList((oldItems)=>{
   return oldItems.filter((arrayValue,index) => {
return index !==id;
   })
});

  }
    return (
      <>
      <div className="tododiv ">
        <br></br>
        <div className="text-center">
        <h1 className="bg-success text-light p-1">📖 To Do List ✍️</h1>
        <br></br>
        <input type="text" value={currntList}
        onChange={InputEvent}
         placeholder="Add Items"
         className="text-center p-2 m-2 border-top-0 border-end-0 border-start-0 border-success"></input>

        <button onClick={OnSubmit}
        className=" btn btn-success fw-bold fs-6 text-white">+</button>
        </div>
        <br></br>

       <div className="p-3">
       <ol className="list-group">

{/* <li>{newcurrntList}</li> */}
{
    newcurrntList.map((arrayValue,index) =>  {
        // return <li> {arrayValue} </li>
      
       return  <Todolistitem 
       text={arrayValue} 
       key={index}
       id={index}
       ondelSelect={deleteItems}
       />;
    })
}
</ol>
       </div>


     
      </div>
      </>
    );
  }
  
  export default Todolist;
  