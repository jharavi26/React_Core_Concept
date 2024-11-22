import { useState } from "react";



function AddTodo({onNewItem}){
  const [todoName, setTodoName]= useState();
  const [dueDate, setDueDate]= useState();

  const HandleNameChange = (event)=>{
    setTodoName(event.target.value);
  }

  const HandleDateChange = (event)=>{
    setDueDate(event.target.value);
  }

  const HandleButtonClicked = ()=>{
    onNewItem(todoName, setDueDate);
    setDueDate("");
    setTodoName("");
  };

  return(
    <div className="container">
   <div className="column"><input type ="text" placeholder='Enter your To-Do Here' value={todoName} onChange={HandleNameChange}>
   </input></div>
   <div className="column"><input type="date" value={dueDate} onChange={HandleDateChange}></input></div>
   <div className="column"><button className='success' style={{backgroundColor:'green'}} onClick={HandleButtonClicked} >Add</button></div>
 </div>

  )

}


export default AddTodo;