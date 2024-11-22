import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, onDeleteClick})=>{
      return (
        <div className="todoItem">
          {todoItems.map((item) =>(
          <TodoItem
          todoDate = {item.dueDate}
        todoName={item.todoName}
      onDeleteClick={onDeleteClick}></TodoItem>
          ))}
        </div>
      );
}

export default TodoItems;