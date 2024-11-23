function TodoItem({todoName, todoDate, onDeleteClick }){
  return (
    <div className="container">
       <div className="column">{todoName}</div>
       <div className="column">{todoDate}</div>
       <button className="danger" style={{backgroundColor:'red'}}    onClick={()=> onDeleteClick(todoName)}>Delete</button>
       
      
    </div>
  );
}

export default TodoItem;