import { useState } from "react";



function AddTodo({onNewItem}){
  const [todoName, setTodoName]= useState("");
  const [dueDate, setDueDate]= useState("");

  const handleNameChange = (event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange = (event)=>{
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = ()=>{
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return(
    <div className="container">
   <div className="column"><input type ="text" placeholder="Enter your To-Do Here" value={todoName} onChange={handleNameChange}>
   </input></div>
   <div className="column"><input type="date" value={dueDate} onChange={handleDateChange}></input></div>
   <div className="column"><button className='success' style={{backgroundColor:'green'}} onClick={handleAddButtonClicked} >Add</button></div>
 </div>

  )

}


export default AddTodo;