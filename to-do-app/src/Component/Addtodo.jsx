function AddTodo(){
  return(
    <div className="container">
   <div className="column"><input type ="text" placeholder='Enter your To-Do Here'></input></div>
   <div className="column"><input type="date"></input></div>
   <div className="column"><button className='success' style={{backgroundColor:'green'}}  >Add</button></div>
 </div>

  )

}

export default AddTodo;