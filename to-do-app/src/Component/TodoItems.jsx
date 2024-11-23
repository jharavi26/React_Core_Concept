import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, onDeleteClick})=>{
      return (
        <div className="todoItem">
          {todoItems.map((item, index) =>(
          <TodoItem
          key={index}
          todoDate = {item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}></TodoItem>
          ))}
        </div>
      );
}

export default TodoItems;