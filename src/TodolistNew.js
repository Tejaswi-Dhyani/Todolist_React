// import React, { useState } from "react";
import './App.css';


function TodolistNew() {

    return (
        <>
      <div className="tododiv ">
        
        <div className="text-center">
        <h1 className="bg-warning text-light  p-3 Headtodo">📖 To Do List ✍️</h1>
        <br></br>
        <input type="text" placeholder="Add Items" 
        className="text-center p-2 m-2 border-top-0 border-end-0 border-start-0 border-warning"></input>
        <button className=" btn btn-warning fw-bold fs-6 text-white">+</button>
        </div>
        <br></br>

       <div>
       <ol>
<li>{}</li>
</ol>
       </div>


     
      </div>
      </>
    );
  }
  
  export default TodolistNew;
  