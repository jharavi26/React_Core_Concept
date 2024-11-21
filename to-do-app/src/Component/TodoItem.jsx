function TodoItem({todoName , todoDate}){
  return (
    <div className="container">
       <div className="column">{todoName}</div>
       <div className="column">{todoDate}</div>
       <div className="column"><button style={{backgroundColor: "red"}}>Delete</button></div>
       
      
    </div>
  )
}

export default TodoItem;